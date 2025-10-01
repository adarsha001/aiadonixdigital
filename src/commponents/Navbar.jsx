import { useState, useEffect } from 'react';

export default function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

     <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] lg:w-4/5 z-50 transition-all duration-300 rounded-3xl ${
          scrolled
            ? 'bg-white/20 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.1)]'
            : 'bg-white/10 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.05)]'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
             
             <img src="../../public/relogo.png" alt=""  className=' scale-200 
             rounded-2xl'/>
           
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white whitespace-nowrap">Aiadonix Digital</h1>
            </div>

            {/* Desktop Navigation Links */}
          
            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-6 xl:space-x-8">
                <a
                  href="#home"
                  className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all backdrop-blur-sm border border-white/30">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 border-t border-white/20">
            <a
              href="#home"
              className="block text-white hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-white hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block text-white hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block text-white hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-base font-medium transition-all backdrop-blur-sm border border-white/30 mt-2">
              Get Started
            </button>
          </div>
        </div>
      </nav>
</>

  
  );
}