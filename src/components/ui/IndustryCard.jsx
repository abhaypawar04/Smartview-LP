// File: src/components/ui/IndustryCard.jsx
import React from "react";
import { motion } from "framer-motion";

function IndustryCard({ industry, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
    >
      <div className="w-16 h-16 rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center mx-auto mb-4">
        <span className="text-3xl">{industry.icon}</span>
      </div>
      <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
        {industry.title}
      </h4>
    </motion.div>
  );
}

export default IndustryCard;
