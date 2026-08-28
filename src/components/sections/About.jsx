// File: src/components/sections/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, Zap } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

function About() {
  const stats = [
    { icon: ShieldCheck, label: "Years of Experience", value: "15+" },
    { icon: Users, label: "Satisfied Clients", value: "500+" },
    { icon: Award, label: "Industry Awards", value: "25" },
    { icon: Zap, label: "Projects Completed", value: "1000+" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              label="About Us"
              title="Your Trusted Security Partner"
              subtitle="SmartView Technology delivers innovative security and networking solutions backed by years of industry expertise and a commitment to excellence."
              centered={false}
            />

            <div className="space-y-6 mt-8">
              <p className="text-gray-600">
                We combine cutting-edge technology with professional expertise
                to provide comprehensive security solutions that protect what
                matters most to you.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">
                    Expert installation and maintenance services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">
                    Customized solutions for every client
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">
                    24/7 support and monitoring services
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Years of Excellence
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Happy Clients
                  </div>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-bold text-blue-600">25</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Industry Awards
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-3xl -z-10 blur-2xl"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;
