import { motion } from 'framer-motion';

const projects = [
  {
    title: "Proyek 1",
    description: "Deskripsi singkat tentang proyek pertama Anda. Teknologi apa yang digunakan dan apa tujuannya.",
    tags: ["React", "Tailwind", "API"],
    image: "https://via.placeholder.com/600x400?text=Project+1",
    source: "https://github.com/username/project1",
    visit: "https://project1-demo.com",
  },
  {
    title: "Proyek 2",
    description: "Deskripsi singkat tentang proyek kedua Anda. Teknologi apa yang digunakan dan apa tujuannya.",
    tags: ["Node.js", "Express", "MongoDB"],
    image: "https://via.placeholder.com/600x400?text=Project+2",
    source: "https://github.com/username/project2",
    visit: "https://project2-demo.com",
  },
];

const ProjectButton = ({ href, children, variant = 'primary', disabled = false }) => {
  const baseClasses = "px-4 py-2 rounded-lg transition-all text-sm md:text-base font-medium";
  const variants = {
    primary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border border-secondary text-white hover:bg-secondary/10"
  };
  
  if (disabled) {
    return (
      <button
        className={`${baseClasses} ${variants[variant]} opacity-50 cursor-not-allowed`}
        disabled
      >
        {children}
      </button>
    );
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </a>
  );
};

const Projects = () => {
  return (
    <section id="proyek" className="relative w-full px-4 py-16 md:px-10 md:py-20 mx-auto bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-white text-3xl md:text-[50px] font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-blue-400">Proyek</span> Saya
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* ... rest of your component remains the same ... */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;