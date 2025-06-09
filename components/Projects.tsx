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
    <section id="projects" className="py-12 sm:py-20 relative">
      <div className={LAYOUT.container}>
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className={`${TYPOGRAPHY.heading.primary} mb-4 sm:mb-6`}>
            <span className="neon-text">My</span>{' '}
            <span className={GRADIENTS.text.primary}>
              Projects
            </span>
          </h2>
          <p className={`${TYPOGRAPHY.body.primary} max-w-2xl mx-auto px-4`}>
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
        <div className={LAYOUT.grid.projects}>
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
        <div className="text-center mt-8 sm:mt-12">
          <button className="cyber-button px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-rajdhani font-bold text-base sm:text-lg">
            Explore More Missions
          </button>
        </div>
      </div>
    </section>
  );
}