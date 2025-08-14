import React from 'react';
import { Card, CardContent } from './ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { experience } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            My professional journey in web development, working with talented teams 
            to create meaningful digital solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card key={exp.id} className="border-0 bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  
                  {/* Duration */}
                  <div className="md:col-span-1">
                    <div className="flex items-center text-gray-500 text-sm font-light mb-2">
                      <Calendar size={14} className="mr-2" />
                      {exp.duration}
                    </div>
                    <div className="w-12 h-px bg-gray-300"></div>
                  </div>

                  {/* Job Details */}
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-light text-black mb-1">
                      {exp.position}
                    </h3>
                    
                    <div className="text-gray-600 font-light mb-4">
                      {exp.company}
                    </div>

                    <p className="text-gray-600 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-light mb-8 text-center tracking-tight">
            Education
          </h3>
          
          <Card className="border-0 bg-gray-50">
            <CardContent className="p-8 text-center">
              <h4 className="text-xl font-light text-black mb-2">
                Bachelor of Technology
              </h4>
              <div className="text-gray-600 font-light mb-2">
                Massachusetts Institute of Technology (MIT)
              </div>
              <div className="flex items-center justify-center text-gray-500 text-sm font-light">
                <Calendar size={14} className="mr-2" />
                2020 - 2024
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;