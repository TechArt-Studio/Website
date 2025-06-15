
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const Reviews = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 square-pattern opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {siteConfig.reviews.title}
          </h2>
          <p className="text-xl text-gray-400">
            {siteConfig.reviews.subtitle}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {siteConfig.reviews.items.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback className="bg-white/10 text-white">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white font-semibold">{review.name}</div>
                      <div className="text-gray-400 text-sm">{review.username}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    "{review.comment}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
