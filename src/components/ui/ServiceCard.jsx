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
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 card-hover border border-gray-100 hover:border-blue-200"
    >
      <div className="w-14 h-14 rounded-xl bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all duration-300">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}

export default ServiceCard;
