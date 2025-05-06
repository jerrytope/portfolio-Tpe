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
        "Results to SMS: Allows schools to send students' results directly to parents via SMS, ensuring timely communication"
      ],
      link: "https://platformeduportal.com/",
      tags: ["Education", "SaaS", "Management"]
    },
    {
      title: "LagosLiga Analysis Platform",
      description: "The LagosLiga Analysis Platform, hosted at lagosliga.madeinafricasport.com, is a dedicated analytics site for the Lagos Liga competition. It offers comprehensive analysis of all games, utilizing 48 distinct data points to provide real-time insights and visualizations. This platform enhances the experience for fans, coaches, and analysts by delivering in-depth statistical breakdowns and dynamic visual representations of match events. The Lagos Liga is a 7-a-side football tournament that commenced on December 6, 2024, at Campos Stadium, featuring 16 teams. The inaugural tournament concluded with Primal Sporting FC clinching the N50 million grand prize after a dramatic final against Applebee FC at the Mobolaji Johnson Arena. The match ended 1-1 after extra time, with Primal Sporting FC securing victory through a 9-8 penalty shootout. The LagosLiga Analysis Platform plays a crucial role in documenting and analyzing such thrilling matches, offering stakeholders valuable data-driven insights into team performances and match dynamics.",
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
      description: "QuidX AI is an innovative platform that leverages artificial intelligence to enhance decision-making for traders, with a particular focus on forex and cryptocurrency markets. By integrating advanced AI technologies, QuidX AI aims to provide traders with data-driven insights, real-time analysis, and automated strategies to navigate the complexities of these financial markets effectively. While specific details about QuidX AI's services are limited due to website access restrictions, similar platforms in the industry offer a range of AI-powered tools designed to optimize trading  rmance:",
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
      description: "The Examinations Development Centre (EDC) of Anambra State is a pivotal department within the state's Ministry of Education, responsible for the design, development, and implementation of assessment and examination systems for students across various educational levels. The EDC ensures fair, accurate, and standardized evaluations of student learning outcomes, contributing significantly to the quality of education in the state.",
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
      description: "The Examinations Development Commission (EDC) of Abia State, the EDC is responsible for designing, developing, and implementing assessment and examination systems for students across various educational levels. Its primary objective is to ensure fair, accurate, and standardized evaluations of student learning outcomes, thereby contributing significantly to the quality of education in the state. In a significant technological advancement, the EDC has established an online platform that facilitates seamless registration and result checking for various examinations. This initiative aims to streamline examination processes and enhance accessibility for candidates and educational institutions.",
      features: [
        "Examination registration",
        "Result verification",
        "Certificate management",
        "Administrative tools"
      ],
      link: "https://edcabiastate.com/",
      tags: ["Education", "Government", "Assessment"]
    },
    {
      title: "Made In Africa Sport",
      description: "Made In Africa Sport is a dynamic platform dedicated to delivering comprehensive coverage of African sports through data analytics, infographics, insightful match reports, and up-to-date news. The platform aims to highlight the rich tapestry of African sports, offering in-depth analysis and engaging content to its audience.",
      features: [
        "Data-Driven Insights: Utilizing advanced data analytics, Made In Africa Sport provides detailed statistical breakdowns and visualizations, enhancing the understanding of various sports events across the continent.",
        "Comprehensive Coverage: The platform covers a wide array of sports, including football, tennis, athletics, table tennis, and Paralympics, ensuring that diverse athletic disciplines receive attention.",
        "Engaging Content: Readers can access match previews, reviews, and feature articles that delve into the narratives shaping African sports, offering both informative and captivating content.",
      ],
      highlights: [
        "CAF Awards 2024: An analysis discussing why Ademola Lookman is considered Africa’s premier footballer in 2024.",
        "Lagos Liga Updates: Coverage of the Lagos Liga tournament, including Applebee FC's decisive 3-0 victory over Krypton FC, showcasing the platform's commitment to grassroots football.",
        "National Sports Festival Preparations: Reports on the Ogun State Cricket Association unveiling its teams and upgraded facilities ahead of the 2024 National Sports Festival, reflecting the platform's dedication to a broad spectrum of sports.",
      ],
      link: "https://madeinafricasport.com/",
      tags: ["Sports", "Media", "Analytics"]
    },
    {
      title: "Golf Handicap & Competition Management System",
      description: "Enugu Golf Club Developed a web-based application for Enugu Golf Club to automate handicap calculation and manage golf competitions. Built using Django, the system tracks players' scores, computes accurate handicaps based on standardized rules, and ranks participants during tournaments. The platform supports secure user authentication, score submissions, and real-time leaderboard updates, enhancing the efficiency and transparency of golf events in Enugu State.",
      features: [
        "User Authentication & Role Management-  Secure login for players, admins, and organizers.",
        "Role-based access to manage data and competitions.",
        "Handicap Calculation Engine- Automatically calculates player handicaps based on submitted scores.  Follows standard golf handicap rules for fair ranking.",
        "Score Submission- Players can submit their scores after each round.  Admins can verify and approve submitted results.",
        "Competition Management- Organizers can create, manage, and schedule tournaments.",
        "Live Leaderboards- Real-time leaderboard updates during active competitions.",
        "Competition Management-  Organizers can create, manage, and schedule tournaments.",
        "Auto-ranking of players during competitions based on performance and handicap.",
        "Player Profile & History-  Track player progress, past scores, and handicap history.",
        "Admin Dashboard-  Overview of player stats, upcoming events, and score validations.",
        "Responsive Design-     Mobile-friendly interface for players and organizers on the go.",
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