
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What is Tech-Art?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Tech-Art is a studio founded in China whose main mission is to help protect your privacy.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <Card className="bg-white/5 border-white/10 text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-white mb-1">Fast</div>
                  <div className="text-sm text-gray-400">Performance</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-white mb-1">Easy</div>
                  <div className="text-sm text-gray-400">To Use</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-white mb-1">Free</div>
                  <div className="text-sm text-gray-400">Always</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-60"></div>
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl opacity-40"></div>
            </div>
            <div className="aspect-video bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
