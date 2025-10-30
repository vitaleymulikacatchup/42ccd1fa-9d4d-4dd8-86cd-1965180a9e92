import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const techStack = [
    { name: 'nestjs', color: 'bg-red-100 text-red-700', icon: '🚀' },
    { name: 'mysql', color: 'bg-blue-100 text-blue-700', icon: '🗄️' },
    { name: 'mongodb', color: 'bg-green-100 text-green-700', icon: '🍃' },
    { name: 'nginx', color: 'bg-green-100 text-green-700', icon: '⚡' },
    { name: 'redis', color: 'bg-red-100 text-red-700', icon: '💎' },
    { name: 'typescript', color: 'bg-blue-100 text-blue-700', icon: '📘' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="gradient-text">AI-powered</span>
              <br />
              web and mobile
              <br />
              <span className="gradient-text">in 12 weeks</span>
            </h1>
            
            <div className="flex items-center space-x-2 mb-8">
              <span className="text-gray-600">Powered by</span>
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                <div className="w-6 h-6 bg-red-400 rounded-full -ml-2"></div>
                <span className="font-semibold text-gray-900 ml-2">n8n</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Start Discovery</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <ArrowRight className="w-4 h-4" />
                <span>Portfolio Showcase</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">Follow us on:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <span className="text-xs font-bold">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                  <span className="text-xs">@</span>
                </a>
                <a href="#" className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                  <span className="text-xs">W</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Illustration */}
          <div className="relative animate-slide-up">
            <div className="w-full h-96 lg:h-[500px] flex items-center justify-center">
              <div className="relative">
                {/* 3D Knot Illustration Placeholder */}
                <div className="w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 animate-bounce-slow"></div>
                <div className="absolute inset-0 w-80 h-80 bg-gradient-to-tl from-gray-300 to-gray-400 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute inset-4 w-72 h-72 bg-gradient-to-br from-white to-gray-200 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 animate-fade-in">
          <p className="text-center text-gray-600 mb-8">We use only modern technologies</p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className={`tech-badge ${tech.color}`}>
                <span className="mr-2">{tech.icon}</span>
                <span>#{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;