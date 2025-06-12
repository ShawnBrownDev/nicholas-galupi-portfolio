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
      className="holographic-panel p-1.5 group cursor-pointer relative overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Project Image */}
      <div className="relative mb-1.5 overflow-hidden rounded-lg aspect-[4/3]">
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
        <div className={`absolute inset-0 flex items-center justify-center space-x-1.5 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 bg-cyan-800 rounded-full hover:bg-cyan-500/40 transition-all duration-300"
          >
            <ExternalLink size={12} className="text-white-400" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 bg-purple-800 rounded-full hover:bg-purple-500/40 transition-all duration-300"
          >
            <Github size={12} className="text-white-600" />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div>
        <h3 className={`${TYPOGRAPHY.heading.secondary} mb-0.5 text-sm`}>
          {project.title}
        </h3>
        <p className={`${TYPOGRAPHY.body.secondary} mb-1 line-clamp-2 text-xs`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-0.5">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className={`px-1 py-0.5 text-xs font-rajdhani font-medium ${GRADIENTS.text.tech} border border-cyan-500/30 rounded-full text-cyan-400`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effects */}
      <div className={`absolute top-0 right-0 w-12 h-12 ${GRADIENTS.background.hover} rounded-bl-full transition-all duration-500 ${
        isHovered ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
      }`} />
    </div>
  );
} 