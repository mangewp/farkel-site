import React from 'react';
import './SideBarButton.css';

function SideBarButton({ href, children, background, style }) {
  return (
    <a
      className="sidebar-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ '--bg-color': background, ...style }}
    >
      {children}
    </a>
  );
}

export default SideBarButton;