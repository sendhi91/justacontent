import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Ebook = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Sample ebook data (could be moved to a separate file or fetched from API)
  const ebooks = [
    {
      id: 1,
      title: "Digital Marketing Guide",
      description: "Modern layout for comprehensive marketing guide",
      tags: ["Marketing", "Guide"],
      pages: 120
    },
    {
      id: 2,
      title: "Healthy Recipes Collection",
      description: "Visually appealing cookbook with food photography",
      tags: ["Cooking", "Health"],
      pages: 85
    },
    {
      id: 3,
      title: "Tech Startup Playbook",
      description: "Professional layout for business documentation",
      tags: ["Business", "Technology"],
      pages: 156
    },
    {
      id: 4,
      title: "Children's Storybook",
      description: "Colorful illustrations and playful typography",
      tags: ["Education", "Children"],
      pages: 64
    },
    {
      id: 5,
      title: "Fitness Program Guide",
      description: "Motivational design with exercise visuals",
      tags: ["Fitness", "Health"],
      pages: 92
    },
    {
      id: 6,
      title: "Photography Techniques",
      description: "Elegant design showcasing photographic examples",
      tags: ["Art", "Photography"],
      pages: 108
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
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text">
          Ebook Design Portfolio
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Engaging ebook designs that enhance readability and visual appeal
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {ebooks.map((ebook) => (
          <motion.div
            key={ebook.id}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gray-800/80 hover:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-500 transition-all group"
          >
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <div className="absolute w-3/4 h-3/4 bg-gray-600/30 rounded shadow-inner flex items-center justify-center">
                <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-teal-400 group-hover:text-teal-300 transition-colors">
              {ebook.title}
            </h3>
            <p className="text-gray-300 mb-3">{ebook.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {ebook.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-2 py-1 bg-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-400">{ebook.pages} pages</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <motion.button
          onClick={() => navigate('/projects')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg hover:from-teal-700 hover:to-teal-900 font-medium shadow-lg transition-all"
        >
          Back to Projects
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Ebook;