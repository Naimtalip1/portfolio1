'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight, Award, FileDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav
        className={cn(
          "transition-all duration-300 flex items-center justify-between",
          isOpen ? "rounded-2xl" : "rounded-full",
          scrolled || isOpen
            ? "bg-slate-950/85 backdrop-blur-xl border border-slate-800/80 shadow-2xl py-2.5 px-6 w-full max-w-5xl"
            : "bg-slate-900/45 backdrop-blur-md border border-white/10 shadow-lg py-2.5 px-6 w-full max-w-5xl"
        )}
      >
        {/* Brand Logo */}
        <Link
          href="/#home"
          className="flex items-center gap-2 group font-serif text-lg font-bold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xs font-bold transition-transform group-hover:scale-105 shadow-sm">
            NT
          </span>
          <span className="hidden sm:inline-block font-sans text-sm font-semibold tracking-wide text-slate-100">
            Naim Talip
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isCert = link.href === '/certifications'
            const isActive = isCert && pathname === '/certifications'
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-colors",
                  isActive
                    ? "text-white font-semibold bg-white/15"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center gap-2">
          <Button asChild size="sm" variant="outline" className="gap-1.5 text-xs font-medium rounded-full border-white/15 bg-white/5 text-slate-200 hover:text-white hover:bg-white/15">
            <a href="/Naim_Talip_ATS.pdf" download="Naim_Talip_Resume.pdf" target="_blank" rel="noreferrer">
              <FileDown className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
          </Button>
          <Button asChild size="sm" className="rounded-full text-xs font-medium gap-1 bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 border-0">
            <a href="/#contact">
              Let&apos;s Talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-4 right-4 bg-slate-950/95 backdrop-blur-xl border border-slate-800 shadow-2xl rounded-2xl p-6 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>{link.name}</span>
                {link.href === '/certifications' && (
                  <Award className="h-4 w-4 text-blue-400" />
                )}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <Button asChild variant="outline" className="w-full justify-center gap-2 text-xs border-slate-700 bg-slate-900 text-slate-200 hover:text-white">
                <a href="/Naim_Talip_ATS.pdf" download="Naim_Talip_Resume.pdf">
                  <FileDown className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild className="w-full justify-center gap-2 text-xs bg-blue-600 hover:bg-blue-500 text-white" onClick={() => setIsOpen(false)}>
                <a href="/#contact">
                  Get In Touch
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
