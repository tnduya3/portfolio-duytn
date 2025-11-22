'use client';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Tags */}
          <div className="flex gap-4 text-sm text-gray-400">
            <span className="hover:text-white transition-colors cursor-pointer">react.js</span>
            <span className="hover:text-white transition-colors cursor-pointer">tailwindcss</span>
            <span className="hover:text-white transition-colors cursor-pointer">typescript</span>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Hello, I'm
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Your Name.
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Sinh viên năm 3 chuyên ngành An toàn thông tin với đam mê về cybersecurity, 
            phát triển web và chia sẻ kiến thức qua blog cá nhân.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 font-medium">
              Get in touch
            </button>
            <button className="px-8 py-3 border border-gray-700 hover:border-gray-500 text-white rounded-lg transition-all duration-300 font-medium">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Content - 3D Illustration Placeholder */}
        <div className="relative">
          <div className="aspect-square bg-linear-to-br from-gray-900 to-black rounded-3xl p-8 flex items-center justify-center border border-gray-800 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-indigo-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-500 rounded-full blur-3xl"></div>
            </div>
            
            {/* Placeholder for 3D Graphics */}
            <div className="relative z-10 text-center space-y-4">
              <div className="text-6xl">🔐</div>
              <p className="text-gray-500 text-sm">3D Illustration</p>
              <p className="text-gray-600 text-xs max-w-xs">
                Thay thế phần này bằng illustration hoặc 3D graphics của bạn
              </p>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-gray-600 text-sm">
            Scroll to discover
          </div>
        </div>
      </div>
    </section>
  );
}
