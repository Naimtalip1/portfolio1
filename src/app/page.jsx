'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MapPin,
  GraduationCap,
  Award,
  Code2,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  ExternalLink,
  FileDown,
  Mail,
  Sparkles,
  CheckCircle2,
  Layers,
  Cpu,
  Database,
  Bot,
  Briefcase,
  FolderGit2
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

import AuroraBackground from '@/components/AuroraBackground'
import AsciiBackground from '@/components/AsciiBackground'

export default function Home() {
  const skillCategories = [
    {
      id: 'all',
      label: 'All Skills',
      items: [
        'AI Engineering', 'Full-Stack Development', 'Frontend Development', 'Backend Development', 'RAD', 'Mobile App Development',
        'Next.js', 'Node.js', 'AdonisJs', 'JavaScript', 'Python', 'Dart', 'Java', 'C++', 'C#', 'Svelte', 'Tailwind CSS', 'Flutter',
        'PostgreSQL', 'FalkorDB', 'ChromaDB', 'vLLM', 'OllamaStudio', 'Sentence Transformers',
        'RAG System', 'Multimodal LLMs', 'Smart Document Parsing', 'Vector Embedding', 'Model Deployment', 'Web Scraping',
        'Git', 'GitHub', 'VS Code', 'Android Studio', 'Linux'
      ],
    },
    {
      id: 'core',
      label: 'Core Engineering',
      icon: Cpu,
      items: ['AI Engineering', 'Full-Stack Development', 'Frontend Development', 'Backend Development', 'RAD', 'Mobile App Development'],
    },
    {
      id: 'stack',
      label: 'Dev Stack',
      icon: Code2,
      items: ['Next.js', 'Node.js', 'AdonisJs', 'JavaScript', 'Python', 'Dart', 'Java', 'C++', 'C#', 'Svelte', 'Tailwind CSS', 'Flutter'],
    },
    {
      id: 'ai',
      label: 'Databases & AI Tools',
      icon: Database,
      items: ['PostgreSQL', 'FalkorDB', 'ChromaDB', 'vLLM', 'OllamaStudio', 'Sentence Transformers'],
    },
    {
      id: 'emerging',
      label: 'Emerging Tech',
      icon: Bot,
      items: ['RAG System', 'Multimodal LLMs', 'Smart Document Parsing', 'Vector Embedding', 'Model Deployment', 'Web Scraping'],
    },
    {
      id: 'tools',
      label: 'Tools & DevOps',
      icon: Layers,
      items: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Linux'],
    },
  ]

  const projects = [
    {
      id: 1,
      title: 'RANYAI - RAG & Audit Compliance System',
      description: 'AI-powered data ingestion and compliance verification system utilizing smart parsing and open-source multimodal LLMs to dramatically reduce manual enterprise analysis costs.',
      category: 'AI & Enterprise',
      tech: ['Python', 'vLLM', 'ChromaDB', 'FalkorDB', 'RAG'],
      status: 'In Development',
      badgeVariant: 'accent',
    },
    {
      id: 2,
      title: 'EntryBiot Android App',
      description: 'Solo-developed mobile productivity app simplifying raw data retrieval and entry with Google Sheets API, increasing operational throughput by ~300% (from 20 to 80 units/day).',
      category: 'Mobile & Cloud',
      tech: ['Android Studio', 'Java', 'Google Sheets API'],
      status: 'Deployed',
      badgeVariant: 'success',
    },
    {
      id: 3,
      title: 'CMS Sales Quotation Web App',
      description: 'Custom-built web application to automate the client quotation calculation pipeline for BMW vehicle sales, minimizing human calculation latency and optimizing conversion.',
      category: 'Full-Stack Web',
      tech: ['JavaScript', 'Node.js', 'Tailwind CSS'],
      status: 'Production',
      badgeVariant: 'secondary',
    },
    {
      id: 4,
      title: 'RUAI - Citizen Service AI Agent',
      description: 'Civic knowledge chatbot for government services with conversational RAG, grounding responses in official policy documentation through multimodal vector representations.',
      category: 'AI / RAG',
      tech: ['Python', 'vLLM', 'ChromaDB', 'FalkorDB', 'RAG'],
      status: 'Prototype',
      badgeVariant: 'accent',
    },
    {
      id: 5,
      title: 'Enterprise Investor Relations Portal',
      description: 'High-performance investor relations platform engineered for enterprise corporations, ensuring rapid delivery, sub-second page loads, and WCAG accessibility standards.',
      category: 'Frontend Engineering',
      tech: ['Next.js', 'Tailwind CSS', 'React'],
      link: 'https://impact.com.my',
      badgeVariant: 'outline',
    },
    {
      id: 6,
      title: 'NEMUAI - AiOps Platform',
      description: 'Autonomous AI monitoring platform ingesting live Zabbix infrastructure telemetry, computing anomaly heatmaps, and providing incident root-cause synthesis via natural language.',
      category: 'AI & Infrastructure',
      tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'Zabbix API'],
      status: 'Active Project',
      badgeVariant: 'accent',
    },
  ]

  const experience = [
    {
      title: 'Executive: AI, Robotics and Innovation Project Expert',
      company: 'Tabung Ekonomi Gagasan Anak Sarawak (TEGAS)',
      location: 'Kuching, Sarawak',
      period: 'June 2026 – Present',
      achievements: [
        'Leading AI, robotics, and emerging technology project initiatives across Sarawak.',
        'Planning and executing tech innovation programs, robotics workshops, and digital enablement ecosystems.',
        'Advising on emerging AI trends, modern architectures, and adoption strategies for startups and partners.',
        'Collaborating with industry leaders, educational institutions, and government bodies to foster tech talent.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Impact Business Solutions Sdn Bhd (IBS)',
      location: 'Kuching, Sarawak',
      period: 'October 2025 – June 2026',
      achievements: [
        'Architecting GenAI log evaluation pipelines and synthetic validation environments for enterprise monitoring.',
        'Developing an enterprise RAG Hybrid system with multimodal LLMs and smart chunking to automate audit queries.',
        'Spearheaded rapid development of enterprise investor web applications with Next.js and Tailwind CSS.',
        'Collaborating with cross-functional engineering teams to implement an internal recruitment platform.',
        'Contributing to core system architecture design, code reviews, and feature delivery on company platforms.',
      ],
    },
    {
      title: 'Sales Representative',
      company: 'Regas Premium Auto',
      location: 'Kuching, Sarawak',
      period: 'June 2025 – August 2025',
      achievements: [
        'Delivered bespoke automotive consultations for clients in selecting luxury BMW models.',
        'Engineered an internal web automation tool for sales quotations to cut preparation time by 60%.',
      ],
    },
    {
      title: 'Industrial Trainee',
      company: 'Sarawak Information Systems Sdn. Bhd. (SAINS)',
      location: 'Kuching, Sarawak',
      period: 'March 2025 – June 2025',
      achievements: [
        'Single-handedly engineered the EntryBiot Android app, scaling team capacity by ~300% (20 to 80 units/day).',
        'Built automated web scraping tools to streamline data consolidation across internal intranet databases.',
        'Assisted technical fieldwork in IoT water meter device deployment across rural Sarawak communities.',
      ],
    },
    {
      title: 'Full-Stack Developer Trainee',
      company: 'Gearworks Technologies',
      location: 'Kuching, Sarawak',
      period: 'September 2022 – March 2023',
      achievements: [
        'Engineered a comprehensive entry management web platform with MySQL, Node.js, and Spring Boot.',
        'Diagnosed and resolved distributed server-side performance bottlenecks across multi-site environments.',
        'Collaborated closely with UX designers and senior engineers to implement frictionless onboarding flows.',
      ],
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science (Hons.), Netcentric Computing',
      school: 'Universiti Teknologi MARA (UiTM) Shah Alam',
      period: 'March 2023 – June 2025',
      details: 'CGPA: 3.22 · Dean’s List Award recipient',
      badge: 'BSc Hons',
    },
    {
      degree: 'Diploma in Computer Science',
      school: 'Universiti Teknologi MARA (UiTM) Sarawak Branch',
      period: 'October 2020 – March 2023',
      details: 'CGPA: 3.72 · Vice Chancellor Award · 5× Dean’s List Award',
      badge: 'Vice Chancellor Award',
    },
    {
      degree: 'Computer Science Studies',
      school: 'Kolej Datu Patinggi Abang Haji Abdillah',
      period: '2015 – 2019',
      details: 'Foundation in Computer Science and Information Systems',
      badge: 'High School',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden border-b border-border/50 bg-gradient-to-b from-[#0b1b36] via-[#112D4E] to-background text-slate-100"
      >
        <AuroraBackground />
        <AsciiBackground />

        <div className="relative z-20 max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono text-blue-200 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Software &amp; AI Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-blue-200 font-mono tracking-wider uppercase text-xs sm:text-sm flex items-center gap-2">
                <span>&gt;</span> Naim Talip // Portfolio
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-white">
                Building{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-sky-300">
                  intelligent
                </span>{' '}
                software solutions.
              </h1>
            </div>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-slate-200/90 font-light leading-relaxed">
              Software Engineer &amp; AI Developer based in Kuching, Sarawak. Specializing in RAG pipelines, full-stack web platforms, and rapid application development (RAD).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="rounded-xl shadow-lg gap-2 bg-blue-600 hover:bg-blue-500 text-white border-0">
                <a href="#projects">
                  Explore Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-600 bg-slate-900/50 hover:bg-slate-800 text-slate-100 hover:text-white backdrop-blur-sm gap-2">
                <a href="/certifications">
                  <Award className="h-4 w-4 text-blue-300" />
                  Certifications
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-xl text-slate-200 hover:text-white hover:bg-white/10 gap-2">
                <a href="/Naim_Talip_ATS.pdf" download="Naim_Talip_Resume.pdf">
                  <FileDown className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-4 pt-4 text-xs font-mono text-slate-300">
              <a href="https://github.com/naimtalip" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <FolderGit2 className="h-4 w-4 text-blue-300" />
                <span>github.com/naimtalip</span>
              </a>
              <span className="text-slate-500">•</span>
              <a href="https://linkedin.com/in/naimtalip2442" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <ArrowUpRight className="h-4 w-4 text-blue-300" />
                <span>in/naimtalip2442</span>
              </a>
            </div>
          </motion.div>

          {/* Hero Right Terminal Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Card className="bg-slate-950/80 border-slate-700/80 backdrop-blur-xl shadow-2xl overflow-hidden rounded-2xl">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">naim@workstation:~</span>
                </div>
                <Badge variant="outline" className="font-mono text-[10px] text-slate-400 border-slate-700">
                  zsh
                </Badge>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-3">
                <div className="text-slate-400 flex items-center gap-2">
                  <span className="text-emerald-400">naim@mbp</span>
                  <span>:</span>
                  <span className="text-blue-400">~</span>
                  <span>$ whoami</span>
                </div>
                <div className="text-slate-100 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                  <p className="font-semibold text-blue-300">Naim Talip</p>
                  <p className="text-slate-300 text-[11px]">Executive: AI, Robotics &amp; Innovation · TEGAS</p>
                  <p className="text-slate-400 text-[11px]">UiTM Netcentric Computing (BSc Hons)</p>
                </div>

                <div className="text-slate-400 flex items-center gap-2 pt-1">
                  <span className="text-emerald-400">naim@mbp</span>
                  <span>:</span>
                  <span className="text-blue-400">~</span>
                  <span>$ cat current_focus.json</span>
                </div>
                <div className="text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 text-[11px] leading-relaxed">
                  <pre>{`{
  "stack": ["Next.js", "Python", "vLLM", "FastAPI"],
  "domain": "RAG Systems & Multi-Agent AI",
  "location": "Kuching, Sarawak, Malaysia",
  "status": "Ready for high-impact engineering"
}`}</pre>
                </div>

                <div className="flex items-center gap-2 pt-1 text-slate-400">
                  <span className="text-emerald-400">naim@mbp</span>
                  <span>:</span>
                  <span className="text-blue-400">~</span>
                  <span>$</span>
                  <span className="w-2 h-4 bg-blue-400 animate-pulse"></span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col space-y-2">
            <Badge variant="pill" className="w-fit">
              <Sparkles className="h-3 w-3 text-accent" />
              Background &amp; Profile
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-foreground">
              About Me
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              A blend of software engineering craftsmanship and applied machine learning systems.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Left Narrative */}
            <motion.div
              className="md:col-span-7 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                I am a passionate <strong>Software Engineer</strong> and Netcentric Computing graduate from <strong>Universiti Teknologi MARA (UiTM)</strong>, driven by the challenge of designing scalable, resilient web applications and cutting-edge AI pipelines.
              </p>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                Currently serving as an <strong>Executive: AI, Robotics and Innovation Project Expert at TEGAS (Tabung Ekonomi Gagasan Anak Sarawak)</strong>, driving digital innovation, robotics programs, and emerging tech enablement. Previously at <strong>Impact Business Solutions (IBS)</strong>, I engineered enterprise RAG data systems, multimodal AI tools, and full-stack investor platforms.
              </p>

              {/* Quick Highlight Cards */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <Card className="bg-card/70 border-border/80 shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-accent dark:bg-accent/10 dark:text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</p>
                      <p className="text-sm font-medium text-foreground">Kuching, Sarawak, Malaysia</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/70 border-border/80 shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Education</p>
                      <p className="text-sm font-medium text-foreground">BSc Netcentric Computing</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/70 border-border/80 shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Distinction</p>
                      <p className="text-sm font-medium text-foreground">Vice Chancellor Award</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/70 border-border/80 shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Current Role</p>
                      <p className="text-sm font-medium text-foreground">Executive: AI &amp; Robotics @ TEGAS</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Right Profile Photo Card */}
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden border-border/80 shadow-lg bg-card group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Naim Talip"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold">Naim Talip</p>
                        <p className="text-xs text-slate-200">Software Engineer &amp; AI Specialist</p>
                      </div>
                      <Badge variant="secondary" className="text-[11px] bg-white/20 text-white backdrop-blur-md border-0">
                        Kuching, MY
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardFooter className="p-4 flex justify-between items-center bg-muted/30">
                  <span className="text-xs text-muted-foreground font-mono">Available for projects</span>
                  <Button asChild variant="outline" size="sm" className="text-xs rounded-full gap-1">
                    <a href="#contact">
                      Contact Me
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section with shadcn Tabs */}
      <section id="skills" className="py-24 px-4 bg-muted/40 border-y border-border/60">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col space-y-2">
            <Badge variant="pill" className="w-fit">
              <Code2 className="h-3 w-3 text-accent" />
              Capabilities &amp; Tooling
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-foreground">
              Technical Stack &amp; Skills
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              Categorized technologies and frameworks I use to engineer robust, high-performance systems.
            </p>
          </div>

          {/* Interactive shadcn Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="h-auto p-1.5 gap-1 bg-background/80 border border-border/80 flex-wrap justify-start sm:justify-center">
                {skillCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="text-xs sm:text-sm px-3.5 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-8">
                <Card className="bg-card/80 border-border/70 shadow-sm p-6 sm:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold font-serif text-foreground">
                        {cat.label}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {cat.items.length} key technologies and proficiencies
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.items.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.04 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      >
                        <Badge
                          variant="outline"
                          className="px-3.5 py-1.5 text-xs sm:text-sm font-medium bg-background hover:bg-accent hover:text-accent-foreground border-border transition-colors cursor-default shadow-2xs"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="pill" className="w-fit">
                <FolderGit2 className="h-3 w-3 text-accent" />
                Portfolio Works
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-foreground">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
                A selection of AI systems, enterprise web applications, and automation tools I have built.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit gap-2 rounded-full text-xs">
              <a href="https://github.com/naimtalip" target="_blank" rel="noreferrer">
                <FolderGit2 className="h-4 w-4" />
                View GitHub Repositories
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between border-border/80 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group bg-card">
                  <div>
                    {/* Project Header Banner */}
                    <div className="h-32 bg-gradient-to-br from-[#112D4E] to-[#3F72AF] p-5 flex flex-col justify-between rounded-t-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-blue-100/80">
                          {project.category}
                        </span>
                        {project.status && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-black/30 text-white backdrop-blur-md">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <h3 className="text-white text-lg font-bold font-serif leading-snug line-clamp-2 relative z-10 group-hover:text-blue-100 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <CardContent className="p-5 space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tech.map((t, i) => (
                          <Badge key={i} variant="secondary" className="text-[11px] font-mono px-2 py-0.5">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  <CardFooter className="p-5 pt-0 border-t border-border/40 mt-auto flex items-center justify-between">
                    {project.link ? (
                      <Button asChild size="sm" variant="default" className="w-full gap-1.5 text-xs rounded-lg shadow-sm">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          Visit Platform
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    ) : (
                      <Button asChild size="sm" variant="outline" className="w-full gap-1.5 text-xs rounded-lg">
                        <a href="#contact">
                          Inquire Details
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-24 px-4 bg-muted/30 border-y border-border/60">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex flex-col space-y-2">
            <Badge variant="pill" className="w-fit">
              <Briefcase className="h-3 w-3 text-accent" />
              Career Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-foreground">
              Work Experience
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Chronological history of engineering contributions, responsibilities, and leadership.
            </p>
          </div>

          <div className="relative border-l-2 border-primary/30 ml-3 md:ml-4 space-y-10 pl-6 md:pl-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-primary shadow-sm group-hover:scale-125 transition-transform"></div>

                <Card className="bg-card border-border/80 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="p-5 pb-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground">
                          {exp.title}
                        </CardTitle>
                        <p className="text-sm font-semibold text-accent mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end">
                        <Badge variant="secondary" className="text-xs font-mono">
                          {exp.period}
                        </Badge>
                        <span className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 pt-2">
                    <ul className="space-y-2.5">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex flex-col space-y-2">
            <Badge variant="pill" className="w-fit">
              <GraduationCap className="h-3 w-3 text-accent" />
              Academic Foundation
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-foreground">
              Education &amp; Credentials
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Formal degrees and academic honours earned at Universiti Teknologi MARA.
            </p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border/80 shadow-sm hover:border-accent/40 transition-colors p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold font-serif text-foreground">
                          {edu.degree}
                        </h3>
                        {edu.badge && (
                          <Badge variant="accent" className="text-xs">
                            {edu.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-accent">
                        {edu.school}
                      </p>
                      {edu.details && (
                        <p className="text-sm text-muted-foreground font-medium pt-1">
                          {edu.details}
                        </p>
                      )}
                    </div>
                    <Badge variant="outline" className="font-mono text-xs w-fit shrink-0">
                      {edu.period}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action / Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-[#0b1b36] via-[#112D4E] to-[#1c3a63] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#3F72AF_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-3">
            <Badge variant="outline" className="border-blue-400/30 text-blue-200 bg-blue-500/10 font-mono text-xs">
              <Sparkles className="h-3 w-3 mr-1 text-blue-300" />
              Let&apos;s Connect
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight text-white">
              Interested in collaborating?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light">
              I am open to discuss AI engineering opportunities, full-stack software development projects, or high-impact technical initiatives.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-300/80 font-mono">
            <MapPin className="h-4 w-4 text-blue-400" />
            <span>Kuching, Sarawak, Malaysia · +601153712442</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Button asChild size="lg" className="rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg gap-2 border-0">
              <a href="mailto:naimtalipwork@gmail.com">
                <Mail className="h-4 w-4" />
                naimtalipwork@gmail.com
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-600 bg-slate-900/60 hover:bg-slate-800 text-slate-100 hover:text-white backdrop-blur-sm gap-2">
              <a href="https://linkedin.com/in/naimtalip2442" target="_blank" rel="noreferrer">
                LinkedIn Profile
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-xl bg-slate-800 hover:bg-slate-700 text-white gap-2">
              <a href="/Naim_Talip_ATS.pdf" download="Naim_Talip_Resume.pdf">
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
