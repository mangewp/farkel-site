import AboutCard from "../components/AboutCard";
import bluegillImg from "../assets/bluegill.jpg";
import crappieImg from "../assets/crappie.jpg";
import { useEffect } from "react";

function About() {
  useEffect(() => {document.title = "Eder's Website | About";}, []);
  return (
    <div>
      <AboutCard title="About Me">
        <p>Hey, I’m Eder! I’m into building cool things with code, game design, and getting overly competitive about card games.
        Lately, I’ve been working on a multiplayer Cribbage game in Godot 4.4 — complete with card animations, drag-and-drop, and just the right amount of visual flair. It’s been a fun mix of logic, design, and pixel-level detail.
        Outside of tech, I’m all about balance. I spend a lot of time at the gym, climbing rocks, or just unwinding with a fishing rod in hand. I like solving tough problems, whether it's debugging multiplayer logic or figuring out which lure works best on a quiet lake.
        </p>
        <p>Here are some beautiful catches.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <img src={bluegillImg} alt="Bluegill" style={{ maxWidth: "300px", borderRadius: "8px" }} />
          <img src={crappieImg} alt="Catfish" style={{ maxWidth: "300px", borderRadius: "8px" }} />
        </div>
      </AboutCard>
      <div style={{ display: "flex", justifyContent: "center", padding: "0 1rem", marginTop: "-1.5rem", paddingBottom: "1.5rem" }}>
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          height="450"
          style={{
            width: "100%",
            maxWidth: "705px",
            overflow: "hidden",
            borderRadius: "14px",
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/playlist/favorite-songs/pl.u-1LUNjL1Zvj?theme=dark"
          title="Apple Music Playlist"
        ></iframe>
      </div>
    </div>
  );
}

export default About;