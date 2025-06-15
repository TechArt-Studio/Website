
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const posts = [
    {
      title: "Welcome to Open Workspace: Redefining Collaboration and Creativity",
      description: "Welcome to Open Workspace: Redefining Collaboration and Creativity",
      tag: "1"
    },
    {
      title: "Introducing One Calendar: Your Ultimate Scheduling Solution",
      description: "One Calendar is a free, open-source scheduling tool developed by the Tech-Art community. It offers comprehensive features including unlimited schedule storage, AI-powered scheduling assistance, unlimited sharing capabilities, analytics tools, and cloud backup."
    },
    {
      title: "TOTP: Time-Based One-Time Password",
      description: "TOTP (Time-Based One-Time Password) enhances 2FA security by generating a temporary 6-digit code based on the current time and a shared secret key. It offers offline password generation but requires time synchronization and secure key storage to mitigate risks."
    }
  ];

  return (
    <section id="blog" className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Blog
          </h2>
          <p className="text-xl text-gray-400">
            Press and Media
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Here we will release the latest news about Tech-Art Studio, including new trends, new future plans, and new features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm h-full">
              <CardHeader>
                {post.tag && (
                  <Badge variant="secondary" className="w-fit mb-2 bg-white/10 text-white border-white/20">
                    {post.tag}
                  </Badge>
                )}
                <CardTitle className="text-lg font-semibold text-white leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {post.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
