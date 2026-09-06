import { useEffect, useRef } from 'react';
import './StaticLayer.css';

/**
 * Global CRT grain. Decorative only, so it is aria-hidden and never focusable.
 * The video is paused outright under prefers-reduced-motion rather than just
 * having its transitions removed, since the flicker is the whole effect.
 */
export default function StaticLayer() {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      if (query.matches) video.pause();
      else video.play().catch(() => {});
    };

    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  return (
    <div className="static-layer" aria-hidden="true">
      <video ref={ref} autoPlay loop muted playsInline preload="auto">
        <source src="/static.mp4" type="video/mp4" />
      </video>
      <div className="static-layer-scanlines" />
    </div>
  );
}
