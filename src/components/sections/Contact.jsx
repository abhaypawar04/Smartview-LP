// File: src/components/sections/Contact.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import Container from "../common/Container";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);

    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@smartviewtech.com",
      href: "mailto:info@smartviewtech.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Tech Park Drive, Suite 100, Silicon Valley, CA 94043",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri: 8:00 AM - 6:00 PM",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24 transform-gpu"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* ==========================================
          BACKGROUND DECORATIONS
      ========================================== */}

      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-black" />

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <Container>
        <div className="relative z-10">
          {/* ==========================================
              SECTION HEADER
          ========================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl pl-4 sm:pl-8 md:pl-12 lg:pl-16 transform-gpu"
          >
            {/* Eyebrow / Label */}
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-8 bg-blue-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                Contact Us
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              Get in Touch
              <br />
            </h2>

            {/* Subtitle */}
            <p
              className="mt-4 max-w-2xl text-[17px] font-normal leading-relaxed text-white/80 sm:text-lg"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              Have questions or ready to start your project? We're here to help.
            </p>

            {/* Subtle divider */}
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-blue-400/60 to-transparent" />
          </motion.div>

          {/* ==========================================
              CONTACT FORM & INFO GRID
          ========================================== */}

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 transform-gpu"
            >
              <div className="rounded-2xl bg-neutral-900/90 p-6 sm:p-8 border border-white/10 shadow-lg">
                <h3
                  className="mb-6 text-xl font-bold text-white"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
                  }}
                >
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/80 mb-1.5"
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/80 mb-1.5"
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-white/80 mb-1.5"
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/80 mb-1.5"
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your security needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                    }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-sm text-green-400 font-medium"
                    >
                      ✓ Message sent successfully! We'll get back to you soon.
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="transform-gpu"
            >
              <div className="rounded-2xl bg-neutral-900/90 p-6 sm:p-8 border border-white/10 h-full shadow-lg">
                <h3
                  className="mb-6 text-xl font-bold text-white"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
                  }}
                >
                  Contact Information
                </h3>

                <div className="space-y-5">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div
                            className="text-sm font-medium text-white/50"
                            style={{
                              fontFamily:
                                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                            }}
                          >
                            {info.label}
                          </div>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-white transition-colors hover:text-blue-400 font-medium"
                              style={{
                                fontFamily:
                                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                              }}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div
                              className="text-white/90 font-medium"
                              style={{
                                fontFamily:
                                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                              }}
                            >
                              {info.value}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Map placeholder */}
                <div className="mt-8 overflow-hidden rounded-xl bg-white/5 border border-white/10 h-48">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto h-8 w-8 text-white/30" />
                      <p className="mt-2 text-sm text-white/40">
                        Google Maps Integration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Contact;
