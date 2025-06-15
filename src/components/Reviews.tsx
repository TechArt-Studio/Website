
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Pranav",
      username: "@pranavxmeta",
      avatar: "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/502083357_17894169378236066_7774365187428099235_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QHTR1YVEdmTxN16fnxWtzCGPjzYGZuq27pjtTuAaMVIm0vEGlApFJUp_6pmqfea0AM&_nc_ohc=FARal_xg3eEQ7kNvwG0XyRb&_nc_gid=cD7aHR_GT-wG8jlSt5WZcQ&edm=AAZTMJEBAAAA&ccb=7-5&oh=00_AfMuDNPrk5kYyP_SNSMnZXOneKQv9vdRDLV0dJLMIFtflw&oe=68544F66&_nc_sid=49cb7f",
      rating: 5,
      comment: "Tech-Art Studio has revolutionized my workflow. The quality and attention to detail in their products is outstanding!"
    },
    {
      name: "Luke",
      username: "@heylukeai",
      avatar: "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/491450505_17847124323460766_6452050202830559141_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QH3x0TtP02Yf9GOYE8DTRCVJQOYuiuQ7xWXu-xObXrlc2xTNFMTwJUcZ6eg2E3zHKE&_nc_ohc=3SJSOOMbCPQQ7kNvwFOVCQD&_nc_gid=TOhe5T0qBMDYUqGDAUrYxg&edm=AAZTMJEBAAAA&ccb=7-5&oh=00_AfPcB9zh8gCZzgESAInqQ68KwRdvx_CR9vLGqwEy8jHTqQ&oe=68544556&_nc_sid=49cb7f",
      rating: 5,
      comment: "Amazing user experience and innovative solutions. Tech-Art truly understands what developers need."
    },
    {
      name: "muahua",
      username: "@xiaomuahua666",
      avatar: "https://avatars.githubusercontent.com/u/109423710?v=4",
      rating: 5,
      comment: "The open source commitment and transparency of Tech-Art is exactly what the community needs. Highly recommended!"
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
