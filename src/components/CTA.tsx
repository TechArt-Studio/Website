
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CTA = () => {
  const handleJoinClick = () => {
    // Temporarily redirect to contact page, can be replaced with actual link later
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
            Join Tech-Art Now
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            Join us to open a new world of code and experience fast, simple, and free privacy protection solutions
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
              Join Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
