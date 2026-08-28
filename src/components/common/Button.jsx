// File: src/components/common/Button.jsx
import React from "react";
import { motion } from "framer-motion";

function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300";

  const variants = {
    primary:
      "gradient-bg text-white hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105",
    secondary:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105",
    outline:
      "border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:scale-105",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    sm: "px-4 py-2 text-xs",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
