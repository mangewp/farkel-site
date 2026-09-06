import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import ReleaseIndex from '../components/ReleaseIndex';
import Videos from '../components/Videos';
import PlatformLinks from '../components/PlatformLinks';
import Footer from '../components/Footer';
import { ARTIST } from '../data/links';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />

      <main id="main">
        <Hero />
        <Marquee text={ARTIST} />
        <ReleaseIndex />
        <Videos />
        <PlatformLinks />
      </main>

      <Footer />
    </>
  );
}
