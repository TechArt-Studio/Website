
import { useState, useEffect } from 'react';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  tag?: string;
  content: string;
  slug: string;
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // 模拟从markdown文件加载博客文章
        const mockPosts: BlogPost[] = [
          {
            title: "Welcome to Open Workspace: Redefining Collaboration and Creativity",
            description: "Welcome to Open Workspace: Redefining Collaboration and Creativity",
            date: "2024-01-15",
            content: "Open Workspace represents a new paradigm in collaborative software development...",
            slug: "welcome-to-open-workspace"
          },
          {
            title: "Introducing One Calendar: Your Ultimate Scheduling Solution",
            description: "One Calendar is a free, open-source scheduling tool developed by the Tech-Art community. It offers comprehensive features including unlimited schedule storage, AI-powered scheduling assistance, unlimited sharing capabilities, analytics tools, and cloud backup.",
            date: "2024-02-01",
            content: "One Calendar is revolutionizing the way we manage our time and schedules...",
            slug: "introducing-one-calendar"
          },
          {
            title: "TOTP: Time-Based One-Time Password",
            description: "TOTP (Time-Based One-Time Password) enhances 2FA security by generating a temporary 6-digit code based on the current time and a shared secret key. It offers offline password generation but requires time synchronization and secure key storage to mitigate risks.",
            date: "2024-01-20",
            content: "Time-Based One-Time Password (TOTP) is a critical component of modern two-factor authentication systems...",
            slug: "totp-security"
          }
        ];

        // 按日期排序，最新的在前
        const sortedPosts = mockPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(sortedPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, loading };
};
