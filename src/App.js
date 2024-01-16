import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Landing  />
      <About  />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
