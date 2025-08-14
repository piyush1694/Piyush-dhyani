import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Download, Code, Sparkles } from 'lucide-react';
import { personalInfo } from '../mock';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const fullName = personalInfo.name;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullName.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, fullName]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 flex items-center justify-center relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-blue-600/10 rounded-full animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute top-40 right-20 w-16 h-16 bg-emerald-500/10 rotate-45 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute bottom-40 left-20 w-12 h-12 bg-amber-500/10 rounded-full animate-float"
          style={{ animationDelay: '4s' }}
        />
        <div 
          className="absolute top-60 right-40 w-24 h-24 bg-blue-700/5 rotate-12 animate-float"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q250,50 500,100 T1000,100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Greeting */}
        <div className="animate-slide-down">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 py-2 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500 mr-2 animate-pulse" />
            <span className="text-blue-700 text-sm font-medium">Hello, I'm</span>
          </div>
        </div>

        {/* Animated Name with Typing Effect */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight leading-none">
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">
              {displayText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </h1>
        </div>

        {/* Title & College with Enhanced Animation */}
        <div className="mb-8 animate-slide-up animation-delay-800">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full px-6 py-3 mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Code className="w-5 h-5 mr-2" />
            <h2 className="text-xl font-semibold">
              {personalInfo.title}
            </h2>
          </div>
          <p className="text-lg text-slate-600 font-medium">
            Graduate from <span className="text-blue-700 font-semibold">{personalInfo.college}</span>
          </p>
        </div>

        {/* Bio with Staggered Animation */}
        <div className="animate-fade-in animation-delay-1000">
          <p className="text-slate-600 max-w-3xl mx-auto mb-10 text-lg leading-relaxed font-medium bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-blue-100">
            {personalInfo.bio}
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in animation-delay-1200">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg px-8 py-4 text-lg font-semibold rounded-full border-0 shadow-md"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg px-8 py-4 text-lg font-semibold rounded-full"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="animate-bounce-slow">
          <div className="inline-flex flex-col items-center cursor-pointer group" onClick={scrollToProjects}>
            <span className="text-slate-500 text-sm mb-2 group-hover:text-blue-600 transition-colors duration-300">Scroll to explore</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
              <ArrowDown size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;