import { useState } from 'react';
import './VideoFacade.css';

/**
 * Click-to-load YouTube. Renders a thumbnail inside a real <button> and only
 * injects the iframe on activation, so the page ships zero third-party player
 * JS on load instead of one bundle per tile.
 */
export default function VideoFacade({ id, title, priority = false }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="video-frame">
        <iframe
          title={title}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="video-frame video-facade"
      onClick={() => setActive(true)}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        width="480"
        height="360"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      <span className="video-facade-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <span className="video-facade-title">{title}</span>
      <span className="visually-hidden">Play video: {title}</span>
    </button>
  );
}
