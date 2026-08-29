// File: src/components/ui/IndustryCard.jsx

import React from "react";
import { motion } from "framer-motion";

function IndustryCard({ industry, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        delay: Math.min(index * 0.05, 0.3),
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-xl border border-gray-100/90"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* ==========================================
          IMAGE
      ========================================== */}

      <div className="relative h-44 w-full overflow-hidden bg-gray-100">
        {industry.image ? (
          <img
            src={industry.image}
            alt={industry.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Fallback: Show icon if no image
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100/50">
            <span className="text-5xl opacity-60">{industry.icon}</span>
          </div>
        )}

        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="p-5 text-center">
        {/* Title */}
        <h4
          className="text-[16px] font-bold tracking-[-0.02em] text-gray-950 transition-colors duration-300 group-hover:text-blue-600"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
          }}
        >
          {industry.title}
        </h4>
      </div>
    </motion.div>
  );
}

export default IndustryCard;

