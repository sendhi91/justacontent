const projects = [
  {
    title: "Proyek 1",
    description: "Deskripsi singkat tentang proyek pertama Anda. Teknologi apa yang digunakan dan apa tujuannya.",
    tags: ["React", "Tailwind", "API"],
    image: "", // URL gambar proyek
    source: "", // URL sumber kode
    visit: "", // URL demo
  },
  {
    title: "Proyek 2",
    description: "Deskripsi singkat tentang proyek kedua Anda. Teknologi apa yang digunakan dan apa tujuannya.",
    tags: ["Node.js", "Express", "MongoDB"],
    image: "",
    source: "",
    visit: "",
  },
]

const Projects = () => {
  return (
    <section id="proyek" className="relative w-full px-10 py-20 mx-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-[50px] font-bold mb-10">
          <span className="text-secondary">Proyek</span> Saya
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-tertiary p-5 rounded-2xl">
              <div className="w-full h-48 bg-gray-800 rounded-xl mb-5"></div>
              <h3 className="text-white text-[24px] font-bold mb-2">{project.title}</h3>
              <p className="text-secondary mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-white bg-primary px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={project.source} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-white bg-secondary px-4 py-2 rounded-lg"
                >
                  Kode Sumber
                </a>
                <a 
                  href={project.visit} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-white border border-secondary px-4 py-2 rounded-lg"
                >
                  Lihat Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects