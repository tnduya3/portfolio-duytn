import Navigation from '@/components/Navigation';
import FloatingParticles from '@/components/FloatingParticles';

export default function Services() {
  const services = [
    {
      icon: '🔒',
      title: 'Security Consulting',
      description: 'Tư vấn về bảo mật hệ thống và ứng dụng web'
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Phát triển website hiện đại với React/Next.js'
    },
    {
      icon: '📝',
      title: 'Technical Writing',
      description: 'Viết blog và tài liệu kỹ thuật về cybersecurity'
    },
    {
      icon: '🎓',
      title: 'Mentoring',
      description: 'Hướng dẫn và chia sẻ kiến thức về an toàn thông tin'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1419] relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Services</h1>
          <p className="text-gray-400 text-lg mb-12">
            Những gì mình có thể giúp bạn
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-indigo-500 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
