import { useState } from 'react';

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
      title: "Platform EduPortal",
      description: "Platform EduPortal is a comprehensive SaaS school management solution designed to streamline administrative tasks and enhance the educational experience for students, teachers, and administrators. It offers a range of features tailored to meet the diverse needs of educational institutions.",
      features: [
        "School Website: Provides schools with a customizable website to establish an online presence",
        "School Management Portal: Facilitates efficient management of student records, attendance, and academic performance.",
        "Computer-Based Testing (CBT): Enables the creation and administration of online quizzes and exams, promoting interactive assessments.",
        "School Inventory Management: Assists in tracking and managing school resources and financial transactions.",
        "E-Library: Provides access to a vast collection of electronic books and educational materials, fostering a love for learning.",
        "Auto Timetable Generation: Simplifies the creation of class schedules with an intuitive timetable generator",
        "Results to SMS: Allows schools to send students' results directly to parents via SMS, ensuring timely communication."
      ],
      link: "https://platformeduportal.com/",
      tags: ["Education", "SaaS", "Management"]
    },
    {
      title: "LagosLiga Analysis Platform",
      description: "The LagosLiga Analysis Platform, hosted at lagosliga.madeinafricasport.com, is a dedicated analytics site for the Lagos Liga competition. It offers comprehensive analysis of all games, utilizing 48 distinct data points to provide real-time insights and visualizations. This platform enhances the experience for fans, coaches, and analysts by delivering in-depth statistical breakdowns and dynamic visual representations of match events.",
      features: [
        "Real-time match insights",
        "Dynamic visual representations",
        "Comprehensive statistical breakdowns",
        "In-depth performance analysis",
        "Team and player statistics"
      ],
      link: "https://lagosliga.madeinafricasport.com/",
      tags: ["Sports", "Analytics", "Football"]
    },
    {
      title: "QuidX AI",
      description: "QuidX AI is an innovative platform that leverages artificial intelligence to enhance decision-making for traders, with a particular focus on forex and cryptocurrency markets. By integrating advanced AI technologies, QuidX AI aims to provide traders with data-driven insights, real-time analysis, and automated strategies to navigate the complexities of these financial markets effectively.",
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
      title: "EDC Anambra",
      description: "The Examinations Development Centre (EDC) of Anambra State is a pivotal department within the state's Ministry of Education, responsible for the design, development, and implementation of assessment and examination systems for students across various educational levels. The EDC ensures fair, accurate, and standardized evaluations of student learning outcomes, contributing significantly to the quality of education in the state",
      features: [
        "Online examination registration",
        "Result checking portal",
        "Assessment management",
        "Student records database",
        "Administrative dashboard"
      ],
      link: "https://edcanambra.com/",
      tags: ["Education", "Government", "Assessment"]
    },
    {
      title: "Abia School Management Portal",
      description: "An online platform for managing school activities. Features include:",
      features: [
        "Result checking portal",
        "Administrative dashboard"
      ],
      link: "https://abiaunifyportal.com.ng/",
      tags: ["Education", "Government", "Assessment"]
    },
    {
      title: "EDC Abia State",
      description: "The Examinations Development Centre (EDC) of Anambra State is a pivotal department within the state's Ministry of Education, responsible for the design, development, and implementation of assessment and examination systems for students across various educational levels. The EDC ensures fair, accurate, and standardized evaluations of student learning outcomes, contributing significantly to the quality of education in the state",
      features: [
        "Examination registration",
        "Result verification",
        "Certificate management",
        "Payment processing",
        "Administrative tools"
      ],
      link: "https://edcabiastate.com/",
      tags: ["Education", "Government", "Assessment"]
    },
    {
      title: "Made In Africa Sport",
      description: "Made In Africa Sport is a dynamic platform dedicated to delivering comprehensive coverage of African sports through data analytics, infographics, insightful match reports, and up-to-date news. The platform aims to highlight the rich tapestry of African sports, offering in-depth analysis and engaging content to its audience.",
      features: [
        "Data-Driven Insights: Utilizing advanced data analytics for detailed statistical breakdowns",
        "Comprehensive Coverage: Coverage of various sports including football, tennis, athletics",
        "Engaging Content: Match previews, reviews, and feature articles",
      ],
      link: "https://madeinafricasport.com/",
      tags: ["Sports", "Media", "Analytics"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  {project.title}
                </a>
              </h3>
              <div className="text-gray-600 mb-4">
                <p className={expandedCards.has(index) ? "" : "line-clamp-3"}>
                  {project.description}
                </p>
                
                {/* Show features only when expanded */}
                {expandedCards.has(index) && project.features && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-4 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm">{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                <button
                  onClick={() => toggleCard(index)}
                  className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {expandedCards.has(index) ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;





// TOOLTIP VERSION
// import { useState } from 'react';

// const Projects = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [expandedCards, setExpandedCards] = useState(new Set());
//   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setTooltipPosition({
//       x: e.clientX + 10,
//       y: e.clientY + 10,
//     });
//   };

//   const toggleCard = (index) => {
//     setExpandedCards(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(index)) {
//         newSet.delete(index);
//       } else {
//         newSet.add(index);
//       }
//       return newSet;
//     });
//   };

//   const projects = [
//     {
//       title: "Platform EduPortal",
//       description: "Platform EduPortal is a comprehensive SaaS school management solution designed to streamline administrative tasks and enhance the educational experience for students, teachers, and administrators. It offers a range of features tailored to meet the diverse needs of educational institutions.",
//       features: [
//         "School Website: Provides schools with a customizable website to establish an online presence",
//         "School Management Portal: Facilitates efficient management of student records, attendance, and academic performance.",
//         "Computer-Based Testing (CBT): Enables the creation and administration of online quizzes and exams, promoting interactive assessments.",
//         "School Inventory Management: Assists in tracking and managing school resources and financial transactions.",
//         "E-Library: Provides access to a vast collection of electronic books and educational materials, fostering a love for learning.",
//         "Auto Timetable Generation: Simplifies the creation of class schedules with an intuitive timetable generator",
//         "Results to SMS: Allows schools to send students' results directly to parents via SMS, ensuring timely communication."
//       ],
//       link: "https://platformeduportal.com/",
//       tags: ["Education", "SaaS", "Management"]
//     },
//     {
//       title: "LagosLiga Analysis Platform",
//       description: "The LagosLiga Analysis Platform, hosted at lagosliga.madeinafricasport.com, is a dedicated analytics site for the Lagos Liga competition. It offers comprehensive analysis of all games, utilizing 48 distinct data points to provide real-time insights and visualizations. This platform enhances the experience for fans, coaches, and analysts by delivering in-depth statistical breakdowns and dynamic visual representations of match events.",
//       features: [
//         "Real-time match insights",
//         "Dynamic visual representations",
//         "Comprehensive statistical breakdowns",
//         "In-depth performance analysis",
//         "Team and player statistics"
//       ],
//       link: "https://lagosliga.madeinafricasport.com/",
//       tags: ["Sports", "Analytics", "Football"]
//     },
//     {
//       title: "QuidX AI",
//       description: "QuidX AI is an innovative platform that leverages artificial intelligence to enhance decision-making for traders, with a particular focus on forex and cryptocurrency markets. By integrating advanced AI technologies, QuidX AI aims to provide traders with data-driven insights, real-time analysis, and automated strategies to navigate the complexities of these financial markets effectively.",
//       features: [
//         "Data-driven insights",
//         "Real-time market analysis",
//         "Automated trading strategies",
//         "Risk management tools",
//         "Performance tracking"
//       ],
//       link: "https://quidxai.com/",
//       tags: ["AI", "Trading", "Fintech"]
//     },
//     {
//       title: "EDC Anambra",
//       description: "The Examinations Development Centre (EDC) of Anambra State is a pivotal department within the state's Ministry of Education, responsible for the design, development, and implementation of assessment and examination systems for students across various educational levels. The EDC ensures fair, accurate, and standardized evaluations of student learning outcomes, contributing significantly to the quality of education in the state",
//       features: [
//         "Online examination registration",
//         "Result checking portal",
//         "Assessment management",
//         "Student records database",
//         "Administrative dashboard"
//       ],
//       link: "https://edcanambra.com/",
//       tags: ["Education", "Government", "Assessment"]
//     },
//     {
//       title: "Abia School Management Portal",
//       description: "An online platform for managing school activities. Features include:",
//       features: [
//         "Result checking portal",
//         "Administrative dashboard"
//       ],
//       link: "https://abiaunifyportal.com.ng/",
//       tags: ["Education", "Government", "Assessment"]
//     },
//     {
//       title: "EDC Abia State",
//       description: "The Examinations Development Centre (EDC) of Anambra State is a pivotal department within the state's Ministry of Education, responsible for the design, development, and implementation of assessment and examination systems for students across various educational levels. The EDC ensures fair, accurate, and standardized evaluations of student learning outcomes, contributing significantly to the quality of education in the state",
//       features: [
//         "Examination registration",
//         "Result verification",
//         "Certificate management",
//         "Payment processing",
//         "Administrative tools"
//       ],
//       link: "https://edcabiastate.com/",
//       tags: ["Education", "Government", "Assessment"]
//     },
//     {
//       title: "Made In Africa Sport",
//       description: "Made In Africa Sport is a dynamic platform dedicated to delivering comprehensive coverage of African sports through data analytics, infographics, insightful match reports, and up-to-date news. The platform aims to highlight the rich tapestry of African sports, offering in-depth analysis and engaging content to its audience.",
//       features: [
//         "Data-Driven Insights: Utilizing advanced data analytics for detailed statistical breakdowns",
//         "Comprehensive Coverage: Coverage of various sports including football, tennis, athletics",
//         "Engaging Content: Match previews, reviews, and feature articles",
//       ],
//       link: "https://madeinafricasport.com/",
//       tags: ["Sports", "Media", "Analytics"]
//     }
//   ];

//   return (
//     <div className="container mx-auto px-4 py-12 relative">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <div 
//             key={index}
//             className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             onMouseMove={handleMouseMove}
//           >
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">
//                 <a 
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
//                 >
//                   {project.title}
//                 </a>
//               </h3>
//               <div className="text-gray-600 mb-4 line-clamp-3">
//                 <p>{project.description}</p>
//               </div>
//               <div className="flex flex-wrap items-center gap-2 mt-4">
//                 {project.tags.map((tag, tagIndex) => (
//                   <span
//                     key={tagIndex}
//                     className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//                 <button
//                   onClick={() => toggleCard(index)}
//                   className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium md:hidden"
//                 >
//                   {expandedCards.has(index) ? 'Show Less' : 'Read More'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* TOOLTIP */}
//       {hoveredIndex !== null && projects[hoveredIndex].features && (
//         <div 
//           className="fixed bg-white border border-gray-200 shadow-xl rounded-lg p-4 max-w-md z-50 hidden md:block"
//           style={{
//             left: `${tooltipPosition.x}px`,
//             top: `${tooltipPosition.y}px`,
//             transform: 'translate(0%, -50%)',
//           }}
//         >
//           <h4 className="font-semibold mb-2">{projects[hoveredIndex].title}</h4>
//           <p className="mb-2">{projects[hoveredIndex].description}</p>
//           {projects[hoveredIndex].features && (
//             <ul className="list-disc pl-4 space-y-1">
//               {projects[hoveredIndex].features.map((feature, index) => (
//                 <li key={index} className="text-sm">{feature}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}

//       {/* MOBIE EXPANDED CONTENT */}
//       {expandedCards.size > 0 && (
//         <div className="md:hidden">
//           {Array.from(expandedCards).map(index => (
//             <div 
//               key={index}
//               className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50"
//             >
//               <h4 className="font-semibold mb-2">{projects[index].title}</h4>
//               <p className="mb-2">{projects[index].description}</p>
//               {projects[index].features && (
//                 <ul className="list-disc pl-4 space-y-1">
//                   {projects[index].features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="text-sm">{feature}</li>
//                   ))}
//                 </ul>
//               )}
//               <button
//                 onClick={() => toggleCard(index)}
//                 className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
//               >
//                 Close
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;