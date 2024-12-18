import { Palette, Pen, FileText, LayoutList, MessageCircle, Image, Shapes, PieChart, BarChart3, Camera, Type, Monitor } from 'lucide-react';
import SkillCategory from './SkillCategory';

const designSkills = [
  { title: 'Presentation Design', percentage: 95, icon: <Monitor className="w-5 h-5" /> },
  { title: 'Visual Hierarchy', percentage: 94, icon: <LayoutList className="w-5 h-5" /> },
  { title: 'Brand Consistency', percentage: 91, icon: <Palette className="w-5 h-5" /> },
  { title: 'Typography', percentage: 88, icon: <Type className="w-5 h-5" /> },
];

const contentSkills = [
  { title: 'Content Writing', percentage: 85, icon: <Pen className="w-5 h-5" /> },
  { title: 'Content Organizing', percentage: 92, icon: <LayoutList className="w-5 h-5" /> },
  { title: 'Storytelling', percentage: 88, icon: <MessageCircle className="w-5 h-5" /> },
];

const technicalSkills = [
  { title: 'Animation', percentage: 90, icon: <Shapes className="w-5 h-5" /> },
  { title: 'Infographic Design', percentage: 93, icon: <PieChart className="w-5 h-5" /> },
  { title: 'Chart & Data Analysis', percentage: 89, icon: <BarChart3 className="w-5 h-5" /> },
  { title: 'Software Proficiency', percentage: 96, icon: <Monitor className="w-5 h-5" /> },
];

const visualSkills = [
  { title: 'Illustration', percentage: 82, icon: <Image className="w-5 h-5" /> },
  { title: 'Icon Design', percentage: 87, icon: <Shapes className="w-5 h-5" /> },
  { title: 'Photo Editing', percentage: 86, icon: <Camera className="w-5 h-5" /> },
];

export default function SkillsSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl text-white mb-12 font-light">Key Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <div>
            <SkillCategory title="Design" skills={designSkills} />
            <SkillCategory title="Content" skills={contentSkills} />
          </div>
          <div>
            <SkillCategory title="Technical" skills={technicalSkills} />
            <SkillCategory title="Visual" skills={visualSkills} />
          </div>
        </div>
      </div>
    </section>
  );
}