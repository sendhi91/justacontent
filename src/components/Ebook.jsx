import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PDFFlipBook } from 'react-pageflip';

// Sample PDF files (replace with your actual PDF URLs)
const samplePdfUrls = {
  1: "/ebooks/marketing-guide.pdf",
  2: "/ebooks/healthy-recipes.pdf",
  3: "/ebooks/tech-startup.pdf",
  4: "/ebooks/children-story.pdf",
  5: "/ebooks/fitness-program.pdf",
  6: "/ebooks/photography-techniques.pdf"
};

const ebookData = [
  {
    id: 1,
    title: "Digital Marketing Guide",
    description: "Interactive marketing guide with analytics dashboards and case studies. Learn modern digital marketing strategies with real-world examples and actionable insights.",
    tags: ["Marketing", "Interactive", "Business"],
    pages: 120,
    coverColor: "from-purple-500 to-indigo-600",
    icon: "📊",
    author: "Marketing Pro Team",
    publishedDate: "2023-10-15"
  },
  {
    id: 2,
    title: "Healthy Recipes Collection",
    description: "Beautifully photographed recipes with nutritional information. Over 100 delicious and healthy meals for every occasion with detailed preparation guides.",
    tags: ["Food", "Health", "Photography"],
    pages: 85,
    coverColor: "from-amber-500 to-orange-600",
    icon: "🍳",
    author: "Chef Nutrition",
    publishedDate: "2023-08-22"
  },
  {
    id: 3,
    title: "Tech Startup Playbook",
    description: "Comprehensive guide with funding strategies and growth frameworks. Everything you need to launch and scale your tech startup successfully.",
    tags: ["Business", "Technology", "Startup"],
    pages: 156,
    coverColor: "from-blue-500 to-cyan-600",
    icon: "💻",
    author: "Startup Founders",
    publishedDate: "2023-11-05"
  },
  {
    id: 4,
    title: "Children's Storybook",
    description: "Illustrated stories with interactive elements for young readers. Engaging tales with moral lessons and beautiful artwork to spark imagination.",
    tags: ["Education", "Children", "Illustration"],
    pages: 64,
    coverColor: "from-pink-500 to-rose-600",
    icon: "🧸",
    author: "Storyteller Jane",
    publishedDate: "2023-05-18"
  },
  {
    id: 5,
    title: "Fitness Program Guide",
    description: "12-week transformation program with workout videos. Step-by-step guide to achieve your fitness goals with nutrition plans and exercise routines.",
    tags: ["Fitness", "Health", "Video"],
    pages: 92,
    coverColor: "from-emerald-500 to-teal-600",
    icon: "💪",
    author: "FitMaster Coach",
    publishedDate: "2023-09-30"
  },
  {
    id: 6,
    title: "Photography Techniques",
    description: "Masterclass with before/after examples and editing tutorials. Professional techniques for all skill levels to capture stunning photographs.",
    tags: ["Art", "Photography", "Tutorial"],
    pages: 108,
    coverColor: "from-gray-600 to-gray-800",
    icon: "📷",
    author: "Photo Pro Academy",
    publishedDate: "2023-07-12"
  }
];

const Ebook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEbook, setSelectedEbook] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const openEbookViewer = async (ebookId) => {
    setIsLoading(true);
    setSelectedEbook(ebookId);
    setIsViewerOpen(true);
    document.body.style.overflow = 'hidden';
    setIsLoading(false);
  };

  const closeEbookViewer = () => {
    setIsViewerOpen(false);
    setCurrentPage(0);
    document.body.style.overflow = 'auto';
  };

  const handlePageChange = (e) => {
    setCurrentPage(e.data);
  };

  const filteredEbooks = ebookData.filter(ebook => {
    const matchesFilter = filter === 'all' || ebook.tags.includes(filter);
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         ebook.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const allTags = ['all', ...new Set(ebookData.flatMap(ebook => ebook.tags))];

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
      className="text-white pt-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen"
    >
      {/* Header Section */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text">
          Interactive Ebook Library
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore our collection of beautifully designed ebooks with realistic page-flip experience
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
            placeholder="Search ebooks by title, description or author..."
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

      {/* Ebook Viewer Modal */}
      {isViewerOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
        >
          <button 
            onClick={closeEbookViewer}
            className="absolute top-6 right-6 text-white hover:text-teal-400 transition-colors z-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="w-full max-w-6xl h-[85vh] relative">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
              </div>
            ) : (
              <>
                <PDFFlipBook 
                  width={800}
                  height={600}
                  showCover={true}
                  showPageControls={true}
                  autoSize={true}
                  maxShadowOpacity={0.5}
                  mobileScrollSupport={true}
                  onPageChange={handlePageChange}
                  className="mx-auto shadow-2xl"
                  src={samplePdfUrls[selectedEbook]}
                />
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="bg-black/70 px-4 py-2 rounded-full text-sm">
                    Page {currentPage + 1} of {ebookData.find(e => e.id === selectedEbook)?.pages}
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="mt-4 text-white text-center max-w-2xl">
            <h3 className="text-xl font-bold mb-1">
              {ebookData.find(e => e.id === selectedEbook)?.title}
            </h3>
            <p className="text-gray-300 mb-3">
              by {ebookData.find(e => e.id === selectedEbook)?.author} | Published: {
                new Date(ebookData.find(e => e.id === selectedEbook)?.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })
              }
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => window.open(samplePdfUrls[selectedEbook], '_blank')}
                className="px-4 py-2 bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
              <button 
                onClick={closeEbookViewer}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </motion.div>
      )}

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
              className="bg-gray-800/90 hover:bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all flex flex-col"
            >
              {/* Ebook Cover */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className={`relative h-56 sm:h-64 mb-6 rounded-xl overflow-hidden bg-gradient-to-br ${ebook.coverColor} flex items-center justify-center cursor-pointer`}
                onClick={() => openEbookViewer(ebook.id)}
              >
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-6xl">{ebook.icon}</span>
                </div>
                <span className="absolute bottom-3 right-3 text-sm bg-black/70 px-3 py-1 rounded-full">
                  {ebook.pages} pages
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-black/50 rounded-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
              
              {/* Ebook Content */}
              <div className="px-2 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-teal-400">{ebook.title}</h3>
                <p className="text-gray-300 mb-5 line-clamp-3">{ebook.description}</p>
                
                {/* Metadata */}
                <div className="mt-auto">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {ebook.author}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  
                  {/* Read Button */}
                  <motion.button
                    onClick={() => openEbookViewer(ebook.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2.5 bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg font-medium hover:from-teal-700 hover:to-teal-900 transition-all flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Read Flipbook
                  </motion.button>
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
            className="px-6 py-2.5 bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset Filters
          </motion.button>
        </motion.div>
      )}

      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center pb-12"
      >
        <motion.button
          onClick={() => navigate(location.state?.returnPath || '/projects')}
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