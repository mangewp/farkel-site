import { useEffect, useRef, useState } from 'react';
import './AppleEmbed.css';

/**
 * Apple Music player, mounted only once the card is actually on screen.
 * Keeping five embeds out of the initial document is the difference between a
 * page that loads and a page that loads five third-party players.
 */
export default function AppleEmbed({ appleId, title }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    // A collapsed rect means the row's panel is still closed, not that the
    // player is off screen.
    const near = () => {
      const r = node.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) return false;
      return r.top < window.innerHeight + 300 && r.bottom > -300;
    };

    if (near()) {
      setVisible(true);
      return;
    }

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { rootMargin: '300px' }
      );
      observer.observe(node);
    }

    // The observer is the fast path, not the only one: in some embedded
    // webviews it never fires, and without a floor the player would never
    // arrive at all. Measuring directly costs nothing and always resolves.
    const poll = setInterval(() => {
      if (near()) setVisible(true);
    }, 500);

    return () => {
      observer?.disconnect();
      clearInterval(poll);
    };
  }, [visible]);

  return (
    <div className="apple-embed" ref={ref}>
      {visible ? (
        <iframe
          title={`${title} on Apple Music`}
          src={`https://embed.music.apple.com/au/album/${appleId}?theme=dark`}
          height="450"
          loading="lazy"
          allow="autoplay *; encrypted-media *; clipboard-write"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        />
      ) : (
        <div className="apple-embed-placeholder" aria-hidden="true" />
      )}
    </div>
  );
}
