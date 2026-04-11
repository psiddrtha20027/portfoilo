import { motion } from "framer-motion" // eslint-disable-line no-unused-vars

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>

      <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          className="h-2 bg-blue-500 rounded"
        />
      </div>
    </div>
  )
}

function Skills() {
  const skills = [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "C/C++", level: 80 },
    { name: "React", level: 85 },
    { name: "HTML & CSS", level: 90 },
    { name: "Data Structures & Algorithms", level: 85 },
    { name: "Parallel Computing (OpenMP)", level: 80 },
    { name: "Problem Solving", level: 90 }
  ]

  return (
    <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-6 rounded-2xl shadow-md">
      <h3 className="text-xl font-semibold mb-4">
        Technical Skills
      </h3>

      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  )
}

export default Skills
