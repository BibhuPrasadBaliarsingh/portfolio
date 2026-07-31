import { motion } from 'framer-motion'
import {
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineCheckCircle,
  HiOutlineCalendar,
  HiOutlineMapPin,
} from 'react-icons/hi2'
import { experienceData, educationData } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0d121f] relative overflow-hidden">
      {/* Mesh */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-400 uppercase tracking-widest border border-emerald-500/30 mb-4">
            Professional Experience & Education
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-gradient-primary">Education</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Professional engineering role responsibilities and academic Computer Science background.
          </p>
        </motion.div>

        {/* 2 Column Layout: Experience & Education */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Work Experience Card (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 glass-card rounded-3xl p-8 sm:p-10 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <HiOutlineBriefcase className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {experienceData[0].role}
                </h3>
                <p className="text-xs font-semibold text-indigo-300 font-mono">
                  {experienceData[0].company}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-6">
              <span className="glass-pill px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                <HiOutlineCalendar className="text-indigo-400" />
                <span>{experienceData[0].duration}</span>
              </span>
              <span className="glass-pill px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                <HiOutlineMapPin className="text-cyan-400" />
                <span>{experienceData[0].location}</span>
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {experienceData[0].summary}
            </p>

            {/* Responsibilities Checklist */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
                Key Responsibilities & Deliverables
              </h4>
              {experienceData[0].responsibilities.map((resp) => (
                <div key={resp} className="flex items-start gap-3 text-xs text-slate-200">
                  <HiOutlineCheckCircle className="text-emerald-400 text-base shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mt-8 pt-6 border-t border-white/10">
              {experienceData[0].tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono text-indigo-300 glass-pill px-2.5 py-1 rounded-md border border-indigo-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Concise Education Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Education Card */}
            <div className="glass-card rounded-3xl p-7 border border-indigo-500/30 bg-gradient-to-br from-indigo-900/20 via-slate-900/60 to-purple-900/10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mb-6">
                <HiOutlineAcademicCap className="text-2xl" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-semibold mb-3">
                {educationData[0].status}
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {educationData[0].degree}
              </h3>
              <p className="text-xs font-semibold text-indigo-300 mb-4 font-mono">
                Major: {educationData[0].field}
              </p>

              <p className="text-slate-300 text-xs leading-relaxed border-t border-white/10 pt-4">
                {educationData[0].highlights}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
