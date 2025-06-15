
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
      
      // 首先关闭移动端菜单
      setIsOpen(false);
      
      // 延迟执行滚动，确保菜单关闭动画完成
      setTimeout(() => {
        const element = document.getElementById(targetId);
        console.log('Found element:', element);
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else {
          // 如果找不到确切的 id，尝试查找包含该 id 的 section
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
      }, 300); // 等待菜单关闭动画
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

          {/* Desktop About Button */}
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

          {/* Mobile Menu Button - 重新设计的移动端菜单按钮 */}
          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 hover:bg-white/10 p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation - 全新设计的移动端菜单 */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <button
                      className="w-full text-left text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 text-base rounded-lg transition-all duration-200"
                      onClick={() => handleSmoothScroll(item.href)}
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
                
                {/* Mobile About Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="pt-4 border-t border-white/10"
                >
                  <Link to="/about" onClick={() => setIsOpen(false)}>
                    <Button 
                      variant="outline" 
                      className="w-full text-white border-white/20 hover:bg-white hover:text-black transition-all duration-200"
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
