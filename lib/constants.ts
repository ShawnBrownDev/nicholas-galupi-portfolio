export const ANIMATIONS = {
  hover: {
    scale: 'scale-150',
    opacity: 'opacity-100',
    transition: 'transition-all duration-500',
  },
  default: {
    scale: 'scale-0',
    opacity: 'opacity-0',
  },
} as const;

export const GRADIENTS = {
  text: {
    primary: 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent',
    tech: 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10',
  },
  background: {
    overlay: 'bg-gradient-to-t from-black/60 via-transparent to-transparent',
    hover: 'bg-gradient-to-br from-cyan-400/20 to-purple-500/20',
  },
} as const;

export const LAYOUT = {
  container: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
  grid: {
    projects: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4',
  },
} as const;

export const TYPOGRAPHY = {
  heading: {
    primary: 'font-orbitron text-3xl md:text-4xl font-bold',
    secondary: 'font-orbitron text-lg font-bold',
  },
  body: {
    primary: 'font-rajdhani text-lg text-white-400',
    secondary: 'font-rajdhani text-gray-400',
  },
} as const; 