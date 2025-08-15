import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle, Award, Users, Coffee } from 'lucide-react';
import { personalInfo, skills, stats } from '../mock';

const About = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills one by one
          skills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSkills(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-emerald-500/5 rotate-45 animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - About Content */}
          <div className="space-y-8">
            <div className="animate-slide-right">
              <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4 font-medium">
                <Award className="w-4 h-4 mr-2" />
                About Me
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">
                Crafting Digital Experiences
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-600 leading-relaxed animate-slide-right animation-delay-200">
              <p className="text-lg font-medium bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100 shadow-sm">
                I'm a passionate web developer with a love for creating digital experiences 
                that make a difference. My journey began at <span className="text-blue-700 font-semibold">{personalInfo.college}</span>, where I 
                discovered the perfect blend of creativity and logic that web development offers.
              </p>
              
              <p className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-emerald-100">
                With expertise in modern technologies like React, Node.js, and Python, I focus 
                on building scalable, user-friendly applications. I believe in writing clean, 
                maintainable code and creating interfaces that users genuinely enjoy interacting with.
              </p>
              
              <p className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-amber-100">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community. I'm 
                always excited about the next challenge and the opportunity to learn something new.
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-slide-right animation-delay-400">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-default">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-blue-700 mb-1 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills & Image */}
          <div className="space-y-8">
            {/* Profile Image with Enhanced Animation */}
            <div className="relative animate-slide-left">
              <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-blue-100 to-emerald-100 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative group">
                <img
                  src="/profile-photo.jpg"
                  alt="Piyush Dhyani"
                  className="w-full h-full object-cover filter hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Enhanced Skills Section */}
            <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-left animation-delay-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Technologies & Skills
                  </h3>
                </div>
                
                <div ref={skillsRef} className="flex flex-wrap gap-3 justify-start">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`
                        bg-gradient-to-r from-white to-blue-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border-2 border-blue-200 shadow-sm
                        hover:from-blue-500 hover:to-emerald-500 hover:text-white hover:border-transparent hover:shadow-lg hover:scale-105
                        transition-all duration-300 cursor-default transform
                        ${visibleSkills.includes(index) ? 'animate-bounce-in' : 'opacity-0 scale-0'}
                      `}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <div className="grid grid-cols-3 gap-4 animate-slide-left animation-delay-400">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Coffee className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-amber-600">500+</div>
                <div className="text-xs text-slate-600">Cups of Coffee</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-emerald-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Users className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-emerald-600">50+</div>
                <div className="text-xs text-slate-600">Collaborations</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Award className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-blue-600">15+</div>
                <div className="text-xs text-slate-600">Achievements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;