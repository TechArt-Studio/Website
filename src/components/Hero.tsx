
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
      {/* Spotlight background effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Mobile optimized lighting effect - softer gradient */}
      <div className="absolute top-1/4 left-1/2 w-[400px] h-[300px] bg-gradient-radial from-white/15 via-white/8 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 md:hidden" />
      
      {/* Mobile additional side lighting */}
      <div className="absolute top-1/3 right-0 w-[200px] h-[200px] bg-gradient-radial from-white/10 via-white/5 to-transparent rounded-full blur-2xl md:hidden" />
      
      {/* Desktop precise lighting */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 hidden md:block">
        <div className="absolute -top-32 -left-32 w-[1000px] h-[1000px]">
          <div className="w-full h-full bg-gradient-conic from-white/40 via-white/15 to-transparent rounded-full blur-3xl transform rotate-45" />
        </div>
      </div>
      
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-gradient-radial from-white/30 via-white/10 to-transparent rounded-full blur-3xl transform -translate-x-48 -translate-y-24 -rotate-12 hidden md:block" />
      
      {/* Mobile optimized gradient mask - reduce darkness */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 md:from-black/20 md:via-transparent md:to-black/40" />
      
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
