
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogList = () => {
  const { posts, loading } = useBlogPosts();
  const navigate = useNavigate();

  const handlePostClick = (slug: string) => {
    navigate(`/${slug}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              All Blog Posts
            </h1>
            <p className="text-xl text-gray-400">
              Press and Media
            </p>
            <p className="text-lg text-gray-500 mt-2">
              Here we will release the latest news about Tech-Art Studio, including new trends, new future plans, and new features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm h-full group cursor-pointer"
                  onClick={() => handlePostClick(post.slug)}
                >
                  <CardHeader>
                    {post.tag && (
                      <Badge variant="secondary" className="w-fit mb-2 bg-white/10 text-white border-white/20">
                        {post.tag}
                      </Badge>
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
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xs">T</span>
                </div>
                <span className="text-white font-semibold">Tech Art</span>
              </div>
              <p className="text-gray-400 text-sm">
                Open a new world with code.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>One Calendar</li>
                <li>Mail</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Team</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About us</li>
                <li>Join us</li>
                <li>Open Source</li>
                <li>Sustainability</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resource</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Press and Media</li>
                <li>Contact us</li>
                <li>Help & Docs</li>
                <li>Live Help</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Tech-Art Studio. Protecting your privacy.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogList;
