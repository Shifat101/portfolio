import { ReactNode } from 'react';

interface ContactButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  description: string;
}

export default function ContactButton({ href, icon, label, description }: ContactButtonProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-4 mb-2">
          <div className="text-gray-400 group-hover:text-white transition-colors">
            {icon}
          </div>
          <h3 className="text-white font-medium">{label}</h3>
        </div>
        <p className="text-gray-400 text-sm pl-9">{description}</p>
      </div>
    </a>
  );
}