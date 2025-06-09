'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Code, Zap } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    width: string;
    height: string;
    delay: string;
    duration: string;
  }>>([]);
  
  const fullText = "Exploring digital galaxies through code & creativity.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      left: `${(i * 5) % 100}%`,
      top: `${(i * 7) % 100}%`,
      width: `${(i % 3) + 2}px`,
      height: `${(i % 3) + 2}px`,
      delay: `${(i * 0.5) % 8}s`,
      duration: `${(i % 5) + 10}s`
    }));
    setParticles(newParticles);
  }, []);

  const FloatingElement = ({ delay, children, className }: { delay: number; children: React.ReactNode; className: string }) => (
    <div 
      className={`absolute ${className} float-animation opacity-20`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-4">
      {/* Floating UI Elements */}
      <FloatingElement delay={0} className="top-10 left-5 md:top-20 md:left-10">
        <Terminal size={30} className="text-cyan-400 md:size-40" />
      </FloatingElement>
      <FloatingElement delay={2} className="top-30 right-5 md:top-40 md:right-20">
        <Code size={25} className="text-purple-400 md:size-35" />
      </FloatingElement>
      <FloatingElement delay={4} className="bottom-30 left-5 md:bottom-40 md:left-20">
        <Zap size={35} className="text-cyan-400 md:size-45" />
      </FloatingElement>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Terminal Window */}
        <div className="terminal mb-6 max-w-full sm:max-w-xl md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
          <div className="terminal-header p-2 sm:p-3">
            <span>space-portfolio-v1.0.0</span>
            <div className="float-right flex space-x-1.5 sm:space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="terminal-content p-3 sm:p-4">
            <div className="mb-1 sm:mb-2">$ initialize_portfolio.exe</div>
            <div className="mb-1 sm:mb-2">Loading quantum interface...</div>
            <div className="mb-2 sm:mb-4">✓ Connection established</div>
            <div className="typing-animation">
              Welcome to the digital cosmos
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-orbitron text-3xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
           Software 
          </span>
          <br />
          <span className="neon-text">DEVELOPER</span>
        </h1>

        {/* Subtitle with typing effect */}
        <div className="mb-6 h-12 sm:h-16 flex items-center justify-center">
          <p className="font-rajdhani text-base md:text-2xl text-gray-300 font-light text-center px-2">
            {displayText}
            <span className="animate-pulse text-cyan-400">|</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <a href="#projects" className="cyber-button px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-rajdhani font-bold text-base sm:text-lg group">
            <span className="relative z-10 flex items-center">
              View My Work
              <ArrowRight className="ml-1.5 w-4 h-4 sm:ml-2 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
          
          <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-rajdhani font-bold text-base sm:text-lg border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
            Download CV
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-3xl mx-auto">
          {[
            { number: '50+', label: 'Projects Launched', icon: '🚀' },
            { number: '3+', label: 'Years Experience', icon: '⭐' },
            { number: '24/7', label: 'Code Availability', icon: '💻' }
          ].map((stat, index) => (
            <div key={index} className="holographic-panel p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
              <div className="font-orbitron text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">
                {stat.number}
              </div>
              <div className="font-rajdhani text-sm sm:text-base text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.width,
            height: particle.height,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}
    </section>
  );
}