import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const buttons = [
  { name: "Home", path: "/", color: "bg-gray-400" },
  { name: "Resume", path: "/resume", color: "bg-green-400" },
  { name: "Projects", path: "/projects", color: "bg-yellow-400" },
  { name: "Contact", path: "/contact", color: "bg-blue-400" }
];

function Projects() {
  const projects = [
    {
      id: 1,
      title: "🧠 Smart Shoe for Visually Impaired Users",
      type: "Patent Project",
      description: "Innovative assistive technology combining hardware and embedded systems to enhance mobility for visually impaired individuals.",
      details: [
        "Patent Application No: 202541048343 A",
        "Publication Date: 06/06/2025",
        "Developed an innovative smart shoe system to assist visually impaired individuals in navigation",
        "Integrated sensors to detect obstacles from both left and right sides",
        "Designed a microcontroller-based system to analyze surroundings and suggest safe routes",
        "Implemented haptic feedback (vibration) to guide users in real time",
        "Eliminates dependency on internet connectivity and enhances independent mobility"
      ],
      technologies: ["Embedded Systems", "Microcontroller", "Sensor Integration", "Haptic Feedback", "Real-time Processing"],
      impact: "Demonstrates practical innovation in assistive technology and embedded systems"
    },
    {
      id: 2,
      title: "🚦 Smart Traffic Management System",
      type: "System Project",
      description: "Intelligent system to optimize traffic flow and reduce congestion in urban environments.",
      details: [
        "Developed a system to optimize traffic flow using intelligent algorithms",
        "Implemented traffic monitoring and control mechanisms",
        "Simulated real-world traffic scenarios",
        "Focused on reducing congestion and improving efficiency"
      ],
      technologies: ["Algorithm Design", "Traffic Simulation", "System Design", "Optimization"],
      impact: "Demonstrates understanding of real-world problem solving and system optimization"
    },
    {
      id: 3,
      title: "💬 Chat Application (React-Based)",
      type: "Frontend Project",
      description: "Real-time chat interface with modern UI and interactive features.",
      details: [
        "Built a real-time chat interface with modern UI",
        "Implemented chat bubbles and message sending features",
        "Focused on user interaction and professional design",
        "Clean and responsive frontend implementation"
      ],
      technologies: ["React", "JavaScript", "HTML", "CSS", "Real-time Communication"],
      impact: "Strong foundation in frontend development and user experience design"
    },
    
    
    {
      id: 6,
      title: "🩸 Blood Bank Management System",
      type: "Management System",
      description: "Complete system for managing blood donors and blood requests.",
      details: [
        "Designed a system to manage donors and blood requests",
        "Implemented CRUD operations for all functionalities",
        "Focused on real-world usability and data handling",
        "Database integration for efficient data management"
      ],
      technologies: ["Database Design", "CRUD Operations", "System Design", "Data Management"],
      impact: "Practical experience in building real-world management systems"
    }
  ];

  return (
    <div className="px-10 py-8 max-w-6xl mx-auto">

      {/* Navigation Buttons */}
      <div className="flex gap-6 flex-wrap justify-end mb-10">
        {buttons.map((btn, index) => (
          <Link
            key={index}
            to={btn.path}
            className={`${btn.color} w-24 h-24 rounded-full flex items-center justify-center text-lg font-semibold shadow-lg hover:scale-110 transition`}
          >
            {btn.name}
          </Link>
        ))}
      </div>

      <h1 className="text-5xl font-bold mb-2 text-white">
        Projects & Research
      </h1>
      <p className="text-gray-400 mb-12 text-lg">A collection of my work, innovations, and technical expertise</p>

      <div className="grid gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300"
          >
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-300 bg-blue-500/20 rounded-full border border-blue-400/30">
                {project.type}
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Details */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">Details</h3>
              <ul className="space-y-2">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-full text-gray-300 hover:bg-white/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg">
              <p className="text-gray-300">
                <span className="font-semibold text-blue-300">Impact:</span> {project.impact}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 text-lg mb-6">
          Find more of my work on GitHu
        </p>
        <a
          href="https://github.com/psiddrtha20027"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
        >
          <FaGithub className="text-xl" />
          Visit GitHub Profile
        </a>
      </div>

    </div>
  )
}

export default Projects;
