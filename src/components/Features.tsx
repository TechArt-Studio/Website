
import React from 'react';
import { Github, Zap, Smile, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Github,
      title: "Free and open source",
      description: "Free and open source on Github."
    },
    {
      icon: Zap,
      title: "Fast",
      description: "Use Vercel to quickly build in multiple regions around the world"
    },
    {
      icon: Smile,
      title: "Easy",
      description: "Beautifully designed UI, easy to understand and operate"
    },
    {
      icon: ShieldCheck,
      title: "No ads",
      description: "There are no ads on all apps and web pages."
    }
  ];

  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Features of Tech-Art Studio Apps
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm"
            >
              <CardHeader className="pb-3">
                <div className="inline-flex p-2 rounded-lg bg-white/10 mb-3 group-hover:bg-white group-hover:text-black transition-all duration-300 w-fit">
                  <feature.icon className="w-5 h-5 text-white group-hover:text-black" />
                </div>
                <CardTitle className="text-lg font-semibold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
