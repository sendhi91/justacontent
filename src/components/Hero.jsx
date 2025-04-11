import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import sen from '../assets/sen.webp'; // Pastikan path ini sesuai dengan struktur folder Anda

const Hero = () => {
  const { darkMode } = useDarkMode();

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300"
      style={{
        background: darkMode 
          ? 'linear-gradient(to bottom right, #111827, #1f2937)'
          : 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)'
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full gap-8">
        {/* Bagian Teks (Digerakkan ke Kiri) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left md:w-1/2" // Mengatur lebar dan alignment
        >
          <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-2">
            Halo
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Albertus Sendhi Satriawan
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Graphics Designer
          </h2>

          {/* Tombol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
            >
              Lihat Projek Saya
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-all"
            >
              Hubungi Saya
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="animate-bounce w-6 h-6 mx-auto border-2 border-gray-400 dark:border-gray-300 rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Bagian Foto (Ditambahkan di Sebelah Kanan) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <img 
            src={sen} 
            alt="Albertus Sendhi Satriawan"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-blue-500 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;