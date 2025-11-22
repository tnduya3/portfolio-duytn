import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FloatingParticles from '@/components/FloatingParticles';
import GridBackground from '@/components/GridBackground';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1419] relative overflow-hidden">
      <GridBackground />
      <FloatingParticles />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
      </div>
    </div>
  );
}
