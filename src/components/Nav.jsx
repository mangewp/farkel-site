import { ARTIST, links } from '../data/links';
import './Nav.css';

const sections = [
  { href: '#releases', label: 'Discography' },
  { href: '#videos', label: 'Videos' },
  { href: '#listen', label: 'Follow' },
];

export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <a className="nav-mark" href="#top">{ARTIST}</a>

      <ul className="nav-links">
        {sections.map((s) => (
          <li key={s.href}><a href={s.href}>{s.label}</a></li>
        ))}
      </ul>

      <a
        className="nav-cta"
        href={links.spotify}
        target="_blank"
        rel="noreferrer noopener"
      >
        Listen
      </a>
    </nav>
  );
}
