import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import TechSkill from "./sections/TechSkills";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    {/* <FeatureCards /> */}
    <Experience />
    <TechSkill />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
