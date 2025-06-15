
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Team from '@/components/Team';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';

const Index = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <FAQ />
      <Team />
      <Blog />
      <Contact />
      
      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xs">T</span>
                </div>
                <span className="text-white font-semibold">Tech Art</span>
              </div>
              <p className="text-gray-400 text-sm">
                Open a new world with code.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>One Calendar</li>
                <li>Mail</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Team</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About us</li>
                <li>Join us</li>
                <li>Open Source</li>
                <li>Sustainability</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resource</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Press and Media</li>
                <li>Contact us</li>
                <li>Help & Docs</li>
                <li>Live Help</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-white/10">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Tech-Art Studio.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
