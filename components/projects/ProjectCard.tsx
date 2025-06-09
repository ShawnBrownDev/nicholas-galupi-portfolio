import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/lib/projects';
import { GRADIENTS, TYPOGRAPHY } from '@/lib/constants';

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function ProjectCard({ project, isHovered, onMouseEnter, onMouseLeave }: ProjectCardProps) {
  return (
    <div
      className="holographic-panel p-4 sm:p-6 group cursor-pointer relative overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Project Image */}
      <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={project.id <= 3}
        />
        <div className={`absolute inset-0 ${GRADIENTS.background.overlay}`} />
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 bg-cyan-800 rounded-full hover:bg-cyan-500/40 transition-all duration-300"
          >
            <ExternalLink size={18} className="text-white-400" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 bg-purple-800 rounded-full hover:bg-purple-500/40 transition-all duration-300"
          >
            <Github size={18} className="text-white-600" />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div>
        <h3 className={`${TYPOGRAPHY.heading.secondary} mb-2 sm:mb-3 text-lg sm:text-xl`}>
          {project.title}
        </h3>
        <p className={`${TYPOGRAPHY.body.secondary} mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 text-sm sm:text-base`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-rajdhani font-medium ${GRADIENTS.text.tech} border border-cyan-500/30 rounded-full text-cyan-400`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effects */}
      <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 ${GRADIENTS.background.hover} rounded-bl-full transition-all duration-500 ${
        isHovered ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
      }`} />
    </div>
  );
} 