// File: src/components/sections/Process.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Construction,
  Settings,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We assess your security needs and site requirements.",
    },
    {
      icon: FileText,
      title: "Design",
      description: "Custom solution design tailored to your specifications.",
    },
    {
      icon: Construction,
      title: "Installation",
      description: "Professional installation by certified technicians.",
    },
    {
      icon: Settings,
      title: "Integration",
      description: "Seamless integration with your existing systems.",
    },
    {
      icon: ShieldCheck,
      title: "Testing",
      description: "Rigorous testing to ensure optimal performance.",
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Ongoing maintenance and 24/7 technical support.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <Container>
        <SectionHeading
          label="Our Process"
          title="How We Work"
          subtitle="A systematic approach to delivering reliable security and networking solutions."
        />

        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-full lg:w-5/12 ${isEven ? "lg:text-right" : "lg:text-left"}`}
                  >
                    <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                      <div className="flex items-center gap-4 mb-3 lg:justify-end">
                        <span className="text-2xl font-bold text-blue-600">
                          0{index + 1}
                        </span>
                        <h4 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h4>
                      </div>
                      <p
                        className={`text-gray-600 ${isEven ? "lg:text-right" : "lg:text-left"}`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30 flex-shrink-0 lg:mx-8">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Process;
