
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CodeDemo from '@/components/CodeDemo';
import CTA from '@/components/CTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <Navigation />
      <Hero />
      <Features />
      <CodeDemo />
      <CTA />
      
      {/* Footer */}
      <footer className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 hero-gradient rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-gray-800 font-bold text-xl">MarkdownStudio</span>
            </div>
            
            <div className="text-gray-600 text-lg">
              © 2024 MarkdownStudio. 让内容创作变得简单。
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
