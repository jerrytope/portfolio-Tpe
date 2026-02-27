import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Optional: we can keep video background, but subtle and dark */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10 backdrop-blur-[2px]"></div>
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium tracking-wider uppercase mb-6">
              Fullstack Software Engineer
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-tight">
            Building <span className="gradient-text">digital</span>
            <br /> experiences that inspire.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
            Hi, I'm Ayoade Temitope. I engineer robust solutions and craft stunning user interfaces.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              View My Work
            </a>
            <div className="flex space-x-4 ml-4">
              <SocialLink href="https://github.com/jerrytope" icon={<FaGithub className="w-5 h-5" />} />
              <SocialLink href="http://www.linkedin.com/in/temitopeayoade" icon={<AiFillLinkedin className="w-5 h-5" />} />
              <SocialLink href="https://x.com/_Temibee" icon={<FaXTwitter className="w-5 h-5" />} />
              <SocialLink href="mailto:Ayoadetemitope552@gmail.com" icon={<Mail className="w-5 h-5" />} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-[60px] bg-gradient-to-b from-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full glass-panel-hover text-gray-300 hover:text-white group"
  >
    <div className="group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
  </a>
);

export default HeroSection;