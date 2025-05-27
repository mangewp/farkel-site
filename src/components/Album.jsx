import React, { useState } from 'react';
import './Album.css';

function Album({ image, button1, button2 }) {
  const [showButtons, setShowButtons] = useState(false);

  // Detect touch device
  const isTouchDevice = () =>
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const handleClick = () => {
    if (isTouchDevice()) {
      setShowButtons(!showButtons);
    }
  };

  return (
    <div
      className={`album-container${showButtons ? ' show-buttons' : ''}`}
      onClick={handleClick}
    >
      <img src={image} alt="Album" className="album-image" />
      <div
        className="album-buttons-overlay"
        style={{
          pointerEvents: showButtons || !isTouchDevice() ? 'auto' : 'none',
        }}
        onClick={e => e.stopPropagation()}
      >
        <a
          href={button1.link}
          className="album-round-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/spotify.png"
            alt="Spotify"
            style={{ width: 32, height: 32 }}
          />
        </a>
        <a
          href={button2.link}
          className="album-round-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/apple.png"
            alt="Apple Music"
            style={{ width: 32, height: 32 }}
          />
        </a>
      </div>
    </div>
  );
}

export default Album;