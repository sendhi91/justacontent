const Footer = () => {
  return (
    <footer className="relative w-full px-10 py-10 mx-auto bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <p className="text-white text-center">
          © {new Date().getFullYear()} Albertus Sendhi Satriawan. All Rights Reserved.
        </p>
        
        {/* <div className="flex gap-5 mt-5">
          {['twitter', 'github', 'instagram'].map((social, index) => (
            <a 
              key={index} 
              href={`https://${social}.com/username`} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-secondary transition-all"
            >
              <span className="text-white">{social.charAt(0).toUpperCase()}</span>
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  )
}

export default Footer