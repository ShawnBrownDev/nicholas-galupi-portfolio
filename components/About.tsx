'use client';

import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { skills, timeline, type Skill, type TimelineItem } from '@/lib/About';

export default function About() {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(new Array(skills.length).fill(true));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % timeline.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="">SPACE</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              EXPLORER
            </span>
          </h2>
          <p className="font-rajdhani text-xl text-white max-w-2xl mx-auto">
            Navigating the cosmic web of technology for over 3+ years
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About & Skills */}
          <div className="space-y-8">
            {/* About Card */}
            <div className="holographic-panel p-8">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="font-orbitron text-2xl font-bold">Mission Profile</h3>
              </div>
              
              <div className="space-y-4 font-rajdhani text-white-300 leading-relaxed">
                <p>
                  Greetings, fellow space traveler! I'm a passionate full-stack developer 
                  who loves crafting digital experiences that feel like journeys through the cosmos.
                </p>
                <p>
                  With expertise spanning frontend galaxies to backend nebulae, I specialize 
                  in building scalable applications that push the boundaries of what's possible 
                  in the digital universe.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open source projects, or stargazing for inspiration for my next creation.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="font-orbitron text-3xl font-bold ">50+</div>
                  <div className="font-rajdhani text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-orbitron text-3xl font-bold ">100%</div>
                  <div className="font-rajdhani text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="holographic-panel p-8">
              <h3 className="font-orbitron text-2xl font-bold neon-text mb-6">
                Technical Arsenal
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-rajdhani font-medium text-white">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 font-rajdhani font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="skill-bar h-3">
                      <div
                        className={`skill-fill transition-all duration-1000 ease-out ${
                          visibleSkills[index] ? 'w-full' : 'w-0'
                        }`}
                        style={{ 
                          '--skill-level': `${skill.level}%`,
                          width: visibleSkills[index] ? `${skill.level}%` : '0%'
                        } as any}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-8">
            <div className="holographic-panel p-8">
              <h3 className="font-orbitron text-2xl font-bold neon-text mb-8">
                Journey Timeline
              </h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />
                
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = index === activeTimelineItem;
                  
                  return (
                    <div
                      key={index}
                      className={`relative flex items-start space-x-6 pb-8 transition-all duration-500 ${
                        isActive ? 'transform scale-105' : ''
                      }`}
                    >
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center relative z-10 transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-400 to-purple-500 glow-effect' 
                          : 'bg-gray-800 border-2 border-gray-600'
                      }`}>
                        <Icon 
                          size={24} 
                          className={isActive ? 'text-black' : 'text-gray-400'} 
                        />
                      </div>
                      
                      {/* Content */}
                      <div className={`flex-1 transition-all duration-500 ${
                        isActive ? 'transform translate-x-2' : ''
                      }`}>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`font-orbitron font-bold text-lg ${
                            isActive ? 'neon-text' : 'text-gray-400'
                          }`}>
                            {item.year}
                          </span>
                          <div className={`h-px flex-1 ${
                            isActive ? 'bg-cyan-400' : 'bg-gray-600'
                          }`} />
                        </div>
                        
                        <h4 className={`font-rajdhani font-bold text-xl mb-1 ${
                          isActive ? 'text-white' : 'text-gray-300'
                        }`}>
                          {item.title}
                        </h4>
                        
                        <p className={`font-rajdhani font-medium mb-2 ${
                          isActive ? 'text-cyan-400' : 'text-gray-500'
                        }`}>
                          {item.company}
                        </p>
                        
                        <p className={`font-rajdhani ${
                          isActive ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="holographic-panel p-8 text-center">
              <h3 className="font-orbitron text-xl font-bold neon-text mb-4">
                Ready for Collaboration?
              </h3>
              <p className="font-rajdhani text-gray-400 mb-6">
                Let's create something extraordinary together
              </p>
              <button className="cyber-button px-6 py-3 rounded-lg font-rajdhani font-bold">
                Initiate Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 