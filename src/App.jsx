import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Socials from "./components/Socials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Socials />
      <Contact />

      <footer className="py-8 text-center text-gray-500 text-sm bg-bg-primary">
        <p>
          &copy; {new Date().getFullYear()} Sahil Sharma. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
