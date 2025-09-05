import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Valen & Partners",
    "description": "Premium consulting, marketing, and AI implementation firm helping ambitious companies scale without limits.",
    "url": "https://valenpartners.com",
    "logo": "https://valenpartners.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@valenpartners.com",
      "contactType": "customer service"
    },
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "foundingDate": "2024",
    "slogan": "Scaling isn't a service. It's a partnership.",
    "services": [
      {
        "@type": "Service",
        "name": "High-Performance Marketing",
        "description": "Advanced marketing strategies designed to position your brand above the competition and consistently generate high-value clients."
      },
      {
        "@type": "Service", 
        "name": "Business Consulting",
        "description": "Clear, actionable strategies that refine your operations, optimize performance, and unlock new growth opportunities."
      },
      {
        "@type": "Service",
        "name": "AI Implementation", 
        "description": "Cutting-edge AI tools integrated into your business to automate processes, enhance decision-making, and maximize profitability."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[#111111]">
        <Navbar />
        <main>
          <Hero />
          <Services />

          {/* Case Studies & Results Section */}
          <section id="case-studies" className="relative py-20 bg-[#111111]">
            <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Case Studies <span className="text-[#D4AF37]">& Results</span>
                </h2>
                <p className="text-[#F5F5F5] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                  A snapshot of outcomes delivered through data-driven strategy, efficient execution, and repeatable systems.
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* $10M+ Generated */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10 overflow-hidden group">
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                    <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    <span className="text-[#D4AF37]">$10M+</span> Generated for Our Clients
                  </h3>
                  <p className="text-[#F5F5F5] leading-relaxed">
                    We’ve helped our clients generate over $10 million in revenue through data-driven strategies, creative campaigns, and proven marketing systems that consistently deliver results.
                  </p>
                </div>

                {/* 80% Profit Margins */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10 overflow-hidden group">
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                    <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    <span className="text-[#D4AF37]">80%</span> Profit Margins
                  </h3>
                  <p className="text-[#F5F5F5] leading-relaxed">
                    Our approach focuses on efficiency and scalability. By cutting unnecessary costs and maximizing ROI, we help businesses reach profit margins of up to 80% without sacrificing growth.
                  </p>
                </div>

                {/* 15+ SOPs & Playbooks */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10 overflow-hidden group">
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                    <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    <span className="text-[#D4AF37]">15+</span> SOPs & Playbooks
                  </h3>
                  <p className="text-[#F5F5F5] leading-relaxed">
                    From lead generation to client retention, we’ve built a library of 15+ Standard Operating Procedures and Playbooks. These proven frameworks ensure repeatable success and allow businesses to scale with confidence.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-20">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-10 rounded-3xl border-2 border-[#D4AF37]/40 shadow-2xl max-w-2xl mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Ready to turn strategy into <span className="text-[#D4AF37]">measurable outcomes</span>?
                  </h3>
                  <p className="text-[#F5F5F5] text-lg mb-8 leading-relaxed">
                    Let’s build a plan tailored to your growth targets and implement the systems to hit them sooner.
                  </p>
                  <button className="bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/90 hover:from-[#0A2640] hover:to-[#0A2640]/90 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#0A2640]/25 border-2 border-[#D4AF37] hover:border-[#0A2640] min-w-[300px]">
                    Book Your Consultation
                  </button>
                </div>
              </div>
            </div>
          </section>

          <About />
        </main>
        <Footer />
      </div>
    </>
  );
}