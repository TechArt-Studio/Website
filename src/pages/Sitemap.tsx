
import { useEffect } from 'react';
import { useSitemap } from '@/hooks/useSitemap';

const Sitemap = () => {
  const { sitemap } = useSitemap();

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
      {sitemap}
    </div>
  );
};

export default Sitemap;
