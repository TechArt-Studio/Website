
import React from 'react';
import { Github, Zap, Smile, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/glowing-effect';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Features of Tech-Art Studio Apps
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative h-full rounded-2xl border border-white/10 p-2"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm p-6 border border-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className="relative flex flex-1 flex-col justify-between gap-4">
                  <motion.div 
                    className="inline-flex p-2 rounded-lg bg-white/10 mb-3 group-hover:bg-white group-hover:text-black transition-all duration-300 w-fit"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-5 h-5 text-white group-hover:text-black" />
                  </motion.div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
