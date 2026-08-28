// File: src/components/layout/Navbar.jsx

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { navigationItems } from "../../data/navigation";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // ==========================================
  // EFFECTS
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setMobileDropdownOpen(null);
    }
  }, [isMobileMenuOpen]);

  // ==========================================
  // HANDLERS
  // ==========================================

  const toggleDesktopDropdown = (name) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdownOpen((current) => (current === name ? null : name));
  };

  const closeAllMenus = () => {
    setActiveDropdown(null);
    setMobileDropdownOpen(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (!isMobileMenuOpen) {
      setMobileDropdownOpen(null);
    }
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <>
      {/* ==========================================
          HEADER - Transparent
      ========================================== */}

      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-500
          ${
            isScrolled
              ? "bg-white/80 backdrop-blur-2xl border-b border-black/5 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
              : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <nav className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex h-[64px] items-center justify-between sm:h-[68px] lg:h-[72px]">
            {/* ==========================================
                BRAND - Text Only (iOS SF Font)
            ========================================== */}

            <Link
              to="/"
              onClick={closeAllMenus}
              className="group flex shrink-0 items-center gap-2 outline-none"
              aria-label="SmartView Technology Home"
            >
              <div className="flex items-center gap-2">
                <span
                  className="text-[20px] font-bold tracking-[-0.03em] transition-colors duration-300 sm:text-[22px] lg:text-[24px]"
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
                    textShadow: isScrolled
                      ? "none"
                      : "0 2px 20px rgba(0,0,0,0.15)",
                    color: isScrolled ? "#111827" : "#ffffff",
                  }}
                >
                  SmartView
                </span>
                <span
                  className="hidden text-[11px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 sm:block"
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
                    textShadow: isScrolled
                      ? "none"
                      : "0 2px 20px rgba(0,0,0,0.10)",
                    color: isScrolled ? "#6B7280" : "rgba(255,255,255,0.7)",
                  }}
                >
                  Technology
                </span>
              </div>
            </Link>

            {/* ==========================================
                DESKTOP NAVIGATION
            ========================================== */}

            <ul
              className="hidden h-full items-center gap-0.5 lg:flex"
              ref={dropdownRef}
            >
              {navigationItems.map((item) => {
                const hasChildren = item.children?.length > 0;
                const isOpen = activeDropdown === item.name;

                return (
                  <li key={item.name} className="relative h-full">
                    {hasChildren ? (
                      <>
                        {/* Desktop Dropdown Trigger */}
                        <button
                          type="button"
                          onClick={() => toggleDesktopDropdown(item.name)}
                          className={`
                            relative flex h-full items-center gap-1.5
                            px-4 text-[14px] font-medium tracking-[-0.01em]
                            outline-none transition-all duration-300
                            lg:px-5
                            ${
                              isScrolled
                                ? isOpen
                                  ? "text-blue-600"
                                  : "text-gray-700 hover:text-blue-600"
                                : isOpen
                                  ? "text-white"
                                  : "text-white/90 hover:text-white"
                            }
                          `}
                          style={{
                            fontFamily:
                              "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
                            textShadow: isScrolled
                              ? "none"
                              : "0 2px 20px rgba(0,0,0,0.10)",
                          }}
                          aria-expanded={isOpen}
                          aria-haspopup="true"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`
                              h-3.5 w-3.5 transition-transform duration-300
                              ${isOpen ? "rotate-180" : ""}
                              ${isScrolled ? "text-gray-700" : "text-white/70"}
                            `}
                          />

                          {/* Active Indicator */}
                          <motion.span
                            initial={false}
                            animate={{
                              scaleX: isOpen ? 1 : 0,
                              opacity: isOpen ? 1 : 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`absolute bottom-0 left-4 right-4 h-[2.5px] origin-center rounded-full ${
                              isScrolled ? "bg-blue-600" : "bg-white"
                            } lg:left-5 lg:right-5`}
                          />
                        </button>

                        {/* Desktop Dropdown Panel */}
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -4, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -4, scale: 0.98 }}
                              transition={{
                                duration: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="absolute right-0 top-full w-[520px] overflow-hidden rounded-2xl border border-black/5 bg-white/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] mt-2"
                            >
                              <div className="grid grid-cols-[180px_1fr]">
                                {/* Left Panel */}
                                <div className="bg-gray-50/80 p-6">
                                  <div className="mb-4 h-[2.5px] w-8 rounded-full bg-blue-600" />
                                  <h3
                                    className="text-[17px] font-semibold tracking-[-0.02em] text-gray-900"
                                    style={{
                                      fontFamily:
                                        "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
                                    }}
                                  >
                                    {item.name}
                                  </h3>
                                  {item.href && (
                                    <a
                                      href={item.href}
                                      onClick={closeAllMenus}
                                      className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700"
                                      style={{
                                        fontFamily:
                                          "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
                                      }}
                                    >
                                      Explore All
                                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                  )}
                                </div>

                                {/* Links */}
                                <div className="p-2">
                                  {item.children.map((child) => (
                                    <a
                                      key={child.name}
                                      href={child.href}
                                      onClick={closeAllMenus}
                                      className="group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 hover:bg-gray-50"
                                    >
                                      <span
                                        className="text-[14px] font-medium tracking-[-0.01em] text-gray-700 transition-colors duration-200 group-hover:text-blue-600"
                                        style={{
                                          fontFamily:
                                            "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
                                        }}
                                      >
                                        {child.name}
                                      </span>
                                      <ArrowUpRight className="h-4 w-4 text-gray-300 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-blue-600 group-hover:opacity-100" />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      /* Standard Link */
                      <a
                        href={item.href}
                        onClick={closeAllMenus}
                        className={`group relative flex h-full items-center px-4 text-[14px] font-medium tracking-[-0.01em] transition-all duration-300 lg:px-5 ${
                          isScrolled
                            ? "text-gray-700 hover:text-blue-600"
                            : "text-white/90 hover:text-white"
                        }`}
                        style={{
                          fontFamily:
                            "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
                          textShadow: isScrolled
                            ? "none"
                            : "0 2px 20px rgba(0,0,0,0.10)",
                        }}
                      >
                        {item.name}
                        <span
                          className={`absolute bottom-0 left-4 right-4 h-[2.5px] origin-center scale-x-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100 lg:left-5 lg:right-5 ${
                            isScrolled ? "bg-blue-600" : "bg-white"
                          }`}
                        />
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* ==========================================
                MOBILE MENU TOGGLE
            ========================================== */}

            <button
              type="button"
              onClick={toggleMobileMenu}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full outline-none transition-all duration-200 hover:bg-white/10 lg:hidden ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-white"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* ==========================================
          MOBILE MENU OVERLAY
      ========================================== */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="
              fixed inset-x-0 top-[64px] z-40
              max-h-[calc(100vh-64px)] overflow-y-auto
              bg-white/95 backdrop-blur-2xl
              sm:top-[68px] sm:max-h-[calc(100vh-68px)]
              lg:hidden
            "
          >
            <div className="px-6 py-6 sm:px-8">
              <ul className="space-y-0.5">
                {navigationItems.map((item) => {
                  const hasChildren = item.children?.length > 0;
                  const isOpen = mobileDropdownOpen === item.name;

                  return (
                    <li
                      key={item.name}
                      className="border-b border-black/5 last:border-0"
                    >
                      {hasChildren ? (
                        <div>
                          {/* Mobile Dropdown Trigger */}
                          <button
                            type="button"
                            onClick={() => toggleMobileDropdown(item.name)}
                            className="flex w-full items-center justify-between py-4 text-left text-[16px] font-medium text-gray-800 transition-colors hover:text-blue-600"
                            style={{
                              fontFamily:
                                "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
                            }}
                            aria-expanded={isOpen}
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={`
                                h-4 w-4 transition-transform duration-300
                                ${isOpen ? "rotate-180" : ""}
                              `}
                            />
                          </button>

                          {/* Mobile Dropdown Content */}
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                  duration: 0.25,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="overflow-hidden"
                              >
                                <div className="ml-3 space-y-0.5 border-l-2 border-blue-100 pl-4 pb-4">
                                  {item.children.map((child) => (
                                    <a
                                      key={child.name}
                                      href={child.href}
                                      onClick={closeAllMenus}
                                      className="block py-3 text-[15px] text-gray-600 transition-colors hover:text-blue-600"
                                      style={{
                                        fontFamily:
                                          "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
                                      }}
                                    >
                                      {child.name}
                                    </a>
                                  ))}
                                  {item.href && (
                                    <a
                                      href={item.href}
                                      onClick={closeAllMenus}
                                      className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-medium text-blue-600 transition-colors hover:text-blue-700"
                                      style={{
                                        fontFamily:
                                          "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
                                      }}
                                    >
                                      View All {item.name}
                                      <ArrowUpRight className="h-3.5 w-3.5" />
                                    </a>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        /* Mobile Standard Link */
                        <a
                          href={item.href}
                          onClick={closeAllMenus}
                          className="block py-4 text-[16px] font-medium text-gray-800 transition-colors hover:text-blue-600"
                          style={{
                            fontFamily:
                              "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
                          }}
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Mobile CTA Button */}
              <div className="mt-8 pt-6 border-t border-black/10">
                <a
                  href="#contact"
                  onClick={closeAllMenus}
                  className="flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
                  }}
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
