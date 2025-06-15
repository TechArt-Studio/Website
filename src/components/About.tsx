
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    { title: "Fast", subtitle: "Performance", description: "Lightning-fast applications built for speed", color: "from-blue-400/20 to-blue-600/20" },
    { title: "Easy", subtitle: "To Use", description: "Intuitive interfaces that anyone can master", color: "from-green-400/20 to-green-600/20" },
    { title: "Free", subtitle: "Always", description: "Open-source and completely free forever", color: "from-purple-400/20 to-purple-600/20" }
  ];

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <div className="relative max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
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
              className="space-y-4"
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
                  <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-white">{item.title.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="mb-2">
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          <span className="text-sm text-gray-400 font-medium">{item.subtitle}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
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
