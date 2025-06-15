
import React from 'react';

export const VercelLogo = ({ className }: { className?: string }) => (
  <svg 
    data-testid="geist-icon" 
    height="16" 
    strokeLinejoin="round" 
    style={{color: 'currentColor'}} 
    viewBox="0 0 16 16" 
    width="16"
    className={className}
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M8 1L16 15H0L8 1Z" 
      fill="currentColor"
    />
  </svg>
);

export const CloudflareLogo = ({ className }: { className?: string }) => (
  <img 
    src="https://registry.npmmirror.com/@lobehub/icons-static-png/1.47.0/files/dark/cloudflare-color.png"
    alt="Cloudflare"
    className={className}
    style={{ width: '16px', height: '16px' }}
  />
);
