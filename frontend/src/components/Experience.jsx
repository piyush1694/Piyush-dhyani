import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { experience } from '../mock';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate experience items one by one
          [...experience, { id: 'education' }].forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-white via-blue-50 to-slate-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-500/5 rounded-full animate-pulse" />
        <div className="absolute bottom-40 right-20 w-56 h-56 bg-blue-500/5 rotate-45 animate-spin-slow" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="animate-slide-down">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 rounded-full px-6 py-3 mb-6 font-semibold shadow-sm">
              <Briefcase className="w-5 h-5 mr-2" />
              Professional Journey
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-emerald-700 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-sm animate-fade-in animation-delay-400">
            My professional journey in web development, working with talented teams 
            to create meaningful digital solutions and grow as a developer.
          </p>
        </div>

        {/* Enhanced Experience Timeline */}
        <div ref={experienceRef} className="space-y-8 relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-amber-500 opacity-30"></div>

          {experience.map((exp, index) => (
            <div key={exp.id} className={`relative ${visibleItems.includes(index) ? 'animate-slide-right' : 'opacity-0'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg z-10">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              <Card className="ml-12 md:ml-20 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-2xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    
                    {/* Duration with Enhanced Styling */}
                    <div className="md:col-span-1">
                      <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold mb-3 shadow-sm border border-blue-200">
                        <Calendar size={14} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
                    </div>

                    {/* Job Details with Enhanced Styling */}
                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2 hover:text-blue-700 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      
                      <div className="flex items-center text-emerald-600 font-semibold mb-4 text-lg">
                        <Award className="w-5 h-5 mr-2" />
                        {exp.company}
                      </div>

                      <p className="text-slate-600 leading-relaxed font-medium bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-xl border border-slate-200">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Education Section */}
        <div className={`mt-20 ${visibleItems.includes(experience.length) ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-emerald-100 text-amber-700 rounded-full px-6 py-3 mb-4 font-semibold shadow-sm">
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </div>
            <h3 className="text-3xl font-bold text-slate-800 tracking-tight">
              Academic Foundation
            </h3>
          </div>
          
          <Card className="bg-gradient-to-br from-white via-blue-50 to-emerald-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
            <CardContent className="p-10 text-center relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-20 h-20 border-2 border-blue-500 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-emerald-500 rotate-45"></div>
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                
                <h4 className="text-2xl font-bold text-slate-800 mb-3">
                  Bachelor of Technology
                </h4>
                <div className="text-xl text-blue-700 font-bold mb-4">
                  Massachusetts Institute of Technology (MIT)
                </div>
                <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-slate-600 rounded-full px-6 py-3 text-sm font-semibold shadow-sm border border-slate-200">
                  <Calendar size={14} className="mr-2" />
                  2020 - 2024
                </div>

                <div className="mt-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100">
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Focused on Computer Science and Engineering with specialization in Web Technologies, 
                    Software Development, and Modern Programming Paradigms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Progress Section */}
        <div className="mt-20 animate-fade-in animation-delay-1000">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Professional Growth</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Continuous learning and skill development throughout my career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl">2+</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Years Experience</h4>
                <p className="text-slate-600 text-sm">Professional web development</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl">25+</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Projects Completed</h4>
                <p className="text-slate-600 text-sm">From concept to deployment</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl">15+</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Technologies</h4>
                <p className="text-slate-600 text-sm">Modern web technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;