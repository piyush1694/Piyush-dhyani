import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-light tracking-tight">
            <span className="font-normal">Piyush</span> Dhyani
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-gray-600 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-gray-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-gray-600 transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="hover:text-gray-600 transition-colors duration-200"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-gray-600 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Social Links & Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/piyushdhyani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/piyushdhyani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <Linkedin size={18} />
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="sm"
              className="ml-4"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-600 hover:text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4 text-sm">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left hover:text-gray-600 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-gray-600 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left hover:text-gray-600 transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left hover:text-gray-600 transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-gray-600 transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
              <a
                href="https://github.com/piyushdhyani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/piyushdhyani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;