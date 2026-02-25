// Portfolio data for Naim Talip

export const portfolioData = {
  personal: {
    name: 'Naim Talip',
    title: 'Software Engineer | AI Engineer | Full-Stack Developer',
    bio: 'Tech enthusiast and Netcentric Computing graduate from Universiti Teknologi MARA with a passion for software engineering and emerging technologies.',
    email: 'naimtalip1@gmail.com',
    phone: '+60128974957',
    location: 'Kuching, Sarawak, Malaysia',
  },

  social: {
    github: 'https://github.com/naimtalip',
    linkedin: 'https://linkedin.com/in/naimtalip2442',
  },

  about: `Tech enthusiast and Netcentric Computing graduate from Universiti Teknologi MARA with a passion for software engineering and emerging technologies. Currently serving as a Software Engineer at IBS, specializing in AI-driven solutions, full-stack development, and rapid application development (RAD). A highly resourceful individual with strong responsibility towards given tasks.`,

  skills: {
    core: ['AI Engineering', 'Full-Stack Development', 'Frontend Development', 'Backend Development', 'RAD', 'Mobile App Development'],
    stack: ['Next.js', 'AdonisJs', 'Node.js', 'JavaScript', 'Python', 'Java', 'C++', 'C#', 'Dart', 'Svelte', 'Tailwind CSS', 'Flutter'],
    database: ['PostgreSQL', 'FalkorDB', 'ChromaDB', 'Sentence Transformers', 'vLLM', 'OllamaStudio'],
    tools: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Web Scraping', 'Pipeline', 'Antigravity'],
    emerging: ['RAG System', 'Multimodal LLMs', 'Smart Document Parsing', 'Model Deployment', 'Vector Embedding'],
  },

  projects: [
    {
      id: 1,
      title: 'RAG Hybrid System',
      description: 'AI-powered data ingestion and analysis system using smart parsing and open-source multimodal LLMs to reduce manual enterprise analysis costs.',
      tech: ['Python', 'vLLM', 'ChromaDB', 'FalkorDB', 'RAG', 'Multimodal LLMs'],
      links: { live: '#', github: '#' },
    },
    {
      id: 2,
      title: 'EntryBiot Android App',
      description: 'Solo-developed Android app for team that simplified raw data searches in Google Sheets, improving efficiency by ~300% (from 20 to 80 units/day).',
      tech: ['Android Studio', 'Java', 'Google Sheets API'],
      links: { live: '#', github: '#' },
    },
    {
      id: 3,
      title: 'Sales Quotation Web App',
      description: 'Self-developed web application to automate the sales quotation process for BMW vehicle sales, improving personal workflow efficiency.',
      tech: ['JavaScript', 'Node.js', 'Tailwind CSS'],
      links: { live: '#', github: '#' },
    },
    {
      id: 4,
      title: 'Entry Management System',
      description: 'Comprehensive entry management system with full-stack architecture for reliable, integrated user experience.',
      tech: ['Node.js', 'MySQL', 'Spring Boot', 'Java'],
      links: { live: '#', github: '#' },
    },
  ],

  experience: [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Impact Business Solutions Sdn Bhd (IBS)',
      location: 'Kuching, Sarawak',
      period: 'October 2025 – Present',
      achievements: [
        'Developing use and test cases for GenAI environment for log monitoring system.',
        'Developing a RAG Hybrid system for data ingestion and analysis using smart parsing and open-source multimodal LLMs to reduce manual analysis costs for enterprises.',
        'Lead the rapid development of high-quality investor website for enterprise-level companies.',
        'Collaborating with cross-functional teams to build an internal recruitment system using full-stack development.',
        'Contributing to system architecture brainstorming and adding new features to the core company website.',
      ],
    },
    {
      id: 2,
      title: 'Sales Representative',
      company: 'Regas Premium Auto',
      location: 'Kuching, Sarawak',
      period: 'June 2025 – August 2025',
      achievements: [
        'Delivered tailored consultations for clients in selecting BMW vehicles, enhancing communication and negotiation skills.',
        'Supported sales operations including preparing quotations using a self-developed web application for automated process to improve efficiency.',
      ],
    },
    {
      id: 3,
      title: 'Industrial Trainee',
      company: 'Sarawak Information Systems Sdn. Bhd. (SAINS)',
      location: 'Kuching, Sarawak',
      period: 'March 2025 – June 2025',
      achievements: [
        'Conducted solo development and proposal for an Android application (EntryBiot) that improved efficiency ~300% (from 20 to 80 units registered per day).',
        'Developed a web scraping tool to automate information retrieval from the company\'s intranet.',
        'Assisted in the implementation and replacement of water meter IoT devices around Sarawak\'s rural area.',
      ],
    },
    {
      id: 4,
      title: 'Full-Stack Developer Trainee',
      company: 'Gearworks Technologies',
      location: 'Kuching, Sarawak',
      period: 'September 2022 – March 2023',
      achievements: [
        'Built a comprehensive entry management system using MySQL, Node.js, and Spring Boot.',
        'Assisted in troubleshooting server-side management across multiple sites to improve system reliability.',
        'Worked with cross-functional teams to ensure seamless integration and enhanced user experience.',
      ],
    },
  ],

  education: [
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
  ],

  languages: [
    { name: 'Malay', level: 'Fluent', rating: 10 },
    { name: 'English', level: 'Fluent', rating: 10 },
    { name: 'Mandarin', level: 'Limited Proficiency', rating: 3 },
  ],
}
