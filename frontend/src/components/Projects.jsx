import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '../mock';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
            Selected Work
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in modern web development, 
            from concept to deployment.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-sm">
            <Button
              variant={filter === 'all' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-black text-white' : 'text-gray-600'}
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'ghost'}
              size="sm" 
              onClick={() => setFilter('featured')}
              className={filter === 'featured' ? 'bg-black text-white' : 'text-gray-600'}
            >
              <Star size={14} className="mr-1" />
              Featured
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white border-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <div className="bg-black text-white px-2 py-1 rounded-full text-xs font-light flex items-center">
                      <Star size={10} className="mr-1 fill-current" />
                      Featured
                    </div>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-light mb-2 group-hover:text-gray-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 hover:bg-gray-100 transition-all duration-300 px-8 py-3"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;