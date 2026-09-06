import { useState } from 'react';
import AppleEmbed from './AppleEmbed';
import { releases } from '../data/releases';
import './ReleaseIndex.css';

/**
 * A catalogue, not a stack of cards. Each row is a typographic entry that
 * expands into a player in place, so the discography reads as a list at a
 * glance and still plays without leaving the page.
 */
export default function ReleaseIndex() {
  const [openId, setOpenId] = useState(releases[0].id);

  return (
    <section className="section index-section" id="releases" aria-labelledby="releases-heading">
      <div className="section-head">
        <h2 id="releases-heading">Discography</h2>
        <span className="eyebrow">{releases.length} albums</span>
      </div>

      <ul className="index">
        {releases.map((release, i) => {
          const open = openId === release.id;
          const panelId = `panel-${release.id}`;

          return (
            <li className={`index-row${open ? ' is-open' : ''}`} key={release.id} id={release.id}>
              {/* Accordion pattern: the heading carries the outline, the
                  button carries the state. */}
              <h3 className="index-heading">
              <button
                type="button"
                className="index-trigger"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : release.id)}
              >
                <span className="index-num">{String(i + 1).padStart(2, '0')}</span>

                <span className="index-art">
                  <img
                    src={release.art}
                    alt=""
                    width="1000"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                  />
                </span>

                <span className="index-title">{release.title}</span>
                <span className="index-year">{release.year}</span>
                <span className="index-tracks">{release.tracks} tracks</span>
                <span className="index-toggle" aria-hidden="true">{open ? '\u2212' : '+'}</span>
              </button>
              </h3>

              <div className="index-panel" id={panelId} hidden={!open}>
                <div className="index-panel-inner">
                  <AppleEmbed appleId={release.appleId} title={release.title} />

                  <div className="index-links">
                    <a href={release.apple} target="_blank" rel="noreferrer noopener">
                      Apple Music
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                    {release.spotify && (
                      <a href={release.spotify} target="_blank" rel="noreferrer noopener">
                        Spotify
                        <span className="visually-hidden"> (opens in a new tab)</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
