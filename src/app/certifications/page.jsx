'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  FileDown,
  Award,
  GraduationCap,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Sparkles,
  Cloud,
  Cpu
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'Bachelor Degree Certificate',
      file: '/certs/CDCS251 NAIM BIN TALIP (2).pdf',
      description: 'Bachelor of Computer Science (Hons.), Netcentric Computing from Universiti Teknologi MARA (UiTM) Shah Alam.',
      category: 'academic',
      date: '2025',
      issuer: 'UiTM Shah Alam',
      icon: GraduationCap,
      verified: true
    },
    {
      id: 2,
      title: 'Diploma Certificate',
      file: '/certs/NAIM BIN TALIP.pdf',
      description: 'Diploma in Computer Science from Universiti Teknologi MARA (UiTM) Sarawak Branch.',
      category: 'academic',
      date: '2023',
      issuer: 'UiTM Sarawak',
      icon: GraduationCap,
      verified: true
    },
    {
      id: 3,
      title: 'CS110 Excellence Award',
      file: '/certs/cs110 certs.pdf',
      description: 'Award of Academic Excellence during Diploma in Computer Science (CS110) across academic semesters.',
      category: 'academic',
      date: '2023',
      issuer: 'Faculty of Computer & Mathematical Sciences',
      icon: Award,
      verified: true
    },
    {
      id: 4,
      title: 'Huawei Intelligent World 2030',
      file: '/certs/SIJIL PENYERTAAN HUAWEI INTELLIGENT WORLD 2030.pdf',
      description: 'Certificate of Participation for Huawei Intelligent World 2030 technical insights and emerging telecommunication tech.',
      category: 'industry',
      date: '2022',
      issuer: 'Huawei Technologies',
      icon: Cpu,
      verified: true
    },
    {
      id: 5,
      title: 'Technical Hackathon Certificate',
      file: '/certs/hackathon.pdf',
      description: 'Certificate of Achievement and Participation in competitive software and systems hackathon.',
      category: 'industry',
      date: '2024',
      issuer: 'Hackathon Organizing Body',
      icon: Sparkles,
      verified: true
    },
    {
      id: 6,
      title: 'University Completion Letter',
      file: '/certs/uni completion.pdf',
      description: 'Official Certificate of Degree Completion from Universiti Teknologi MARA (UiTM).',
      category: 'academic',
      date: '2025',
      issuer: 'UiTM Registrar',
      icon: FileText,
      verified: true
    },
    {
      id: 7,
      title: 'Cisco Networking Academy — Introduction to Cybersecurity',
      file: null,
      description: 'Foundational cybersecurity engineering covering threat landscape, network defense, vulnerability management, cryptography, and zero-trust paradigms.',
      category: 'progress',
      date: '2025',
      issuer: 'Cisco Networking Academy',
      icon: ShieldCheck,
      pending: true
    },
    {
      id: 8,
      title: 'AWS Certified Solutions Architect – Associate',
      file: null,
      description: 'Validates expertise in designing resilient, highly available, and cost-optimized distributed systems on AWS (EC2, S3, RDS, Lambda, VPC).',
      category: 'progress',
      date: '2025',
      issuer: 'Amazon Web Services',
      icon: Cloud,
      pending: true
    },
    {
      id: 9,
      title: 'Google AI Essentials',
      file: null,
      description: 'Practical generative AI workflows, multimodal prompt engineering techniques, responsible AI guidelines, and intelligent application deployment.',
      category: 'progress',
      date: '2025',
      issuer: 'Google',
      icon: Sparkles,
      pending: true
    }
  ]

  const categories = [
    { id: 'all', label: 'All Credentials' },
    { id: 'academic', label: 'Academic & Degrees' },
    { id: 'industry', label: 'Industry & Competitions' },
    { id: 'progress', label: 'In Progress / Training' },
  ]

  const filterCertifications = (catId) => {
    if (catId === 'all') return certifications
    return certifications.filter(c => c.category === catId)
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-[#0b1b36] via-[#112D4E] to-background text-white border-b border-border/50 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#3F72AF_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-6">
          {/* Back Button */}
          <div>
            <Button asChild variant="outline" size="sm" className="rounded-full border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white backdrop-blur-sm gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
          </div>

          <motion.div
            className="space-y-4 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="border-blue-400/30 text-blue-200 bg-blue-500/10 font-mono text-xs">
              <Award className="h-3.5 w-3.5 mr-1 text-blue-300" />
              Verified Credentials &amp; Training
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white">
              Professional Certifications
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              An archive of my university degrees, competitive hackathon recognitions, and professional vendor training certifications in AI, cloud computing, and cybersecurity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Content with Tabs */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <Tabs defaultValue="all" className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="h-auto p-1.5 gap-1 bg-muted/60 border border-border/80 flex-wrap justify-start">
                {categories.map(cat => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="text-xs sm:text-sm px-4 py-2 rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    {cat.label}
                    <span className="ml-2 text-[10px] py-0.5 px-1.5 rounded-full bg-muted-foreground/15">
                      {filterCertifications(cat.id).length}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map(cat => (
              <TabsContent key={cat.id} value={cat.id} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterCertifications(cat.id).map((cert, idx) => {
                    const Icon = cert.icon || Award
                    return (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="h-full"
                      >
                        <Card className="h-full flex flex-col justify-between border-border/80 hover:border-accent/40 hover:shadow-lg transition-all duration-300 bg-card group">
                          <div>
                            {/* Card Visual Banner */}
                            <div className="h-32 bg-gradient-to-br from-slate-900 via-[#112D4E] to-[#1c3a63] p-5 flex flex-col justify-between rounded-t-xl relative overflow-hidden text-white">
                              <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white">
                                  <Icon className="h-5 w-5" />
                                </div>
                                <Badge
                                  variant={cert.pending ? "outline" : "secondary"}
                                  className={cert.pending
                                    ? "border-amber-400/40 text-amber-200 bg-amber-500/10 text-[10px] font-mono"
                                    : "bg-white/20 text-white backdrop-blur-md text-[10px] font-mono border-0"
                                  }
                                >
                                  {cert.date}
                                </Badge>
                              </div>

                              <div className="relative z-10">
                                <p className="text-[11px] font-mono uppercase tracking-wider text-blue-200/80">
                                  {cert.issuer}
                                </p>
                              </div>
                            </div>

                            <CardHeader className="p-5 pb-3">
                              <CardTitle className="text-lg font-bold font-serif text-foreground group-hover:text-accent transition-colors leading-snug">
                                {cert.title}
                              </CardTitle>
                            </CardHeader>

                            <CardContent className="p-5 pt-0">
                              <CardDescription className="text-xs sm:text-sm leading-relaxed">
                                {cert.description}
                              </CardDescription>
                            </CardContent>
                          </div>

                          <CardFooter className="p-5 pt-0 border-t border-border/40 mt-auto">
                            {cert.pending ? (
                              <div className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-muted/60 text-muted-foreground text-xs font-mono border border-dashed border-border">
                                <Clock className="h-3.5 w-3.5 text-amber-500" />
                                <span>Curriculum in progress</span>
                              </div>
                            ) : (
                              <div className="w-full flex items-center gap-2 pt-4">
                                <Button asChild size="sm" variant="default" className="flex-1 gap-1.5 text-xs rounded-lg shadow-sm">
                                  <a href={encodeURI(cert.file)} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-3.5 w-3.5" />
                                    View PDF
                                  </a>
                                </Button>
                                <Button asChild size="icon" variant="outline" className="h-9 w-9 rounded-lg shrink-0">
                                  <a
                                    href={encodeURI(cert.file)}
                                    download={`${cert.title}.pdf`}
                                    title="Download Certificate"
                                  >
                                    <FileDown className="h-4 w-4" />
                                  </a>
                                </Button>
                              </div>
                            )}
                          </CardFooter>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}
