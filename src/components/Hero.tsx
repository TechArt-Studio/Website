
import React from 'react';
import { ArrowRight, Calendar, Box, Settings, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Spotlight } from '@/components/ui/spotlight';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Spotlight 背景效果 */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* 移动端优化的打光效果 - 更柔和的渐变 */}
      <div className="absolute top-1/4 left-1/2 w-[400px] h-[300px] bg-gradient-radial from-white/15 via-white/8 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 md:hidden" />
      
      {/* 移动端额外的侧面打光 */}
      <div className="absolute top-1/3 right-0 w-[200px] h-[200px] bg-gradient-radial from-white/10 via-white/5 to-transparent rounded-full blur-2xl md:hidden" />
      
      {/* 桌面端的精准打光 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 hidden md:block">
        <div className="absolute -top-32 -left-32 w-[1000px] h-[1000px]">
          <div className="w-full h-full bg-gradient-conic from-white/40 via-white/15 to-transparent rounded-full blur-3xl transform rotate-45" />
        </div>
      </div>
      
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-gradient-radial from-white/30 via-white/10 to-transparent rounded-full blur-3xl transform -translate-x-48 -translate-y-24 -rotate-12 hidden md:block" />
      
      {/* 移动端优化的渐变遮罩 - 减少暗度 */}
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

          {/* 发光卡片展示区域 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <GlowingCard
              icon={<Box className="h-5 w-5 text-white" />}
              title="Fast & Secure"
              description="Built with modern technology for maximum performance and security."
            />
            <GlowingCard
              icon={<Settings className="h-5 w-5 text-white" />}
              title="Easy to Use"
              description="Intuitive interface designed for seamless user experience."
            />
            <GlowingCard
              icon={<Sparkles className="h-5 w-5 text-white" />}
              title="Open Source"
              description="Transparent, community-driven development you can trust."
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

interface GlowingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GlowingCard = ({ icon, title, description }: GlowingCardProps) => {
  return (
    <div className="relative h-full rounded-2xl border border-white/10 p-2">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm p-6 border border-white/5">
        <div className="relative flex flex-1 flex-col justify-between gap-4">
          <div className="w-fit rounded-lg border border-white/20 bg-white/5 p-2">
            {icon}
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-xl text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
