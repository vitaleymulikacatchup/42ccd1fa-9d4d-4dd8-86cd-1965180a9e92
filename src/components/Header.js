import React from 'react';
import { Menu, X, ChevronDown, Star } from 'lucide-react';

const Header = ({ onToggleMobileMenu, isMobileMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sargas</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#portfolio" className="text-gray-700 hover:text-gray-900 font-medium">
              Portfolio
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </a>
            <a href="#contacts" className="text-gray-700 hover:text-gray-900 font-medium">
              Contacts
            </a>
          </nav>

          {/* Clutch Rating & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-900 text-white px-3 py-2 rounded-lg">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Based on 6 Clutch reviews
            </div>
            <button className="btn-primary">
              Book a Call
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={onToggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;