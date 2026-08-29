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
          src="/about.jpg"
          alt="About SmartView Technology"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-black/75" />
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
            className="max-w-4xl pl-4 sm:pl-8 md:pl-12 lg:pl-16 transform-gpu"
          >
            {/* Eyebrow / Label */}
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-8 bg-blue-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                About Us
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
              Your Trusted
              <br />
              <span className="text-white">Security Partner</span>
            </h2>

            {/* Description */}
            <p
              className="mt-4 max-w-2xl text-[17px] font-normal leading-relaxed text-gray-200 sm:text-lg"
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
              className="mt-3 max-w-2xl text-[17px] font-normal leading-relaxed text-gray-200 sm:text-lg"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              We combine cutting-edge technology with professional expertise to
              provide comprehensive security solutions that protect what matters
              most to you.
            </p>

            {/* Subtle divider */}
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-blue-400/60 to-transparent" />

            {/* Features List */}
            <div className="mt-8 max-w-xl space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                  </div>
                  <span
                    className="text-[15px] text-gray-200 font-medium"
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;

