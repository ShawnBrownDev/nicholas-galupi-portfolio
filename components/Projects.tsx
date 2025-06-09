'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Zap, Database, Globe } from 'lucide-react';
import { Project, projects, categories, Category } from '@/lib/projects';


export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(projects => projects.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">My</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="font-rajdhani text-xl text-white-400 max-w-2xl mx-auto">
            Explore my digital expeditions across various galaxies of technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category: Category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-rajdhani font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'cyber-button'
                    : 'border border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400'
                }`}
              >
                <Icon size={18} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="holographic-panel p-6 group cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={project.id <= 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Overlay Actions */}
                <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-800 rounded-full hover:bg-cyan-500/40 transition-all duration-300"
                  >
                    <ExternalLink size={20} className="text-white-400" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-800 rounded-full hover:bg-purple-500/40 transition-all duration-300"
                  >
                    <Github size={20} className="text-white-600" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="font-orbitron text-xl font-bold mb-3 ">
                  {project.title}
                </h3>
                <p className="font-rajdhani text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-rajdhani font-medium bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effects */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-bl-full transition-all duration-500 ${
                hoveredProject === project.id ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
              }`} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="cyber-button px-8 py-4 rounded-lg font-rajdhani font-bold text-lg">
            Explore More Missions
          </button>
        </div>
      </div>
    </section>
  );
}