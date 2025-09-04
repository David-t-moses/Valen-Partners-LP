'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    // Update immediately
    updateYear();

    // Set up interval to check every minute
    const interval = setInterval(updateYear, 60000);

    // Also listen for when the year actually changes (New Year's)
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeUntilNewYear = nextYear.getTime() - now.getTime();

    // Set timeout for exactly when the year changes
    const yearChangeTimeout = setTimeout(() => {
      updateYear();
      // Then set up annual intervals
      const annualInterval = setInterval(updateYear, 365 * 24 * 60 * 60 * 1000);
      return () => clearInterval(annualInterval);
    }, timeUntilNewYear);

    return () => {
      clearInterval(interval);
      clearTimeout(yearChangeTimeout);
    };
  }, []);
  return (
    <footer id='footer' className="bg-[#0d0d0d] border-t border-gray-800 py-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#D4AF37]/5 to-[#0A2640]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="mb-4">
              <Image
                src="/logo-light.png"
                alt="Valen & Partners"
                width={180}
                height={40}
                className="h-10 w-auto mx-auto lg:mx-0"
              />
            </div>
            <p className="text-[#D4AF37] text-sm font-medium tracking-wide uppercase">
              Scaling isn't a service. It's a partnership.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <a
                href="mailto:info@valen-partners.com"
                className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-300 block"
              >
                info@valen-partners.com
              </a>
              <p className="text-[#F5F5F5] text-sm">
                Ready to scale without limits?
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center lg:text-right"
          >
            <div className="space-y-3">
              <a
                href="#services"
                className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-300 block"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-300 block"
              >
                About
              </a>
              <button className="bg-[#0A2640]/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[#0A2640]/25 border-2 border-[#D4AF37] hover:border-[#0A2640] min-w-[220px]">
                Book Consultation
                <span className="ml-2 text-xl">📞</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-[#F5F5F5]/70 text-sm">
            © {currentYear} Valen & Partners. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}