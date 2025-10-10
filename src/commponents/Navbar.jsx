import ShinyText from '../components/ShinyText';
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
              <div className="backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30" style={{ width: '2em', height: '2em', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <img src="../../public/relogo.png" alt="" className="scale-200 rounded-2xl"/>
              </div>
              <h1 className="font-bold text-white whitespace-nowrap" style={{ fontSize: '1.125em' }}>Aiadonix Digital</h1>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-6 xl:space-x-8">
                <a
                  href="#home"
                  className="text-white hover:text-white/80 rounded-md font-medium transition-colors"
                  style={{ padding: '0.5em 0.75em', fontSize: '0.875em' }}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-white/80 rounded-md font-medium transition-colors"
                  style={{ padding: '0.5em 0.75em', fontSize: '0.875em' }}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-white/80 rounded-md font-medium transition-colors"
                  style={{ padding: '0.5em 0.75em', fontSize: '0.875em' }}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-white/80 rounded-md font-medium transition-colors"
                  style={{ padding: '0.5em 0.75em', fontSize: '0.875em' }}
                >
                  Contact
                </a>
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <button className=" hover:bg-white/30 text-white rounded-lg font-medium transition-all backdrop-blur-sm border border-white/30" style={{ padding: '0.5em 1em', fontSize: '0.875em' }}>
                <ShinyText 
  text="get started" 
  disabled={false} 
  speed={3} 
  className='custom-class' 
/>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:bg-white/10 rounded-lg transition-colors"
                style={{ padding: '0.5em' }}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.5em', height: '1.5em' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.5em', height: '1.5em' }}>
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
              className="block text-white hover:bg-white/10 rounded-md font-medium transition-colors"
              style={{ padding: '0.5em 0.75em', fontSize: '1em' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-white hover:bg-white/10 rounded-md font-medium transition-colors"
              style={{ padding: '0.5em 0.75em', fontSize: '1em' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block text-white hover:bg-white/10 rounded-md font-medium transition-colors"
              style={{ padding: '0.5em 0.75em', fontSize: '1em' }}
              onClick={() => setMobileMenuOpen(true)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block text-white hover:bg-white/10 rounded-md font-medium transition-colors"
              style={{ padding: '0.5em 0.75em', fontSize: '1em' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button className=' text-white rounded-lg font-medium transition-all backdrop-blur-sm border border-white/30 translate-x-[35vw]' >
           <ShinyText 
  text="get started" 
  disabled={false} 
  speed={3} 
  className='custom-class' 
/>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

