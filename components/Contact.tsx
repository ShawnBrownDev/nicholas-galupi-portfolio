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
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">TRANSMISSION</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CENTER
            </span>
          </h2>
          <p className="font-rajdhani text-xl text-gray-400 max-w-2xl mx-auto">
            Send a signal across the digital cosmos. Let&apos;s connect and build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="holographic-panel p-8">
            <div className="terminal mb-8">
              <div className="terminal-header">
                <span>contact-interface-v3.0.1</span>
                <div className="float-right flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="terminal-content">
                <div>$ initialize secure_communication.exe</div>
                <div>✓ Quantum encryption enabled</div>
                <div>✓ Ready for transmission</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 font-rajdhani font-medium text-gray-300">
                  <User size={18} className="text-cyan-400" />
                  <span>Identification Code</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 font-rajdhani text-white placeholder-gray-500"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 font-rajdhani font-medium text-gray-300">
                  <Mail size={18} className="text-purple-400" />
                  <span>Communication Channel</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-black/50 border border-purple-400/30 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300 font-rajdhani text-white placeholder-gray-500"
                  placeholder="your.email@galaxy.com"
                  required
                />
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 font-rajdhani font-medium text-gray-300">
                  <MessageSquare size={18} className="text-pink-400" />
                  <span>Mission Objective</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 bg-black/50 border border-pink-400/30 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 outline-none transition-all duration-300 font-rajdhani text-white placeholder-gray-500"
                  placeholder="What&apos;s your project about?"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 font-rajdhani font-medium text-gray-300">
                  <Send size={18} className="text-cyan-400" />
                  <span>Transmission Content</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-4 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 font-rajdhani text-white placeholder-gray-500 resize-none"
                  placeholder="Describe your project, ideas, or how we can work together..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full cyber-button px-8 py-4 rounded-lg font-rajdhani font-bold text-lg transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span className="flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Transmission</span>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="holographic-panel p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6">
                Communication Protocols
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <Icon size={24} className="text-cyan-400 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="font-rajdhani font-medium text-gray-400 text-sm">
                          {info.label}
                        </p>
                        <p className="font-rajdhani font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="holographic-panel p-8">
              <h3 className="font-orbitron text-2xl font-bold  mb-6">
                Social Networks
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-14 h-14 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Status Panel
            <div className="holographic-panel p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6">
                System Status
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-rajdhani text-gray-400">Availability</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full pulse-glow" />
                    <span className="font-rajdhani text-green-400 font-bold">ONLINE</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-rajdhani text-gray-400">Response Time</span>
                  <span className="font-rajdhani text-cyan-400 font-bold">~24 hours</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-rajdhani text-gray-400">Current Location</span>
                  <span className="font-rajdhani text-purple-400 font-bold">Earth Orbit</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}