// File: src/components/sections/About.jsx

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "../common/Container";

function About() {
  const features = [
    "Expert installation and maintenance services",
    "Customized solutions for every client",
    "24/7 support and monitoring services",
    "Cutting-edge technology integration",
  ];

  return (
    <section
      id="about"
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
          src="/about.jpg"
          alt="About SmartView Technology"
          className="h-full w-full object-cover"
        />

        {/* Gradient overlays for depth */}
      </div>

      {/* ==========================================
          SUBTLE BACKGROUND GLOW
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl"
      />

      {/* ==========================================
          MAIN CONTENT - LEFT ALIGNED WITH OFFSET
      ========================================== */}

      <Container>
        <div className="relative z-10">
          {/* ==========================================
              LEFT ALIGNED CONTENT WITH OFFSET
          ========================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl pl-4 sm:pl-8 md:pl-12 lg:pl-16"
          >
            {/* Eyebrow / Label - Left Aligned */}
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-8 bg-blue-600/60" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                About Us
              </span>
            </div>

            {/* Heading - Left Aligned */}
            <h2
              className="text-4xl font-bold tracking-[-0.04em] text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              Your Trusted
              <br />
              <span className="text-gray-950">Security Partner</span>
            </h2>

            {/* Description - Left Aligned */}
            <p
              className="mt-4 max-w-2xl text-[17px] font-light leading-relaxed text-gray-700 sm:text-lg"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              SmartView Technology delivers innovative security and networking
              solutions backed by years of industry expertise and a commitment
              to excellence.
            </p>

            <p
              className="mt-3 max-w-2xl text-[17px] font-light leading-relaxed text-gray-700 sm:text-lg"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              We combine cutting-edge technology with professional expertise to
              provide comprehensive security solutions that protect what matters
              most to you.
            </p>

            {/* Subtle divider - Left Aligned */}
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-blue-400/40 to-transparent" />

            {/* Features List - Left Aligned */}
            <div className="mt-8 max-w-xl space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                  </div>
                  <span
                    className="text-[15px] text-gray-700"
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                    }}
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;
