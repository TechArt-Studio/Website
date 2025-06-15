
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navigation from '@/components/Navigation';
import { siteConfig } from '@/config/siteConfig';

const About = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAboutContent = async () => {
      try {
        // 从 markdown 文件加载内容
        const response = await fetch('/src/posts/about.md');
        const text = await response.text();
        
        // 移除 frontmatter (--- 之间的内容)
        const contentWithoutFrontmatter = text.replace(/^---[\s\S]*?---\n/, '');
        
        setContent(contentWithoutFrontmatter);
      } catch (error) {
        console.error('Error loading about content:', error);
        // 如果加载失败，使用备用内容
        const fallbackContent = `# About Tech-Art Studio

Tech-Art Studio is a cutting-edge technology company founded in China with a mission to revolutionize digital development and user experience. We believe that technology should empower users and provide exceptional functionality.

## Our Mission

At Tech-Art, we are dedicated to creating innovative solutions that prioritize excellent user experience without compromising functionality. Our main mission is to help you build amazing applications in an increasingly connected world.

## What We Do

### Quality-First Development
We build applications and tools with quality as the foundational principle, not an afterthought. Every product we create is designed to provide maximum value and user satisfaction.

### Open Source Commitment
We believe in the power of open source software. Many of our projects are freely available to the community, allowing for transparency, collaboration, and continuous improvement.

### User-Centric Design
Our products are designed with the end user in mind. We focus on creating intuitive, accessible, and efficient interfaces that anyone can use with confidence.

## Our Products

### One Calendar
A free, open-source scheduling solution that offers:
- Unlimited schedule storage
- AI-powered scheduling assistance
- Complete data control
- Cloud backup with encryption
- Advanced analytics tools

### Communication Tools
We develop various communication platforms that prioritize user experience and functionality.

## Our Values

**Quality by Design**: Every product we create starts with quality as the core principle.

**Transparency**: We believe in open development processes and clear communication about how our products work.

**Innovation**: We constantly push the boundaries of what's possible while maintaining our commitment to excellence.

**Community**: We actively contribute to and support the open source community.

## Why Choose Tech-Art?

In a world where many technology companies focus on complex solutions, Tech-Art stands apart. We've built our business model around creating value for users through simplicity and effectiveness. When you choose our products, you're choosing:

- Complete control over your experience
- Transparent development practices
- Cutting-edge technology
- Responsive customer support  
- A commitment to continuous improvement

## Contact Us

We're always excited to hear from our users and the broader community. Whether you have questions, feedback, or just want to learn more about what we do, we'd love to connect with you.

**Remember**: At Tech-Art, your satisfaction isn't just our priority—it's our promise.

---

*Tech-Art Studio - Opening a new world with code, building exceptional experiences every step of the way.*`;
        
        setContent(fallbackContent);
      } finally {
        setLoading(false);
      }
    };

    loadAboutContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-8 py-12 pt-24">
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
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({children}) => <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8">{children}</h1>,
                h2: ({children}) => <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-8">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl md:text-2xl font-bold text-white mb-3 mt-6">{children}</h3>,
                h4: ({children}) => <h4 className="text-lg md:text-xl font-bold text-white mb-2 mt-4">{children}</h4>,
                p: ({children}) => <p className="text-gray-300 leading-relaxed mb-4">{children}</p>,
                ul: ({children}) => <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">{children}</ul>,
                ol: ({children}) => <ol className="text-gray-300 mb-4 list-decimal list-inside space-y-2">{children}</ol>,
                li: ({children}) => <li className="text-gray-300">{children}</li>,
                strong: ({children}) => <strong className="text-white font-semibold">{children}</strong>,
                code: ({children}) => <code className="bg-gray-800 text-gray-200 px-2 py-1 rounded text-sm">{children}</code>,
                pre: ({children}) => <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto mb-4">{children}</pre>,
                blockquote: ({children}) => <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400 mb-4">{children}</blockquote>,
                a: ({href, children}) => <a href={href} className="text-blue-400 hover:text-blue-300 underline">{children}</a>,
                hr: () => <hr className="border-gray-600 my-8" />,
                em: ({children}) => <em className="text-gray-400 italic">{children}</em>,
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
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
                <span className="text-white font-semibold">{siteConfig.site.name}</span>
              </div>
              <p className="text-gray-400 text-sm">
                {siteConfig.site.tagline}
              </p>
            </div>
            
            {siteConfig.footer.sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.link} className="hover:text-white transition-colors">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {siteConfig.footer.copyright}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
