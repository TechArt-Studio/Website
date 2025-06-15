
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
      
      {/* Enhanced spotlight effect from top-left targeting the title */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] opacity-60">
        <div className="w-full h-full bg-gradient-conic from-white/30 via-white/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
      </div>
      
      {/* Additional focused spotlight for title */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-white/25 via-white/8 to-transparent rounded-full blur-2xl transform -translate-x-32 -translate-y-32" />
      
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
              {/* Enhanced metallic gradient effect */}
              <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent relative z-10 drop-shadow-lg">
                <span className="bg-gradient-to-b from-white to-white/90 bg-clip-text text-transparent">Tech</span>
                <span className="bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">-Art</span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Open a new world with code. We help protect your privacy with fast, easy, and free solutions.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
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
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-medium rounded-md transition-all duration-200 backdrop-blur-sm"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Try One Calendar
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
