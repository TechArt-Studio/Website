
import React from 'react';
import { Zap, FileText, Globe, Settings } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Markdown First",
      description: "Write in pure Markdown. No complex setup or learning curve required."
    },
    {
      icon: Zap,
      title: "Instant Preview",
      description: "See your changes immediately. Save a file and your site updates automatically."
    },
    {
      icon: Globe,
      title: "Auto Routing",
      description: "File paths become URLs. posts/about.md automatically becomes /about."
    },
    {
      icon: Settings,
      title: "Zero Config",
      description: "Start writing immediately. No build tools or configuration files needed."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Everything you need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Powerful features that make content creation effortless
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200/50 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-gray-100 mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-black mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
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
