import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Presentation Design",
      description: "Professional presentation designs for various purposes with modern layouts and engaging visuals.",
      image: "/presentation.jpg",
      path: "/presentation",
      tags: ["Canva", "PowerPoint", "Keynote"],
      buttonText: "View Presentations"
    },
    {
      id: 2,
      title: "Ebook Design",
      description: "Beautiful ebook designs optimized for digital marketing and readability across devices.",
      image: "/ebook.jpg",
      path: "/ebook",
      tags: ["Adobe InDesign", "Canva", "Illustrator"],
      buttonText: "View Ebooks"
    }
  ];

  const handleNavigation = (path) => {
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
      className="text-white px-4 sm:px-8 pt-28 pb-16 max-w-7xl mx-auto min-h-screen" // Added pt-28 for navbar spacing
    >
      {/* Title Section with Enhanced Animation */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            My
          </span> Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my collection of professional design projects
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              y: -8,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
            }}
            className="bg-gray-800/80 hover:bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all"
          >
            {/* Project Image */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-56 sm:h-64 mb-6 rounded-xl overflow-hidden"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = '/placeholder-project.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
            
            {/* Project Content */}
            <div className="px-2">
              <h3 className="text-2xl font-bold mb-3 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-5">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200 hover:bg-blue-600 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              {/* View Button */}
              <motion.button
                onClick={() => handleNavigation(project.path)}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(to right, #3b82f6, #2563eb)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                {project.buttonText}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;