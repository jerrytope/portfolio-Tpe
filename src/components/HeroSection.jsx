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
            <a 
              href="https://github.com/jerrytope" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="http://www.linkedin.com/in/temitopeayoade" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <AiFillLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/_Temibee" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a 
              href="mailto:Ayoadetemitope552@gmail.com" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* <div className='flex flex-1 justify-center items-center m-20'>
        <p className="text-gray-600 bg-white leading-relaxed p-6 rounded-2xl mb-8">
            I am a versatile software engineer with expertise in Django
            development, machine learning, and data analysis. Proficient in
            Python, SQL, Database management and R I enjoy building practical
            solutions that leverage analytical insights. I have successfully
            contributed to projects in education and business domains, creating
            scalable and efficient systems. My experience includes working with
            large datasets, implementing algorithms, and developing user-centric
            applications that enhance productivity and user experience.
          </p>
        </div> */}
      </div>
      </div>
  );
}

export default HeroSection;