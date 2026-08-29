// File: src/components/sections/Industries.jsx

import React from "react";
import { motion } from "framer-motion";
import { industries } from "../../data/industries";
import IndustryCard from "../ui/IndustryCard";
import Container from "../common/Container";

function Industries() {
  return (
    <section
      id="industries"
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
          src="/industry.jpg"
          alt="Industries We Serve"
          className="h-full w-full object-cover"
        />

        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[5px]" />

        {/* Gradient overlays for depth */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/50 to-white/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50" /> */}
      </div>

      {/* ==========================================
          SUBTLE BACKGROUND GLOW
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl"
      />

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <Container>
        <div className="relative z-10">
          {/* ==========================================
              SECTION HEADER - LEFT ALIGNED WITH OFFSET
          ========================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl pl-4 sm:pl-8 md:pl-12 lg:pl-16"
          >
            {/* Eyebrow / Label */}
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-8 bg-blue-600/60" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-500/90">
                Industries
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              Serving Diverse
              <br />
              <span className="text-white">Industries</span>
            </h2>

            {/* Subtitle */}
            <p
              className="mt-4 max-w-2xl text-[17px] font-light leading-relaxed text-gray-300 sm:text-lg"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              Our comprehensive solutions are designed to meet the unique
              security and networking needs of various industries.
            </p>

            {/* Subtle divider */}
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-blue-400/to-transparent" />
          </motion.div>

          {/* ==========================================
              INDUSTRIES GRID
          ========================================== */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Industries;
