
import React from 'react';
import { Zap, Cloud, Shield, Globe, Database, Smartphone, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { VercelLogo, CloudflareLogo, GitHubLogo, ClerkLogo } from '@/components/ui/service-logos';

const PoweredBy = () => {
  const iconMap = {
    Zap,
    Cloud, 
    Shield,
    Globe,
    Database,
    Smartphone,
    Github,
    VercelLogo,
    CloudflareLogo,
    GitHubLogo,
    ClerkLogo
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
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
                className="relative h-full rounded-2xl border border-white/10 p-2"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm p-6 border border-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <div className="relative flex flex-1 flex-col justify-between gap-4">
                    <motion.div 
                      className="inline-flex p-2 rounded-lg bg-white/10 mb-3 group-hover:bg-white group-hover:text-black transition-all duration-300 w-fit mx-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-5 h-5 text-white group-hover:text-black" />
                    </motion.div>
                    <div className="space-y-3 text-center">
                      <h4 className="text-white font-semibold text-sm">{service.name}</h4>
                      <p className="text-gray-400 text-xs">{service.description}</p>
                    </div>
                  </div>
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
