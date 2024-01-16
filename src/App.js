import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact  />
      <Footer />
    </div>
  );
}

export default App;
