
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CodeDemo from '@/components/CodeDemo';
import CTA from '@/components/CTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Features />
      <CodeDemo />
      <CTA />
      
      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xs">▲</span>
              </div>
              <span className="text-white font-semibold">MarkdownStudio</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 MarkdownStudio. Crafting digital experiences.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
