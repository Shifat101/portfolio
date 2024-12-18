export default function AboutPage() {
  return (
    <section className="min-h-screen bg-black px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl text-white mb-8">
              I'm passionate about creating impactful solutions.
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
                With over 5 years of experience in software development, I've worked on projects 
                ranging from enterprise applications to innovative startups. My approach combines 
                technical expertise with a deep understanding of user needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl text-white mb-4">Technical Expertise</h3>
              <p className="text-gray-400">
                Specialized in React, Node.js, and cloud architecture. I focus on creating 
                scalable, maintainable solutions that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}