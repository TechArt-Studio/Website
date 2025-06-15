
import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="absolute inset-0 h-full w-full">
        <CanvasRevealEffect
          animationSpeed={0.4}
          containerClassName="bg-black"
          colors={[
            [16, 185, 129],
            [101, 163, 13],
          ]}
          dotSize={2}
          showGradient={false}
        />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact us
          </h2>
          <p className="text-xl text-gray-400">
            Tell us about your problem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-full rounded-2xl border border-white/10 p-2 group">
            <div className="absolute inset-0 h-full rounded-2xl overflow-hidden">
              <CanvasRevealEffect
                animationSpeed={2}
                containerClassName="bg-black"
                colors={[[16, 185, 129], [101, 163, 13]]}
                dotSize={2}
              />
            </div>
            <Card className="relative bg-black/80 border-white/10 backdrop-blur-sm hover:bg-black/60 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-lg">
                  China
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative h-full rounded-2xl border border-white/10 p-2 group">
            <div className="absolute inset-0 h-full rounded-2xl overflow-hidden">
              <CanvasRevealEffect
                animationSpeed={2}
                containerClassName="bg-black"
                colors={[[16, 185, 129], [101, 163, 13]]}
                dotSize={2}
              />
            </div>
            <Card className="relative bg-black/80 border-white/10 backdrop-blur-sm hover:bg-black/60 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">How can we help you?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-400 text-lg">
                  www@xyehr.cn
                </CardDescription>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Mail className="mr-2 w-4 h-4" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
