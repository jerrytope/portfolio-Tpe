import { Mail, } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6'
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="relative h-[60vh] bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/code.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-6 relative h-full flex flex-1 items-center">
        
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            Ayoade Temitope
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Python Developer
          </p>

          <div className="flex space-x-4">
             {/* GITHUB */}
            <a 
              href="https://github.com/jerrytope" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            
            {/* LINKEDIN */}
            <a 
              href="http://www.linkedin.com/in/temitopeayoade" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <AiFillLinkedin className="w-6 h-6" />
            </a>
            
            {/* TWITTER */}
            <a 
              href="https://x.com/_Temibee" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            
            {/* MAIL */}
            <a 
              href="mailto:Ayoadetemitope552@gmail.com" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      </div>
  );
}

export default HeroSection;