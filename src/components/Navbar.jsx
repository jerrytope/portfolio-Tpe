import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-panel' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-display font-bold text-white tracking-widest">
                    TEMITOPE<span className="text-primary-light">.</span>
                </a>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <a
                    href="mailto:Ayoadetemitope552@gmail.com"
                    className="hidden md:inline-flex px-6 py-2 rounded-full border border-primary-light/30 text-primary-light hover:bg-primary-light hover:text-black transition-all duration-300 font-medium text-sm"
                >
                    Let's Talk
                </a>

                {/* Mobile menu button could go here */}
            </div>
        </motion.nav>
    );
};

export default Navbar;
