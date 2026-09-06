// Source of truth for the discography.
// Apple album IDs double as the embed IDs, so no extra lookup is needed.
// Spotify album IDs come from the Grim Lucius artist profile. FAR FROM GONE
// is the exception: it never moved across and still sits on the older farkel
// profile, so its link points there.
export const releases = [
  {
    id: 'far-too-gone',
    title: 'FAR TOO GONE',
    year: 2026,
    tracks: 9,
    art: '/covers/far-too-gone.jpg',
    appleId: '1877548701',
    apple: 'https://music.apple.com/au/album/far-too-gone/1877548701',
    spotify: 'https://open.spotify.com/album/2qC25iSxxz3Trg1Xk7M1Mr',
  },
  {
    id: 'split-season',
    title: 'SPLIT SEASON',
    year: 2025,
    tracks: 7,
    art: '/covers/split-season.jpg',
    appleId: '1854332111',
    apple: 'https://music.apple.com/au/album/split-season/1854332111',
    spotify: 'https://open.spotify.com/album/6v3OVS5JgL6w1NdubvjSDF',
  },
  {
    id: 'stay-ugly',
    title: 'STAY UGLY',
    year: 2025,
    tracks: 12,
    art: '/covers/stay-ugly.jpg',
    appleId: '1831019444',
    apple: 'https://music.apple.com/au/album/stay-ugly/1831019444',
    spotify: 'https://open.spotify.com/album/6vrRd0waGp70ZabqhwA9uF',
  },
  {
    id: 'hurricane-heart',
    title: 'HURRICANE HEART',
    year: 2024,
    tracks: 10,
    art: '/covers/hurricane-heart.jpg',
    appleId: '1830899933',
    apple: 'https://music.apple.com/au/album/hurricane-heart/1830899933',
    spotify: 'https://open.spotify.com/album/2hWdVMZn5fsq2aJPGZMl6e',
  },
  {
    id: 'far-from-gone',
    title: 'FAR FROM GONE',
    year: 2023,
    tracks: 8,
    art: '/covers/far-from-gone.jpg',
    appleId: '1830148025',
    apple: 'https://music.apple.com/au/album/far-from-gone/1830148025',
    spotify: 'https://open.spotify.com/album/0xiVg7zDeJUY5UZVBZOaAw',
  },
];

export const latest = releases[0];
