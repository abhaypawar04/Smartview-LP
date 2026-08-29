// File: src/pages/Home.jsx
import React from "react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Industries from "../components/sections/Industries";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <div id="top">
      <Hero />
      <Services />
      <About />
      <Industries />
      <Contact />
    </div>
  );
}

export default Home;

