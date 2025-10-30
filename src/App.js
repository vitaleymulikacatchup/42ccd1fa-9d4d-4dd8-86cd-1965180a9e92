import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import MobileMenu from './components/MobileMenu';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleAcceptCookies = () => {
    setShowCookieBanner(false);
  };

  const handleDenyCookies = () => {
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onToggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
      
      <main>
        <Hero />
        <Stats />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      
      <Footer />
      
      {showCookieBanner && (
        <CookieBanner 
          onAccept={handleAcceptCookies}
          onDeny={handleDenyCookies}
        />
      )}
    </div>
  );
}

export default App;