
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* 从左上角无视padding的斜打光，直接打向标题 */}
      <div className="absolute -top-32 -left-32 w-[1000px] h-[1000px] opacity-40">
        <div className="w-full h-full bg-gradient-conic from-white/40 via-white/15 to-transparent rounded-full blur-3xl transform rotate-45" />
      </div>
      
      {/* 更精准的聚焦打光 */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-gradient-radial from-white/30 via-white/10 to-transparent rounded-full blur-3xl transform -translate-x-48 -translate-y-24 -rotate-12" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="inline-flex items-center px-4 py-2 bg-white/5 border-white/20 backdrop-blur-sm">
              <CardContent className="flex items-center space-x-2 p-0">
                <Calendar className="w-4 h-4 text-white" />
                <span className="text-sm text-white/90 font-medium">Meet One Calendar</span>
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
              {/* 金属质感效果 - 字体上半部分白色，下半部分灰银色 */}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent bg-clip-text text-transparent">
                  Tech-Art
                </span>
                <span className="relative bg-gradient-to-b from-transparent via-transparent to-gray-400 bg-clip-text text-transparent">
                  Tech-Art
                </span>
                <span className="absolute inset-0 bg-gradient-to-b from-white/90 via-gray-200 to-gray-500 bg-clip-text text-transparent opacity-80">
                  Tech-Art
                </span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Open a new world with code. We help protect your privacy with fast, easy, and free solutions.
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
              className="bg-white text-black hover:bg-gray-100 border-0 px-8 py-3 text-lg font-medium group transition-all duration-200 rounded-md shadow-xl"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
