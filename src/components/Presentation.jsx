import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Presentation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Debugging log
  console.log('Presentation page location state:', location.state);

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
      className="text-white p-8 max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">Presentation Designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Presentation Project {item}</h2>
            <p className="mb-4">Detailed description of presentation design project.</p>
            <div className="h-48 bg-gray-700 rounded mb-4 flex items-center justify-center">
              <span>Presentation Image {item}</span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate('/projects')}
        className="mt-8 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Projects
      </button>
    </motion.div>
  );
};

export default Presentation;