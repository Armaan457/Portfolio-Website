import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contacts from './components/Contact';
import AudioPlayer from './components/AudioPlayer';
import { useColorTransition } from './utils/useColorTransition';

function App() {
  useColorTransition();

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-accent-primary selection:text-neutral-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,var(--accent-ambient),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-5 md:px-10 max-w-7xl">
        <Navbar />
        <main className="space-y-24 md:space-y-32">
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Achievements />
          <Contacts />
        </main>
      </div>
      <AudioPlayer />
    </div>
  );
}

export default App;