import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedHeader() {
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, -50]);
  
  return (
    <motion.div 
      style={{ opacity, y }}
      className="fixed top-0 left-0 w-full px-8 py-6 z-40 pointer-events-none"
    >
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-medium text-white">Sazzat Zilan Sifat</h1>
        <p className="text-gray-400">Developer</p>
      </div>
    </motion.div>
  );
}