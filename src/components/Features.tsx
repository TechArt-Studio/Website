
import React from 'react';
import { Folder, ArrowRight, Palette, Rocket, Shield, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Folder,
      title: "文件夹即站点",
      description: "在 posts/ 目录中创建 .md 文件，自动生成对应的网页路由",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Palette,
      title: "美观的默认主题",
      description: "内置多种精美主题，自动适配响应式设计，支持深色模式",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Rocket,
      title: "极速构建",
      description: "基于 Next.js 和增量静态重新生成，确保最快的构建和加载速度",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "SEO 优化",
      description: "自动生成 meta 标签、sitemap 和结构化数据，提升搜索引擎排名",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Sparkles,
      title: "丰富的扩展",
      description: "支持代码高亮、数学公式、图表绘制等丰富的 Markdown 扩展",
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: ArrowRight,
      title: "一键部署",
      description: "与 Vercel、Netlify 等平台深度集成，支持自动部署和 CDN 加速",
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            强大功能，<span className="text-gradient">开箱即用</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            我们提供了完整的工具链，让您专注于内容创作，其余的交给我们处理
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative ${feature.bgColor} rounded-3xl p-10 hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-white/50 backdrop-blur-sm hover-glow`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Moving border */}
              <div className="absolute inset-0 rounded-3xl moving-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-gray-900 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
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
