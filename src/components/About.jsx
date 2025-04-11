import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import sen from '../assets/sen.webp'; // Make sure this path is correct

const About = () => {
  const { darkMode } = useDarkMode();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      id="tentang"
      className="relative w-full px-4 py-16 md:px-10 md:py-20 mx-auto min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        background: darkMode
          ? 'linear-gradient(to bottom right, #111827, #1f2937)'
          : 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-white text-4xl md:text-[50px] font-bold mb-10"
          variants={itemVariants}
        >
          Tentang <span className="text-blue-400">Saya</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div className="flex-1" variants={itemVariants}>
            <motion.p 
              className="text-blue-400 text-[18px] max-w-3xl leading-[30px] mb-10"
              variants={itemVariants}
            >
              Saya Albertus Sendhi Satriawan, seorang Graphics Designer dengan pengalaman 
              5 tahun di industri kreatif. Spesialisasi saya meliputi desain branding, 
              ilustrasi digital, dan tata letak publikasi. Saya percaya bahwa desain 
              yang baik harus menyampaikan pesan dengan jelas sekaligus memukau secara visual.
            </motion.p>
            
            <motion.div className="mt-10" variants={itemVariants}>
              <h3 className="text-white text-2xl md:text-[25px] font-bold mb-5">Pendidikan</h3>
              <ul className="text-blue-400 list-disc pl-5 space-y-2">
                <motion.li variants={itemVariants}>S1 Desain Komunikasi Visual - Universitas Sebelas Maret (2015-2019)</motion.li>
                <motion.li variants={itemVariants}>SMA Negeri 1 Semarang - Jurusan IPA (2012-2015)</motion.li>
              </ul>
            </motion.div>
            
            <motion.div className="mt-10" variants={itemVariants}>
              <h3 className="text-white text-2xl md:text-[25px] font-bold mb-5">Pengalaman</h3>
              <ul className="text-blue-400 list-disc pl-5 space-y-2">
                <motion.li variants={itemVariants}>Senior Graphic Designer - PT Kreasi Digital (2021-sekarang)</motion.li>
                <motion.li variants={itemVariants}>Graphic Designer - Studio Visual Semarang (2019-2021)</motion.li>
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] relative">
              <motion.div 
                className="w-full h-full rounded-2xl border-2 border-blue-400 overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <img 
                  src={sen} 
                  alt="Albertus Sendhi Satriawan"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-transparent bg-black/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;