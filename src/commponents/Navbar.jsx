import React, { useState } from 'react';
import { Menu, X, Home, Info, Briefcase, Mail } from 'lucide-react';

export default function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-grey-400">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">GlassUI</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                  <Home size={18} />
                  <span>Home</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                  <Info size={18} />
                  <span>About</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                  <Briefcase size={18} />
                  <span>Services</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                  <Mail size={18} />
                  <span>Contact</span>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden backdrop-blur-md bg-white/10 border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                <Home size={18} />
                <span>Home</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                <Info size={18} />
                <span>About</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                <Briefcase size={18} />
                <span>Services</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                <Mail size={18} />
                <span>Contact</span>
              </a>
              <button className="w-full mt-2 px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

    </div>
  );
}