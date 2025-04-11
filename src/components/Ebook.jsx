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
      <p>Berisi detail dan contoh desain eBook kreatif dan menarik.</p>
    </div>
  );
};

export default Ebook;
