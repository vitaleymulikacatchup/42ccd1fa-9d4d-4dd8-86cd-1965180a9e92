import React from 'react';
import { X, ChevronRight, Mail } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="mobile-menu-overlay" onClick={onClose}></div>
      
      {/* Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button 
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Menu Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Menu</h3>
              <nav className="space-y-3">
                <a href="#" className="flex items-center justify-between text-gray-600 hover:text-gray-900 py-2">
                  <span>Case Studies</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#" className="flex items-center justify-between text-gray-600 hover:text-gray-900 py-2">
                  <span>Blog</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#" className="flex items-center justify-between text-gray-600 hover:text-gray-900 py-2">
                  <span>Contacts</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#" className="flex items-center justify-between text-gray-600 hover:text-gray-900 py-2">
                  <span>About Us</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#" className="flex items-center justify-between text-gray-600 hover:text-gray-900 py-2">
                  <span>FAQ</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <nav className="space-y-3">
                <a href="#" className="flex items-center justify-between text-gray-600 hover:text-gray-900 py-2">
                  <span>Web Development</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#" className="flex items-center justify-between text-gray-600 hover:text-gray-900 py-2">
                  <span>Mobile Development</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#" className="flex items-center justify-between text-gray-600 hover:text-gray-900 py-2">
                  <span>Support and Maintenance</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </nav>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Feel free to drop us a note:</p>
                <a href="mailto:contact@sargas.io" className="text-blue-600 font-medium">
                  contact@sargas.io
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700">Terms of Use</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;