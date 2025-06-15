
import { useEffect } from 'react';
import { useSitemap } from '@/hooks/useSitemap';

const Sitemap = () => {
  const { sitemap } = useSitemap();

  useEffect(() => {
    // 设置正确的 content-type
    document.contentType = 'application/xml';
  }, []);

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
      {sitemap}
    </div>
  );
};

export default Sitemap;
