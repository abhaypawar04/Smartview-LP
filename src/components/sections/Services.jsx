// File: src/components/sections/Services.jsx

import React from "react";
import { motion } from "framer-motion";
import { services } from "../../data/services";
import ServiceCard from "../ui/ServiceCard";
import Container from "../common/Container";

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* ==========================================
          BACKGROUND IMAGE
      ========================================== */}

      <div className="absolute inset-0 z-0">
        <img
          src="/services.jpg"
          alt="SmartView Technology Services"
          className="h-full w-full object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* ==========================================
          SUBTLE BACKGROUND GLOW
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
      />

      {/* ==========================================
          MAIN CONTENT - LEFT ALIGNED WITH OFFSET
      ========================================== */}

      <Container>
        <div className="relative z-10">
          {/* Section Header - Left Aligned with slight right offset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl pl-4 sm:pl-8 md:pl-12 lg:pl-16"
          >
            {/* Eyebrow / Label - Left Aligned */}
            <div className="mb-3 flex items-center gap-4">
              <span className="h-px w-8 bg-blue-400/60" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                Our Services
              </span>
            </div>

            {/* Main Heading - Bigger and Bolder */}
            <h2 className="text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
              Security.
              <br />
              <span className="text-white">Simplified.</span>
            </h2>

            {/* Subtitle - Left Aligned */}
            <p className="mt-4 max-w-xl text-[17px] font-light leading-relaxed text-white/70 sm:text-lg md:text-xl">
              End-to-end security and networking solutions, thoughtfully
              designed to protect what matters most.
            </p>

            {/* Subtle divider - Left Aligned */}
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-blue-400/40 to-transparent" />
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>

          {/* Bottom CTA - Left Aligned with offset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 pl-4 sm:pl-8 md:pl-12 lg:pl-16"
          ></motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Services;
