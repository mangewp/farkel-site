import { useEffect, useRef, useState } from 'react';

const snippets = [[15, 35], [55, 75], [100, 120]];

export default function HeroVideo() {
  const videoRef = useRef(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [hasFrame, setHasFrame] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = true;
    let segment = 0;
    let disposed = false;

    const syncPlayback = () => {
      if (motion.matches || navigator.connection?.saveData) {
        video.pause();
        return;
      }
      if (!video.hasAttribute('src')) {
        video.src = '/videos/high-and-alone.mp4';
        video.load();
      }
      if (document.hidden || !inView || pausedRef.current) video.pause();
      else {
        video.muted = true;
        video.play().catch(() => {
          if (!disposed && !document.hidden && inView) {
            pausedRef.current = true;
            setPaused(true);
          }
        });
      }
    };
    const onMetadata = () => { video.currentTime = snippets[0][0]; };
    const onTime = () => {
      if (video.currentTime >= snippets[segment][1]) {
        segment = (segment + 1) % snippets.length;
        video.currentTime = snippets[segment][0];
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(video.closest('.hero'));
    video.addEventListener('loadedmetadata', onMetadata);
    video.addEventListener('timeupdate', onTime);
    document.addEventListener('visibilitychange', syncPlayback);
    motion.addEventListener('change', syncPlayback);
    syncPlayback();
    return () => {
      disposed = true;
      observer.disconnect();
      video.pause();
      video.removeAttribute('src');
      video.load();
      video.removeEventListener('loadedmetadata', onMetadata);
      video.removeEventListener('timeupdate', onTime);
      document.removeEventListener('visibilitychange', syncPlayback);
      motion.removeEventListener('change', syncPlayback);
    };
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (pausedRef.current) {
      video.muted = true;
      video.play().then(() => {
        pausedRef.current = false;
        setPaused(false);
      }).catch(() => {});
    } else {
      pausedRef.current = true;
      setPaused(true);
      video.pause();
    }
  }

  return (
    <>
      <div className={`hero-video${hasFrame ? ' is-playing' : ''}`} aria-hidden="true">
        <video ref={videoRef} muted playsInline loop preload="none" disablePictureInPicture disableRemotePlayback tabIndex={-1} onPlaying={() => setHasFrame(true)} />
      </div>
      {(hasFrame || paused) && <button className="hero-motion" type="button" onClick={togglePlayback}>
        {paused ? 'Play background' : 'Pause background'}
      </button>}
    </>
  );
}
