import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <div className="text-xl font-light tracking-tight mb-4 cursor-pointer" onClick={scrollToTop}>
              <span className="font-normal">Piyush</span> Dhyani
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Web Developer crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-200 font-light"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-200 font-light"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-200 font-light"
              >
                Experience
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-200 font-light"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-light mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm font-light">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-light">
            <div className="flex items-center mb-4 md:mb-0">
              <span>© {currentYear} Piyush Dhyani. Made with </span>
              <Heart size={14} className="mx-1 text-red-500 fill-current" />
              <span>and lots of coffee.</span>
            </div>
            <div className="text-center md:text-right">
              <p>Designed & Developed by Piyush Dhyani</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;