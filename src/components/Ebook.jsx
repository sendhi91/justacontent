import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Ebook = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.from !== 'projects') {
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <div className="text-white p-10">
      <h1 className="text-3xl font-bold mb-4">Ebook Design</h1>
      <p className="mb-6">Berisi detail dan contoh desain eBook kreatif dan menarik.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Ebook Project {i + 1}</h3>
            <p className="text-gray-300">Deskripsi singkat dari desain eBook ke-{i + 1}.</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/projects')}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        Back to Projects
      </button>
    </div>
  );
};

export default Ebook;
