import { Download } from 'lucide-react';

interface Presentation {
  title: string;
  description: string;
  image: string;
  video?: string;
  downloadUrl: string;
}

const presentations: Presentation[] = [
  {
    title: "E-Commerce Platform",
    description: "Built a scalable e-commerce platform serving over 100k monthly users, implementing modern payment solutions and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
    downloadUrl: "/sample-presentation.pdf"
  }
];

export default function WorkPage() {
  return (
    <section className="min-h-screen bg-black px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl text-gray-400 mb-12">SELECTED WORK</h2>
        
        <div className="space-y-32">
          {presentations.map((presentation, index) => (
            <div key={index} className="group">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
                {presentation.video ? (
                  <video 
                    src={presentation.video}
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={presentation.image} 
                    alt={presentation.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-4xl text-white mb-2">{presentation.title}</h3>
                  <p className="text-gray-400 mb-6">{presentation.description}</p>
                  <a
                    href={presentation.downloadUrl}
                    download
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Sample</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}