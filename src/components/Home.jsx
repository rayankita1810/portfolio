import { useRef } from "react";
import About from "./About";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

const Home = () => {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
  
    const aboutScroll = () => {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const skillsScroll = () => {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const experienceScroll = () => {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const projectsScroll = () => {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
  return (
    <div>
      <Navbar aboutScroll={aboutScroll} skillsScroll={skillsScroll} experienceScroll={experienceScroll} projectsScroll={projectsScroll}/>
      <About ref={aboutRef} />
      <Skills ref={skillsRef}/>
      <Experience ref={experienceRef}/>
      <Projects ref={projectsRef}/>
      <Footer />
    </div>
  )
}

export default Home
