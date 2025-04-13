import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ebookData = [
  {
    id: 1,
    title: "Digital Marketing Guide",
    description: "Interactive marketing guide with analytics dashboards and case studies",
    tags: ["Marketing", "Interactive", "Business"],
    pages: 120,
    coverColor: "from-purple-500 to-indigo-600",
    icon: "📊"
  },
  {
    id: 2,
    title: "Healthy Recipes Collection",
    description: "Beautifully photographed recipes with nutritional information",
    tags: ["Food", "Health", "Photography"],
    pages: 85,
    coverColor: "from-amber-500 to-orange-600",
    icon: "🍳"
  },
  {
    id: 3,
    title: "Tech Startup Playbook",
    description: "Comprehensive guide with funding strategies and growth frameworks",
    tags: ["Business", "Technology", "Startup"],
    pages: 156,
    coverColor: "from-blue-500 to-cyan-600",
    icon: "💻"
  },
  {
    id: 4,
    title: "Children's Storybook",
    description: "Illustrated stories with interactive elements for young readers",
    tags: ["Education", "Children", "Illustration"],
    pages: 64,
    coverColor: "from-pink-500 to-rose-600",
    icon: "🧸"
  },
  {
    id: 5,
    title: "Fitness Program Guide",
    description: "12-week transformation program with workout videos",
    tags: ["Fitness", "Health", "Video"],
    pages: 92,
    coverColor: "from-emerald-500 to-teal-600",
    icon: "💪"
  },
  {
    id: 6,
    title: "Photography Techniques",
    description: "Masterclass with before/after examples and editing tutorials",
    tags: ["Art", "Photography", "Tutorial"],
    pages: 108,
    coverColor: "from-gray-600 to-gray-800",
    icon: "📷"
  }
];

const Ebook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEbooks = ebookData.filter(ebook => {
    const matchesFilter = filter === 'all' || ebook.tags.includes(filter);
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         ebook.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const allTags = ['all', ...new Set(ebookData.flatMap(ebook => ebook.tags))];

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
      transition={{ duration: 0.5 }}
      className="text-white pt-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen" // Added pt-28 for navbar spacing
    >
      {/* Header Section */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text">
          Ebook Design Portfolio
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Professionally designed ebooks that engage and inform readers
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
            placeholder="Search ebooks by title or description..."
            className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
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
          className="px-5 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
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

      {/* Ebooks Grid */}
      {filteredEbooks.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredEbooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
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
              className="bg-gray-800/90 hover:bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all"
            >
              {/* Ebook Cover */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className={`relative h-56 sm:h-64 mb-6 rounded-xl overflow-hidden bg-gradient-to-br ${ebook.coverColor} flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-6xl">{ebook.icon}</span>
                </div>
                <span className="absolute bottom-3 right-3 text-sm bg-black/70 px-3 py-1 rounded-full">
                  {ebook.pages} pages
                </span>
              </motion.div>
              
              {/* Ebook Content */}
              <div className="px-2">
                <h3 className="text-2xl font-bold mb-3 text-teal-400">{ebook.title}</h3>
                <p className="text-gray-300 mb-5">{ebook.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {ebook.tags.map((tag) => (
                    <motion.button
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFilter(tag)}
                      className="px-3 py-1.5 bg-gray-700 rounded-full text-xs sm:text-sm text-gray-200 hover:bg-teal-600 transition-colors"
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
          <h3 className="text-xl text-gray-400 mb-6">No ebooks match your search criteria</h3>
          <motion.button
            onClick={() => {
              setFilter('all');
              setSearchTerm('');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
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
          onClick={() => navigate('/projects')}
          whileHover={{ 
            scale: 1.05,
            background: "linear-gradient(to right, #0d9488, #115e59)"
          }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-teal-800 rounded-xl font-medium shadow-lg transition-all flex items-center justify-center gap-2 mx-auto"
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

export default Ebook;