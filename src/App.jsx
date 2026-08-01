import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import GitHubStats from "./components/GitHubStats";
import Socials from "./components/Socials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app min-h-screen bg-[radial-gradient(circle_at_top,_rgba(76,29,149,0.25),_transparent_40%),linear-gradient(135deg,_#06070b_0%,_#09090b_45%,_#050507_100%)] text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <GitHubStats />
        <Socials />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/20 py-8 text-center text-sm text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} Sahil Sharma. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
