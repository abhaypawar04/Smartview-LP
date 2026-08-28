// File: src/components/sections/Solutions.jsx
import React from "react";
import { motion } from "framer-motion";
import { solutions } from "../../data/solutions";
import SolutionCard from "../ui/SolutionCard";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <Container>
        <SectionHeading
          label="Solutions"
          title="Integrated Technology Solutions"
          subtitle="We deliver end-to-end solutions that integrate security, networking, and communication systems for seamless operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Solutions;
