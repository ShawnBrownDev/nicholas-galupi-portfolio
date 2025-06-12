'use client';

import { useState } from 'react';
import { Project, projects, categories } from '@/lib/projects';
import { ProjectCard } from './projects/ProjectCard';
import { CategoryFilter } from './projects/CategoryFilter';
import { LAYOUT, TYPOGRAPHY, GRADIENTS } from '@/lib/constants';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-8 sm:py-12 relative">
      <div className={LAYOUT.container}>
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className={`${TYPOGRAPHY.heading.primary} mb-2 sm:mb-3`}>
            <span className="neon-text">My</span>{' '}
            <span className={GRADIENTS.text.primary}>
              Projects
            </span>
          </h2>
          <p className={`${TYPOGRAPHY.body.primary} max-w-xl mx-auto px-2`}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
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
        <div className="text-center mt-4 sm:mt-6">
          <button className="cyber-button px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-rajdhani font-bold text-xs sm:text-sm">
            Explore More Missions
          </button>
        </div>
      </div>
    </section>
  );
}