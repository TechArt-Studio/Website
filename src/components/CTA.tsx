
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CTA = () => {
  const handleJoinClick = () => {
    // 暂时跳转到联系页面，后续可以更换为实际链接
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Square pattern background */}
      <div className="absolute inset-0 square-pattern-subtle opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            现在加入 Tech-Art
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            与我们一起开启代码新世界，体验快速、简单、免费的隐私保护解决方案
          </p>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button 
              size="lg" 
              onClick={handleJoinClick}
              className="bg-white text-black hover:bg-gray-100 border-0 px-8 py-4 text-lg font-medium transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl group"
            >
              立即加入
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
