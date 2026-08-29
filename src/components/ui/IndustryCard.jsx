// File: src/components/ui/IndustryCard.jsx

import React from "react";
import { motion } from "framer-motion";

function IndustryCard({ industry, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100/80"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* ==========================================
          IMAGE
      ========================================== */}

      <div className="relative h-40 w-full overflow-hidden bg-gray-100">
        {industry.image ? (
          <img
            src={industry.image}
            alt={industry.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Fallback: Show icon if no image
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100/50">
            <span className="text-5xl opacity-60">{industry.icon}</span>
          </div>
        )}

        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="p-5 text-center">
        {/* Icon (small, above title) */}

        {/* Title */}
        <h4
          className="text-[16px] font-semibold tracking-[-0.02em] text-gray-950 transition-colors duration-300 group-hover:text-blue-600"
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
