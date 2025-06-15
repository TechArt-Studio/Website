
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
          <p className="text-xl text-gray-400 mb-8">Oops! Page not found</p>
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Return to Home
          </a>
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
              <motion.div
                key={index}
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h4 className="text-white font-semibold">{section.title}</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.link} className="hover:text-white transition-colors">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
                </motion.div>
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

export default NotFound;
