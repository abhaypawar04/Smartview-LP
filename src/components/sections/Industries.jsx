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
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 transform-gpu"
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
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <Container>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl pl-4 sm:pl-8 md:pl-12 lg:pl-16 transform-gpu"
          >
            {/* Eyebrow / Label */}
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-8 bg-blue-500" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-400">
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
              className="mt-4 max-w-2xl text-[17px] font-normal leading-relaxed text-gray-200 sm:text-lg"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              Our comprehensive solutions are designed to meet the unique
              security and networking needs of various industries.
            </p>

            {/* Subtle divider */}
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-blue-400/60 to-transparent" />
          </motion.div>

          {/* ==========================================
              INDUSTRIES GRID
          ========================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 transform-gpu"
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

