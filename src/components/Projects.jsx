import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown } from 'lucide-react';

const Projects = () => {
  const [expandedCards, setExpandedCards] = useState(new Set());

  const toggleCard = (index) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const projects = [
    {
      title: "QuidX AI",
      description: "QuidX AI is an innovative platform that leverages artificial intelligence to enhance decision-making for traders, with a particular focus on forex and cryptocurrency markets. By integrating advanced AI technologies, QuidX AI aims to provide traders with data-driven insights, real-time analysis, and automated strategies.",
      features: [
        "Data-driven insights",
        "Real-time market analysis",
        "Automated trading strategies",
        "Risk management tools",
        "Performance tracking"
      ],
      link: "https://quidxai.com/",
      tags: ["AI", "Trading", "Fintech"]
    },
    {
      title: "Made In Africa Sport",
      description: "Made In Africa Sport is a dynamic platform dedicated to delivering comprehensive coverage of African sports through data analytics, infographics, insightful match reports, and up-to-date news.",
      features: [
        "Data-Driven Insights: Utilizing advanced data analytics for detailed statistical breakdowns.",
        "Comprehensive Coverage: Discussing football, tennis, athletics and more.",
        "Engaging Content: Match previews, reviews, and feature articles."
      ],
      link: "https://madeinafricasport.com/",
      tags: ["Sports", "Media", "Analytics"]
    },
    {
      title: "Golf Handicap & Competition Management System",
      description: "Developed a web-based application for Enugu Golf Club to automate handicap calculation and manage golf competitions. Built using Django, the system tracks players' scores, computes accurate handicaps based on standardized rules, and ranks participants during tournaments.",
      features: [
        "User Authentication & Role Management",
        "Handicap Calculation Engine",
        "Score Submission",
        "Competition Management",
        "Live Leaderboards"
      ],
      link: "https://enugugolf.com.ng/login/",
      tags: ["Sports", "Django", "System UI"]
    },
    {
      title: "Testify",
      description: "Testify.ng is a SaaS platform for multiple states, designed to generate QR-coded,state-approved graduate testimonials that enable secure, instant verification.",
      features: [
        "User Authentication & Role Management.",
        "QR-enabled testimonials/certificates generation.",
        "Scalable to accommodate multiple states and institutions.",
        "Instant verification by third parties."
      ],
      link: "https://testify.ng/",
      tags: ["Education", "Fraud Prevention", "SaaS"]
    },
    {
      title: "Cindy Ai",
      description: "Cindy AI appears to be an AI-powered voice/assistant app that aims to provide a conversational partner who “understands, remembers, and evolves with you.",
      features: [
        "Natural interaction between human and computer.",
        "Memory & Personalisation for tailored responses.",
        "Voice Assistant Focus."
      ],
      link: "https://getcindy.com/",
      tags: ["AI Assistant", "Voice", "Productivity"]
    },
    {
      title: "Abia School Management Portal",
      description: "An online platform for managing school activities.",
      features: [
        "Result checking portal",
        "Administrative dashboard"
      ],
      link: "https://abiaunifyportal.com.ng/",
      tags: ["Education", "Government", "Management"]
    },
    {
      title: "LagosLiga Analysis Platform",
      description: "The LagosLiga Analysis Platform, is a dedicated analytics site for the Lagos Liga competition. It offers comprehensive analysis of all games, utilizing 48 distinct data points to provide real-time insights and visualizations.",
      features: [
        "Real-time match insights",
        "Dynamic visual representations",
        "Comprehensive statistical breakdowns",
        "Team and player statistics"
      ],
      link: "https://lagosliga.madeinafricasport.com/",
      tags: ["Sports", "Analytics", "Football"]
    },
    {
      title: "Platform EduPortal",
      description: "Platform EduPortal is a comprehensive SaaS school management solution designed to streamline administrative tasks and enhance the educational experience for students, teachers, and administrators.",
      features: [
        "School Website and Management Portal",
        "Computer-Based Testing (CBT)",
        "School Inventory Management",
        "Auto Timetable Generation"
      ],
      link: "https://platformeduportal.com/",
      tags: ["Education", "SaaS", "Management"]
    },
    {
      title: "EDC Anambra",
      description: "The Examinations Development Centre (EDC) of Anambra State, responsible for the design, development, and implementation of assessment and examination systems.",
      features: [
        "Online examination registration",
        "Result checking portal",
        "Assessment management",
        "Administrative dashboard"
      ],
      link: "https://edcanambra.com/",
      tags: ["Education", "Government", "Assessment"]
    },
    {
      title: "EDC Abia State",
      description: "The Examinations Development Commission (EDC) of Abia State, responsible for assessing and managing various educational levels.",
      features: [
        "Examination registration",
        "Result verification",
        "Certificate management",
        "Administrative tools"
      ],
      link: "https://edcabiastate.com/",
      tags: ["Education", "Government", "Assessment"]
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedCards.has(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full"
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-primary-light flex-shrink-0"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary-light text-xs font-semibold rounded-full uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className={`text-gray-400 leading-relaxed text-sm mb-6 flex-1 ${!isExpanded && "line-clamp-3"}`}>
                    {project.description}
                  </p>

                  <AnimatePresence>
                    {isExpanded && project.features && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mb-6"
                      >
                        <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-400">
                              <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleCard(index)}
                    className="flex justify-between items-center w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors mt-auto group outline-none"
                  >
                    <span>{isExpanded ? "Show Less" : "Discover More"}</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.div>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;