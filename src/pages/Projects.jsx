import AboutCard from "../components/AboutCard";
import cribImg1 from '../assets/crib-game.png';
import cribImg2 from '../assets/crib-menu.png';
import cribImg3 from '../assets/crib-spread.png';
import { useEffect } from "react";

function Projects() {
  useEffect(() => {document.title = "Eder's Website | Projects";}, []);
  return (
    <div>
      <AboutCard title="Cribbage Game">
        <p>
          A 2-player digital version of the classic card game Cribbage, built from scratch in Godot. The game supports real-time multiplayer, card drag-and-drop, crib logic, and full round scoring — all with smooth card animations and scene syncing.
        </p>
        <strong>Features</strong>
        <ul>
          <li>
            <strong>Multiplayer Support:</strong> ENet-based networking handles turn-based interactions and card sync between players.
          </li>
          <li>
            <strong>Drag &amp; Drop Interface:</strong> Intuitive card movement with validation for legal Crib placements.
          </li>
          <li>
            <strong>Game Phases:</strong> Built a state manager to track and control different phases (dealing, crib selection, play, counting).
          </li>
          <li>
            <strong>Animations:</strong> Added scaling, rotation, and hover effects to make card interactions more tactile and satisfying.
          </li>
          <li>
            <strong>Custom UI:</strong> Used HBoxContainers and tweaked Godot’s UI system for proper card layout, crib order, and transitions.
          </li>
        </ul>
        <strong>Why I Built It</strong>
        <p>
          I wanted to create my own version of the game to challenge myself. Plus, building in Godot let me sharpen my game dev and UI design skills.
        </p>
        <strong>Challenges I Solved</strong>
        <ul>
          <li>Making real-time updates feel natural across clients without desync.</li>
          <li>Animating cards without breaking drag logic or HBoxContainer layout.</li>
          <li>Keeping UI reactive while managing turn states and game resets.</li>
        </ul>
        <strong>What I am Working On</strong>
        <ul>
          <li>Adding single-player mode with AI opponents.</li>
          <li>Game design and visuals.</li>
          <li>Visual scoring pegs and custom card deck designs.</li>
        </ul>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <img src={cribImg1} alt="Cribbage Game" style={{ maxWidth: "615px"}} />
          <img src={cribImg2} alt="Cribbage Game Menu" style={{ maxWidth: "300px"}} />
          <img src={cribImg3} alt="Cribbage Game Card Spread" style={{ maxWidth: "300px"}} />
        </div>
      </AboutCard>
    </div>
  )
}

export default Projects;