'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#111111]/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="block focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-md"
              aria-label="Valen & Partners - Home"
            >
              <Image
                src="/logo-light.png"
                alt="Valen & Partners"
                width={160}
                height={36}
                className="h-8 w-auto"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <a
                href="#services"
                className="text-[#F5F5F5] hover:text-[#D4AF37] focus:text-[#D4AF37] px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-[#F5F5F5] hover:text-[#D4AF37] focus:text-[#D4AF37] px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                About
              </a>
              <a
                href="#footer"
                className="text-[#F5F5F5] hover:text-[#D4AF37] focus:text-[#D4AF37] px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                Contact
              </a>
              <div className="ml-4">
                <button className="relative bg-[#0A2640] hover:bg-[#D4AF37] text-white px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-[#0A2640] hover:border-[#D4AF37] overflow-hidden group">
                  {/* Infinite Shimmer Effect */}
                  <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                  <span className="relative z-10">Book Your Consultation</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-md text-[#F5F5F5] hover:text-[#D4AF37] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D4AF37] transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform duration-200`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform duration-200`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-50">
            <div className="bg-[#111111]/95 backdrop-blur-md border-b border-gray-700/50 shadow-xl">
              <div className="px-4 py-4 space-y-2">
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="text-[#F5F5F5] hover:text-[#D4AF37] hover:bg-white/10 block px-4 py-3 rounded-md text-base font-medium transition-all duration-200"
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="text-[#F5F5F5] hover:text-[#D4AF37] hover:bg-white/10 block px-4 py-3 rounded-md text-base font-medium transition-all duration-200"
                >
                  About
                </a>
                <a
                  href="#footer"
                  onClick={closeMenu}
                  className="text-[#F5F5F5] hover:text-[#D4AF37] hover:bg-white/10 block px-4 py-3 rounded-md text-base font-medium transition-all duration-200"
                >
                  Contact
                </a>
                <div className="pt-2">
                  <button 
                    onClick={closeMenu}
                    className="relative w-full bg-[#0A2640] hover:bg-[#D4AF37] text-white px-4 py-3 rounded-md text-base font-semibold transition-all duration-300 border border-[#0A2640] hover:border-[#D4AF37] overflow-hidden group"
                  >
                    {/* Infinite Shimmer Effect */}
                    <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    <span className="relative z-10">Book Your Consultation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}