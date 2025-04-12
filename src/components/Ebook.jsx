import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Sample ebook data (could be moved to a separate data file)
const ebookData = [
  {
    id: 1,
    title: "Digital Marketing Guide",
    description: "Modern layout for comprehensive marketing guide with interactive elements",
    tags: ["Marketing", "Guide", "Interactive"],
    pages: 120,
    coverColor: "from-purple-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Healthy Recipes Collection",
    description: "Visually appealing cookbook with professional food photography",
    tags: ["Cooking", "Health", "Food"],
    pages: 85,
    coverColor: "from-amber-500 to-orange-600"
  },
  {
    id: 3,
    title: "Tech Startup Playbook",
    description: "Professional layout for business documentation with data visualization",
    tags: ["Business", "Technology", "Infographic"],
    pages: 156,
    coverColor: "from-blue-500 to-cyan-600"
  },
  {
    id: 4,
    title: "Children's Storybook",
    description: "Colorful illustrations and playful typography for young readers",
    tags: ["Education", "Children", "Illustration"],
    pages: 64,
    coverColor: "from-pink-500 to-rose-600"
  },
  {
    id: 5,
    title: "Fitness Program Guide",
    description: "Motivational design with exercise visuals and progress trackers",
    tags: ["Fitness", "Health", "Workout"],
    pages: 92,
    coverColor: "from-emerald-500 to-teal-600"
  },
  {
    id: 6,
    title: "Photography Techniques",
    description: "Elegant design showcasing photographic examples with tips",
    tags: ["Art", "Photography", "Tutorial"],
    pages: 108,
    coverColor: "from-gray-600 to-gray-800"
  }
];

const Ebook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter ebooks based on selected tag and search term
  const filteredEbooks = ebookData.filter(ebook => {
    const matchesFilter = filter === 'all' || ebook.tags.includes(filter);
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         ebook.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Get all unique tags for filter
  const allTags = ['all', ...new Set(ebookData.flatMap(ebook => ebook.tags))];

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
      className="text-white p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto min-h-screen"
    >
      <header className="mb-10 text-center">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text"
        >
          Ebook Design Portfolio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-300 max-w-2xl mx-auto mb-6"
        >
          Engaging ebook designs that enhance readability and visual appeal
        </motion.p>

        {/* Search and Filter Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center gap-4 mb-8"
        >
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder="Search ebooks..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg 
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <select
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {allTags.map(tag => (
              <option key={tag} value={tag}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </option>
            ))}
          </select>
        </motion.div>
      </header>

      {filteredEbooks.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredEbooks.map((ebook) => (
            <motion.div
              key={ebook.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-gray-800/80 hover:bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700 hover:border-teal-500 transition-all group flex flex-col"
            >
              {/* Ebook Cover */}
              <div className={`relative h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br ${ebook.coverColor} flex items-center justify-center`}>
                <div className="absolute w-3/4 h-3/4 bg-white/10 rounded shadow-inner flex items-center justify-center">
                  <svg className="w-12 h-12 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="absolute bottom-2 right-2 text-xs bg-black/50 px-2 py-1 rounded">
                  {ebook.pages} pages
                </span>
              </div>
              
              {/* Ebook Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-teal-400 group-hover:text-teal-300 transition-colors">
                  {ebook.title}
                </h3>
                <p className="text-gray-300 mb-4">{ebook.description}</p>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {ebook.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setFilter(tag)}
                    className="text-xs px-2 py-1 bg-gray-700 rounded-full cursor-pointer hover:bg-teal-600 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <h3 className="text-xl text-gray-400 mb-4">No ebooks found matching your criteria</h3>
          <button
            onClick={() => {
              setFilter('all');
              setSearchTerm('');
            }}
            className="px-4 py-2 bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Reset Filters
          </button>
        </motion.div>
      )}

      <div className="text-center">
        <motion.button
          onClick={() => navigate('/projects')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg hover:from-teal-700 hover:to-teal-900 font-medium shadow-lg transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Ebook;