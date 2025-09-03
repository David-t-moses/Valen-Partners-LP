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
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
}