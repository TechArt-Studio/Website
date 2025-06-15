
import React, { useState } from 'react';
import { Copy, Check, ArrowRight } from 'lucide-react';

const CodeDemo = () => {
  const [copied, setCopied] = useState(false);
  
  const markdownExample = `---
title: "Getting Started"
date: "2024-01-15"
---

# Welcome to MarkdownStudio

Transform your ideas into beautiful web pages
with zero configuration.

## Features

- **Instant Publishing** - Save and see changes immediately
- **Clean URLs** - File paths become website routes  
- **Responsive Design** - Looks great on every device

\`\`\`javascript
// Your content becomes a website automatically
const magic = "It just works";
\`\`\`

> Ready to get started? Create your first post!`;

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Code editor */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">
                  posts/getting-started.md
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-gray-300 hover:text-white"
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
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
                Three steps to publish
              </h2>
              <p className="text-xl text-gray-600 font-light">
                From idea to live website in minutes, not hours
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Write Markdown
                  </h3>
                  <p className="text-gray-600">
                    Create a <code className="px-2 py-1 bg-gray-100 rounded text-black font-mono">.md</code> file in your posts directory
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Save File
                  </h3>
                  <p className="text-gray-600">
                    Our system automatically detects changes and generates routes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Visit URL
                  </h3>
                  <p className="text-gray-600">
                    Your content is instantly available at the corresponding URL
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="#" 
                className="inline-flex items-center text-black hover:text-gray-600 transition-colors font-medium"
              >
                See full documentation
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
