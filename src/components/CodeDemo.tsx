
import React, { useState } from 'react';
import { Copy, Check, ArrowRight } from 'lucide-react';

const CodeDemo = () => {
  const [copied, setCopied] = useState(false);
  
  const markdownExample = `---
title: "Brand Identity Project"
client: "Tech Startup"
date: "2024-01-15"
---

# Redefining Digital Presence

A complete brand overhaul focusing on 
modern aesthetics and user experience.

## Our Approach

- **Research & Strategy** - Understanding the market
- **Visual Identity** - Creating memorable designs  
- **Development** - Building responsive experiences

\`\`\`css
.brand-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
\`\`\`

> The result: 300% increase in user engagement`;

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
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Code editor */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900/80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between px-6 py-4 bg-gray-800/80 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">
                  posts/project-showcase.md
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-gray-300 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-xs">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-xs">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-6">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                  {markdownExample}
                </pre>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                From concept to creation
              </h2>
              <p className="text-xl text-gray-400 font-light">
                Watch your Markdown files transform into stunning portfolio pieces
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Write Content
                  </h3>
                  <p className="text-gray-400">
                    Create project descriptions in <code className="px-2 py-1 bg-white/10 rounded text-white font-mono">.md</code> format
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Auto-Generate
                  </h3>
                  <p className="text-gray-400">
                    Our system converts your content into beautiful web pages
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Share & Showcase
                  </h3>
                  <p className="text-gray-400">
                    Present your work with professional, responsive layouts
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="#" 
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors font-medium"
              >
                View our portfolio
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
