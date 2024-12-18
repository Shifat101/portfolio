import { Github, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navigation() {
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const headerY = useTransform(scrollY, [0, 100], [0, -100]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.8]);
  
  return (
    <nav className="fixed top-0 w-full px-8 py-6 flex items-center justify-between z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <motion.div 
        style={{ 
          opacity: headerOpacity,
          y: headerY,
          scale: headerScale,
        }}
        className="flex items-center space-x-2"
      >
        <h1 className="text-xl font-medium text-white">Sazzat Zilan Sifat</h1>
        <p className="text-gray-400">Presentation Designer</p>
      </motion.div>

      <div className="flex items-center space-x-6">
        <Link 
          to="/work" 
          className={`text-gray-300 hover:text-white transition-colors ${location.pathname === '/work' ? 'text-white' : ''}`}
        >
          Work
        </Link>
        <Link 
          to="/about"
          className={`text-gray-300 hover:text-white transition-colors ${location.pathname === '/about' ? 'text-white' : ''}`}
        >
          Info
        </Link>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
          Contact
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}