// File: src/components/ui/ServiceCard.jsx

import React from "react";
import { motion } from "framer-motion";

function ServiceCard({ service, index }) {
  const Icon = service.icon;

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
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-xl border border-gray-100/90"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* ==========================================
          IMAGE
      ========================================== */}

      <div className="relative h-48 sm:h-52 w-full shrink-0 overflow-hidden bg-gray-100">
        {service.image ? (
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Fallback: Show icon if no image
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100/50">
            <Icon className="h-14 w-14 text-blue-500/70" />
          </div>
        )}

        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* ==========================================
          CONTENT - Suitable Spacious Padding
      ========================================== */}

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 md:p-8">
        <div>
          {/* Title */}
          <h3
            className="text-[19px] sm:text-[20px] font-bold tracking-[-0.02em] text-gray-950 transition-colors duration-300 group-hover:text-blue-600 leading-snug"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
            }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            className="mt-3 text-[15px] sm:text-[15px] font-normal leading-relaxed text-gray-600"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
            }}
          >
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;

