// File: src/components/layout/MobileMenu.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function MobileMenu({ isOpen, onClose, navigationItems }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <span className="text-xl font-bold text-gray-900">SmartView</span>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    {item.children ? (
                      <div className="space-y-2">
                        <span className="text-gray-900 font-semibold block">
                          {item.name}
                        </span>
                        <ul className="pl-4 space-y-2 border-l-2 border-blue-100">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <a
                                href={child.href}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={onClose}
                              >
                                {child.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                        onClick={onClose}
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t">
                <a
                  href="#contact"
                  className="btn-primary w-full justify-center"
                  onClick={onClose}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
