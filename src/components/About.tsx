
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    { title: "Fast", subtitle: "Performance", description: "Lightning-fast applications built for speed" },
    { title: "Easy", subtitle: "To Use", description: "Intuitive interfaces that anyone can master" },
    { title: "Free", subtitle: "Always", description: "Open-source and completely free forever" }
  ];

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                What is Tech-Art?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Tech-Art is a studio founded in China whose main mission is to help protect your privacy.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <Card className="bg-gradient-to-r from-white/10 to-white/5 border-white/20 p-6 transition-all duration-300 hover:border-white/30 hover:shadow-xl backdrop-blur-sm">
                    <CardContent className="p-0 flex items-center space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{item.title.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-baseline space-x-2 mb-2">
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          <span className="text-sm text-gray-400 font-medium">{item.subtitle}</span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-60" />
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl opacity-40" />
            </motion.div>
            <motion.div 
              className="aspect-video bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl opacity-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
