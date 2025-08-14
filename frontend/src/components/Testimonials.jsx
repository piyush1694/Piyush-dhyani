import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Quote, Star, Heart, ThumbsUp } from 'lucide-react';
import { testimonials } from '../mock';

const Testimonials = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          testimonials.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-0 w-64 h-64 bg-emerald-500/5 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-0 w-80 h-80 bg-blue-500/5 rotate-12 animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/3 rounded-full animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="animate-slide-down">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-100 via-emerald-100 to-blue-100 text-amber-700 rounded-full px-6 py-3 mb-6 font-semibold shadow-sm">
              <Heart className="w-5 h-5 mr-2" />
              Client Testimonials
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-amber-600 via-emerald-600 to-blue-700 bg-clip-text text-transparent">
              Kind Words
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm animate-fade-in animation-delay-400">
            What colleagues, clients, and mentors have said about working with me. 
            These testimonials reflect the collaborative spirit and quality I bring to every project.
          </p>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`
                bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 
                hover:-translate-y-6 hover:scale-105 rounded-2xl overflow-hidden group
                ${visibleItems.includes(index) ? 'animate-slide-up-bounce' : 'opacity-0 scale-95'}
              `}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <CardContent className="p-8 relative">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-full transform translate-x-8 -translate-y-8"></div>
                
                {/* Quote Icon with Enhanced Design */}
                <div className="mb-6 relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Quote size={20} className="text-white" />
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className="text-amber-400 fill-current animate-pulse" 
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Content with Enhanced Typography */}
                <blockquote className="text-slate-600 leading-relaxed font-medium mb-8 text-base italic relative">
                  <span className="text-4xl text-blue-200 absolute -top-2 -left-2 font-serif">"</span>
                  {testimonial.content}
                  <span className="text-4xl text-blue-200 absolute -bottom-4 -right-2 font-serif">"</span>
                </blockquote>

                {/* Author Info with Enhanced Layout */}
                <div className="flex items-center group-hover:transform group-hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4 shadow-lg ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
                      <ThumbsUp size={10} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-bold text-slate-800 text-lg group-hover:text-blue-700 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500 font-medium leading-tight">
                      {testimonial.position}
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Want to Work Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join these amazing clients and let's create something extraordinary together. 
              I'm always excited to take on new challenges and deliver exceptional results.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5 inline mr-2" />
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;