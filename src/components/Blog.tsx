
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const { posts, loading } = useBlogPosts();
  const navigate = useNavigate();

  const handlePostClick = (slug: string) => {
    navigate(`/${slug}`);
  };

  // 只显示最近三篇文章
  const recentPosts = posts.slice(0, 3);

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
            Our Blog
          </h2>
          <p className="text-xl text-gray-400">
            Press and Media
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Here we will release the latest news about Tech-Art Studio, including new trends, new future plans, and new features.
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
            >
              <Card 
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm h-full group cursor-pointer"
                onClick={() => handlePostClick(post.slug)}
              >
                <CardHeader>
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
                  <CardTitle className="text-lg font-semibold text-white leading-tight group-hover:text-gray-200 transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="text-sm text-gray-500">{post.date}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* 查看更多按钮 */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/blog">
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white/20 hover:bg-white hover:text-black transition-all duration-200 group"
            >
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
