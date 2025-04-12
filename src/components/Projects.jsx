import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Add console log for debugging
    console.log(`Navigating to: ${path}`);
    navigate(path, { 
      state: { from: 'projects' },
      // Add replace: false to ensure proper history stack
      replace: false 
    });
  };

  return (
    <section className="text-white px-8 py-16">
      <h2 className="text-4xl font-bold mb-12">
        <span className="text-blue-500">My</span> Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 - Presentation Design */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-gray-800 p-6 rounded-xl"
        >
          <img 
            src="/presentation.jpg" 
            alt="Presentation Design" 
            className="mb-4 rounded-md w-full h-48 object-cover"
          />
          <h3 className="text-2xl font-semibold mb-2">Presentation Design</h3>
          <p className="mb-4">Desain presentasi yang menarik dan profesional untuk berbagai keperluan.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Canva</span>
            <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">PowerPoint</span>
          </div>
          <button
            onClick={() => handleNavigation('/presentation')}
            className="border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            See More
          </button>
        </motion.div>

        {/* Project 2 - Ebook Design */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-gray-800 p-6 rounded-xl"
        >
          <img 
            src="/ebook.jpg" 
            alt="Ebook Design" 
            className="mb-4 rounded-md w-full h-48 object-cover"
          />
          <h3 className="text-2xl font-semibold mb-2">Ebook Design</h3>
          <p className="mb-4">Desain eBook yang estetik dan mudah dibaca, cocok untuk pemasaran digital.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Adobe InDesign</span>
            <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Canva</span>
          </div>
          <button
            onClick={() => handleNavigation('/ebook')}
            className="border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            See More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;