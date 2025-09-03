'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "High-Performance Marketing",
      description: "Advanced marketing strategies designed to position your brand above the competition and consistently generate high-value clients.",
      image: "/high-performance-marketing.webp",
      delay: 0.2
    },
    {
      title: "Business Consulting",
      description: "Clear, actionable strategies that refine your operations, optimize performance, and unlock new growth opportunities.",
      image: "/business-consulting.webp",
      delay: 0.4
    },
    {
      title: "AI Implementation",
      description: "Cutting-edge AI tools integrated into your business to automate processes, enhance decision-making, and maximize profitability.",
      image: "/ai-implementation.webp",
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      {/* <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=entropy&auto=format"
          alt="Modern office background"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#111111]/85"></div>
      </div> */}

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/6 w-64 h-64 bg-gradient-to-r from-[#0A2640]/15 to-[#D4AF37]/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
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
            Our <span className="text-[#D4AF37]">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[#F5F5F5] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We deliver comprehensive solutions that transform your business from the ground up, 
            ensuring sustainable growth and competitive advantage.
          </motion.p>
        </motion.div>

        {/* Full-Width Service Cards */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: service.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`relative overflow-hidden rounded-2xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}>
                
                {/* Image Section */}
                <div className="lg:w-1/2 relative h-64 lg:h-96 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/60 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex flex-col justify-center">
                  <motion.h3
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {service.title}
                  </motion.h3>

                  <p className="text-[#F5F5F5] text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center text-[#0A2640] hover:text-[#D4AF37] font-semibold text-lg transition-colors duration-300 cursor-pointer"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-[#F5F5F5] text-xl mb-8">
            Ready to transform your business with our comprehensive solutions?
          </p>
          <button className="bg-[#0A2640] hover:bg-[#D4AF37] text-white px-10 py-3 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-[#0A2640] hover:border-[#D4AF37]">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}