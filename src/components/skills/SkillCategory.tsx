import { ReactNode } from 'react';
import ProgressBar from './ProgressBar';

interface Skill {
  title: string;
  percentage: number;
  icon: ReactNode;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl text-white mb-6 font-light">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <ProgressBar
            key={index}
            title={skill.title}
            percentage={skill.percentage}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
}