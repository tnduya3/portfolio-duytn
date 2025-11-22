'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'services', path: '/services' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 bg-[#0f1419]/60 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
          wendo
        </Link>
        
        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="relative text-sm text-gray-400 hover:text-white transition-colors group"
            >
              {item.name}
              {/* Underline animation */}
              <span 
                className={`absolute -bottom-1 left-0 h-[3px] bg-indigo-500 rounded-full transition-all duration-300 ease-out ${
                  pathname === item.path 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
