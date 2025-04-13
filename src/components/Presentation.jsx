import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const presentationData = [
  {
    id: 1,
    title: "Annual Business Report",
    description: "Corporate presentation with financial dashboards and growth metrics",
    tags: ["Business", "Finance", "Analytics"],
    slides: 42,
    coverColor: "from-blue-500 to-indigo-600",
    icon: "📈"
  },
  {
    id: 2,
    title: "Product Launch Deck",
    description: "Modern product presentation with 3D renders and feature highlights",
    tags: ["Marketing", "Product", "Design"],
    slides: 36,
    coverColor: "from-purple-500 to-pink-600",
    icon: "🚀"
  },
  {
    id: 3,
    title: "Educational Seminar",
    description: "Interactive learning presentation with quizzes and animations",
    tags: ["Education", "Interactive", "Learning"],
    slides: 58,
    coverColor: "from-green-500 to-teal-600",
    icon: "🎓"
  },
  {
    id: 4,
    title: "Marketing Strategy",
    description: "Brand strategy deck with campaign case studies",
    tags: ["Marketing", "Strategy", "Branding"],
    slides: 27,
    coverColor: "from-red-500 to-amber-600",
    icon: "📊"
  },
  {
    id: 5,
    title: "Tech Conference Keynote",
    description: "Keynote presentation with live demos and code snippets",
    tags: ["Technology", "Development", "Innovation"],
    slides: 64,
    coverColor: "from-gray-500 to-gray-800",
    icon: "💻"
  },
  {
    id: 6,
    title: "Startup Pitch Deck",
    description: "Investor pitch presentation with financial projections",
    tags: ["Startup", "Pitch", "Investment"],
    slides: 22,
    coverColor: "from-yellow-500 to-orange-600",
    icon: "💡"
  }
];

const Presentation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Enhanced navigation handler with state preservation
  const handleBackNavigation = () => {
    navigate(location.state?.returnPath || '/projects', {
      state: {
        from: 'presentation',
        scrollPosition: window.scrollY
      }
    });
  };

  const filteredPresentations = presentationData.filter(presentation => {
    const matchesFilter = filter === 'all' || presentation.tags.includes(filter);
    const matchesSearch = presentation.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         presentation.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const allTags = ['all', ...new Set(presentationData.flatMap(presentation => presentation.tags))];

  useEffect(() => {
    if (!location.state?.from) {
      navigate('/projects', { 
        replace: true,
        state: { 
          from: 'presentation',
          returnPath: '/projects'
        }
      });
    }

    // Restore scroll position if coming back
    if (location.state?.scrollPosition) {
      window.scrollTo(0, location.state.scrollPosition);
    }
  }, [location, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white pt-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen"
    >
      {/* Header Section */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
          Presentation Design Portfolio
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Professionally designed presentations that communicate effectively
        </p>
      </motion.header>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row justify-center gap-4 mb-12 max-w-4xl mx-auto"
      >
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search presentations by title or description..."
            className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg 
            className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <select
          className="px-5 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {allTags.map(tag => (
            <option key={tag} value={tag}>
              {tag === 'all' ? 'All Categories' : tag}
            </option>
          ))}
        </select>
      </motion.div>

      {/* Presentations Grid */}
      {filteredPresentations.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredPresentations.map((presentation, index) => (
            <motion.div
              key={presentation.id}
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
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
              }}
              className="bg-gray-800/90 hover:bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all"
            >
              {/* Presentation Cover */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className={`relative h-56 sm:h-64 mb-6 rounded-xl overflow-hidden bg-gradient-to-br ${presentation.coverColor} flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-6xl">{presentation.icon}</span>
                </div>
                <span className="absolute bottom-3 right-3 text-sm bg-black/70 px-3 py-1 rounded-full">
                  {presentation.slides} slides
                </span>
              </motion.div>
              
              {/* Presentation Content */}
              <div className="px-2">
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">{presentation.title}</h3>
                <p className="text-gray-300 mb-5">{presentation.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {presentation.tags.map((tag) => (
                    <motion.button
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFilter(tag)}
                      className="px-3 py-1.5 bg-gray-700 rounded-full text-xs sm:text-sm text-gray-200 hover:bg-cyan-600 transition-colors"
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <h3 className="text-xl text-gray-400 mb-6">No presentations match your search criteria</h3>
          <motion.button
            onClick={() => {
              setFilter('all');
              setSearchTerm('');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Reset Filters
          </motion.button>
        </motion.div>
      )}

      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <motion.button
          onClick={handleBackNavigation}
          whileHover={{ 
            scale: 1.05,
            background: "linear-gradient(to right, #0891b2, #155e75)"
          }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl font-medium shadow-lg transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Projects
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Presentation;