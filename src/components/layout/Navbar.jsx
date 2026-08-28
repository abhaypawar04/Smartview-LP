// File: src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "../../data/navigation";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/logos/smartview-logo.svg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="SmartView Technology"
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-gray-900 hidden sm:inline">
                SmartView
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  {item.children ? (
                    <div className="relative group">
                      <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-2">
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {child.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="#contact" className="btn-primary text-sm px-6 py-2.5">
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </>
  );
}

export default Navbar;
