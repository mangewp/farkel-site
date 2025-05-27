import React from 'react';
import './Home.css';
import SideBarButton from '../components/SideBarButton';
import Album from '../components/Album';

function Home() {
  return (
    <div className="home-root">
      {/* Left Section */}
      <div className="home-left">
        <h1 style={{ margin: 0, marginBottom: '2rem', fontSize: '2.2rem', letterSpacing: '2px' }}>
          Farkel
        </h1>
        <SideBarButton href="https://www.youtube.com/@farkelz">YouTube</SideBarButton>
        <SideBarButton href="https://open.spotify.com/artist/0F0N3RSvTkGppo8OYcGMBe">Spotify</SideBarButton>
        <SideBarButton href="https://music.apple.com/au/artist/farkel/1728006176?at=1000l3auP&ct=link&itsct=music_box_link&itscg=30200&ls=1">Apple Music</SideBarButton>
        <SideBarButton href="https://www.instagram.com/farkelz">Instagram</SideBarButton>
        <h1 style={{ marginTop: '10rem', marginBottom: '2rem', fontSize: '2.2rem', letterSpacing: '2px' }}>
          Albums
        </h1>
        <div className="albums-list">
          <Album
            image="src/assets/STAY UGLY.jpg"
            button1={{ text: 'Spotify', link: 'https://open.spotify.com/' }}
            button2={{ text: 'Apple', link: 'https://music.apple.com/' }}
          />
          <Album
            image="src/assets/HURRICANE HEART.jpg"
            button1={{ text: 'Spotify', link: 'https://open.spotify.com/' }}
            button2={{ text: 'Apple', link: 'https://music.apple.com/' }}
          />
          <Album
            image="src/assets/FAR FROM GONE.jpg"
            button1={{ text: 'Spotify', link: 'https://open.spotify.com/' }}
            button2={{ text: 'Apple', link: 'https://music.apple.com/' }}
          />
</div>
      </div>

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
          src="https://www.youtube.com/embed?listType=playlist&list=UULFWlcH69OjzRNigqEFPBFRXw"
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
            marginBottom: '5rem',
          }}
        >
          {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((index) => (
            <div
              key={index}
              style={{
                width: '100%',
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
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