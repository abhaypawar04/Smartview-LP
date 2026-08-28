// File: src/components/sections/CTA.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "../common/Button";
import Container from "../common/Container";

function CTA() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-95"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      <Container>
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your World?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Contact us today for a free consultation and discover how
              SmartView Technology can provide the security solutions you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="!border-white !text-white hover:!bg-white hover:!text-blue-600"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="!border-white/30 !text-white hover:!bg-white/20"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
