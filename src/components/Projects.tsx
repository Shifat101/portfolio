import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  period: string;
  role: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    period: "2023 - Present",
    role: "Lead Developer",
    description: "Built a scalable e-commerce platform serving over 100k monthly users.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80"
  }
];

export default function Projects() {
  return (
    <section className="bg-black px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/showcase"
          className="block group cursor-pointer"
        >
          <h2 className="text-2xl text-gray-400 mb-12 group-hover:text-white transition-colors inline-flex items-center gap-2">
            SELECTED WORK
            <ArrowUpRight className="w-5 h-5" />
          </h2>
        </Link>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <Link to="/showcase" key={index} className="block group">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-4xl text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.period}</p>
                </div>
                <div>
                  <h4 className="text-xl text-white mb-4">{project.role}</h4>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}