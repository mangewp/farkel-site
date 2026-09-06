import { platforms } from '../data/links';
import './PlatformLinks.css';

export default function PlatformLinks() {
  return (
    <section className="section" id="listen" aria-labelledby="listen-heading">
      <div className="section-head">
        <h2 id="listen-heading">Listen and follow</h2>
      </div>

      <ul className="platform-list">
        {platforms.map((p, i) => (
          <li key={p.key}>
            <a
              className="platform"
              href={p.href}
              target="_blank"
              rel="noreferrer noopener"
              style={{ '--chip': p.gradient, '--chip-ink': p.ink }}
            >
              <span className="platform-index">{String(i + 1).padStart(2, '0')}</span>
              <span className="platform-name">{p.label}</span>
              <span className="platform-arrow" aria-hidden="true">&#8599;</span>
              <span className="visually-hidden">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
