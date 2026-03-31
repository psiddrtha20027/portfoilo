import { motion } from "framer-motion"
import Card from "../components/Card"
import Hero from "../components/Hero"
import Skills from "../components/Skills"

function Dashboard() {
  const sections = [
    {
      title: "Summary",
      desc: "Passionate software developer specializing in building real-world applications using clean, efficient code. Strong foundation in problem-solving, algorithms, and system design with proven innovation as Patent holder."
    },
    {
      title: "Experience",
      desc: "6+ Diverse Projects | Patent Innovation (Smart Assistive Technology) | Full Stack Capable | Embedded Systems & Parallel Computing expertise"
    },
    {
      title: "Focus Areas",
      desc: "Web Development, Problem Solving, System Design, Assistive Technology, Embedded Systems, Data Structures & Algorithms"
    },
    {
      title: "Languages",
      desc: "English (Advanced), Telugu (Native), Hindi (Proficient)"
    }
  ]

  return (
    <>
      <Hero />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="md:ml-64 p-6 grid lg:grid-cols-2 gap-6"
      >
        {/* Left Side */}
        <div className="space-y-6">
          {sections.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <Skills />

          <Card
            title="Specializations"
            description="Parallel Computing (OpenMP), Embedded Systems, System Design, Database Management, Real-time Processing"
          />
        </div>
      </motion.div>
    </>
  )
}

export default Dashboard
