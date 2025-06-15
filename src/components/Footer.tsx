
import React from 'react';
import { siteConfig } from '@/config/siteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={siteConfig.site.logo} 
                alt="Tech-Art Logo" 
                className="w-6 h-6"
              />
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
  );
};

export default Footer;
