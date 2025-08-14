import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Download } from 'lucide-react';
import { personalInfo } from '../mock';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Abstract Graphic */}
        <div 
          className="absolute top-1/4 right-1/4 w-32 h-32 opacity-10 pointer-events-none"
          style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Greeting */}
          <p className="text-gray-600 text-lg mb-4 font-light tracking-wide animate-fade-in">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-6 tracking-tight leading-none animate-slide-up">
            <span className="block">{personalInfo.name.split(' ')[0]}</span>
            <span className="block text-gray-400">{personalInfo.name.split(' ')[1]}</span>
          </h1>

          {/* Title & College */}
          <div className="mb-8 animate-slide-up animation-delay-200">
            <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-2">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-500 font-light">
              Graduate from {personalInfo.college}
            </p>
          </div>

          {/* Bio */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in animation-delay-400">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in animation-delay-600">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 px-8 py-3"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105 px-8 py-3"
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown 
              size={24} 
              className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors duration-300"
              onClick={scrollToProjects}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;