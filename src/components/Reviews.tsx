
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      avatar: '/placeholder.svg',
      name: '张明',
      username: '@zhangming',
      comment: 'Tech-Art 的产品真的很优秀，界面简洁，功能强大，而且完全免费！',
      rating: 5
    },
    {
      avatar: '/placeholder.svg',
      name: '李小雨',
      username: '@lixiaoyu',
      comment: '作为开发者，我非常欣赏他们的开源理念和对隐私保护的重视。',
      rating: 5
    },
    {
      avatar: '/placeholder.svg',
      name: '王建华',
      username: '@wangjianhua',
      comment: '部署速度真的很快，全球多地区的支持让我的用户体验大大提升。',
      rating: 5
    },
    {
      avatar: '/placeholder.svg',
      name: '陈思思',
      username: '@chensisi',
      comment: '没有广告的体验太棒了，这才是真正为用户着想的产品。',
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 square-pattern opacity-10" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            用户评价
          </h2>
          <p className="text-xl text-gray-400">
            看看用户对我们的评价
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback className="bg-white/10 text-white">
                        {review.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="text-white font-semibold">{review.name}</h4>
                          <p className="text-gray-400 text-sm">{review.username}</p>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
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
