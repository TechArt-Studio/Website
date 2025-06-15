
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  tag?: string;
  content: string;
  slug: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        // 模拟从markdown文件加载博客文章
        const mockPosts: BlogPost[] = [
          {
            title: "Welcome to Open Workspace: Redefining Collaboration and Creativity",
            description: "Welcome to Open Workspace: Redefining Collaboration and Creativity",
            date: "2024-01-15",
            tag: "1",
            content: `# Welcome to Open Workspace: Redefining Collaboration and Creativity

Open Workspace represents a new paradigm in collaborative software development and creative work. Our platform is designed to break down barriers between teams and enable seamless collaboration across different disciplines.

## Key Features

- **Real-time collaboration**: Work together in real-time with your team members
- **Cross-platform compatibility**: Access your workspace from any device
- **Advanced project management**: Keep track of your projects with our intuitive tools
- **Secure and reliable**: Your data is protected with enterprise-grade security

Join us as we redefine what it means to work together in the digital age.`,
            slug: "welcome-to-open-workspace"
          },
          {
            title: "Introducing One Calendar: Your Ultimate Scheduling Solution",
            description: "One Calendar is a free, open-source scheduling tool developed by the Tech-Art community. It offers comprehensive features including unlimited schedule storage, AI-powered scheduling assistance, unlimited sharing capabilities, analytics tools, and cloud backup.",
            date: "2024-02-01",
            content: `# Introducing One Calendar: Your Ultimate Scheduling Solution

One Calendar is revolutionizing the way we manage our time and schedules. Built by the Tech-Art community, this free and open-source tool provides everything you need for effective scheduling.

## Features

### Unlimited Schedule Storage
Never worry about running out of space for your events and appointments.

### AI-Powered Scheduling
Our intelligent assistant helps you find the perfect time slots for your meetings.

### Unlimited Sharing
Share your calendars with team members, family, and friends without any restrictions.

### Analytics Tools
Gain insights into how you spend your time with our comprehensive analytics.

### Cloud Backup
Your data is automatically backed up to the cloud for peace of mind.

Get started with One Calendar today and experience the future of scheduling.`,
            slug: "introducing-one-calendar"
          },
          {
            title: "TOTP: Time-Based One-Time Password",
            description: "TOTP (Time-Based One-Time Password) enhances 2FA security by generating a temporary 6-digit code based on the current time and a shared secret key. It offers offline password generation but requires time synchronization and secure key storage to mitigate risks.",
            date: "2024-01-20",
            content: `# TOTP: Time-Based One-Time Password

Time-Based One-Time Password (TOTP) is a critical component of modern two-factor authentication systems. It provides an additional layer of security by generating temporary, time-sensitive codes.

## How TOTP Works

TOTP generates a unique 6-digit code every 30 seconds based on:
- Current time
- Shared secret key
- HMAC-SHA1 algorithm

## Advantages

- **Offline Generation**: No internet connection required
- **Enhanced Security**: Codes expire quickly
- **Wide Support**: Compatible with most authenticator apps

## Security Considerations

- **Time Synchronization**: Devices must have accurate time
- **Key Storage**: Secret keys must be stored securely
- **Backup Codes**: Always have backup authentication methods

TOTP remains one of the most reliable forms of two-factor authentication available today.`,
            slug: "totp-security"
          }
        ];

        const foundPost = mockPosts.find(p => p.slug === slug);
        setPost(foundPost || null);
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
          
          <article className="prose prose-invert prose-lg max-w-none">
            {post.tag && (
              <span className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-sm mb-4">
                {post.tag}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-gray-400 mb-8">{post.date}</p>
            <div 
              className="text-gray-300 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
            />
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
