import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import sen from '../assets/sen.webp';

const About = () => {
  const { darkMode } = useDarkMode();

  return (
    <motion.section
      id="tentang"
      className="relative w-full px-4 py-16 md:px-10 md:py-20 mx-auto min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: darkMode
          ? 'linear-gradient(to bottom right, #111827, #1f2937)'
          : 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-white text-4xl md:text-[50px] font-bold mb-10"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tentang <span className="text-blue-400">Saya</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <motion.p 
              className="text-blue-400 text-[18px] max-w-3xl leading-[30px] mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Saya Albertus Sendhi Satriawan, Graphic Designer profesional dengan 
              pengalaman lebih dari 5 tahun di industri kreatif. Spesialisasi saya 
              meliputi desain branding, ilustrasi digital, dan user interface design. 
              Saya memiliki passion untuk menciptakan desain yang tidak hanya estetik 
              tetapi juga efektif dalam menyampaikan pesan.
            </motion.p>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-white text-2xl md:text-[25px] font-bold mb-5">Keahlian</h3>
              <ul className="text-blue-400 list-disc pl-5 space-y-2">
                <li>Adobe Creative Suite (Photoshop, Illustrator, InDesign)</li>
                <li>UI/UX Design (Figma, Adobe XD)</li>
                <li>Brand Identity Development</li>
                <li>Digital Illustration</li>
                <li>Typography & Layout Design</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-white text-2xl md:text-[25px] font-bold mb-5">Pendidikan</h3>
              <ul className="text-blue-400 list-disc pl-5 space-y-2">
                <li>S1 Desain Komunikasi Visual - Universitas Sebelas Maret (2015-2019)</li>
                <li>SMA Negeri 1 Semarang - Jurusan IPA (2012-2015)</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3 className="text-white text-2xl md:text-[25px] font-bold mb-5">Pengalaman</h3>
              <ul className="text-blue-400 list-disc pl-5 space-y-2">
                <li>Senior Graphic Designer - PT Kreasi Digital (2021-sekarang)</li>
                <li>Graphic Designer - Studio Visual Semarang (2019-2021)</li>
                <li>Freelance Designer (2017-2019)</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] relative">
              <div className="w-full h-full rounded-2xl border-2 border-blue-400 overflow-hidden">
                <img 
                  src={sen} 
                  alt="Albertus Sendhi Satriawan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-black/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;