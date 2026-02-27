import { Mail, ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black py-16 mt-20 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="mb-8 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold text-white tracking-widest inline-block mb-4">
              TEMI<span className="text-primary-light">.</span>
            </a>
            <p className="text-gray-500 text-sm max-w-sm mx-auto md:mx-0">
              Engineering elegant solutions to complex problems, beautifully crafted with modern web technologies.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <a
              href="mailto:Ayoadetemitope552@gmail.com"
              className="inline-flex items-center group mb-6"
            >
              <div className="p-3 bg-white/5 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary-light transition-colors" />
              </div>
              <span className="text-gray-400 group-hover:text-white transition-colors text-lg font-medium">
                Ayoadetemitope552@gmail.com
              </span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center text-sm text-gray-500 hover:text-primary-light transition-colors uppercase tracking-widest outline-none"
            >
              Back to top
              <ArrowUp className="w-4 h-4 ml-2" />
            </button>
          </div>

        </div>

        <div className="pt-8 mt-12 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ayoade Temitope. All rights reserved.
          </p>
          <div className="text-gray-600 text-sm">
            Designed & Built with <span className="text-red-500">♥</span> React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;