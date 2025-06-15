import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const About = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAboutContent = async () => {
      try {
        // 模拟加载markdown内容
        const aboutContent = `# About Tech-Art Studio

Tech-Art Studio is a cutting-edge technology company founded in China with a mission to revolutionize digital privacy and user experience. We believe that technology should empower users while protecting their fundamental right to privacy.

## Our Mission

At Tech-Art, we are dedicated to creating innovative solutions that prioritize user privacy without compromising functionality. Our main mission is to help protect your privacy in an increasingly connected world.

## What We Do

### Privacy-First Development
We build applications and tools with privacy as the foundational principle, not an afterthought. Every product we create is designed to minimize data collection and maximize user control.

### Open Source Commitment
We believe in the power of open source software. Many of our projects are freely available to the community, allowing for transparency, collaboration, and continuous improvement.

### User-Centric Design
Our products are designed with the end user in mind. We focus on creating intuitive, accessible, and efficient interfaces that anyone can use with confidence.

## Our Products

### One Calendar
A free, open-source scheduling solution that offers:
- Unlimited schedule storage
- AI-powered scheduling assistance
- Complete privacy protection
- Cloud backup with encryption
- Advanced analytics tools

### Secure Communication Tools
We develop various communication platforms that prioritize end-to-end encryption and user privacy.

## Our Values

**Privacy by Design**: Every product we create starts with privacy as the core principle.

**Transparency**: We believe in open development processes and clear communication about how our products work.

**Innovation**: We constantly push the boundaries of what's possible while maintaining our commitment to privacy.

**Community**: We actively contribute to and support the open source community.

## Why Choose Tech-Art?

In a world where many technology companies profit from user data, Tech-Art stands apart. We've built our business model around creating value for users, not exploiting their information. When you choose our products, you're choosing:

- Complete control over your data
- Transparent development practices
- Cutting-edge technology
- Responsive customer support
- A commitment to continuous improvement

## Contact Us

We're always excited to hear from our users and the broader community. Whether you have questions, feedback, or just want to learn more about what we do, we'd love to connect with you.

**Remember**: At Tech-Art, your privacy isn't just our priority—it's our promise.

---

*Tech-Art Studio - Opening a new world with code, protecting your privacy every step of the way.*`;
        
        setContent(aboutContent);
      } catch (error) {
        console.error('Error loading about content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAboutContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-8 py-12">
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
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
