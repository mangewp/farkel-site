import React from 'react';
import './Home.css';
import LeftColumn from '../components/LeftColumn';

function Home() {
  return (
    <div className="home-root">
      {/* Left Section */}
      <LeftColumn />

      {/* Right Section */}
      <div className="home-right">
      <video
        className="home-video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/static.mp4" type="video/mp4" />
      </video>
      <div className="home-right-content">
        <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>latest music video</h2>
      <div style={{ width: '90%', aspectRatio: '16/9', background: '#000', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.18)', marginBottom: '2rem' }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UULFWlcH69OjzRNigqEFPBFRXw&modestbranding=1&rel=0&showinfo=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: 'block', width: '100%', height: '100%' }}
        ></iframe>
      </div>
        <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>more videos</h2>
        <div
          className='more-videos-grid'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            width: '90%',
            margin: '0 auto',
            marginBottom: '1rem',
          }}
        >
          {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
            <div
              key={index}
              style={{
                width: '100%',
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
                paddingBottom: '5rem',
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed?listType=playlist&list=UULFWlcH69OjzRNigqEFPBFRXw&index=${index}`}
                title={`YouTube video player ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: 'block', width: '100%', height: '100%' }}
              ></iframe>
            </div>
        ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;