import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  const navigate = useNavigate();

  // Project data array for better maintainability
  const projects = [
    {
      id: 1,
      title: "Presentation Design",
      description: "Desain presentasi yang menarik dan profesional untuk berbagai keperluan.",
      image: "/presentation.jpg",
      path: "/presentation",
      tags: ["Canva", "PowerPoint"],
      buttonText: "View Presentations"
    },
    {
      id: 2,
      title: "Ebook Design",
      description: "Desain eBook yang estetik dan mudah dibaca, cocok untuk pemasaran digital.",
      image: "/ebook.jpg",
      path: "/ebook",
      tags: ["Adobe InDesign", "Canva"],
      buttonText: "View Ebooks"
    }
  ];

  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
    // Adding a slight delay for better UX with animations
    setTimeout(() => {
      navigate(path, { 
        state: { from: 'projects' },
        replace: false 
      });
    }, 150);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white px-4 sm:px-8 py-12 md:py-16 max-w-7xl mx-auto"
    >
      <motion.h2 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
      >
        <span className="text-blue-500">My</span> Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800/90 hover:bg-gray-800 p-5 sm:p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
          >
            <div className="relative overflow-hidden rounded-lg mb-4 h-48 sm:h-56">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = '/placeholder-project.jpg';
                }}
              />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-400">{project.title}</h3>
            <p className="mb-4 text-gray-300">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-600/80 px-3 py-1 rounded-full text-xs sm:text-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            
            <motion.button
              onClick={() => handleNavigation(project.path)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors font-medium flex items-center justify-center gap-2"
            >
              {project.buttonText}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;