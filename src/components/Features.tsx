
import React from 'react';
import { Folder, ArrowRight, Palette, Rocket, Shield, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Folder,
      title: "文件夹即站点",
      description: "在 posts/ 目录中创建 .md 文件，自动生成对应的网页路由",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "美观的默认主题",
      description: "内置多种精美主题，自动适配响应式设计，支持深色模式",
      color: "from-purple-500 to-pink-500" 
    },
    {
      icon: Rocket,
      title: "极速构建",
      description: "基于 Next.js 和增量静态重新生成，确保最快的构建和加载速度",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "SEO 优化",
      description: "自动生成 meta 标签、sitemap 和结构化数据，提升搜索引擎排名",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Sparkles,
      title: "丰富的扩展",
      description: "支持代码高亮、数学公式、图表绘制等丰富的 Markdown 扩展",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: ArrowRight,
      title: "一键部署",
      description: "与 Vercel、Netlify 等平台深度集成，支持自动部署和 CDN 加速",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            强大功能，<span className="text-gradient">开箱即用</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            我们提供了完整的工具链，让您专注于内容创作，其余的交给我们处理
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 border border-white/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                <div className={`w-full h-full rounded-2xl bg-gradient-to-r ${feature.color} opacity-20`} />
              </div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
