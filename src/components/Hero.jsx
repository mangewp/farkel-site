import { ARTIST, links } from '../data/links';
import { latest, releases } from '../data/releases';
import './Hero.css';
import HeroVideo from './HeroVideo';

export default function Hero() {
  return (
    <header className="hero" id="top">
      {/* The artwork is the page, not a card sitting on it. */}
      <div className="hero-bg" aria-hidden="true">
        <img src={latest.art} alt="" width="1000" height="1000" fetchPriority="high" />
      </div>
      <HeroVideo />
      <div className="hero-bg-grade" aria-hidden="true" />

      <div className="hero-inner">
        <p className="hero-kicker">
          <span>Latest release</span>
          <span className="hero-kicker-dot" />
          <span>{latest.title}</span>
          <span className="hero-kicker-dot" />
          <span>{latest.year}</span>
        </p>

        <h1 className="hero-mark">{ARTIST}</h1>

        <div className="hero-foot">
          <p className="hero-line">
            {releases.length} albums out now on Spotify and Apple Music.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={links.spotify} target="_blank" rel="noreferrer noopener">
              Listen on Spotify
            </a>
            <a className="btn" href="#releases">Discography</a>
          </div>
        </div>
      </div>
    </header>
  );
}
