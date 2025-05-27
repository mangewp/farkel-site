import React from 'react';
import './SideBarButton.css';

function SideBarButton({ href, children }) {
  return (
    <a
      className="sidebar-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default SideBarButton;