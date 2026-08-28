// File: src/components/ui/ServiceCard.jsx

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function ServiceCard({ service, index }) {
  const Icon = service.icon;

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
      className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100/80"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* ==========================================
          IMAGE
      ========================================== */}

      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        {service.image ? (
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Fallback: Show icon if no image
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100/50">
            <Icon className="h-16 w-16 text-blue-400/60" />
          </div>
        )}

        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="p-6">
        {/* Title */}
        <h3
          className="text-[18px] font-semibold tracking-[-0.02em] text-gray-950 transition-colors duration-300 group-hover:text-blue-600"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="mt-2 text-[15px] font-light leading-relaxed text-gray-600"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
          }}
        >
          {service.description}
        </p>

        {/* Learn more link */}
      </div>
    </motion.div>
  );
}

export default ServiceCard;
