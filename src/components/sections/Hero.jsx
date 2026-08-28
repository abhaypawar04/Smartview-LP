// File: src/components/sections/Hero.jsx

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Wifi, Lock, Camera } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-black">
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="SmartView Technology Security Solutions"
          className="h-full w-full object-cover"
        />

        {/* Black vintage-inspired overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_black/60)]" />
      </div>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="container-custom relative z-10 w-full pt-28 pb-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            {/* ==========================================
                EYEBROW / BADGE
            ========================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-flex items-center gap-2.5 rounded-full bg-black/40 px-4 py-2 backdrop-blur-md border border-white/10 mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/80">
                Integrated Security Solutions
              </span>
            </motion.div>

            {/* ==========================================
                HEADING
            ========================================== */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[1.05] text-white mb-6"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              Security.
              <br />
              <span className="text-white">Reimagined.</span>
            </motion.h1>

            {/* ==========================================
                SUBTITLE
            ========================================== */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-base md:text-lg text-white/70 leading-relaxed max-w-lg mb-10 font-light"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              Smart security, surveillance, networking, and access-control
              solutions built for modern homes, businesses, and industries.
            </motion.p>

            {/* ==========================================
                CTA GROUP
            ========================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Primary CTA */}
              <a
                href="#solutions"
                className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 active:scale-95"
                style={{ fontFamily: "'Ubuntu', sans-serif" }}
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* ==========================================
                TRUST INDICATORS
            ========================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-white/10"
            >
              <div className="flex items-center gap-2.5">
                <div className="rounded-full bg-white/10 p-1.5">
                  <Shield className="h-3.5 w-3.5 text-white/60" />
                </div>
                <span
                  className="text-xs font-medium text-white/60"
                  style={{ fontFamily: "'Ubuntu', sans-serif" }}
                >
                  Certified
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="rounded-full bg-white/10 p-1.5">
                  <Wifi className="h-3.5 w-3.5 text-white/60" />
                </div>
                <span
                  className="text-xs font-medium text-white/60"
                  style={{ fontFamily: "'Ubuntu', sans-serif" }}
                >
                  Connected
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="rounded-full bg-white/10 p-1.5">
                  <Lock className="h-3.5 w-3.5 text-white/60" />
                </div>
                <span
                  className="text-xs font-medium text-white/60"
                  style={{ fontFamily: "'Ubuntu', sans-serif" }}
                >
                  Secure
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="rounded-full bg-white/10 p-1.5">
                  <Camera className="h-3.5 w-3.5 text-white/60" />
                </div>
                <span
                  className="text-xs font-medium text-white/60"
                  style={{ fontFamily: "'Ubuntu', sans-serif" }}
                >
                  24/7 Monitoring
                </span>
              </div>

              {/* Trust badge */}
              <div className="ml-auto flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 border border-white/5">
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/40"
                  style={{ fontFamily: "'Ubuntu', sans-serif" }}
                >
                  Trusted by 500+ clients
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ==========================================
          DECORATIVE ELEMENTS
      ========================================== */}

      {/* Subtle gradient orbs */}
      <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl" />

      {/* Vintage grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBudW1PY3RhdmVzPSIzIiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMC4xIiAvPjwvc3ZnPg==')]" />
    </section>
  );
}

export default Hero;
