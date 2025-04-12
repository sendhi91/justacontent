import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Presentation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Sample project data (could be moved to a separate file or fetched from API)
  const projects = [
    {
      id: 1,
      title: "Corporate Annual Report",
      description: "Modern design for company's yearly performance presentation",
      tags: ["Business", "Infographics"]
    },
    {
      id: 2,
      title: "Product Launch Deck",
      description: "Eye-catching slides for new product introduction",
      tags: ["Marketing", "Product"]
    },
    {
      id: 3,
      title: "Educational Slides",
      description: "Interactive presentation for online learning platform",
      tags: ["Education", "E-Learning"]
    },
    {
      id: 4,
      title: "Investor Pitch",
      description: "Professional deck for startup funding round",
      tags: ["Finance", "Pitch Deck"]
    },
    {
      id: 5,
      title: "Conference Keynote",
      description: "Bold visual design for tech conference presentation",
      tags: ["Technology", "Event"]
    },
    {
      id: 6,
      title: "Sales Proposal",
      description: "Persuasive slides for client acquisition",
      tags: ["Sales", "Proposal"]
    }
  ];

  // Redirect if not coming from projects page
  useEffect(() => {
    if (location.state?.from !== 'projects') {
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="text-white p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto"
    >
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Presentation Design Portfolio
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Professional presentation designs that communicate ideas effectively and leave lasting impressions
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            className="bg-gray-800/80 hover:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs px-2 py-1 bg-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <motion.button
          onClick={() => navigate('/projects')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg hover:from-blue-700 hover:to-blue-900 font-medium shadow-lg transition-all"
        >
          Back to Projects
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Presentation;