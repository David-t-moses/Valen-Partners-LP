'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "High-Performance Marketing",
      description:
        "Advanced marketing strategies designed to position your brand above the competition and consistently generate high-value clients.",
      icon: "/marketing.png", // replace with your local path
      delay: 0.2,
    },
    {
      title: "Business Consulting",
      description:
        "Clear, actionable strategies that refine your operations, optimize performance, and unlock new growth opportunities.",
      icon: "/business.png", // replace with your local path
      delay: 0.4,
    },
    {
      title: "AI Implementation",
      description:
        "Cutting-edge AI tools integrated into your business to automate processes, enhance decision-making, and maximize profitability.",
      icon: "/ai.png", // replace with your local path
      delay: 0.6,
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#D4AF37]">Services</span>
          </h2>
          <p className="text-[#F5F5F5] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive solutions that transform your business 
            from the ground up, ensuring sustainable growth and competitive advantage.
          </p>
        </motion.div>

        {/* Service Cards - 2 on top row, 1 centered on bottom */}
        <div className="space-y-8">
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] 
                           border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 
                           hover:shadow-2xl hover:shadow-[#D4AF37]/10 group overflow-hidden"
              >
                {/* Animated Dots Background - Like Toad Eggs */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#D4AF37]/20 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0.5, 1.2, 0.5],
                        opacity: [0.1, 0.4, 0.1],
                        y: [-5, 5, -5],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Content - Centered */}
                <div className="relative z-10 text-center">
                  {/* Local Icon */}
                  <div className="mb-6 flex justify-center">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#F5F5F5] text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 1 Centered Card */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: services[2].delay }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] 
                           border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 
                           hover:shadow-2xl hover:shadow-[#D4AF37]/10 group overflow-hidden"
              >
                {/* Animated Dots Background - Like Toad Eggs */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#D4AF37]/20 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0.5, 1.2, 0.5],
                        opacity: [0.1, 0.4, 0.1],
                        y: [-5, 5, -5],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Content - Centered */}
                <div className="relative z-10 text-center">
                  {/* Local Icon */}
                  <div className="mb-6 flex justify-center">
                    <Image
                      src={services[2].icon}
                      alt={`${services[2].title} icon`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {services[2].title}
                  </h3>
                  <p className="text-[#F5F5F5] text-base leading-relaxed">
                    {services[2].description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-10 rounded-3xl border-2 border-[#D4AF37]/40 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to <span className="text-[#D4AF37]">Scale Beyond Limits</span>?
            </h3>
            <p className="text-[#F5F5F5] text-lg mb-8 leading-relaxed">
              Transform your business with our comprehensive solutions and proven strategies that deliver results.
            </p>
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/90 hover:from-[#0A2640] hover:to-[#0A2640]/90 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#0A2640]/25 border-2 border-[#D4AF37] hover:border-[#0A2640] min-w-[300px]">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
