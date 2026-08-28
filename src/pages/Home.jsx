// File: src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Solutions from "../components/sections/Solutions";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Industries from "../components/sections/Industries";
import Process from "../components/sections/Process";
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Home() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
      <Hero />
      <Services />
      <About />
      <Solutions />
      <WhyChooseUs />
      <Industries />
      <Process />
      <CTA />
      <Contact />
    </motion.div>
  );
}

export default Home;
