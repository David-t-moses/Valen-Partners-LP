'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      className="bg-[#111111] h-screen flex items-center justify-center relative overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated Background Decorations */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
              {/* Enhanced Gold Light in the Middle */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-[#D4AF37]/35 to-[#0A2640]/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        

        {/* Subtle Secondary Glow */}
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-[#0A2640]/20 to-[#D4AF37]/20 rounded-full blur-2xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Motto */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden sm:block text-[#D4AF37] text-lg font-medium tracking-wide uppercase"
          >
            Scaling isn't a service. It's a partnership.
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            The Advisory Behind the Most{' '}
            <span className="text-[#D4AF37]">Ambitious Modern</span>{' '}
            Businesses.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[#F5F5F5] text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
          >
            We help elite companies scale beyond limits, stay efficient, and build growth engines, 
            by implementing the exact strategies, AI-driven systems, and tools that have transformed 
            brands into market leaders.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-8"
          >
            <button className="bg-[#0A2640] hover:bg-[#0A2640]/90 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Book Your Consultation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}