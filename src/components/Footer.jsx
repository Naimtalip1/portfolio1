'use client'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-light py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-4 mb-8 text-center">
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-secondary">
              <li><a href="#home" className="hover:text-light transition">Home</a></li>
              <li><a href="#about" className="hover:text-light transition">About</a></li>
              <li><a href="#projects" className="hover:text-light transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-light transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Projects</h3>
            <ul className="space-y-2 text-secondary">
              <li><a href="#" className="hover:text-light transition">View All</a></li>
              <li><a href="#" className="hover:text-light transition">GitHub</a></li>
              <li><a href="#" className="hover:text-light transition">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-secondary">
              <li><a href="#" className="hover:text-light transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent/30 pt-8 text-center">
          <p className="text-secondary">
            © {currentYear} Naim Talip 
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
