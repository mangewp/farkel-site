import React from 'react';
import SideBarButton from './SideBarButton';
import Album from './Album';
import './LeftColumn.css';

export default function LeftColumn() {
  return (
    <div className="home-left">
      <h1 style={{ margin: 0, marginBottom: '2rem', fontSize: '2.2rem' }}>
        Farkel
      </h1>
      <SideBarButton href="https://www.youtube.com/@farkelz">YouTube</SideBarButton>
      <SideBarButton href="https://open.spotify.com/artist/0F0N3RSvTkGppo8OYcGMBe">Spotify</SideBarButton>
      <SideBarButton href="https://music.apple.com/au/artist/farkel/1728006176?at=1000l3auP&ct=link&itsct=music_box_link&itscg=30200&ls=1">Apple Music</SideBarButton>
      <SideBarButton href="https://www.instagram.com/farkelz">Instagram</SideBarButton>
      <h1 style={{ marginTop: 20, marginBottom: '2rem', fontSize: '2.2rem', }}>
        Albums
      </h1>
      <div className="albums-list">
        <Album
          image="/assets/STAY UGLY.jpg"
          button1={{ text: 'Spotify', link: 'https://open.spotify.com/' }}
          button2={{ text: 'Apple', link: 'https://music.apple.com/' }}
        />
        <Album
          image="/assets/STAY UGLY.jpg"
          button1={{ text: 'Spotify', link: 'https://open.spotify.com/' }}
          button2={{ text: 'Apple', link: 'https://music.apple.com/' }}
        />
        <Album
          image="/assets/STAY UGLY.jpg"
          button1={{ text: 'Spotify', link: 'https://open.spotify.com/' }}
          button2={{ text: 'Apple', link: 'https://music.apple.com/' }}
        />
      </div>
    </div>
  );
}