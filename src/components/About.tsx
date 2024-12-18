import SkillsGrid from './skills/SkillsGrid';

export default function About() {
  return (
    <section className="bg-black px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl text-white mb-8">
              I'm Passionate About Shaping Ideas into Visual Journeys that Engage and Inspire.
            </h2>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" 
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-white mb-4">My Background</h3>
              <p className="text-gray-400">
                I graduated in Computer Science and Engineering, where I discovered my love for coding. But even before lines of code, I loved lines of design—organizing thoughts, crafting visuals, and presenting ideas creatively. This passion led me to presentation design, where I found my true calling. What started as a spark quickly turned into a full-time journey: I became a presentation designer at Vivasoft in Bangladesh and achieved Top Rated Plus status on Upwork. Six years later, I'm still bringing stories to life, one slide at a time—and I'm loving every moment of it.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl text-white mb-4">Technical Expertise</h3>
              <p className="text-gray-400">
                I specialize in transforming ideas into compelling presentations, with a keen eye for animation, storytelling, and visual flow. I create sleek, engaging content with a strong focus on brand consistency, turning complex data into clear, impactful infographics and charts. My work blends creativity and clarity, ensuring every design resonates and connects.
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-white mb-6">Key Skills</h3>
              <SkillsGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}