import LinksCard from '../components/LinksCard';
import myImage from '../assets/github.png';
import myImage2 from '../assets/itch.png';
import { useEffect } from "react";

function Links() {
  useEffect(() => {document.title = "Eder's Website | Links";}, []);
  return (
    <div className="cards-container" style={{ minHeight: '100vh' }}>
      <LinksCard
        image={myImage}
        text="Github"
        link="https://github.com/mangewp"
      />
      <LinksCard
        image={myImage2}
        text="itch.io"
        link="https://moronicmango.itch.io/"
      />
    </div>
  )
}

export default Links;