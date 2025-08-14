import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Github, Star, Zap, Rocket } from 'lucide-react';
import { projects } from '../mock';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate projects one by one
          setTimeout(() => {
            filteredProjects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects(prev => [...prev, index]);
              }, index * 200);
            });
          }, 300);
        }
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, [filteredProjects]);

  // Reset animations when filter changes
  useEffect(() => {
    setVisibleProjects([]);
    setTimeout(() => {
      filteredProjects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects(prev => [...prev, index]);
        }, index * 100);
      });
    }, 100);
  }, [filter]);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-0 w-72 h-72 bg-blue-500/5 rounded-full animate-pulse" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-emerald-500/5 rounded-full animate-pulse animation-delay-2000" />
        <div className="absolute top-20 right-1/4 w-48 h-48 bg-amber-500/5 rotate-45 animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="animate-slide-down">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 rounded-full px-6 py-3 mb-6 font-semibold shadow-sm">
              <Rocket className="w-5 h-5 mr-2" />
              Portfolio Showcase
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Selected Work
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm animate-fade-in animation-delay-400">
            A collection of projects that showcase my skills in modern web development, 
            from concept to deployment. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex justify-center mb-12 animate-slide-up animation-delay-600">
          <div className="flex space-x-2 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-blue-100">
            <Button
              variant={filter === 'all' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setFilter('all')}
              className={`
                ${filter === 'all' 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
                }
                transition-all duration-300 rounded-xl px-6 py-3 font-semibold
              `}
            >
              <Zap className="w-4 h-4 mr-2" />
              All Projects
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'ghost'}
              size="sm" 
              onClick={() => setFilter('featured')}
              className={`
                ${filter === 'featured' 
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
                }
                transition-all duration-300 rounded-xl px-6 py-3 font-semibold
              `}
            >
              <Star className="w-4 h-4 mr-2" />
              Featured
            </Button>
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`
                group bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 
                hover:-translate-y-4 overflow-hidden rounded-2xl
                ${visibleProjects.includes(index) ? 'animate-slide-up-bounce' : 'opacity-0 translate-y-8'}
              `}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Project Links Overlay */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                      <Star size={10} className="mr-1 fill-current" />
                      Featured
                    </div>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {project.description}
                </p>

                {/* Enhanced Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 px-3 py-1 rounded-full font-semibold border border-blue-200/50 hover:from-blue-500 hover:to-emerald-500 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-500 text-blue-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-lg px-8 py-4 text-lg font-semibold rounded-full"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;