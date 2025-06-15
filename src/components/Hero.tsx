
import React from 'react';
import { ArrowRight, Code, Zap, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Spotlight effect */}
      <div className="absolute inset-0 spotlight"></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full floating-animation opacity-70" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full floating-animation opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-indigo-400 rounded-full floating-animation opacity-50" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full floating-animation opacity-80" style={{ animationDelay: '1s' }} />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 backdrop-blur-sm mb-8 hover-glow">
            <Sparkles className="w-5 h-5 text-blue-500 mr-3" />
            <span className="text-lg text-gray-700 font-medium">从 Markdown 到网页，瞬间完成</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gray-800">下一代</span>
            <br />
            <span className="text-gradient">内容工作站</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
            只需在 <code className="px-3 py-2 bg-blue-100 rounded-lg text-blue-600 font-mono">posts/</code> 目录中创建 Markdown 文件，
            我们的智能系统将自动将其渲染为精美的网页。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="hero-gradient text-white border-0 px-12 py-6 text-xl font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 rounded-2xl"
            >
              开始使用
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-6 text-xl font-semibold backdrop-blur-sm rounded-2xl hover-glow"
            >
              <Code className="mr-3 w-6 h-6" />
              查看演示
            </Button>
          </div>
          
          {/* Feature preview cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-gradient rounded-3xl p-8 hover:scale-105 transition-all duration-300 group backdrop-blur-sm border border-white/20 hover-glow">
              <FileText className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform floating-animation" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Markdown 优先</h3>
              <p className="text-gray-600 text-lg">专注于内容创作，无需复杂的设置</p>
            </div>
            
            <div className="card-gradient rounded-3xl p-8 hover:scale-105 transition-all duration-300 group backdrop-blur-sm border border-white/20 hover-glow">
              <Zap className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform floating-animation" style={{ animationDelay: '1s' }} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">即时渲染</h3>
              <p className="text-gray-600 text-lg">文件保存即生成，实时预览效果</p>
            </div>
            
            <div className="card-gradient rounded-3xl p-8 hover:scale-105 transition-all duration-300 group backdrop-blur-sm border border-white/20 hover-glow">
              <Code className="w-12 h-12 text-purple-500 mb-6 group-hover:scale-110 transition-transform floating-animation" style={{ animationDelay: '2s' }} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">零配置</h3>
              <p className="text-gray-600 text-lg">开箱即用，无需复杂的构建步骤</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent" />
    </div>
  );
};

export default Hero;
