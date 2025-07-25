import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useNavigate, Link } from 'react-router-dom';
import { siteConfig } from '@/config/siteConfig';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const Blog = () => {
  const { blogPosts, loading } = useBlogPosts();
  const navigate = useNavigate();

  const handlePostClick = (slug: string) => {
    navigate(`/${slug}`);
  };

  // Only show the latest three blog articles
  const recentPosts = blogPosts.slice(0, 3);

  if (loading) {
    return (
      <section id="blog" className="py-24 bg-black relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {siteConfig.blog.title}
          </h2>
          <p className="text-xl text-gray-400">
            {siteConfig.blog.subtitle}
          </p>
          <p className="text-lg text-gray-500 mt-2">
            {siteConfig.blog.description}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-full rounded-2xl border border-white/10 p-2"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                proximity={64}
                inactiveZone={0.01}
              />
              <div 
                className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm p-6 border border-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                onClick={() => handlePostClick(post.slug)}
              >
                <div className="relative flex flex-1 flex-col justify-between gap-4">
                  {post.tag && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Badge variant="secondary" className="w-fit mb-2 bg-white/10 text-white border-white/20">
                        {post.tag}
                      </Badge>
                    </motion.div>
                  )}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-gray-200 transition-colors">
                      {post.title}
                    </h3>
                    <div className="text-sm text-gray-500">{post.date}</div>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View more button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to={siteConfig.blog.viewAllButton.link}>
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white/20 hover:bg-white hover:text-black transition-all duration-200 group"
            >
              {siteConfig.blog.viewAllButton.text}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
