'use client'

import { HiLocationMarker, HiAcademicCap, HiStar, HiCode, HiChevronRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const skillCategories = [
    {
      label: 'Core Engineering',
      items: ['AI Engineering', 'Full-Stack Development', 'Frontend Development', 'Backend Development', 'RAD', 'Mobile App Development'],
    },
    {
      label: 'Dev Stack',
      items: ['Next.js', 'Node.js', 'AdonisJs', 'JavaScript', 'Python', 'Dart', 'Java', 'C++', 'C#', 'Svelte', 'Tailwind CSS', 'Flutter'],
    },
    {
      label: 'Databases & AI Tools',
      items: ['PostgreSQL', 'FalkorDB', 'ChromaDB', 'vLLM', 'OllamaStudio', 'Sentence Transformers'],
    },
    {
      label: 'Emerging Tech',
      items: ['RAG System', 'Multimodal LLMs', 'Smart Document Parsing', 'Vector Embedding', 'Model Deployment', 'Web Scraping'],
    },
    {
      label: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Pipeline', 'Linux'],
    },
  ]

  const projects = [
    {
      id: 1,
      title: 'RANYAI - RAG and Audit Compliance Checker System',
      description: 'AI-powered data ingestion and analysis system using smart parsing and open-source multimodal LLMs to reduce manual enterprise analysis costs.',
      tech: ['Python', 'vLLM', 'ChromaDB', 'FalkorDB', 'RAG'],
      link: '#',
    },
    {
      id: 2,
      title: 'EntryBiot Android App',
      description: 'Solo-developed Android app that simplified raw data searches in Google Sheets, improving team efficiency by ~300% (from 20 to 80 units/day).',
      tech: ['Android Studio', 'Java', 'Google Sheets API'],
      link: '#',
    },
    {
      id: 3,
      title: 'CMS Web App',
      description: 'Self-developed web application to automate the BMW vehicle sales quotation process, drastically improving personal workflow efficiency.',
      tech: ['JavaScript', 'Node.js', 'Tailwind CSS'],
      link: '#',
    },
    {
      id: 4,
      title: 'RUAI',
      description: 'Government based chatbot that provides information on government services and processes, utilizing RAG system and multimodal LLMs for accurate and efficient responses.',
      tech: ['Python', 'vLLM', 'ChromaDB', 'FalkorDB', 'RAG'],
      link: '#',
    },
    {
      id: 5,
      title: 'Company Investor Website',
      description: 'High-quality investor website developed for enterprise-level companies, ensuring rapid delivery and seamless user experience.',
      tech: ['Next.js', 'Tailwind CSS', 'React'],
      link: 'https://impact.com.my',
    },

    {
        id: 6,
        title: 'NEMUAI - AiOps System',
        description: 'An AI-powered AIOps monitoring platform that ingests Zabbix infrastructure logs in real-time, performs anomaly detection, and provides natural language log analysis via an AI analyst interface.',
        tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'Zabbix API'],
        link: '#',
    },
  ]

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Impact Business Solutions Sdn Bhd (IBS)',
      location: 'Kuching, Sarawak',
      period: 'October 2025 – Present',
      achievements: [
        'Developing use and test cases for GenAI environment for log monitoring system.',
        'Developing a RAG Hybrid system using smart parsing and multimodal LLMs to reduce manual enterprise analysis costs.',
        'Led rapid development of high-quality investor website for enterprise-level companies.',
        'Collaborating with cross-functional teams to build an internal recruitment system.',
        'Contributing to system architecture and adding new features to the core company website.',
      ],
    },
    {
      title: 'Sales Representative',
      company: 'Regas Premium Auto',
      location: 'Kuching, Sarawak',
      period: 'June 2025 – August 2025',
      achievements: [
        'Delivered tailored consultations for clients in selecting BMW vehicles.',
        'Built a self-developed web application to automate quotation process and improve efficiency.',
      ],
    },
    {
      title: 'Industrial Trainee',
      company: 'Sarawak Information Systems Sdn. Bhd. (SAINS)',
      location: 'Kuching, Sarawak',
      period: 'March 2025 – June 2025',
      achievements: [
        'Solo-developed Android app (EntryBiot) improving team efficiency ~300%, from 20 to 80 units registered per day.',
        'Developed a web scraping tool to automate information retrieval from the company intranet.',
        'Assisted in IoT water meter device deployment across Sarawak rural areas.',
      ],
    },
    {
      title: 'Full-Stack Developer Trainee',
      company: 'Gearworks Technologies',
      location: 'Kuching, Sarawak',
      period: 'September 2022 – March 2023',
      achievements: [
        'Built a comprehensive entry management system using MySQL, Node.js, and Spring Boot.',
        'Assisted in server-side troubleshooting across multiple sites.',
        'Worked with cross-functional teams for seamless integration and UX.',
      ],
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science (Hons.), Netcentric Computing',
      school: 'Universiti Teknologi MARA (UiTM) Shah Alam',
      period: 'March 2023 – June 2025',
      details: 'CGPA: 3.22 | Dean List Award',
    },
    {
      degree: 'Diploma in Computer Science',
      school: 'Universiti Teknologi MARA (UiTM) Sarawak Branch',
      period: 'October 2020 – March 2023',
      details: 'CGPA: 3.72 | Vice Chancellor Award | 5× Dean List Award',
    },
    {
      degree: 'Computer Science Studies',
      school: 'Kolej Datu Patinggi Abang Haji Abdillah',
      period: '2015 – 2019',
      details: '',
    },
  ]

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-accent text-light min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary font-mono mb-4 tracking-widest uppercase text-sm">
              &gt; Hello, World!
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-light">Naim</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-secondary/90 font-light">
              Software Engineer · AI Engineer · Full-Stack Developer
            </p>
            <p className="text-lg mb-12 text-secondary/70">
              Tech enthusiast from Kuching, Sarawak specializing in AI-driven solutions, full-stack development, and rapid application development (RAD).
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#projects" className="bg-secondary hover:bg-light text-primary px-8 py-3 rounded-lg font-semibold transition shadow-[0_0_15px_rgba(219,226,239,0.5)] hover:shadow-[0_0_25px_rgba(219,226,239,0.8)]">
                View My Work
              </a>
              <a href="#contact" className="border-2 border-secondary text-secondary hover:border-light hover:text-light px-8 py-3 rounded-lg font-semibold transition">
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary rounded-xl p-6 font-mono text-sm md:text-base text-secondary shadow-2xl border border-accent relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-8 bg-accent flex items-center px-4 gap-2 border-b border-primary">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-xs text-light">naim@portfolio:~</span>
            </div>
            <div className="mt-6 overflow-x-auto">
              <pre className="text-light font-bold leading-tight">
{`
 _  _      _          
| \\| |__ _(_)_ __    
| .\` / _\` | | '  \\   
|_|\\_\\__,_|_|_|_|_|  
                     
 _____     _ _       
|_   _|_ _| (_)_ __  
  | |/ _\` | | | '_ \\ 
  |_|\\__,_|_|_| .__/ 
              |_|    
`}
              </pre>
              <div className="mt-4">
                <p className="text-secondary"><span className="text-light">naim@portfolio</span>:<span className="text-secondary">~</span>$ whoami</p>
                <p className="text-light">&gt; Software Engineer &amp; AI Specialist</p>
                
                <p className="mt-2 text-secondary"><span className="text-light">naim@portfolio</span>:<span className="text-secondary">~</span>$ cat skills.json</p>
                <p className="text-light">{`{
  "core": ["AI", "Full-Stack", "RAD"],
  "stack": ["Next.js", "Python", "Java"]
}`}</p>
                
                <p className="mt-2 text-secondary flex items-center gap-1">
                  <span className="text-light">naim@portfolio</span>:<span className="text-secondary">~</span>$ <span className="w-2 h-4 bg-secondary animate-pulse inline-block"></span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-light overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-primary"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-primary/80 mb-6 leading-relaxed">
                I'm a <strong>tech enthusiast</strong> and Netcentric Computing graduate from Universiti Teknologi MARA (UiTM), with a strong passion for software engineering and emerging technologies.
              </p>
              <p className="text-lg text-primary/80 mb-6 leading-relaxed">
                Currently serving as a <strong>Software Engineer at IBS</strong>, I specialize in AI-driven solutions, full-stack development, and rapid application development (RAD) — building everything from GenAI pipelines to enterprise investor websites.
              </p>
              <p className="text-lg text-primary/80 mb-8 leading-relaxed">
                I'm a highly resourceful individual who takes full ownership of my work, whether it's architecting a RAG system, developing a mobile app solo, or leading rapid website delivery for enterprise clients.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="bg-white px-4 py-2 rounded-lg shadow text-sm text-primary font-medium flex items-center gap-1"><HiLocationMarker className="text-accent" /> Kuching, Sarawak, Malaysia</div>
                <div className="bg-white px-4 py-2 rounded-lg shadow text-sm text-primary font-medium flex items-center gap-1"><HiAcademicCap className="text-accent" /> BSc Netcentric Computing, UiTM</div>
                <div className="bg-white px-4 py-2 rounded-lg shadow text-sm text-primary font-medium flex items-center gap-1"><HiStar className="text-accent" /> Vice Chancellor Award</div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-80 w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10"></div>
              <Image 
                src="/profile.jpg" 
                alt="Naim Talip" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-light">
                <p className="text-xl font-bold">Naim Talip</p>
                <p className="text-sm text-secondary">Software Engineer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-primary"
          >
            Technical Skills
          </motion.h2>
          <div className="space-y-10">
            {skillCategories.map((cat, catIdx) => (
              <motion.div 
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
              >
                <h3 className="text-lg font-bold text-accent mb-4 uppercase tracking-wide">{cat.label}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((skill, idx) => (
                    <motion.span 
                      key={idx} 
                      whileHover={{ scale: 1.05 }}
                      className="bg-light text-primary px-4 py-2 rounded-full font-medium hover:bg-accent hover:text-light transition cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-light">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
            <p className="text-primary/70 mb-12">Real-world systems and applications I've built.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow hover:shadow-2xl"
              >
                <div className="bg-gradient-to-br from-primary to-accent h-40 flex items-center justify-center px-6">
                  <h3 className="text-white text-2xl font-bold text-center">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-primary/80 mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIdx) => (
                      <span key={techIdx} className="bg-secondary text-primary border border-accent px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-accent font-semibold hover:text-primary">
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-primary"
          >
            Work Experience
          </motion.h2>
          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-l-4 border-accent pl-8 pb-10 relative"
              >
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-accent rounded-full border-4 border-white"></div>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                </div>
                <p className="text-lg text-accent font-semibold">{exp.company}</p>
                <p className="text-primary/60 text-sm mb-4">{exp.location} · {exp.period}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3 text-primary/80">
                      <HiChevronRight className="text-accent mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-light">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-primary"
          >
            Education
          </motion.h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-primary mb-1">{edu.degree}</h3>
                <p className="text-accent font-semibold mb-1">{edu.school}</p>
                <p className="text-primary/60 text-sm mb-3">{edu.period}</p>
                {edu.details && <p className="text-primary/80 font-medium">{edu.details}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-primary text-light">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-4 text-secondary">
            I'm open to new opportunities, collaborations, and interesting projects.
          </p>
          <p className="text-secondary/80 mb-12 flex items-center justify-center gap-2"><HiLocationMarker className="text-accent" /> Kuching, Sarawak, Malaysia · +60128974957</p>
          <div className="flex gap-6 justify-center flex-wrap mb-12">
            <a href="mailto:naimtalip1@gmail.com" className="bg-accent hover:bg-accent/80 text-light px-8 py-3 rounded-lg font-semibold transition">
              naimtalip1@gmail.com
            </a>
            <a href="https://linkedin.com/in/naimtalip2442" target="_blank" rel="noreferrer" className="border-2 border-accent text-accent hover:bg-accent hover:text-light px-8 py-3 rounded-lg font-semibold transition">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
