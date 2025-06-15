
import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-black rounded-full float opacity-60" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-gray-400 rounded-full float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gray-600 rounded-full float opacity-30" style={{ animationDelay: '4s' }} />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8">
            <Code2 className="w-4 h-4 text-black mr-2" />
            <span className="text-sm text-gray-700 font-medium">From Markdown to Web, Instantly</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-black">Build with</span>
            <br />
            <span className="text-shine">Markdown</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Create beautiful websites by simply writing Markdown files in your{' '}
            <code className="px-2 py-1 bg-gray-100 rounded text-black font-mono text-lg">posts/</code>{' '}
            directory. No configuration needed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 border-0 px-8 py-4 text-lg font-medium group transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200"
            >
              View Demo
            </Button>
          </div>
          
          {/* Code preview */}
          <div className="slide-up max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-6 text-left shadow-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono">posts/hello.md</span>
              </div>
              <pre className="text-sm text-gray-300 font-mono">
{`# Hello World

This is my first post. It will automatically
become a beautiful webpage at **/hello**.

- No build steps
- No configuration  
- Just pure Markdown`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
