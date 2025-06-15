
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
    console.log('Attempting to scroll to:', href);
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      console.log('Target ID:', targetId);
      
      setIsOpen(false);
      
      setTimeout(() => {
        const element = document.getElementById(targetId);
        console.log('Found element:', element);
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else {
          const sections = document.querySelectorAll('section');
          console.log('All sections:', sections);
          
          const targetSection = Array.from(sections).find(section => {
            const sectionId = section.id;
            const dataSection = section.getAttribute('data-section');
            console.log('Checking section:', sectionId, dataSection);
            
            return sectionId === targetId || 
                   section.querySelector(`#${targetId}`) ||
                   dataSection === targetId;
          });
          
          console.log('Found target section:', targetSection);
          
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          } else {
            console.warn(`No section found for ${targetId}`);
          }
        }
      }, 300);
    }
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
        {/* Mobile Layout - 修复布局问题 */}
        <div className="md:hidden flex items-center justify-between h-16">
          {/* Mobile Menu Button - 固定左边位置 */}
          <motion.div whileTap={{ scale: 0.9 }} className="flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 hover:bg-white/10 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </motion.div>

          {/* Logo - 使用flex居中而不是绝对定位 */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img 
                src={siteConfig.site.logo} 
                alt="Tech-Art Logo" 
                className="w-7 h-7"
              />
              <span className="text-white font-bold text-lg">Tech-Art</span>
            </Link>
          </div>

          {/* About Button - 固定右边位置 */}
          <div className="flex-shrink-0">
            <Link to="/about">
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white hover:text-black transition-all duration-200 text-xs px-3 py-1.5">
                About
              </Button>
            </Link>
          </div>
        </div>

        {/* Desktop Layout - 保持原样 */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src={siteConfig.site.logo} 
              alt="Tech-Art Logo" 
              className="w-8 h-8"
            />
            <span className="text-white font-bold text-xl">Tech-Art</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
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

          {/* Desktop About Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/about">
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white hover:text-black transition-all duration-200">
                About
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu - 全屏覆盖式设计 */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-xl z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-8 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <button
                      className="w-full text-left text-gray-300 hover:text-white hover:bg-white/10 px-4 py-4 text-lg rounded-lg transition-all duration-200 font-medium"
                      onClick={() => handleSmoothScroll(item.href)}
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="pt-6 border-t border-white/10"
                >
                  <Link to="/about" onClick={() => setIsOpen(false)}>
                    <Button 
                      variant="outline" 
                      className="w-full text-white border-white/20 hover:bg-white hover:text-black transition-all duration-200 py-4 text-lg font-medium"
                    >
                      About
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
