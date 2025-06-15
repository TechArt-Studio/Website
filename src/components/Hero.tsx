
import React from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      
      {/* Floating elements */}
      <div className="absolute top-32 left-20 w-2 h-2 bg-white rounded-full float opacity-60" />
      <div className="absolute top-48 right-32 w-1 h-1 bg-gray-400 rounded-full float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-gray-300 rounded-full float opacity-30" style={{ animationDelay: '4s' }} />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 py-16">
        <div className="fade-in space-y-8">
          <Card className="inline-flex items-center px-6 py-3 bg-white/5 border-white/20 backdrop-blur-sm">
            <CardContent className="flex items-center space-x-3 p-0">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-sm text-white/90 font-medium">Digital Creative Studio</span>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight text-white">
              <span className="text-white">Create with</span>
              <br />
              <span className="text-shine bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Markdown</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              We transform your Markdown files into stunning web experiences.{' '}
              <code className="px-3 py-1 bg-white/10 rounded-lg text-white font-mono text-lg border border-white/20">posts/</code>{' '}
              directory becomes your digital canvas.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 border-0 px-8 py-4 text-lg font-medium group transition-all duration-200 rounded-xl shadow-xl hover:shadow-2xl h-14"
            >
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-200 backdrop-blur-sm h-14"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Code preview */}
          <div className="slide-up max-w-3xl mx-auto pt-16">
            <Card className="bg-gray-900/80 border-white/10 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">posts/creative-project.md</span>
                </div>
                <div className="p-6">
                  <pre className="text-sm text-gray-300 font-mono text-left">
{`# Creative Digital Experience

Showcasing innovative design and 
development solutions for modern brands.

## What We Deliver
- Stunning web experiences
- Custom design systems  
- Performance optimization

Built with passion, delivered with precision.`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
