// File: src/components/sections/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Shield,
  Users,
  Zap,
  Headphones,
  Cpu,
  Globe,
  Briefcase,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Industry Expertise",
      description:
        "15+ years of experience delivering cutting-edge security solutions.",
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Enterprise-grade security with 99.9% uptime guarantee.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Customized solutions tailored to your specific needs and budget.",
    },
    {
      icon: Zap,
      title: "Innovation-Driven",
      description:
        "Leveraging the latest technology for future-ready solutions.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock monitoring and technical support when you need it.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support Team",
      description: "Expert technicians ready to assist with any issue.",
    },
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <Container>
        <SectionHeading
          label="Why Choose SmartView"
          title="Your Security Partner of Choice"
          subtitle="We combine technical excellence with a commitment to client satisfaction to deliver superior security solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h4>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
