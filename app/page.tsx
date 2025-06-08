'use client';

import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen space-bg text-white relative">
      {/* Animated Starfield Background */}
      <StarField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-rajdhani text-gray-400">
              © 2024 Space Portfolio. Crafted with 💜 in the digital cosmos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}