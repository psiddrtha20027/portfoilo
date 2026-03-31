import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const buttons = [
  { name: "Home", path: "/", color: "bg-gray-400" },
  { name: "Resume", path: "/resume", color: "bg-green-400" },
  { name: "Projects", path: "/projects", color: "bg-yellow-400" },
  { name: "Contact", path: "/contact", color: "bg-blue-400" }
];

function Contact() {
  return (
    <div className="px-10 py-8 max-w-4xl mx-auto">

      {/* Navigation Buttons (Right aligned) */}
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

      <h1 className="text-5xl font-bold mb-8 text-white">
        Get In Touch
      </h1>

      <div className="space-y-6 text-lg">
        
        {/* Email */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-blue-400/50 transition">
          <div className="flex items-center gap-3 mb-2">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <span className="font-semibold text-white">Email</span>
          </div>
          <a
            href="mailto:pallapusidhartha62@gmail.com"
            className="text-gray-300 hover:text-blue-400 transition text-xl"
          >
            pallapusidhartha62@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-blue-400/50 transition">
          <div className="flex items-center gap-3 mb-2">
            <FaGithub className="text-blue-400 text-2xl" />
            <span className="font-semibold text-white">GitHub</span>
          </div>
          <a
            href="https://github.com/psiddrtha20027"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition text-xl"
          >
            github.com/psiddrtha20027
          </a>
        </div>

      </div>

      <div className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-xl">
        <p className="text-gray-300 text-lg">
          Feel free to reach out for collaborations or just a friendly hello! 👋
        </p>
      </div>

    </div>
  )
}

export default Contact;
