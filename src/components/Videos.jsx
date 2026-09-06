import VideoFacade from './VideoFacade';
import { featuredVideo, videos } from '../data/videos';
import { links } from '../data/links';
import './Videos.css';

export default function Videos() {
  return (
    <section className="section" id="videos" aria-labelledby="videos-heading">
      <div className="section-head">
        <h2 id="videos-heading">Videos</h2>
        <a
          className="section-link"
          href={links.youtube}
          target="_blank"
          rel="noreferrer noopener"
        >
          All videos on YouTube
        </a>
      </div>

      <div className="video-featured">
        <VideoFacade id={featuredVideo.id} title={featuredVideo.title} priority />
      </div>

      <ul className="video-grid">
        {videos.map((video) => (
          <li key={video.id}>
            <VideoFacade id={video.id} title={video.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}
