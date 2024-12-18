import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillCircleProps {
  percentage: number;
  icon: React.ReactNode;
  title: string;
}

export default function SkillCircle({ percentage, icon, title }: SkillCircleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center p-4">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="stroke-white/10"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            className="stroke-white"
            strokeWidth="8"
            fill="none"
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeDasharray={circumference}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
      <h3 className="mt-4 text-white font-medium">{title}</h3>
      <p className="text-gray-400 text-sm">{percentage}%</p>
    </div>
  );
}