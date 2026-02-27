import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import SkillSet from './components/SkillSet';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-gray-100 font-sans selection:bg-primary selection:text-white pb-0 overflow-x-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }}></div>
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        <main>
          <HeroSection />
          <About />
          <SkillSet />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;