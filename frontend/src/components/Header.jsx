import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-blue-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="text-xl font-bold tracking-tight cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">
              Piyush
            </span> 
            <span className="text-slate-700">Dhyani</span>
          </div>

          {/* Desktop Navigation with Enhanced Styling */}
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative text-slate-600 hover:text-blue-700 transition-all duration-300 font-medium capitalize group"
              >
                {section}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Enhanced Social Links & Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/piyushdhyani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/piyushdhyani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Linkedin size={16} />
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-full px-6 font-semibold"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>

          {/* Enhanced Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 bg-slate-100 hover:bg-blue-500 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-6 bg-white/95 backdrop-blur-md rounded-2xl border border-blue-100 shadow-xl animate-slide-down">
            <nav className="flex flex-col space-y-4 text-sm px-6">
              {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-slate-600 hover:text-blue-700 transition-colors duration-300 font-medium capitalize py-2 border-b border-slate-100 hover:border-blue-200"
                >
                  {section}
                </button>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-slate-200">
              <a
                href="https://github.com/piyushdhyani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-blue-500 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/piyushdhyani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-blue-500 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;