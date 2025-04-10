const Contact = () => {
  return (
    <section id="kontak" className="relative w-full px-10 py-20 mx-auto bg-tertiary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-[50px] font-bold mb-10">
          Hubungi <span className="text-secondary">Saya</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <p className="text-secondary text-[18px] max-w-3xl leading-[30px] mb-10">
              Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, 
              jangan ragu untuk menghubungi saya melalui formulir ini atau 
              langsung melalui email dan media sosial.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white">email@anda.com</span>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-white">+62 812-3456-7890</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nama Anda</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 bg-primary border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email Anda</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 bg-primary border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Pesan Anda</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full px-4 py-2 bg-primary border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-80 transition-all"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact