import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AmbientBackground from './components/AmbientBackground';
import Hero from './sections/Hero';
import Video from './sections/Video';
import Benefits from './sections/Benefits';
import HowItWorks from './sections/HowItWorks';
import IdealFor from './sections/IdealFor';
import Comparison from './sections/Comparison';
import Stats from './sections/Stats';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
      <AmbientBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Video />
        <Benefits />
        <HowItWorks />
        <IdealFor />
        <Comparison />
        <Stats />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
