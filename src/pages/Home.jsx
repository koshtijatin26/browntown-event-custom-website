import About from "../components/HomePage/About";
import Contact from "../components/HomePage/Contact";
import Events from "../components/HomePage/Events";
import Gallery from "../components/HomePage/Gallery";
import Hero from "../components/HomePage/Hero";
import TeamPartners from "../components/HomePage/TeamPartners";

export default function Home() {
  return (<>
  <Hero />
  <Events />
  <About />
  <TeamPartners />
  <Gallery />
  <Contact />
  </>)
}
