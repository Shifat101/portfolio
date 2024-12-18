import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProgressBarProps {
  percentage: number;
  icon: React.ReactNode;
  title: string;
}

export default function ProgressBar({ percentage, icon, title }: ProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-gray-400">{icon}</span>
          <h3 className="text-white font-medium">{title}</h3>
        </div>
        <span className="text-gray-400 text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}