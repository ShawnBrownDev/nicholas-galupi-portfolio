'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Code, Zap } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const FloatingElement = ({ delay, children, className }: { delay: number; children: React.ReactNode; className: string }) => (
    <div 
      className={`absolute ${className} float-animation opacity-20`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating UI Elements */}
      <FloatingElement delay={0} className="top-20 left-10">
        <Terminal size={40} className="text-cyan-400" />
      </FloatingElement>
      <FloatingElement delay={2} className="top-40 right-20">
        <Code size={35} className="text-purple-400" />
      </FloatingElement>
      <FloatingElement delay={4} className="bottom-40 left-20">
        <Zap size={45} className="text-cyan-400" />
      </FloatingElement>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Terminal Window */}
        <div className="terminal mb-8 max-w-2xl mx-auto">
          <div className="terminal-header">
            <span>space-portfolio-v1.0.0</span>
            <div className="float-right flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="terminal-content">
            <div className="mb-2">$ initialize_portfolio.exe</div>
            <div className="mb-2">Loading quantum interface...</div>
            <div className="mb-4">✓ Connection established</div>
            <div className="typing-animation">
              Welcome to the digital cosmos
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
           Software 
          </span>
          <br />
          <span className="neon-text">DEVELOPER</span>
        </h1>

        {/* Subtitle with typing effect */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <p className="font-rajdhani text-xl md:text-2xl text-gray-300 font-light">
            {displayText}
            <span className="animate-pulse text-cyan-400">|</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="cyber-button px-8 py-4 rounded-lg font-rajdhani font-bold text-lg group">
            <span className="relative z-10 flex items-center">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          
          <button className="px-8 py-4 rounded-lg font-rajdhani font-bold text-lg border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
            Download CV
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { number: '50+', label: 'Projects Launched', icon: '🚀' },
            { number: '3+', label: 'Years Experience', icon: '⭐' },
            { number: '24/7', label: 'Code Availability', icon: '💻' }
          ].map((stat, index) => (
            <div key={index} className="holographic-panel p-6 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-orbitron text-2xl font-bold mb-1">
                {stat.number}
              </div>
              <div className="font-rajdhani text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 10 + 10}s`
          }}
        />
      ))}
    </section>
  );
}