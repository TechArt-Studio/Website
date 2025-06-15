
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight';
import { siteConfig } from '@/config/siteConfig';

const Hero = () => {
  const handleLearnMore = () => {
    const targetElement = document.querySelector(siteConfig.hero.ctaButton.link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Spotlight background effect - 移动端优化位置和大小 */}
      <Spotlight className="-top-60 -left-20 md:-top-40 md:left-0 md:md:left-60 md:-top-20 w-[200%] h-[200%] md:w-[138%] md:h-[169%] lg:w-[84%]" fill="white" />
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-20">
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="relative inline-flex items-center px-4 py-2 bg-white/5 border-white/20 backdrop-blur-sm">
              <CardContent className="flex items-center space-x-2 p-0">
                <Calendar className="w-4 h-4 text-white" />
                <span className="text-sm text-white/90 font-medium">{siteConfig.hero.badge.text}</span>
              </CardContent>
            </Card>
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent bg-clip-text text-transparent">
                  {siteConfig.hero.title}
                </span>
                <span className="relative bg-gradient-to-b from-transparent via-transparent to-gray-400 bg-clip-text text-transparent">
                  {siteConfig.hero.title}
                </span>
                <span className="absolute inset-0 bg-gradient-to-b from-white/90 via-gray-200 to-gray-500 bg-clip-text text-transparent opacity-80">
                  {siteConfig.hero.title}
                </span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {siteConfig.hero.subtitle}
            </motion.p>
          </div>
          
          <motion.div 
            className="flex justify-center items-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button 
              size="lg" 
              onClick={handleLearnMore}
              className="bg-white text-black hover:bg-gray-100 border-0 px-8 py-3 text-lg font-medium group transition-all duration-200 rounded-md shadow-xl"
            >
              {siteConfig.hero.ctaButton.text}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
