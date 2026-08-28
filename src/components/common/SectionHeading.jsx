// File: src/components/common/SectionHeading.jsx
import React from "react";
import { motion } from "framer-motion";

function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      {label && (
        <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
          {label}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
