import { Terminal, Database, DatabaseZap, BrainCircuit, Brain, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

function SkillBar({ name, percentage }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-end mb-1">
        <span className="text-sm font-medium text-gray-300 tracking-wide">{name}</span>
      </div>
      <div className="w-full bg-surface-hover rounded-full h-1.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full"
        />
      </div>
    </div>
  );
}

function SkillSet() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Terminal className="w-6 h-6 text-primary-light" />,
      skills: [
        { name: "Python", percentage: 95 },
        { name: "Django", percentage: 95 },
        { name: "FASTApi", percentage: 90 },
        { name: "Streamlit", percentage: 85 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-6 h-6 text-primary-light" />,
      skills: [
        { name: "PostgreSQL", percentage: 90 },
        { name: "MySQL", percentage: 85 },
        { name: "GraphSQL", percentage: 80 },
        { name: "Docker", percentage: 80 }
      ]
    },
    {
      title: "Deep Learning",
      icon: <BrainCircuit className="w-6 h-6 text-primary-light" />,
      skills: [
        { name: "PyTorch", percentage: 85 },
        { name: "TensorFlow", percentage: 80 },
        { name: "Keras", percentage: 80 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <DatabaseZap className="w-6 h-6 text-primary-light" />,
      skills: [
        { name: "React JS", percentage: 90 },
        { name: "Next JS", percentage: 85 },
        { name: "JavaScript", percentage: 90 }
      ]
    },
    {
      title: "Generative AI",
      icon: <Brain className="w-6 h-6 text-primary-light" />,
      skills: [
        { name: "LangChain", percentage: 85 },
        { name: "LLMs", percentage: 85 },
        { name: "Prompt Engineering", percentage: 90 }
      ]
    },
    {
      title: "Microsoft BI",
      icon: <BarChart3 className="w-6 h-6 text-primary-light" />,
      skills: [
        { name: "PowerBI", percentage: 90 },
        { name: "SSIS", percentage: 80 },
        { name: "SSAS", percentage: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Technical <span className="gradient-text">Arsenal</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-white/5 rounded-xl mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white tracking-wide">{category.title}</h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <SkillBar key={idx} name={skill.name} percentage={skill.percentage} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillSet;