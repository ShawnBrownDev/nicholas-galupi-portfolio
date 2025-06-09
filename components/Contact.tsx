'use client';

import { useState } from 'react';
import { Send, Mail, MessageSquare, User, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@spacedev.io', href: 'mailto:contact@dev.io' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    // { icon: Upwork, href: '#', label: 'Upwork' }
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="neon-text">TRANSMISSION</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CENTER
            </span>
          </h2>
          <p className="font-rajdhani text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Send a signal across the digital cosmos. Let&apos;s connect and build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column - Contact Form */}
          <div className="holographic-panel p-6 sm:p-8">
            <div className="terminal mb-6 sm:mb-8 text-xs sm:text-sm md:text-base">
              <div className="terminal-header p-2 sm:p-3">
                <span>contact-interface-v3.0.1</span>
                <div className="float-right flex space-x-1.5 sm:space-x-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="terminal-content p-3 sm:p-4">
                <div className="mb-1 sm:mb-2">$ initialize secure_communication.exe</div>
                <div className="mb-1 sm:mb-2">✓ Quantum encryption enabled</div>
                <div className="mb-2 sm:mb-4">✓ Ready for transmission</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Input */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="flex items-center space-x-1.5 sm:space-x-2 font-rajdhani font-medium text-gray-300 text-sm sm:text-base">
                  <User size={16} className="text-cyan-400 sm:size-18" />
                  <span>Identification Code</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 font-rajdhani text-white placeholder-gray-500 text-sm sm:text-base"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="flex items-center space-x-1.5 sm:space-x-2 font-rajdhani font-medium text-gray-300 text-sm sm:text-base">
                  <Mail size={16} className="text-purple-400 sm:size-18" />
                  <span>Communication Channel</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 bg-black/50 border border-purple-400/30 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300 font-rajdhani text-white placeholder-gray-500 text-sm sm:text-base"
                  placeholder="your.email@galaxy.com"
                  required
                />
              </div>

              {/* Subject Input */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="flex items-center space-x-1.5 sm:space-x-2 font-rajdhani font-medium text-gray-300 text-sm sm:text-base">
                  <MessageSquare size={16} className="text-pink-400 sm:size-18" />
                  <span>Mission Objective</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 bg-black/50 border border-pink-400/30 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 outline-none transition-all duration-300 font-rajdhani text-white placeholder-gray-500 text-sm sm:text-base"
                  placeholder="What&apos;s your project about?"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="flex items-center space-x-1.5 sm:space-x-2 font-rajdhani font-medium text-gray-300 text-sm sm:text-base">
                  <Send size={16} className="text-cyan-400 sm:size-18" />
                  <span>Transmission Content</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 sm:p-4 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 font-rajdhani text-white placeholder-gray-500 resize-none text-sm sm:text-base"
                  placeholder="Describe your project, ideas, or how we can work together..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full cyber-button px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-rajdhani font-bold text-base sm:text-lg transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span className="flex items-center justify-center space-x-1.5 sm:space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="sm:size-18" />
                      <span>Send Transmission</span>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Social */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <div className="holographic-panel p-6 sm:p-8">
              <h3 className="font-orbitron text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Communication Protocols
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <Icon size={20} className="text-cyan-400 group-hover:text-white sm:size-24" />
                      </div>
                      <div>
                        <p className="font-rajdhani font-medium text-gray-400 text-xs sm:text-sm">
                          {info.label}
                        </p>
                        <p className="font-rajdhani text-white font-bold text-sm sm:text-base">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="holographic-panel p-6 sm:p-8">
              <h3 className="font-orbitron text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Connect Beyond Galaxies
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-purple-400 hover:bg-purple-800/20 transition-all duration-300 group"
                      aria-label={link.label}
                    >
                      <Icon size={20} className="text-gray-400 group-hover:text-purple-400 transition-all duration-300 sm:size-24" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}