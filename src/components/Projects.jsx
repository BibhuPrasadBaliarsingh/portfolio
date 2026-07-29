import { motion } from 'framer-motion'
import { HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi'
import Stats from './Stats'

const projects = [
  {
    title: 'BusBee — Real-Time Bus Tracking',
    desc: 'School Bus Live Tracking System featuring real-time GPS tracking, live route updates, and interactive map monitoring for parents and admins.',
    tags: ['React', 'Tailwind CSS', 'Leaflet', 'Node.js'],
    demoUrl: 'https://busbee-live.netlify.app/',
    codeUrl: '#',
  },
  {
    title: 'E-Commerce Storefront',
    desc: 'Modern responsive shopping app with live search, cart state management, checkout flow, and payment gateway integration.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Task Flow Dashboard',
    desc: 'Interactive kanban drag-and-drop project management tool with live collaboration and customizable workflow boards.',
    tags: ['React', 'MongoDB', 'Express', 'Tailwind CSS'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Portfolio Showcase CMS',
    desc: 'Lightweight content administration system for creators to showcase case studies, media galleries, and contact leads.',
    tags: ['JavaScript', 'HTML/CSS', 'Node.js'],
    demoUrl: '#',
    codeUrl: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#333333]">Projects</h2>
        </motion.div>

        {/* Milestone Stats Cards */}
        <Stats />

        {/* Featured Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-7 shadow-[1px_8px_20px_2px_rgba(0,0,0,0.06)] flex flex-col justify-between border border-gray-100 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-[#333333]">{project.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={project.codeUrl}
                      className="p-1.5 text-gray-500 hover:text-[#6e57e4] transition-colors"
                      title="Source Code"
                    >
                      <HiOutlineCode className="text-xl" />
                    </a>
                    <a
                      href={project.demoUrl}
                      className="p-1.5 text-gray-500 hover:text-[#6e57e4] transition-colors"
                      title="Live Demo"
                    >
                      <HiOutlineExternalLink className="text-xl" />
                    </a>
                  </div>
                </div>
                <p className="text-[#777777] text-sm leading-relaxed mb-6">{project.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-gray-100 text-[#555555] text-xs font-medium px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
