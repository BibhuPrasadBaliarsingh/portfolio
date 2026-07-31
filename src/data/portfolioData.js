// Centralized Data Store for Bibhu Prasad Baliarsingh Portfolio
export const personalInfo = {
  name: 'Bibhu Prasad Baliarsingh',
  title: 'MERN Stack Developer',
  headline: 'Building Modern Web Applications That Help Businesses Grow',
  subtitle:
    'Professional MERN Stack Developer specializing in React, Node.js, Express, MongoDB, scalable APIs, dashboards, AI integration, and business websites.',
  badges: [
    '✔ Available for Freelance',
    '✔ Open to Remote Opportunities',
    '✔ Full Stack Developer',
  ],
  education: {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science',
    status: 'Graduated',
  },
  currentRole: {
    title: 'MERN Stack Developer',
    type: 'Full-Time Engineering Role',
  },
  location: 'Serving Clients Worldwide (Remote / Freelance)',
  email: 'bibhupbaliarsingh@gmail.com',
  phone: '+91 80185 04875',
  whatsappUrl: 'https://wa.me/918018504875',
  resumeUrl: '/Bibhucv.pdf',
  githubUrl: 'https://github.com/BibhuPrasadBaliarsingh',
  linkedinUrl: 'https://www.linkedin.com/in/bibhu-prasad-baliarsingh-138a442a9/',
  instagramUrl: 'https://instagram.com',
  responseTime: '< 2 Hours Guaranteed',
}

export const professionalStats = [
  { value: '15+', label: 'Projects Completed', sub: 'Production & Client Web Apps' },
  { value: '12+', label: 'Technologies Used', sub: 'MERN, Databases & Cloud Tools' },
  { value: 'MERN Dev', label: 'Current Role', sub: 'Full-Stack Software Engineering' },
  { value: 'Available', label: 'Availability', sub: 'Freelance & Remote Contracts' },
  { value: '< 2 Hours', label: 'Response Time', sub: 'Fast & Clear Communication' },
]

export const trustMetrics = [
  { title: 'Clean Code', desc: 'Maintainable & modular MERN architecture', icon: '💎' },
  { title: 'Fast Delivery', desc: 'Agile sprints with weekly updates', icon: '⚡' },
  { title: 'Core Web Vitals', desc: 'Optimized page speed & mobile UX', icon: '🚀' },
  { title: 'RESTful APIs', desc: 'Secure endpoints with JWT auth', icon: '🔒' },
  { title: 'Global Sync', desc: 'Async updates via Slack, Email & Meet', icon: '🌍' },
  { title: 'Ongoing Support', desc: 'Reliable bug fixes & maintenance', icon: '🛡️' },
]

export const testimonials = [
  {
    quote:
      'Bibhu developed our full-stack web portal with incredible attention to speed and clean code. His MERN stack expertise made our launch smooth and stress-free.',
    name: 'Marcus Vance',
    role: 'Product Manager',
    company: 'Vance Tech (USA)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    country: '🇺🇸 United States',
  },
  {
    quote:
      'Working with Bibhu was a seamless experience. He understood our business requirements quickly and delivered a responsive React interface ahead of schedule.',
    name: 'Sarah Jenkins',
    role: 'Founder & CEO',
    company: 'OmniGrowth (UK)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    country: '🇬🇧 United Kingdom',
  },
  {
    quote:
      'The real-time bus tracking application Bibhu engineered for our fleet exceeded expectations. High performance, great communication, and robust backend logic.',
    name: 'David Reynolds',
    role: 'Operations Lead',
    company: 'EduFleet Corp (Canada)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    country: '🇨🇦 Canada',
  },
]

export const services = [
  {
    id: 'custom-web-dev',
    title: 'Custom Web Development',
    category: 'Engineering',
    icon: 'HiOutlineCodeBracket',
    tagline: 'Tailored Web Applications for Business Growth',
    description:
      'Designing and building custom web applications tailored to your specific business requirements, workflows, and growth goals.',
    benefits: [
      'Tailored component architecture matching your business needs',
      'Clean, maintainable code built for long-term scalability',
      'Responsive user interfaces across mobile and desktop devices',
      'Seamless frontend to backend integration',
    ],
    tech: ['React', 'Node.js', 'Express', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 'mern-dev',
    title: 'MERN Stack Development',
    category: 'Full-Stack',
    icon: 'HiOutlineCpuChip',
    tagline: 'End-to-End MongoDB, Express, React & Node Solutions',
    description:
      'Complete full-stack engineering utilizing MongoDB, Express.js, React, and Node.js for robust, high-performance web products.',
    benefits: [
      'Full-stack architecture from database design to UI components',
      'Scalable backend logic with Node.js and Express',
      'Dynamic React frontend with clean state management',
      'Optimized MongoDB schemas and fast query performance',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Mongoose'],
  },
  {
    id: 'react-frontend',
    title: 'React Frontend Development',
    category: 'Frontend',
    icon: 'HiOutlinePaintBrush',
    tagline: 'Interactive & Modern User Interfaces',
    description:
      'Crafting fast, modular, and responsive user interfaces with React 19, modern state management, and smooth visual transitions.',
    benefits: [
      'Pixel-perfect implementation of Figma and web designs',
      'Reusable React component patterns with hooks',
      'Smooth micro-animations and intuitive navigation',
      'Cross-browser compatibility and mobile responsiveness',
    ],
    tech: ['React 19', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'HTML5/CSS3'],
  },
  {
    id: 'backend-api',
    title: 'Backend API Development',
    category: 'Backend',
    icon: 'HiOutlineCloud',
    tagline: 'Secure RESTful APIs & Server Architecture',
    description:
      'Building secure, well-structured RESTful APIs using Node.js and Express to power single-page apps, mobile clients, and third-party tools.',
    benefits: [
      'Structured REST API endpoints with clean routing logic',
      'Secure JWT authentication, password hashing, and authorization',
      'Third-party API and payment gateway integrations',
      'Error handling, request validation, and logging',
    ],
    tech: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Postman'],
  },
  {
    id: 'admin-dashboards',
    title: 'Admin Dashboard Development',
    category: 'Dashboards',
    icon: 'HiOutlineChartBar',
    tagline: 'Data Visualization & Management Portals',
    description:
      'Creating interactive administrative portals, data management dashboards, and analytics panels for business owners.',
    benefits: [
      'Interactive charts, data tables, and search filters',
      'Role-based access control (Admin, Manager, User)',
      'Data import/export utilities (CSV, PDF reporting)',
      'Clean dark and light interface modes',
    ],
    tech: ['React', 'Recharts', 'Tailwind CSS', 'Express', 'MongoDB'],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    category: 'Innovation',
    icon: 'HiOutlineSparkles',
    tagline: 'Smart Chatbots & Automated AI Workflows',
    description:
      'Integrating OpenAI and LLM APIs into your web platforms to power automated customer support, chat assistants, and smart data processing.',
    benefits: [
      'AI-powered chatbots and lead capturing counselors',
      'Automated text generation, summarization, and content extraction',
      'Real-time streaming responses with user-friendly chat UI',
      'Seamless connection with your backend APIs',
    ],
    tech: ['OpenAI API', 'Node.js', 'React', 'Express', 'REST APIs'],
  },
  {
    id: 'website-optimization',
    title: 'Website Optimization',
    category: 'Performance',
    icon: 'HiOutlineCheckBadge',
    tagline: 'Fast Load Times & Core Web Vitals Optimization',
    description:
      'Auditing and optimizing existing web applications to improve page load speed, mobile performance, SEO rankings, and user retention.',
    benefits: [
      'Bundle size reduction and lazy loading optimization',
      'Core Web Vitals improvement (LCP, CLS, FID)',
      'Technical SEO meta tags and structured data implementation',
      'Clean code refactoring to purge technical debt',
    ],
    tech: ['Lighthouse', 'Vite', 'SEO Schema', 'Performance Audits'],
  },
  {
    id: 'business-websites',
    title: 'Business Websites',
    category: 'Websites',
    icon: 'HiOutlineGlobeAlt',
    tagline: 'High-Converting Corporate & Startup Websites',
    description:
      'Building professional, conversion-focused websites for agencies, businesses, startups, and service providers.',
    benefits: [
      'Strategic layout focused on visitor-to-client conversion',
      'Fast loading speed and clean typography',
      'Lead contact forms with real-time email verification',
      'Fully responsive across all screen sizes',
    ],
    tech: ['React', 'Tailwind CSS', 'HTML5', 'SEO', 'Form Validation'],
  },
  {
    id: 'erp-solutions',
    title: 'ERP Solutions',
    category: 'Enterprise',
    icon: 'HiOutlineBriefcase',
    tagline: 'Streamlined Business Process Management Modules',
    description:
      'Developing custom enterprise modules for tracking resources, student/staff data, workflows, and operational metrics.',
    benefits: [
      'Centralized management modules for business operations',
      'Secure role-based permissions and user tracking',
      'Custom database models and relational queries',
      'Intuitive user interfaces built for daily business use',
    ],
    tech: ['MERN Stack', 'Node.js', 'Express', 'MongoDB', 'React'],
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    category: 'Support',
    icon: 'HiOutlineShieldCheck',
    tagline: 'Reliable Updates, Bug Fixes & Retainer Support',
    description:
      'Providing ongoing technical support, bug fixing, dependency updates, and feature additions for your web applications.',
    benefits: [
      'Prompt bug fixes and issue resolution',
      'Regular security updates and dependency upgrades',
      'Continuous feature updates and enhancement support',
      'Clear communication and predictable retainer options',
    ],
    tech: ['Git', 'GitHub', 'Node.js', 'React', 'Debugging Tools'],
  },
]

export const projects = [
  {
    id: 'speedtoyz-cars',
    title: 'SpeedToyz — Premium Luxury Car Rental Platform',
    category: 'Full Stack MERN',
    headline: 'Instant Luxury & Sports Car Rental Platform with Fleet Booking System',
    overview:
      'A high-performance automobile rental web application enabling customers to browse luxury car fleets, view detailed vehicle specifications, calculate rental costs, and book instantly.',
    problemSolved:
      'Traditional car rental portals suffered from slow response times, complex booking steps, and poor mobile responsiveness, leading to high drop-off rates for luxury vehicle rentals.',
    features: [
      'Interactive luxury car fleet showcase with high-res image galleries & spec sheets',
      'Instant rental booking flow with date picker and automated pricing calculator',
      'Responsive React frontend with smooth category filtering and search',
      'Backend REST API for fleet availability management and reservation inquiries',
    ],
    businessValue:
      'Streamlined the luxury car rental booking experience, boosting mobile user engagement and providing a seamless reservation pipeline for premium automotive clients.',
    imagePlaceholder:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    demoUrl: 'https://speedtoyzcars.com/',
    codeUrl: 'https://github.com/BibhuPrasadBaliarsingh',
  },
  {
    id: 'busbee-tracking',
    title: 'BusBee — Real-Time Bus Tracking System',
    category: 'Full Stack MERN',
    headline: 'Live GPS Monitoring & Parent Alert System for Schools',
    overview:
      'A real-time web application built for school fleet monitoring and parent updates, providing live GPS tracking on interactive maps.',
    problemSolved:
      'School administrators and parents suffered from delayed communication regarding school bus routes, morning arrival times, and traffic delays.',
    features: [
      'Real-time vehicle position tracking on interactive maps',
      'Live route monitoring and ETA calculation',
      'Role-based admin dashboard for managing buses and routes',
      'Responsive mobile-friendly parent interface',
    ],
    businessValue:
      'Significantly reduced inquiry calls to school administration during peak hours while offering parents reliable, transparent transit monitoring.',
    imagePlaceholder:
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Tailwind CSS', 'Leaflet Maps', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: 'https://busbee-live.netlify.app/',
    codeUrl: 'https://github.com/BibhuPrasadBaliarsingh',
  },
  {
    id: 'eduai-admission',
    title: 'EduAI — AI Admission & Student Lead Counselor',
    category: 'AI & MERN',
    headline: 'Automated Academic Information & Lead Management Assistant',
    overview:
      'An AI-integrated chat application enabling educational institutions to automatically engage prospective students and capture admission leads.',
    problemSolved:
      'Educational institutions lost potential applicant inquiries outside standard office hours due to delayed response times.',
    features: [
      'AI chatbot trained to answer program and fee questions',
      'Real-time streaming response UI with markdown support',
      'Lead capture form storing prospect details in MongoDB',
      'Admin lead dashboard with filtering and export capabilities',
    ],
    businessValue:
      'Increased lead conversion outside business hours while allowing admissions teams to focus on qualified applicants.',
    imagePlaceholder:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Node.js', 'OpenAI API', 'Express', 'MongoDB', 'Tailwind CSS'],
    demoUrl: 'https://github.com/BibhuPrasadBaliarsingh',
    codeUrl: 'https://github.com/BibhuPrasadBaliarsingh',
  },
  {
    id: 'storefront-ecommerce',
    title: 'E-Commerce Storefront & Admin Portal',
    category: 'Full Stack MERN',
    headline: 'Modern E-Commerce Platform with Cart State & Order Management',
    overview:
      'A full-stack online store featuring dynamic product search, category filters, interactive cart drawer, and backend order processing.',
    problemSolved:
      'Traditional small business web stores suffered from sluggish page reloads during checkout and complex product management.',
    features: [
      'Instant client-side product filtering and search',
      'Persistent shopping cart state management',
      'Secure checkout flow with simulated payment gateway',
      'Admin portal to create, update, and delete product listings',
    ],
    businessValue:
      'Delivered a sub-second shopping experience that keeps visitors engaged and simplifies inventory updates.',
    imagePlaceholder:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    demoUrl: 'https://github.com/BibhuPrasadBaliarsingh',
    codeUrl: 'https://github.com/BibhuPrasadBaliarsingh',
  },
]

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React 19 / React Hooks', level: 92, icon: 'SiReact' },
      { name: 'JavaScript (ES6+)', level: 94, icon: 'SiJavascript' },
      { name: 'Tailwind CSS / Responsive Design', level: 96, icon: 'SiTailwindcss' },
      { name: 'HTML5 & CSS3', level: 98, icon: 'SiHtml5' },
      { name: 'Redux Toolkit & Context API', level: 88, icon: 'SiRedux' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90, icon: 'SiNodedotjs' },
      { name: 'Express.js', level: 92, icon: 'SiExpress' },
      { name: 'RESTful API Architecture', level: 94, icon: 'SiExpress' },
      { name: 'JWT Authentication & Security', level: 88, icon: 'SiJsonwebtokens' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB / Mongoose ODM', level: 90, icon: 'SiMongodb' },
      { name: 'MySQL', level: 84, icon: 'SiMysql' },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 94, icon: 'SiJavascript' },
      { name: 'TypeScript', level: 85, icon: 'SiTypescript' },
      { name: 'Java', level: 80, icon: 'SiOracle' },
      { name: 'HTML5 & CSS3', level: 98, icon: 'SiHtml5' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'VS Code', level: 96, icon: 'SiVisualstudiocode' },
      { name: 'Postman API Platform', level: 92, icon: 'SiPostman' },
      { name: 'Vite / NPM Build Tools', level: 90, icon: 'SiVite' },
    ],
  },
  {
    category: 'Deployment',
    skills: [
      { name: 'Netlify & Vercel', level: 94, icon: 'SiNetlify' },
      { name: 'AWS Basics & Cloud Hosting', level: 82, icon: 'FaAws' },
    ],
  },
  {
    category: 'AI & APIs',
    skills: [
      { name: 'OpenAI API Integration', level: 88, icon: 'HiOutlineCpuChip' },
      { name: 'Third-Party REST APIs & Webhooks', level: 92, icon: 'SiExpress' },
    ],
  },
  {
    category: 'Version Control',
    skills: [
      { name: 'Git Version Control', level: 94, icon: 'SiGit' },
      { name: 'GitHub Workflows & Pull Requests', level: 94, icon: 'SiGithub' },
    ],
  },
]

export const experienceData = [
  {
    role: 'MERN Stack Developer',
    company: 'Full-Stack Software Engineering',
    duration: 'Current Position',
    location: 'Remote / On-site',
    summary:
      'Developing production web applications, REST APIs, and responsive user interfaces using the MERN stack (MongoDB, Express, React, Node.js).',
    responsibilities: [
      'Building full-stack web applications using React, Node.js, Express, and MongoDB.',
      'Developing clean, scalable REST APIs with JWT authentication and middleware.',
      'Creating responsive, accessible user interfaces using React and Tailwind CSS.',
      'Managing MongoDB databases, designing data schemas, and optimizing queries.',
      'Deploying web applications to cloud platforms including Netlify and Vercel.',
      'Collaborating with engineering teams, conducting code reviews, and debugging issues.',
      'Optimizing page load speed, component rendering, and user experience across browsers.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Tailwind CSS', 'Git'],
  },
]

export const educationData = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science',
    status: 'Graduated',
    highlights:
      'Solid foundation in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering, and Web Development.',
  },
]

export const faqs = [
  {
    q: 'What technologies do you use for full-stack web development?',
    a: 'I specialize in the MERN Stack: MongoDB for database storage, Express.js and Node.js for backend server logic and REST APIs, and React with Tailwind CSS for modern, responsive frontend user interfaces.',
  },
  {
    q: 'Are you available for freelance projects or remote job opportunities?',
    a: 'Yes! I am open to freelance project engagements, contract development, and full-time remote engineering roles.',
  },
  {
    q: 'Can you integrate AI features into an existing web application?',
    a: 'Absolutely. I integrate OpenAI APIs, streaming text responses, and custom chat interfaces into existing React and Node.js applications.',
  },
  {
    q: 'What is your typical project delivery timeline?',
    a: 'Timelines vary depending on project scope. Business websites and landing pages take 1-2 weeks, while full-stack MERN applications and dashboards typically take 2-4 weeks.',
  },
  {
    q: 'How do we get started on a project?',
    a: 'You can send a direct inquiry through the contact form, email me directly, or connect on LinkedIn/WhatsApp. We will review your project requirements and outline a clear scope and timeline.',
  },
]
