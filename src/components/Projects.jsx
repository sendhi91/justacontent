import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const Projects = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  // Optimized project data with placeholder handling
  const projects = [
    {
      id: 1,
      title: "Presentation Design",
      description: "Professional presentation designs for various purposes with modern layouts and engaging visuals.",
      image: "/presentation.jpg",
      placeholder: "/placeholder-design.jpg",
      path: "/presentation",
      tags: ["Canva", "PowerPoint", "Keynote"],
      buttonText: "View Presentations"
    },
    {
      id: 2,
      title: "Ebook Design",
      description: "Beautiful ebook designs optimized for digital marketing and readability across devices.",
      image: "/ebook.jpg",
      placeholder: "/placeholder-design.jpg",
      path: "/ebook",
      tags: ["Adobe InDesign", "Canva", "Illustrator"],
      buttonText: "View Ebooks"
    }
  ];

  // Optimized navigation handler
  const handleNavigation = useCallback((path) => {
    try {
      navigate(path, { 
        state: { fromProjects: true },
        replace: false 
      });
    } catch (error) {
      console.error("Navigation error:", error);
      // More specific fallback
      if (path.includes('presentation')) {
        navigate('/projects');
      } else {
        navigate('/');
      }
    }
  }, [navigate]);

  // Animation variants for better reusability
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.7
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.25)"
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className={`px-4 sm:px-8 pt-28 pb-16 max-w-7xl mx-auto min-h-screen ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Title Section */}
      <motion.div 
        className="mb-12 text-center"
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6
            }
          }
        }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            My
          </span> Projects
        </h2>
        <p className={`max-w-2xl mx-auto ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Explore my collection of professional design projects
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover="hover"
            className={`p-6 rounded-2xl border transition-all ${
              darkMode 
                ? 'bg-gray-800/80 hover:bg-gray-800 border-gray-700 hover:border-blue-500'
                : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-blue-400'
            }`}
            custom={index}
          >
            {/* Project Image */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-56 sm:h-64 mb-6 rounded-xl overflow-hidden"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = project.placeholder;
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                darkMode ? 'from-black/60' : 'from-black/40'
              } to-transparent`} />
            </motion.div>
            
            {/* Project Content */}
            <div className="px-2">
              <h3 className={`text-2xl font-bold mb-3 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {project.title}
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 mt-4">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-200 hover:bg-blue-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
                    } transition-colors`}
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
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-medium flex items-center justify-center gap-2 text-white relative overflow-hidden group"
              >
                <span className="relative z-10">{project.buttonText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Back Button */}
      <motion.div
        className="mt-12 text-center"
        variants={itemVariants}
      >
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-lg font-medium ${
            darkMode 
              ? 'bg-gray-700 hover:bg-gray-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          } transition-all`}
        >
          ← Back to Skills
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Projects;