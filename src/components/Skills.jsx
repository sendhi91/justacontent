const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 70 },
  { name: "Node.js", level: 65 },
]

const Skills = () => {
  return (
    <section id="keahlian" className="relative w-full px-10 py-20 mx-auto bg-tertiary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-[50px] font-bold mb-10">
          {/* <span className="text-secondary">My Skill</span> */}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-secondary text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-secondary h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills