
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-lg">▲</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">MarkdownStudio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5"
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/5">
              <Mail className="w-5 h-5" />
            </Button>
            
            <Button 
              size="sm"
              className="bg-white text-black hover:bg-gray-100 border-0 px-6 py-2 text-sm font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gray-300 hover:bg-white/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 py-6 rounded-b-2xl mt-2">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-white/5 justify-start px-4 py-3 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Button>
              ))}
              
              <div className="flex items-center justify-between px-4 pt-4 border-t border-white/10">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/5">
                  <Mail className="w-5 h-5" />
                </Button>
                
                <Button 
                  size="sm"
                  className="bg-white text-black hover:bg-gray-100 border-0 px-6 py-2 text-sm font-medium rounded-xl"
                >
                  Let's Talk
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
