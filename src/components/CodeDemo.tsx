
import React, { useState } from 'react';
import { Copy, Check, FileText, Globe } from 'lucide-react';

const CodeDemo = () => {
  const [copied, setCopied] = useState(false);
  
  const markdownExample = `---
title: "我的第一篇文章"
date: "2024-01-15"
author: "张三"
tags: ["技术", "前端", "React"]
---

# 欢迎使用我们的平台

这是一个简单的 Markdown 文件示例。

## 功能特点

- ✅ **自动路由生成** - 文件路径即 URL 路径
- ✅ **语法高亮** - 支持代码块高亮显示
- ✅ **响应式设计** - 完美适配各种设备

\`\`\`javascript
// 这是一个代码示例
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

> 这是一个引用块，用于突出重要信息。

## 表格支持

| 功能 | 支持程度 | 说明 |
|------|----------|------|
| Markdown | ✅ | 完全支持 |
| 代码高亮 | ✅ | 多语言支持 |
| 数学公式 | ✅ | LaTeX 语法 |`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdownExample);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient">三步</span>搞定一切
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              从创建文件到发布网站，整个过程只需要几分钟
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Code editor mockup */}
            <div className="relative animate-slide-up">
              <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="flex items-center justify-between px-6 py-4 bg-[#2d2d2d] border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <FileText className="w-4 h-4" />
                    <span>posts/my-first-post.md</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center space-x-2 px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-gray-300 hover:text-white"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-xs">已复制</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-xs">复制</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-6">
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
                    <code>{markdownExample}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Steps */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    创建 Markdown 文件
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    在 <code className="px-2 py-1 bg-white/10 rounded text-purple-300">posts/</code> 目录中创建 <code className="px-2 py-1 bg-white/10 rounded text-purple-300">.md</code> 文件，添加您的内容
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    自动生成路由
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    系统自动检测文件变化，根据文件路径生成对应的网页路由
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                    即时访问网页
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    访问 <code className="px-2 py-1 bg-white/10 rounded text-green-300">/my-first-post</code> 即可查看渲染后的精美网页
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300 font-medium">实时预览</span>
                </div>
                <p className="text-gray-300 text-sm">
                  文件保存后，网页内容会自动更新，无需手动刷新页面
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
