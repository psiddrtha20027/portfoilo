import { motion } from "framer-motion" // eslint-disable-line no-unused-vars

function Hero() {
  return (
    <section className="px-10 py-16 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
      
      {/* Profile Image */}
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        src="/profile.jpg"
        alt="Profile"
        className="w-64 h-64 rounded-full object-cover shadow-xl"
      />

      {/* About */}
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm Pallapu Siddartha
        </h1>

        <h2 className="text-2xl font-semibold mb-4 text-blue-400">
          Software Developer & Problem Solver
        </h2>

        <p className="text-gray-300 dark:text-gray-300 max-w-xl leading-relaxed">
          I am a passionate and motivated developer with a strong interest in building real-world applications and solving practical problems using technology.
          I focus on writing clean, efficient code and continuously improving my skills in web development, problem-solving, and system design.
          I'm eager to contribute to impactful projects and grow as a professional in the tech industry.
        </p>
      </div>
    </section>
  )
}

export default Hero
