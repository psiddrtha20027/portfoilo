import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollDown from "../components/ScrollDown";

function Home() {
  const buttons = [
    { name: "Home", path: "/", color: "bg-gray-400" },
    { name: "Resume", path: "/resume", color: "bg-green-400" },
    { name: "Projects", path: "/projects", color: "bg-yellow-400" },
    { name: "Contact", path: "/contact", color: "bg-blue-400" }
  ];

  const skills = {
    "Programming Languages": [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "C/C++", level: 80 }
    ],
    "Web Technologies": [
      { name: "React", level: 85 },
      { name: "HTML & CSS", level: 90 },
      { name: "Git & GitHub", level: 88 }
    ],
    "Core Competencies": [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Parallel Computing (OpenMP)", level: 80 },
      { name: "Problem Solving", level: 90 }
    ],
    "Specializations": [
      { name: "Embedded Systems", level: 75 },
      { name: "System Design", level: 80 },
      { name: "Software Development", level: 85 }
    ]
  };

  const [animateBars, setAnimateBars] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Developer & Innovator";

  useEffect(() => {
    setTimeout(() => setAnimateBars(true), 300);
  }, []);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 60);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-10 pt-10 pb-24">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#020617]"></div>

      {/* Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[140px] rounded-full"></div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-16">

        {/* LEFT */}
        <div className="md:w-1/3 ml-8">

          {/* Profile Image */}
          <div className="relative mb-8 flex justify-center">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Profile"
              className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white/10"
            />
          </div>

          {/* Skills */}
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Skills
          </h2>

          <div className="space-y-5">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow hover:border-blue-400/50 transition"
              >
                <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                  {category}
                </h3>

                {items.map((skill, i) => (
                  <div key={i} className="mb-2">
                    <div className="flex justify-between text-xs text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full transition-all duration-1000"
                        style={{
                          width: animateBars ? `${skill.level}%` : "0%"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-2/3 max-w-2xl mt-2">

          <h1 className="text-5xl font-bold mb-2 text-white">
            Hi, I'm Pallapu Siddartha
          </h1>

          <h2 className="text-3xl font-semibold mb-2 text-blue-400">
            Developer & Innovator
          </h2>

          {/* Role typing */}
          <p className="text-xl text-cyan-400 mb-6 font-medium h-7">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          {/* YOUR FULL SUMMARY (restored) */}
          <p className="text-lg text-gray-300 leading-loose tracking-wide bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg mb-6">
            I am a passionate and motivated developer with a strong interest in building real-world applications and solving practical problems using technology. 
            I focus on writing clean, efficient code and continuously improving my skills in areas such as web development, problem-solving, and system design.
            <br /><br />
            With hands-on experience in Python, JavaScript, C/C++, and React, I have developed diverse projects ranging from innovative assistive technology (Smart Shoe for Visually Impaired Users - Patent) to practical management systems and intelligent algorithms.
            I am eager to contribute to impactful projects and grow as a professional in the tech industry.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-500/10 border border-blue-400/30 p-4 rounded-lg">
              <p className="text-blue-300 font-semibold text-sm">6+ Projects</p>
              <p className="text-gray-400 text-xs">Diverse & Real-world</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-400/30 p-4 rounded-lg">
              <p className="text-purple-300 font-semibold text-sm">Patent Innovator</p>
              <p className="text-gray-400 text-xs">Assistive Technology</p>
            </div>
            <div className="bg-green-500/10 border border-green-400/30 p-4 rounded-lg">
              <p className="text-green-300 font-semibold text-sm">10+ Technologies</p>
              <p className="text-gray-400 text-xs">Full Stack Capable</p>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-400/30 p-4 rounded-lg">
              <p className="text-cyan-300 font-semibold text-sm">Quick Learner</p>
              <p className="text-gray-400 text-xs">Problem Solver</p>
            </div>
          </div>

          {/* Scroll Down */}
          <ScrollDown />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-6 flex-wrap justify-end mt-16 relative z-20">
        {buttons.map((btn, index) => (
          <Link
            key={index}
            to={btn.path}
            className={`${btn.color} w-24 h-24 rounded-full flex items-center justify-center text-lg font-semibold shadow-xl hover:scale-110 transition`}
          >
            {btn.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
