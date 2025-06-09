'use client';

import { useState } from 'react';
import { Project, projects, categories } from '@/lib/projects';
import { ProjectCard } from './projects/ProjectCard';
import { CategoryFilter } from './projects/CategoryFilter';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            />
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