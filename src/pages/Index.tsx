
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Team from '@/components/Team';
import Blog from '@/components/Blog';
import PoweredBy from '@/components/PoweredBy';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import { siteConfig } from '@/config/siteConfig';

const Index = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Reviews />
      <FAQ />
      <Team />
      <Blog />
      <PoweredBy />
      <Contact />
      <CTA />
      
      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
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
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-white/10">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {siteConfig.footer.copyright}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
