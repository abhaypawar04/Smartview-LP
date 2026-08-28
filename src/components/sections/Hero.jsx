// File: src/components/sections/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Wifi, Lock, Camera } from "lucide-react";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-6"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Integrated Security Solutions
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Secure Your World with
              <span className="gradient-text block">SmartView Technology</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Comprehensive security, surveillance, networking, and
              access-control solutions for residential, commercial, and
              industrial clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="secondary" size="lg">
                Get a Free Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 mt-10">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  Certified
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  Connected
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  Secure
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">24/7</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80"
                alt="SmartView Technology Security Solutions"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 min-w-[140px]"
            >
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Clients Served</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 min-w-[140px]"
            >
              <div className="text-2xl font-bold text-green-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime Guarantee</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
