import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface ShowcaseItem {
  type: 'image' | 'video';
  url: string;
  title: string;
  description: string;
  downloadUrl: string;
  category: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    type: 'video',
    url: 'https://static.videezy.com/system/resources/previews/000/021/644/original/interface-hud-display.mp4',
    title: 'Interactive Dashboard',
    description: 'Real-time data visualization and user interaction flows',
    downloadUrl: '/samples/dashboard-presentation.pdf',
    category: 'UI Motion'
  },
  {
    type: 'video',
    url: 'https://static.videezy.com/system/resources/previews/000/021/652/original/abstract-digital-network-communication.mp4',
    title: 'Network Visualization',
    description: 'Dynamic network mapping and data flow presentation',
    downloadUrl: '/samples/network-presentation.pdf',
    category: 'UI Motion'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    title: 'Analytics Platform',
    description: 'Enterprise analytics dashboard design',
    downloadUrl: '/samples/analytics-case-study.pdf',
    category: 'UI Design'
  },
  // Add more items as needed
];

export default function ShowcaseGrid() {
  return (
    <div className="space-y-32">
      {/* Video Projects Section */}
      <section>
        <h2 className="text-3xl text-white mb-12 font-light">UI Motion & Interaction</h2>
        <div className="grid grid-cols-1 gap-16">
          {showcaseItems
            .filter(item => item.type === 'video')
            .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900 rounded-xl overflow-hidden"
              >
                <div className="aspect-video">
                  <video
                    src={item.url}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                    <a
                      href={item.downloadUrl}
                      download
                      className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/5 text-sm text-gray-400 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Image Projects Section */}
      <section>
        <h2 className="text-3xl text-white mb-12 font-light">UI Design & Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseItems
            .filter(item => item.type === 'image')
            .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    <span className="px-3 py-1 bg-white/5 text-sm text-gray-400 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <a
                    href={item.downloadUrl}
                    download
                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
}