'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-[#111111] py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/6 w-80 h-80 bg-gradient-to-r from-[#D4AF37]/15 to-[#0A2640]/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-64 h-64 bg-gradient-to-r from-[#0A2640]/10 to-[#D4AF37]/10 rounded-full blur-2xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            About <span className="text-[#D4AF37]">Us</span>
          </motion.h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:order-1"
          >
            <div className="w-full max-w-md mx-auto">
              {/* Placeholder for founder image - replace mario.png with your converted image */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#D4AF37]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-[#D4AF37] text-2xl font-bold">M</span>
                    </div>
                    <p className="text-[#F5F5F5] text-sm">
                      Founder Image<br />
                      <span className="text-[#D4AF37] text-xs">
                        (Convert mario.heic to mario.png and place in /public)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Uncomment and use this when you add the converted image */}
              {/* 
              <Image
                src="/mario.png"
                alt="Mario - Founder of Valen & Partners"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              */}
            </div>
          </motion.div>

          {/* Right Content - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 lg:order-2"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-[#F5F5F5] leading-relaxed"
            >
              Many companies struggle to scale because they rely on outdated strategies, underutilize modern tools, or fail to adapt to the fast-changing business world. At Valen & Partners, we combine deep business knowledge with innovative marketing, AI solutions, and proven growth strategies to help brands break boundaries, unlock their full potential, and thrive.
            </motion.p>
          </motion.div>
        </div>

        {/* Stats or Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "Partnership", description: "We integrate as trusted partners, not just service providers" },
            { title: "Innovation", description: "Cutting-edge strategies that position you ahead of competition" },
            { title: "Results", description: "Sustainable growth and long-term competitive advantage" }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
                <h4 className="text-xl font-bold text-[#D4AF37] mb-3 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-[#F5F5F5] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[#F5F5F5] text-lg mb-8">
            Ready to experience true partnership in business growth?
          </p>
          <button className="bg-[#0A2640] hover:bg-[#D4AF37] text-white px-10 py-3 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-[#0A2640] hover:border-[#D4AF37]">
            Partner With Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}