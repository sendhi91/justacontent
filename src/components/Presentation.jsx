import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Presentation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect jika tidak datang dari /projects
  useEffect(() => {
    if (location.state?.from !== 'projects') {
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <div className="text-white p-10">
      <h1 className="text-3xl font-bold mb-4">Presentation Design</h1>
      <p>Berisi detail dan contoh desain presentasi profesional.</p>
    </div>
  );
};

export default Presentation;
