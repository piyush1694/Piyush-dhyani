import React from 'react';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';
import { testimonials } from '../mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
            Kind Words
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            What colleagues, clients, and mentors have said about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="bg-white border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote size={24} className="text-gray-300" />
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-600 leading-relaxed font-light mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover filter grayscale"
                    />
                  </div>
                  
                  <div>
                    <div className="font-light text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 font-light">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;