
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

### Getting Started

To get started with Open Workspace, simply create an account and start collaborating with your team. The interface is intuitive and easy to use, so you can focus on what matters most - your work.

#### Benefits

1. Increased productivity
2. Better team communication
3. Streamlined workflows
4. Enhanced creativity

> "Open Workspace has transformed the way our team works together. It's incredible how much more productive we've become." - Sarah Johnson, Lead Developer

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
Never worry about running out of space for your events and appointments. Store as many events as you need without any limitations.

### AI-Powered Scheduling
Our intelligent assistant helps you find the perfect time slots for your meetings by analyzing your calendar patterns and preferences.

### Unlimited Sharing
Share your calendars with team members, family, and friends without any restrictions. Collaborate seamlessly across different groups.

### Analytics Tools
Gain insights into how you spend your time with our comprehensive analytics:

- Time tracking
- Productivity metrics
- Meeting frequency analysis
- Goal tracking

### Cloud Backup
Your data is automatically backed up to the cloud for peace of mind. Never lose your important schedule information.

## Getting Started

1. Download One Calendar from our website
2. Create your account
3. Import your existing calendars
4. Start scheduling with AI assistance

> **Pro Tip**: Use our AI scheduling feature to automatically find the best meeting times for all participants.

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

### The Algorithm

The TOTP algorithm follows these steps:

1. **Time Step Calculation**: \`T = (Current Unix Time - T0) / X\`
   - T0 = Unix time start (usually 0)
   - X = Time step (usually 30 seconds)

2. **HMAC Generation**: \`HMAC = HMAC-SHA1(Secret, T)\`

3. **Code Extraction**: Extract 6 digits from the HMAC

## Advantages

- **Offline Generation**: No internet connection required
- **Enhanced Security**: Codes expire quickly (30 seconds)
- **Wide Support**: Compatible with most authenticator apps
- **Standardized**: Based on RFC 6238

## Security Considerations

### Time Synchronization
Devices must have accurate time. A few seconds of drift is usually acceptable, but large discrepancies will cause authentication failures.

### Key Storage
Secret keys must be stored securely:
- Use secure enclaves when available
- Encrypt keys at rest
- Implement proper access controls

### Backup Codes
Always have backup authentication methods:
- Recovery codes
- Alternative authentication methods
- Account recovery procedures

## Implementation Example

\`\`\`javascript
function generateTOTP(secret, timeStep = 30) {
  const time = Math.floor(Date.now() / 1000);
  const counter = Math.floor(time / timeStep);
  
  // Generate HMAC-SHA1
  const hmac = crypto.createHmac('sha1', secret);
  hmac.update(Buffer.from(counter.toString(16).padStart(16, '0'), 'hex'));
  const hash = hmac.digest();
  
  // Extract 6-digit code
  const offset = hash[hash.length - 1] & 0xf;
  const code = ((hash[offset] & 0x7f) << 24) |
               ((hash[offset + 1] & 0xff) << 16) |
               ((hash[offset + 2] & 0xff) << 8) |
               (hash[offset + 3] & 0xff);
  
  return (code % 1000000).toString().padStart(6, '0');
}
\`\`\`

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
            <div className="text-gray-400 mb-8">{post.date}</div>
            <div className="markdown-content">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({children}) => <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{children}</h1>,
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
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
