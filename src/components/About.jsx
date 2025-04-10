const About = () => {
  return (
    <section id="tentang" className="relative w-full px-10 py-20 mx-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-[50px] font-bold mb-10">
          Tentang <span className="text-secondary">Saya</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <p className="text-secondary text-[18px] max-w-3xl leading-[30px]">
              Deskripsi lengkap tentang diri Anda. Ceritakan latar belakang pendidikan, 
              pengalaman kerja, dan apa yang membuat Anda tertarik di bidang ini. 
              Anda bisa menulis beberapa paragraf di sini.
            </p>
            
            <div className="mt-10">
              <h3 className="text-white text-[25px] font-bold mb-5">Pendidikan</h3>
              <ul className="text-secondary list-disc pl-5 space-y-2">
                <li>Gelar dan Universitas - Tahun</li>
                <li>Sekolah Menengah - Tahun</li>
              </ul>
            </div>
            
            <div className="mt-10">
              <h3 className="text-white text-[25px] font-bold mb-5">Pengalaman</h3>
              <ul className="text-secondary list-disc pl-5 space-y-2">
                <li>Posisi di Perusahaan - Tahun</li>
                <li>Posisi di Perusahaan - Tahun</li>
              </ul>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center items-center">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
              <div className="w-full h-full rounded-2xl border-2 border-secondary"></div>
              {/* Ganti dengan gambar Anda */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-black/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About