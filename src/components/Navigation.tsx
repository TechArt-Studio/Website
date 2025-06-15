
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/siteConfig';
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
    { name: 'Products', href: '#products' },
    { name: 'About us', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - clickable and links to homepage */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src={siteConfig.site.logo} 
              alt="Tech-Art Logo" 
              className="w-8 h-8"
            />
            <span className="text-white font-bold text-xl">Tech-Art</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={item.name}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      <NavigationMenuLink
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSmoothScroll(item.href);
                        }}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer"
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* About Button - Desktop */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/about">
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white hover:text-black transition-all duration-200">
                About
              </Button>
            </Link>
          </motion.div>

          {/* Mobile - Right side button group */}
          <div className="md:hidden flex items-center space-x-3 mr-2">
            <Link to="/about">
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white hover:text-black transition-all duration-200 text-xs px-3 py-2">
                About
              </Button>
            </Link>
            
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 hover:bg-white/10 p-2"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 py-6 px-4 rounded-b-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Button
                      variant="ghost"
                      className="text-gray-300 hover:text-white hover:bg-white/10 justify-start px-4 py-3 text-base w-full rounded-lg transition-all duration-200"
                      onClick={() => handleSmoothScroll(item.href)}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
