import { motion } from 'framer-motion'
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCodeBracket,
  HiOutlineSparkles,
  HiOutlineCheckBadge,
  HiOutlineDocumentText,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2'
import { personalInfo, educationData } from '../data/portfolioData'

const engineeringPillars = [
  {
    title: 'Solving Business Problems',
    desc: 'Code is a tool to drive real value. I build features that directly address user needs, streamline workflows, and help businesses scale.',
    icon: HiOutlineSparkles,
  },
  {
    title: 'Clean & Maintainable Code',
    desc: 'Emphasizing modular React components, clean REST API routing, and structured file architecture for long-term codebase health.',
    icon: HiOutlineCodeBracket,
  },
  {
    title: 'Performance & User Experience',
    desc: 'Optimizing page load speed, component rendering, mobile responsiveness, and layout stability across desktop and mobile devices.',
    icon: HiOutlineRocketLaunch,
  },
  {
    title: 'Continuous Learning & Modern Tech',
    desc: 'Staying ahead with modern web frameworks, AI integrations, performance auditing, and cloud deployment pipelines.',
    icon: HiOutlineCheckBadge,
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0d121f] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-400 uppercase tracking-widest border border-indigo-500/30 mb-4">
            Professional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-primary">Bibhu Prasad Baliarsingh</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            MERN Stack Developer & Computer Science Graduate passionate about building high-performance, scalable web applications.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography & Education (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Bio Card */}
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Engineering Background</h3>
              <p className="text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-6">
                MERN Stack Developer • Software Engineer
              </p>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  I recently graduated with a <strong className="text-white">Bachelor of Technology (B.Tech) in Computer Science</strong> and am currently working as a <strong className="text-white">MERN Stack Developer</strong>.
                </p>
                <p>
                  My core technical focus is building scalable web applications using <strong className="text-white">React, Node.js, Express.js, and MongoDB</strong>. I enjoy turning business problems into clean, functional, and performant web solutions.
                </p>
                <p>
                  I write clean, maintainable code, prioritize mobile responsiveness and fast load times, and continuously expand my skill set with modern web tools and AI integrations.
                </p>
              </div>

              {/* Resume CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <HiOutlineBriefcase className="text-base shrink-0" />
                  <span>Available for Remote & Freelance Contracts</span>
                </div>
                <a
                  href={personalInfo.resumeUrl}
                  download="BibhuPrasadBaliarsingh_CV.pdf"
                  className="btn-primary-gradient text-xs py-2.5 px-5"
                >
                  <HiOutlineDocumentText className="text-base" />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Education Highlight Card */}
            <div className="glass-card rounded-3xl p-6 border border-indigo-500/20 bg-gradient-to-r from-indigo-900/20 to-purple-900/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                <HiOutlineAcademicCap className="text-2xl" />
              </div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-white">
                    {educationData[0].degree}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-semibold">
                    {educationData[0].status}
                  </span>
                </div>
                <p className="text-xs font-semibold text-indigo-300 mt-0.5">
                  Major: {educationData[0].field}
                </p>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  {educationData[0].highlights}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Core Pillars (6 cols) */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {engineeringPillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                      <Icon className="text-2xl" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
