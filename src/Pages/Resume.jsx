import { Link } from "react-router-dom";

const buttons = [
  { name: "Home", path: "/", color: "bg-gray-400" },
  { name: "Resume", path: "/resume", color: "bg-green-400" },
  { name: "Projects", path: "/projects", color: "bg-yellow-400" },
  { name: "Contact", path: "/contact", color: "bg-blue-400" }
];

function Resume() {
  return (
    <div className="px-10 py-16 max-w-5xl mx-auto">

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

      <h1 className="text-4xl font-bold mb-2 text-white">
        Resume
      </h1>
      <p className="text-gray-400 mb-8 text-lg">Pallapu Siddartha - Software Developer</p>

      {/* Download Buttons */}
      <div className="flex gap-4 mb-12 flex-wrap">
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition font-semibold"
        >
          View Resume (PDF)
        </a>

        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download="Pallapu_Siddartha_Resume.pdf"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition font-semibold"
        >
          Download Resume
        </a>
      </div>

      {/* Resume Content - Text Version */}
      <div className="space-y-12">
        
        {/* About Section */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-4 border-b border-blue-400 pb-2">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Passionate and motivated developer with a strong interest in building real-world applications and solving practical problems using technology.
            Experienced in writing clean, efficient code with expertise in web development, problem-solving, and system design.
            Patent holder for innovative assistive technology and demonstrated capability in embedded systems, parallel computing, and full-stack development.
          </p>
        </section>

        {/* Skills Section */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-4 border-b border-blue-400 pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Programming Languages</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Python</li>
                <li>• JavaScript</li>
                <li>• C/C++</li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Technologies & Tools</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• React</li>
                <li>• Git & GitHub</li>
                <li>• OpenMP</li>
                <li>• HTML & CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Core Competencies</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Data Structures & Algorithms</li>
                <li>• Parallel Computing</li>
                <li>• Problem Solving</li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Specializations</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Embedded Systems</li>
                <li>• System Design</li>
                <li>• Software Development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Patent Section */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-4 border-b border-blue-400 pb-2">
            Patent & Innovation
          </h2>
          <div className="bg-blue-500/10 border border-blue-400/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Smart Shoe with Route Suggestions for Visually Impaired Users
            </h3>
            <p className="text-gray-400 text-sm mb-3">Application No: 202541048343 A | Publication Date: 06/06/2025</p>
            <ul className="text-gray-300 space-y-2">
              <li>✓ Developed innovative smart shoe system for visually impaired navigation</li>
              <li>✓ Integrated sensors for obstacle detection (left & right sides)</li>
              <li>✓ Microcontroller-based system for route analysis and suggestions</li>
              <li>✓ Implemented haptic feedback for real-time user guidance</li>
              <li>✓ Operates independently without internet connectivity</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-4 border-b border-blue-400 pb-2">
            Key Projects
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold text-white">Smart Traffic Management System</h3>
              <p className="text-gray-400 text-sm">System optimization using intelligent algorithms with real-world traffic simulation</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold text-white">Chat Application (React-Based)</h3>
              <p className="text-gray-400 text-sm">Real-time chat interface with modern UI and professional design</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold text-white">OpenMP Parallel Computing</h3>
              <p className="text-gray-400 text-sm">Advanced loop parallelization with performance optimization and analysis</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold text-white">Data Structures & Algorithms</h3>
              <p className="text-gray-400 text-sm">Efficient implementations (Prefix Sum, Fenwick Tree, Recamán Sequence)</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold text-white">Blood Bank Management System</h3>
              <p className="text-gray-400 text-sm">Complete CRUD system for donor and blood request management</p>
            </div>
          </div>
        </section>

        {/* Professional Goals */}
        <section className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-4 border-b border-blue-400 pb-2">
            Goals & Vision
          </h2>
          <ul className="text-gray-300 space-y-3">
            <li>🎯 To become a skilled software developer creating meaningful solutions</li>
            <li>🚀 To work on impactful real-world projects in assistive tech and system design</li>
            <li>📚 To continuously improve technical expertise and stay updated with technologies</li>
            <li>🤝 To contribute to innovative projects that improve lives and solve practical problems</li>
          </ul>
        </section>

        {/* Strengths */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-4 border-b border-blue-400 pb-2">
            Key Strengths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-blue-400 font-bold mr-3">✨</span>
              <p className="text-gray-300">Quick learner of new technologies</p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 font-bold mr-3">✨</span>
              <p className="text-gray-300">Strong problem-solving mindset</p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 font-bold mr-3">✨</span>
              <p className="text-gray-300">Passion for innovative technology</p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 font-bold mr-3">✨</span>
              <p className="text-gray-300">Consistent and dedicated approach</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-4 border-b border-blue-400 pb-2">
            Contact Information
          </h2>
          <div className="space-y-3 text-gray-300">
            <p><span className="font-semibold text-white">Email:</span> pallapusidhartha62@gmail.com</p>
            <p><span className="font-semibold text-white">GitHub:</span> <a href="https://github.com/psiddrtha20027" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/psiddrtha20027</a></p>
          </div>
        </section>

      </div>

    </div>
  )
}

export default Resume;
