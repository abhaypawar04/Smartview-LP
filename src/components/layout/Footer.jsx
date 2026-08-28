// File: src/components/layout/Footer.jsx

import React from "react";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { companyInfo } from "../../data/company";
import { navigationItems } from "../../data/navigation";
import Container from "../common/Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "CCTV Surveillance",
    "Networking Solutions",
    "Access Control",
    "Intercom Systems",
    "Security Alarms",
  ];

  return (
    <footer className="bg-[#161616] text-white">
      <Container>
        {/* Main Footer */}
        <div className="py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
            {/* Brand */}
            <div className="lg:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400 mb-6">
                SmartView Technology
              </p>

              <h2 className="max-w-xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.98]">
                Technology that
                <br />
                protects what matters.
              </h2>

              <p className="max-w-md mt-8 text-base lg:text-lg leading-7 text-gray-400">
                Integrated security, surveillance, networking, and
                access-control solutions designed for modern environments.
              </p>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-medium text-gray-400 mb-6">
                Explore
              </h3>

              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <motion.a
                      href={item.href}
                      whileHover={{ x: 4 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-200
                        hover:text-white
                        transition-colors
                        duration-200
                      "
                    >
                      {item.name}

                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-medium text-gray-400 mb-6">
                Services
              </h3>

              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="
                        text-sm
                        text-gray-200
                        hover:text-white
                        transition-colors
                        duration-200
                      "
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-medium text-gray-400 mb-6">
                Contact
              </h3>

              <div className="space-y-5">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    text-sm
                    text-gray-200
                    hover:text-white
                    transition-colors
                    duration-200
                  "
                >
                  <Phone className="w-4 h-4 mt-0.5 text-gray-500 group-hover:text-blue-400 transition-colors" />

                  <span>{companyInfo.phone}</span>
                </a>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    text-sm
                    text-gray-200
                    hover:text-white
                    transition-colors
                    duration-200
                  "
                >
                  <Mail className="w-4 h-4 mt-0.5 text-gray-500 group-hover:text-blue-400 transition-colors" />

                  <span>{companyInfo.email}</span>
                </a>

                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <MapPin className="w-4 h-4 mt-0.5 text-gray-500 shrink-0" />

                  <span className="leading-6">{companyInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            border-t
            border-white/10
            py-6
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-4
          "
        >
          <p className="text-xs text-gray-500">
            © {currentYear} SmartView Technology. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Security · Connectivity · Control
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
