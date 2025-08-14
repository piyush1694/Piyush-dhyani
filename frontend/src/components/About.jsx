import React from 'react';
import { Card, CardContent } from './ui/card';
import { personalInfo, skills, stats } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - About Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
              About Me
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed font-light">
              <p className="text-lg">
                I'm a passionate web developer with a love for creating digital experiences 
                that make a difference. My journey began at {personalInfo.college}, where I 
                discovered the perfect blend of creativity and logic that web development offers.
              </p>
              
              <p>
                With expertise in modern technologies like React, Node.js, and Python, I focus 
                on building scalable, user-friendly applications. I believe in writing clean, 
                maintainable code and creating interfaces that users genuinely enjoy interacting with.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community. I'm 
                always excited about the next challenge and the opportunity to learn something new.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-light text-black mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills & Image */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gray-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Piyush Dhyani"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Skills */}
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-light mb-6 text-center">
                  Technologies & Skills
                </h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-white text-gray-700 px-3 py-2 rounded-full text-sm font-light border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;