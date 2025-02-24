import About from './components/About';
import Footer from './components/Footer';
import SkillSet from './components/SkillSet';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <About />
      <SkillSet />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;