import { motion } from 'framer-motion'
import { skillsData } from '../data/portfolioData'
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiNetlify,
  SiTypescript,
  SiCodefactor,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { HiOutlineCpuChip } from 'react-icons/hi2'

const iconMap = {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiJsonwebtokens,
  SiTypescript,
  SiVisualstudiocode: SiCodefactor,
  SiPostman,
  SiVite,
  SiNetlify,
  FaAws,
  HiOutlineCpuChip,
  SiGit,
  SiGithub,
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0a0d14] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-purple-400 uppercase tracking-widest border border-purple-500/30 mb-4">
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Categorized <span className="text-gradient-primary">Skills & Tools</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Core technologies, programming languages, backend frameworks, databases, and deployment platforms.
          </p>
        </motion.div>

        {/* 8 Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (groupIdx % 4) * 0.08 }}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white mb-5 pb-3 border-b border-white/10 flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                </h3>

                <div className="space-y-4">
                  {group.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || SiReact
                    return (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <div className="flex items-center gap-2 text-slate-200 truncate">
                            <IconComponent className="text-indigo-400 text-sm shrink-0" />
                            <span className="truncate">{skill.name}</span>
                          </div>
                          <span className="font-mono text-indigo-300 font-semibold ml-2">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
