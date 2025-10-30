import React from 'react';
import { X } from 'lucide-react';

const CookieBanner = ({ onAccept, onDeny }) => {
  return (
    <div className="cookie-banner">
      <button 
        onClick={onDeny}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <X className="w-5 h-5" />
      </button>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        This site uses cookies
      </h3>
      
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        We and selected third parties use cookies (or similar technologies) for 
        technical purposes, to enhance and analyze site usage, to support our 
        marketing efforts, and for other purposes described below.
      </p>
      
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        By clicking "Accept all", you agree to the storing of cookies on your 
        device for these purposes.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          onClick={onDeny}
          className="btn-outline flex-1 text-sm"
        >
          Deny
        </button>
        <button 
          onClick={onAccept}
          className="btn-secondary flex-1 text-sm"
        >
          Accept all
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;