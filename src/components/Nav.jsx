import { useState } from 'react';
import { ARTIST, links } from '../data/links';
import { latest } from '../data/releases';
import './Nav.css';

const sections = [
  { href: '#releases', label: 'Discography' },
  { href: '#videos', label: 'Videos' },
  { href: '#listen', label: 'Follow' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav" aria-label="Primary" onKeyDown={(event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        event.currentTarget.querySelector('.nav-menu-toggle').focus();
      }
    }}>
      <a className="nav-release" href={latest.spotify} target="_blank" rel="noreferrer noopener">
        <span>{latest.title} — Out now</span>
        <span className="nav-release-meta">{ARTIST} / {latest.year}</span>
      </a>
      <div className="nav-main">
      <a className="nav-mark" href="#top" onClick={() => setMenuOpen(false)}>{ARTIST}</a>

      <button className="nav-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-links" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? 'Close' : 'Menu'}
      </button>

      <ul id="primary-links" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
        {sections.map((s, index) => (
          <li key={s.href}><a href={s.href} onClick={() => setMenuOpen(false)}><span className="nav-number" aria-hidden="true">0{index + 1}</span>{s.label}</a></li>
        ))}
      </ul>

      <a
        className="nav-cta"
        href={links.spotify}
        target="_blank"
        rel="noreferrer noopener"
      >
        Listen <span aria-hidden="true">↗</span>
      </a>
      </div>
    </nav>
  );
}
