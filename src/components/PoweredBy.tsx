
import React from 'react';
import { Zap, Cloud, Shield, Globe, Database, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const PoweredBy = () => {
  const iconMap = {
    Zap,
    Cloud, 
    Shield,
    Globe,
    Database,
    Smartphone
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-16 bg-black relative">
      <div className="absolute inset-0 square-pattern opacity-5" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {siteConfig.poweredBy.title}
          </h3>
          <p className="text-gray-400">
            {siteConfig.poweredBy.subtitle}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {siteConfig.poweredBy.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <GlowingEffect
                  blur={3}
                  spread={20}
                  proximity={50}
                  disabled={false}
                  className="rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group relative">
                  <IconComponent className="w-8 h-8 text-white mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold text-sm mb-1">{service.name}</h4>
                  <p className="text-gray-400 text-xs text-center">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PoweredBy;
