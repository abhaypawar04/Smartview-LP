// File: src/components/layout/Footer.jsx

import React from "react";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

import { companyInfo } from "../../data/company";
import { navigationItems } from "../../data/navigation";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              SmartView Technology
            </h3>

            <p className="text-gray-400 mb-5">
              Integrated security, surveillance, networking, and access-control
              solutions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>{companyInfo.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>{companyInfo.email}</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center hover:text-blue-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  CCTV Surveillance
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Networking Solutions
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Access Control
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Intercom Systems
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Security Alarms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} SmartView Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
