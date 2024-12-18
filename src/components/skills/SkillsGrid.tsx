import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Pen, PieChart, BarChart3, Layout, Image, Palette, Type, Camera, Box } from 'lucide-react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  icon: React.ReactNode;
  index: number;
}

function SkillBar({ skill, percentage, icon, index }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-3"
    >
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          className="text-gray-400"
        >
          {icon}
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
              className="text-white text-sm truncate"
            >
              {skill}
            </motion.h3>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              className="text-gray-400 text-xs whitespace-nowrap"
            >
              {percentage}%
            </motion.span>
          </div>
          <div className="h-0.5 bg-white/10 rounded-full overflow-hidden mt-1">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsGrid() {
  const skills = [
    { skill: "Presentation Design", percentage: 98, icon: <Monitor className="w-4 h-4" /> },
    { skill: "Animation", percentage: 96, icon: <Pen className="w-4 h-4" /> },
    { skill: "Infographic & Data Visualization", percentage: 85, icon: <Image className="w-4 h-4" /> },
    { skill: "Illustration & Icon Design", percentage: 95, icon: <PieChart className="w-4 h-4" /> },
    { skill: "Charts & Data Analysis", percentage: 93, icon: <BarChart3 className="w-4 h-4" /> },
    { skill: "Brand Consistency", percentage: 92, icon: <Layout className="w-4 h-4" /> },
    { skill: "Content Writing & Organizing", percentage: 88, icon: <Type className="w-4 h-4" /> },
    { skill: "Visual Hierarchy", percentage: 96, icon: <Box className="w-4 h-4" /> },
    { skill: "Storytelling", percentage: 86, icon: <Camera className="w-4 h-4" /> },
    { skill: "Typography", percentage: 94, icon: <Palette className="w-4 h-4" /> }
  ];

  return (
    <div className="grid grid-cols-2 gap-x-6">
      {skills.map((skill, index) => (
        <SkillBar key={index} {...skill} index={index} />
      ))}
    </div>
  );
}