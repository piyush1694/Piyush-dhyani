import React from 'react';
import { Github, Linkedin, Twitter, Heart, Zap, Coffee, Code } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white py-16 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-500/10 rotate-45 animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Enhanced Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div 
                className="text-3xl font-bold tracking-tight cursor-pointer hover:scale-105 transition-transform duration-300 mb-4"
                onClick={scrollToTop}
              >
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Piyush
                </span>{' '}
                <span className="text-white">Dhyani</span>
              </div>
              <div className="flex items-center mb-4">
                <Code className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-100 font-semibold">Full-Stack Web Developer</span>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed font-medium mb-6 text-lg">
              Crafting digital experiences with passion and precision. 
              Turning ideas into beautiful, functional web applications that users love.
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-blue-400 mb-1">25+</div>
                <div className="text-xs text-gray-300">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-emerald-400 mb-1">2+</div>
                <div className="text-xs text-gray-300">Years</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-amber-400 mb-1">10+</div>
                <div className="text-xs text-gray-300">Clients</div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <Zap className="w-5 h-5 text-amber-400 mr-2" />
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { id: 'home', name: 'Home' },
                { id: 'about', name: 'About' },
                { id: 'projects', name: 'Projects' },
                { id: 'experience', name: 'Experience' },
                { id: 'contact', name: 'Contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium py-2 px-3 rounded-lg hover:translate-x-2"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Enhanced Contact & Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <Heart className="w-5 h-5 text-red-400 mr-2" />
              Let's Connect
            </h4>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-sm text-gray-400 mb-1">Email</div>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-300 hover:text-blue-200 transition-colors duration-200 font-medium"
                >
                  {personalInfo.email}
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-sm text-gray-400 mb-1">Phone</div>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-emerald-300 hover:text-emerald-200 transition-colors duration-200 font-medium"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-4 hover:from-blue-500 hover:to-emerald-500 transition-all duration-300 hover:scale-105 cursor-pointer"
                   onClick={() => scrollToSection('contact')}>
                <div className="text-center">
                  <div className="font-bold text-white mb-1">Ready to Start?</div>
                  <div className="text-blue-100 text-sm">Let's build something amazing!</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center mb-4 md:mb-0 text-gray-300">
              <span>© {currentYear} Piyush Dhyani. Made with </span>
              <Heart size={14} className="mx-2 text-red-400 fill-current animate-pulse" />
              <Coffee size={14} className="mx-1 text-amber-400" />
              <span> and lots of coffee in India</span>
            </div>
            <div className="flex items-center text-center md:text-right text-gray-400">
              <Code size={14} className="mr-2 text-blue-400" />
              <span>Designed & Developed by Piyush Dhyani</span>
            </div>
          </div>

          {/* Fun Quote */}
          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 italic">
              "Code is poetry written in logic. Let's create beautiful verses together!" ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;