import About from "../components/sections/About";
import Stack from "../components/sections/Stack";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Hero from "../components/sections/Hero";
import Seo from "../components/ui/Seo";

function Home() {
  return (
    <>
      <Seo title="Inicio" description="Porfatolio de proyectos LARADEV" />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default Home;