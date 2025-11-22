import Navigation from '@/components/Navigation';
import FloatingParticles from '@/components/FloatingParticles';

export default function Projects() {
  const projects = [
    {
      title: 'Security Blog Platform',
      description: 'Nền tảng blog chia sẻ kiến thức về an toàn thông tin',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      status: 'In Progress'
    },
    {
      title: 'Network Scanner Tool',
      description: 'Công cụ quét và phân tích mạng để phát hiện lỗ hổng bảo mật',
      tags: ['Python', 'Scapy', 'Security'],
      status: 'Completed'
    },
    {
      title: 'CTF Writeups',
      description: 'Tổng hợp các bài writeup từ các cuộc thi CTF',
      tags: ['Security', 'CTF', 'Writeups'],
      status: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1419] relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-gray-400 text-lg mb-12">
            Các dự án cá nhân và học thuật của mình
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-indigo-600/20 text-indigo-400 rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
