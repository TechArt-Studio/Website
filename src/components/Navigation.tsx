
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '功能', href: '#features' },
    { name: '文档', href: '#docs' },
    { name: '示例', href: '#examples' },
    { name: '定价', href: '#pricing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 hero-gradient rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-gray-800 font-bold text-2xl">MarkdownStudio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-all duration-200 relative group text-lg font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-xl"
            >
              <Github className="w-6 h-6" />
            </a>
            
            <Button 
              size="lg"
              className="hero-gradient text-white border-0 px-8 py-3 text-lg font-semibold group rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              开始使用
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-xl"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 py-6 rounded-b-2xl shadow-xl">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 px-6 py-3 text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="flex items-center justify-between px-6 pt-6 border-t border-gray-200">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-xl"
                >
                  <Github className="w-6 h-6" />
                </a>
                
                <Button 
                  size="lg"
                  className="hero-gradient text-white border-0 px-8 py-3 text-lg font-semibold rounded-xl"
                >
                  开始使用
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
