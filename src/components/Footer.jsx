import { ARTIST, links } from '../data/links';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contact">
          <span className="eyebrow">Contact and booking</span>
          <a className="footer-dm" href={`mailto:${links.email}`}>
            {links.email}
          </a>
          <a className="footer-alt" href={links.instagram} target="_blank" rel="noreferrer noopener">
            or DM on Instagram
          </a>
        </div>

        <a className="footer-back" href="#top">Back to top</a>
      </div>

      {/* Oversized sign-off. The wordmark gets the last word. */}
      <p className="footer-mark" aria-hidden="true">{ARTIST}</p>

      <p className="footer-legal">&copy; {new Date().getFullYear()} {ARTIST}</p>
    </footer>
  );
}
