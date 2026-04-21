'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiOutlineExternalLink, HiOutlineDocumentDownload, HiOutlineArrowLeft } from 'react-icons/hi'

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'Bachelor Degree Certificate',
      file: '/certs/CDCS251 NAIM BIN TALIP (2).pdf',
      description: 'Bachelor of Computer Science (Hons.), Netcentric Computing',
      date: '2025'
    },
    {
      id: 2,
      title: 'Diploma Certificate',
      file: '/certs/NAIM BIN TALIP.pdf',
      description: 'Diploma in Computer Science from Universiti Teknologi MARA',
      date: '2023'
    },
    {
      id: 3,
      title: 'CS110 Excellence Award',
      file: '/certs/cs110 certs.pdf',
      description: 'Award of Excellence during Diploma in Computer Science (CS110)',
      date: '2023'
    },
    {
      id: 4,
      title: 'Huawei Intelligent World 2030',
      file: '/certs/SIJIL PENYERTAAN HUAWEI INTELLIGENT WORLD 2030.pdf',
      description: 'Certificate of Participation for Huawei Intelligent World 2030 program',
      date: '2022'
    },
    {
      id: 5,
      title: 'Hackathon Certificate',
      file: '/certs/hackathon.pdf',
      description: 'Certificate of Participation in technical Hackathon event',
      date: '2024'
    },
    {
      id: 6,
      title: 'University Completion',
      file: '/certs/uni completion.pdf',
      description: 'Certificate of Completion from Universiti Teknologi MARA',
      date: '2025'
    },
    {
      id: 7,
      title: 'Cisco Networking Academy — Introduction to Cybersecurity',
      file: null,
      description: 'Issued by Cisco Networking Academy. Covers foundational cybersecurity concepts including threat landscape, network security, vulnerability management, cryptography, and best practices for securing modern networks.',
      date: '2025',
      issuer: 'Cisco',
      pending: true
    },
    {
      id: 8,
      title: 'AWS Certified Solutions Architect – Associate',
      file: null,
      description: 'Issued by Amazon Web Services (AWS). Validates expertise in designing distributed systems and scalable, highly available, and fault-tolerant solutions on the AWS platform, including services like EC2, S3, RDS, Lambda, and VPC.',
      date: '2025',
      issuer: 'Amazon Web Services',
      pending: true
    },
    {
      id: 9,
      title: 'Google AI Essentials',
      file: null,
      description: 'Issued by Google. Covers practical applications of artificial intelligence and machine learning, including generative AI, prompt engineering, using AI tools responsibly, and integrating AI into everyday workflows.',
      date: '2025',
      issuer: 'Google',
      pending: true
    }
  ]

  return (
    <div className="min-h-screen bg-light font-sans text-primary">
      {/* Header Section */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-primary via-primary text-light relative overflow-hidden flex flex-col justify-center items-center text-center shadow-lg">
        <div className="absolute inset-0 bg-accent/10 opacity-50 z-0 pointer-events-none mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto relative z-10 w-full mb-8 flex justify-start">
           <Link href="/" className="inline-flex items-center gap-2 text-secondary hover:text-white transition group font-medium">
             <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
             Back to Portfolio
           </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#DBE2EF] to-indigo-300">
            Professional Certifications
          </h1>
          <p className="text-xl text-secondary/80 font-light max-w-2xl mx-auto">
            A comprehensive collection of my academic achievements, awards, and professional training certificates.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-4 bg-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
              >
                 <div className="h-48 bg-gradient-to-br from-indigo-50 to-blue-50 border-b border-indigo-100/50 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                   {/* Decorative background elements */}
                   <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-indigo-100 rounded-full opacity-50 group-hover:scale-110 transition-transform blur-2xl"></div>
                   <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-24 h-24 bg-blue-100 rounded-full opacity-50 group-hover:scale-110 transition-transform blur-2xl"></div>
                   
                   <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-sm mb-4 relative z-10">
                     <svg className="w-10 h-10 text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                     </svg>
                   </div>
                   <h3 className="font-serif text-xl font-bold text-primary relative z-10">{cert.title}</h3>
                 </div>
                 
                 <div className="p-6 flex flex-col flex-grow">
                   <div className="flex justify-between items-start mb-3">
                     <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                       {cert.date}
                     </span>
                   </div>
                   <p className="text-primary/70 text-sm mb-6 flex-grow leading-relaxed">
                     {cert.description}
                   </p>
                   
                   <div className="flex gap-3 mt-auto">
                      {cert.pending ? (
                        <div className="flex-1 flex justify-center items-center gap-2 bg-gray-100 text-gray-400 px-4 py-2.5 rounded-lg text-sm font-medium cursor-not-allowed border border-dashed border-gray-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                          Certificate Pending Upload
                        </div>
                      ) : (
                        <>
                          <a 
                            href={encodeURI(cert.file)} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex-1 flex justify-center items-center gap-2 bg-primary text-light px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition shadow-sm hover:shadow"
                          >
                            <HiOutlineExternalLink className="text-lg" />
                            View PDF
                          </a>
                          <a 
                            href={encodeURI(cert.file)} 
                            download={cert.title + ".pdf"}
                            className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-indigo-50 text-accent hover:bg-indigo-100 rounded-lg transition"
                            title="Download Certificate"
                          >
                            <HiOutlineDocumentDownload className="text-xl" />
                          </a>
                        </>
                      )}
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
