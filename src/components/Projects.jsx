import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMagnifyingGlass, HiArrowTopRightOnSquare, HiOutlineCodeBracket, HiOutlineSparkles } from 'react-icons/hi2'
import { projects } from '../data/portfolioData'
import CaseStudyModal from './CaseStudyModal'

const categories = ['All', 'Full Stack MERN', 'SaaS & AI', 'Web Applications']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="py-28 bg-[#0a0d14] relative overflow-hidden">
      {/* Background Gradient Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-400 uppercase tracking-widest border border-cyan-500/30 mb-4">
            Production Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-primary">Engineering Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Real-world full-stack web applications, IoT platforms, and AI workflows built for scale, performance, and measurable business impact.
          </p>
        </motion.div>

        {/* Filter Controls: Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 glass-pill p-1.5 rounded-full border border-white/10 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 focus:outline-none ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search tech or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 bg-white/5 border border-white/10 rounded-full px-4 pl-11 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500 transition-colors"
            />
            <HiOutlineMagnifyingGlass className="absolute left-4 top-3.5 text-slate-400 text-base" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Preview */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900 border-b border-white/10">
                  <img
                    src={project.imagePlaceholder}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 glass-pill px-3 py-1 rounded-full border border-white/15 text-[10px] font-mono text-cyan-300">
                    {project.category}
                  </div>

                  {/* Direct Link Icons Overlay */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full glass-pill border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all"
                        title="Source Code"
                      >
                        <HiOutlineCodeBracket className="text-base" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full glass-pill border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all"
                        title="Live Demo"
                      >
                        <HiArrowTopRightOnSquare className="text-base" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-300 mb-4">
                    {project.headline}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-slate-300 glass-pill px-2.5 py-1 rounded-md border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Study Modal Trigger Button */}
              <div className="px-7 pb-7">
                <button
                  onClick={() => handleOpenCaseStudy(project)}
                  className="w-full btn-secondary-dark justify-center text-xs py-3 font-semibold group-hover:border-indigo-500/50 transition-colors"
                >
                  <HiOutlineSparkles className="text-indigo-400 text-base" />
                  <span>Read Full Case Study</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 glass-card rounded-3xl border border-white/10">
            <p className="text-slate-400 text-sm">No projects match your current filter or search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All')
                setSearchQuery('')
              }}
              className="mt-4 text-xs font-semibold text-indigo-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal Drawer */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
