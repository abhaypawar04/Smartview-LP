// File: src/components/ui/AnimatedSection.jsx
import React from "react";
import { motion } from "framer-motion";

function AnimatedSection({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
