import React from 'react';
import SideBarButton from './SideBarButton';
import Album from './Album';
import './LeftColumn.css';

export default function LeftColumn() {
  return (
    <div className="home-left">
      <h1 style={{ margin: 0, marginBottom: '1rem', fontSize: '2.2rem' }}>
        farkel
      </h1>
        <SideBarButton href="https://www.youtube.com/@farkelz" background="linear-gradient(90deg, #c4302b 0%, #ff0000 100%)">YouTube</SideBarButton>
        <SideBarButton href="https://open.spotify.com/artist/0F0N3RSvTkGppo8OYcGMBe" background="linear-gradient(90deg, #1db954 0%, #1ed760 100%)">Spotify</SideBarButton>
        <SideBarButton href="https://music.apple.com/au/artist/farkel/1728006176?at=1000l3auP&ct=link&itsct=music_box_link&itscg=30200&ls=1" background="linear-gradient(90deg, #f5f5f7 0%, #fa233b 100%)">Apple Music</SideBarButton>
        <SideBarButton href="https://www.instagram.com/farkelz" background="linear-gradient(90deg, #fd5949 0%, #d6249f 50%, #285AEB 100%)">Instagram</SideBarButton>
      <h1 style={{ marginTop: '3rem', marginBottom: '1rem', fontSize: '2.2rem', }}>
        Albums
      </h1>
      <div className="albums-list">
        <Album
          image="/assets/STAY UGLY.jpg"
          button1={{ text: 'Spotify', link: 'https://open.spotify.com/album/71nCAW1GtXgtn8ppgWtFfE?si=0dnJgUbIQIy3wlfMLr_hSQ' }}
          button2={{ text: 'Apple', link: 'https://music.apple.com/au/album/stay-ugly/1810435384' }}
        />
        <Album
          image="/assets/HURRICANE HEART.jpg"
          button1={{ text: 'Spotify', link: 'https://open.spotify.com/album/5By3dbVA4hIVEwTFcI8SLJ?si=2L2xQedLSnCHgko5llANGA' }}
          button2={{ text: 'Apple', link: 'https://music.apple.com/au/album/hurricane-heart/1798583413' }}
        />
        <Album
          image="/assets/FAR FROM GONE.jpg"
          button1={{ text: 'Spotify', link: 'https://open.spotify.com/album/0xiVg7zDeJUY5UZVBZOaAw?si=hFSmX-WWTN6lan0xAMgyPA' }}
          button2={{ text: 'Apple', link: 'https://music.apple.com/au/album/far-from-gone/1797411802' }}
        />
      </div>
    </div>
  );
}