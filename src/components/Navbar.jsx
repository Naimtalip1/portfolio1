'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed w-full z-50 top-0 left-0 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav className={`
        transition-all duration-300
        ${isOpen ? 'rounded-2xl' : 'rounded-full'}
        ${scrolled || isOpen
          ? 'bg-primary/90 backdrop-blur-md shadow-[0_8px_32px_rgba(17,45,78,0.3)] border border-accent/50 py-2 px-6 w-[95%] md:w-auto' 
          : 'bg-transparent py-4 w-full max-w-5xl px-6'}
      `}>
        <div className="relative">
          <div className="flex justify-between md:justify-center items-center h-12">
            {/* Mobile Logo */}
            <Link href="/#home" className="md:hidden text-light font-bold text-xl tracking-wider">
              NT.
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link href="/#home" className="text-sm font-medium text-secondary hover:text-light transition">Home</Link>
              <Link href="/#about" className="text-sm font-medium text-secondary hover:text-light transition">About</Link>
              <Link href="/#skills" className="text-sm font-medium text-secondary hover:text-light transition">Skills</Link>
              <Link href="/#projects" className="text-sm font-medium text-secondary hover:text-light transition">Projects</Link>
              <Link href="/#experience" className="text-sm font-medium text-secondary hover:text-light transition">Experience</Link>
              <Link href="/certifications" className="text-sm font-medium text-secondary hover:text-light transition">Certifications</Link>
              <Link href="/#contact" className="text-sm font-medium text-secondary hover:text-light transition">Contact</Link>
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-light hover:text-accent transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}>
            <div className="flex flex-col space-y-4 pb-4 text-center w-48 mx-auto">
              <Link href="/#home" onClick={() => setIsOpen(false)} className="text-secondary hover:text-light">Home</Link>
              <Link href="/#about" onClick={() => setIsOpen(false)} className="text-secondary hover:text-light">About</Link>
              <Link href="/#skills" onClick={() => setIsOpen(false)} className="text-secondary hover:text-light">Skills</Link>
              <Link href="/#projects" onClick={() => setIsOpen(false)} className="text-secondary hover:text-light">Projects</Link>
              <Link href="/#experience" onClick={() => setIsOpen(false)} className="text-secondary hover:text-light">Experience</Link>
              <Link href="/certifications" onClick={() => setIsOpen(false)} className="text-secondary hover:text-light">Certifications</Link>
              <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-secondary hover:text-light">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
