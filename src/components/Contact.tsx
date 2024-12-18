import { Mail, Github, Linkedin } from 'lucide-react';
import ContactButton from './ContactButton';

export default function Contact() {
  return (
    <section className="bg-black px-8 py-32" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl text-white mb-6">Let's create something amazing together.</h2>
            <p className="text-gray-400 text-xl mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-6">
            <ContactButton 
              href="mailto:hello@example.com"
              icon={<Mail className="w-5 h-5" />}
              label="hello@example.com"
              description="Email me"
            />
            
            <ContactButton 
              href="https://github.com"
              icon={<Github className="w-5 h-5" />}
              label="github.com/yourusername"
              description="Follow my open source work"
            />
            
            <ContactButton 
              href="https://linkedin.com"
              icon={<Linkedin className="w-5 h-5" />}
              label="linkedin.com/in/yourusername"
              description="Let's connect"
            />
          </div>
        </div>
      </div>
    </section>
  );
}