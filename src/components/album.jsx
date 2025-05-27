import React, { useState } from 'react';
import './Album.css';

function Album({ image, button1, button2 }) {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="album-container" onClick={() => setShowButtons(!showButtons)}>
      <img src={image} alt="Album" className="album-image" />
      {showButtons && (
        <div className="album-buttons-overlay" onClick={e => e.stopPropagation()}>
          <a
            href={button1.link}
            className="album-round-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {button1.text}
          </a>
          <a
            href={button2.link}
            className="album-round-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {button2.text}
          </a>
        </div>
      )}
    </div>
  );
}

export default Album;