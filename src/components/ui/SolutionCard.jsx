// File: src/components/ui/SolutionCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

function SolutionCard({ solution, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <span className="text-blue-600 font-bold text-xl">0{index + 1}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {solution.title}
          </h3>
          <p className="text-gray-600 mb-4">{solution.description}</p>
          <ul className="space-y-2">
            {solution.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default SolutionCard;
