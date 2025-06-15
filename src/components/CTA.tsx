
import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.1)_50%,transparent_65%)] bg-[length:20px_20px]" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Ready to start building?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            Join thousands of creators who've simplified their publishing workflow
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 border-0 px-8 py-4 text-lg font-medium transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl group"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/20 text-white hover:bg-white/5 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200"
            >
              <Github className="mr-2 w-5 h-5" />
              View on GitHub
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100K+</div>
              <div className="text-gray-400">Pages Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
