// File: src/components/sections/Industries.jsx
import React from "react";
import { motion } from "framer-motion";
import { industries } from "../../data/industries";
import IndustryCard from "../ui/IndustryCard";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

function Industries() {
  return (
    <section id="industries" className="section-padding bg-gray-50">
      <Container>
        <SectionHeading
          label="Industries"
          title="Serving Diverse Industries"
          subtitle="Our comprehensive solutions are designed to meet the unique security and networking needs of various industries."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Industries;
