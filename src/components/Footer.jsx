'use client'

import Link from 'next/link'
import { FolderGit2, ArrowUpRight, Mail, FileDown, Heart } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 font-serif text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xs font-bold shadow-sm">
                NT
              </span>
              <span>Naim Talip</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Software Engineer specializing in AI-driven systems, full-stack applications, and rapid application development (RAD). Based in Kuching, Sarawak.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Button asChild size="sm" variant="outline" className="rounded-full text-xs border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white gap-1.5">
                <a href="https://github.com/naimtalip" target="_blank" rel="noreferrer">
                  <FolderGit2 className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full text-xs border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white gap-1.5">
                <a href="https://linkedin.com/in/naimtalip2442" target="_blank" rel="noreferrer">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-white transition-colors">
                  Skills &amp; Tooling
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-white transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-white transition-colors">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Contact &amp; Connect
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Have an opening or project in mind? Let&apos;s build something extraordinary together.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="mailto:naimtalipwork@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-mono transition-colors"
              >
                <Mail className="h-4 w-4" />
                naimtalipwork@gmail.com
              </a>
              <a
                href="/Naim_Talip_ATS.pdf"
                download="Naim_Talip_Resume.pdf"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                <FileDown className="h-4 w-4" />
                Download Resume (ATS-friendly PDF)
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {currentYear} Naim Talip. Built with Next.js, shadcn/ui &amp; Tailwind CSS.</p>
          <p className="flex items-center gap-1">
            Engineered in Kuching, Sarawak
          </p>
        </div>
      </div>
    </footer>
  )
}
