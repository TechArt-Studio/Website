
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useSitemap } from '@/hooks/useSitemap';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Search, Download } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const BlogList = () => {
  const { blogPosts, loading } = useBlogPosts();
  const { downloadSitemap } = useSitemap();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handlePostClick = (slug: string) => {
    navigate(`/${slug}`);
  };

  // 过滤博客文章
  const filteredPosts = useMemo(() => {
    if (!searchQuery) return blogPosts;
    
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tag && post.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [blogPosts, searchQuery]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-white">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 py-12 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <Link 
              to="/"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <Button
              onClick={downloadSitemap}
              variant="outline"
              size="sm"
              className="text-white border-white/20 hover:bg-white hover:text-black"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Sitemap
            </Button>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-400">
              Press and Media
            </p>
            <p className="text-lg text-gray-500 mt-2">
              Here we will release the latest news about Tech-Art Studio, including new trends, new future plans, and new features.
            </p>
          </div>
          
          {/* 搜索框 */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-white/20 focus:bg-white/10"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
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
          
          {filteredPosts.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <p className="text-gray-400">No blog posts found matching your search.</p>
            </div>
          )}
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogList;
