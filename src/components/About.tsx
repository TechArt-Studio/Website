
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Zap, Heart, Gift } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const About = () => {
  const iconMap = {
    Zap,
    Heart,
    Gift
  };

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
    <section id="about" className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {siteConfig.about.title}
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {siteConfig.about.description}
              </motion.p>
            </div>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {siteConfig.about.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="relative h-full rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="relative flex h-full flex-col justify-between gap-6">
                      <div className="relative flex flex-1 flex-col justify-between gap-4">
                        <motion.div 
                          className="inline-flex p-2 rounded-lg bg-white/10 mb-3 group-hover:bg-white group-hover:text-black transition-all duration-300 w-fit"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="w-5 h-5 text-white group-hover:text-black" />
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
                );
              })}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.xyehr.cn/images/about-image1.jpg" 
                  alt="Tech-Art Studio" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.xyehr.cn/images/about-image2.jpg" 
                  alt="Tech-Art Development" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              className="aspect-video bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <img 
                src="https://cdn.xyehr.cn/images/banner.jpg" 
                alt="Tech-Art Banner" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
