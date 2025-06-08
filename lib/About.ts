import { Briefcase, GraduationCap, Award, Rocket } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: typeof Briefcase;
}

export const skills: Skill[] = [
  { name: 'React/Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'Python', level: 85, category: 'Backend' },
  { name: 'AWS/Cloud', level: 82, category: 'DevOps' },
  { name: 'GraphQL', level: 80, category: 'Backend' },
  { name: 'Blockchain', level: 75, category: 'Web3' },
  { name: 'Machine Learning', level: 70, category: 'AI' }
];

export const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'Quantum Tech Solutions',
    description: 'Leading development of next-gen web applications with AI integration.',
    icon: Briefcase
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'Digital Cosmos Inc',
    description: 'Built scalable web applications serving millions of users.',
    icon: Rocket
  },
  {
    year: '2021',
    title: 'Frontend Developer',
    company: 'Stellar Designs',
    description: 'Specialized in creating immersive user experiences with modern frameworks.',
    icon: Award
  },
  {
    year: '2020',
    title: 'Computer Science Degree',
    company: 'Tech University',
    description: 'Graduated with honors, specializing in software engineering and AI.',
    icon: GraduationCap
  }
]; 