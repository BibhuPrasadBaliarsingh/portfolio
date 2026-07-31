import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark, HiArrowTopRightOnSquare, HiOutlineCodeBracket, HiOutlineBriefcase } from 'react-icons/hi2'

export default function CaseStudyModal({ project, isOpen, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0a0d14]/80 backdrop-blur-md"
          />

          {/* Modal Drawer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl glass-modal rounded-3xl p-6 sm:p-10 z-10 my-8 overflow-hidden border border-white/15 max-h-[85vh] overflow-y-auto custom-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all focus:outline-none"
              aria-label="Close Modal"
            >
              <HiXMark className="text-xl" />
            </button>

            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 glass-pill px-3 py-1 rounded-full text-xs font-mono text-indigo-400 border border-indigo-500/30 mb-4">
              <span>{project.category}</span>
            </div>

            {/* Title & Headline */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm font-semibold text-slate-300 mb-6">
              {project.headline}
            </p>

            {/* Image Preview Banner */}
            <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-8 border border-white/10 relative bg-slate-900">
              <img
                src={project.imagePlaceholder}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-transparent to-transparent opacity-60" />
            </div>

            {/* Overview & Problem Solved */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass-pill p-5 rounded-2xl border border-white/10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
                  Project Overview
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="glass-pill p-5 rounded-2xl border border-white/10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 font-mono">
                  Problem Solved
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>
            </div>

            {/* Key Features */}
            {project.features && (
              <div className="mb-8">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-indigo-400 font-mono">✦</span> Key Implementation Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 glass-pill p-3.5 rounded-xl border border-white/5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        ✓
                      </div>
                      <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Business Value */}
            {project.businessValue && (
              <div className="mb-8 glass-card p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 font-mono flex items-center gap-2">
                  <HiOutlineBriefcase className="text-base" />
                  <span>Business Value & Impact</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {project.businessValue}
                </p>
              </div>
            )}

            {/* Tech Stack & Links */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-indigo-300 glass-pill px-3 py-1 rounded-full border border-indigo-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary-dark text-xs py-2.5 px-4"
                  >
                    <HiOutlineCodeBracket className="text-base" />
                    <span>Source Code</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-gradient text-xs py-2.5 px-5"
                  >
                    <span>Live Demo</span>
                    <HiArrowTopRightOnSquare className="text-base" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
