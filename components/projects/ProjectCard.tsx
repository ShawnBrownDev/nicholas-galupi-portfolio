import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function ProjectCard({ project, isHovered, onMouseEnter, onMouseLeave }: ProjectCardProps) {
  return (
    <div
      className="holographic-panel p-6 group cursor-pointer relative overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
          isHovered ? 'opacity-100' : 'opacity-0'
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
        <h3 className="font-orbitron text-xl font-bold mb-3">
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
        isHovered ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
      }`} />
    </div>
  );
} 