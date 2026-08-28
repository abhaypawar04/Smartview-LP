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
  const baseStyles = `
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-2
    overflow-hidden
    font-medium
    tracking-tight
    rounded-none
    select-none
    transition-colors
    duration-200
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-blue-600
    focus-visible:ring-offset-2
    disabled:pointer-events-none
    disabled:opacity-40
  `;

  const variants = {
    primary: `
      bg-blue-600
      text-white
      border
      border-blue-600
      hover:bg-blue-700
      active:bg-blue-800
    `,

    secondary: `
      bg-white
      text-blue-600
      border
      border-blue-600
      hover:bg-blue-50
      active:bg-blue-100
    `,

    outline: `
      bg-transparent
      text-gray-900
      border
      border-gray-400
      hover:border-gray-900
      hover:bg-gray-50
      active:bg-gray-100
    `,
  };

  const sizes = {
    sm: "min-h-9 px-4 text-xs",
    default: "min-h-11 px-5 text-sm",
    lg: "min-h-13 px-7 text-base",
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.985 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.7,
      }}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {/* Apple-like subtle hover sweep */}
      <motion.span
        aria-hidden="true"
        className="
          absolute
          inset-0
          -translate-x-full
          bg-white/10
        "
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.button>
  );
}

export default Button;
