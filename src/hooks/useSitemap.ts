
import { useState, useEffect } from 'react';
import { useBlogPosts } from './useBlogPosts';

export const useSitemap = () => {
  const { posts } = useBlogPosts();
  const [sitemap, setSitemap] = useState<string>('');

  useEffect(() => {
    const generateSitemap = () => {
      const baseUrl = window.location.origin;
      const currentDate = new Date().toISOString().split('T')[0];
      
      // Filter posts that should be included in sitemap
      const sitemapPosts = posts.filter(post => post.sitemap);
      
      const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
${sitemapPosts.map(post => `  <url>
    <loc>${baseUrl}/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${post.type === 'blog' ? '0.6' : '0.5'}</priority>
  </url>`).join('\n')}
</urlset>`;

      setSitemap(sitemapContent);
    };

    if (posts.length > 0) {
      generateSitemap();
    }
  }, [posts]);

  const downloadSitemap = () => {
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return { sitemap, downloadSitemap };
};
