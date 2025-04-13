import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Presentation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Sample presentation projects data
  const presentations = [
    {
      id: 1,
      title: "Corporate Annual Report",
      description: "Modern design for company's yearly performance presentation with interactive data visualization",
      tags: ["Business", "Infographics", "Data"],
      coverColor: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Product Launch Deck",
      description: "Eye-catching slides for new product introduction with animated transitions",
      tags: ["Marketing", "Product", "Animation"],
      coverColor: "from-purple-500 to-fuchsia-600"
    },
    {
      id: 3,
      title: "Educational Slides",
      description: "Interactive presentation for online learning platform with quiz elements",
      tags: ["Education", "E-Learning", "Interactive"],
      coverColor: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Investor Pitch",
      description: "Professional deck for startup funding round with financial projections",
      tags: ["Finance", "Pitch Deck", "Startup"],
      coverColor: "from-amber-500 to-orange-600"
    }
  ];

  useEffect(() => {
    if (!location.state?.from) {
      navigate('/projects', { replace: true });
    }
  }, [location, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white pt-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen" // Added pt-24 for navbar spacing
    >
      {/* Header Section */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Presentation Portfolio
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Professional presentation designs that effectively communicate your message
        </p>
      </motion.header>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
      >
        {presentations.map((project, index) => (
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
            {/* Project Cover */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`relative h-56 sm:h-64 mb-6 rounded-xl overflow-hidden bg-gradient-to-br ${project.coverColor} flex items-center justify-center`}
            >
              <div className="absolute w-3/4 h-3/4 bg-white/10 rounded shadow-inner flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </motion.div>
            
            {/* Project Content */}
            <div className="px-2">
              <h2 className="text-2xl font-bold mb-3 text-blue-400">{project.title}</h2>
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
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <button
          onClick={() => navigate('/projects')}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg hover:from-blue-700 hover:to-blue-900 font-medium shadow-lg transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Presentation;