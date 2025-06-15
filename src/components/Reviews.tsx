
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const Reviews = () => {
  const reviews = [
    {
      name: "Pranav",
      username: "@pranavxmeta",
      avatar: "/lovable-uploads/2de234b1-b328-4458-a6fc-9a68e1f868d9.png",
      rating: 5,
      comment: "Perfect 👍"
    },
    {
      name: "Luke",
      username: "@heylukeai",
      avatar: "/lovable-uploads/5d1b6d88-ab5b-4dae-b6da-2378b7b7160b.png",
      rating: 5,
      comment: "I love it"
    },
    {
      name: "muahua",
      username: "@xiaomuahua666",
      avatar: "https://avatars.githubusercontent.com/u/109423710?v=4",
      rating: 5,
      comment: "The product is so easy to use, and the developers are very approachable"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Users Say
          </h2>
          <p className="text-xl text-gray-400">
            Testimonials from our community
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <GlowingEffect
                blur={3}
                spread={20}
                proximity={50}
                disabled={false}
                className="rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm h-full group relative">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{review.comment}"
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10 mr-3 bg-white/20">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback className="text-white text-sm font-semibold bg-transparent">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-white font-medium">{review.name}</h4>
                      <p className="text-gray-400 text-sm">{review.username}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
