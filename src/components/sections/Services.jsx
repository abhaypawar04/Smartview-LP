// File: src/components/sections/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { services } from "../../data/services";
import ServiceCard from "../ui/ServiceCard";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <Container>
        <SectionHeading
          label="Our Services"
          title="Comprehensive Security Solutions"
          subtitle="From surveillance to access control, we provide end-to-end security and networking solutions tailored to your needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;
