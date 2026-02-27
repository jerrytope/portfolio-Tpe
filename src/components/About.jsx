import { Code2, Database, Server, Monitor } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  const cards = [
    {
      icon: <Code2 className="w-6 h-6 text-primary-light" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my priority.",
    },
    {
      icon: <Database className="w-6 h-6 text-primary-light" />,
      title: "Database Design",
      description: "Expertise in designing secure and optimal database structures.",
    },
    {
      icon: <Server className="w-6 h-6 text-primary-light" />,
      title: "API Development",
      description: "Creating robust REST APIs with Django REST Framework.",
    },
    {
      icon: <Monitor className="w-6 h-6 text-primary-light" />,
      title: "Frontend Excellence",
      description: "Building responsive, modern UIs with React and Tailwind CSS.",
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Beyond the <span className="gradient-text">Screen</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-8 rounded-full"></div>
            <p className="text-gray-400 leading-relaxed text-lg mb-6 shadow-sm">
              I am a versatile fullstack software engineer with expertise in Django, React, machine learning, and data analysis. I thrive on translating complex problems into elegant, real-world solutions.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Whether working with large datasets, designing robust APIs, or building highly interactive frontends, my focus is always on creating systems that enhance productivity and deliver an exceptional user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
