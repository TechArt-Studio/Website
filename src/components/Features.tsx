
import React from 'react';
import { Palette, Code, Globe, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Creative Design",
      description: "Every project is crafted with artistic vision and attention to detail."
    },
    {
      icon: Code,
      title: "Clean Development",
      description: "Markdown files become beautiful, performant web experiences."
    },
    {
      icon: Globe,
      title: "Digital Presence",
      description: "From concept to deployment, we build your complete online identity."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Rapid prototyping and iteration to bring your ideas to life quickly."
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What we do
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Transforming ideas into digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 group backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-white/10 mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <feature.icon className="w-6 h-6 text-white group-hover:text-black" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
