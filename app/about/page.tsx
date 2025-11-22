import Navigation from '@/components/Navigation';
import FloatingParticles from '@/components/FloatingParticles';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0f1419] relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8">About Me</h1>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Xin chào! Mình là sinh viên năm 3 chuyên ngành An toàn thông tin, 
              đam mê về cybersecurity và phát triển web.
            </p>
            <p>
              Trang web này là nơi mình chia sẻ những kiến thức học thuật, 
              dự án cá nhân và những trải nghiệm trong quá trình học tập và nghiên cứu.
            </p>
            
            <div className="pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Cybersecurity', 'Web Development', 'Network Security', 'Penetration Testing', 'React/Next.js', 'Python'].map((skill) => (
                  <div key={skill} className="px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
