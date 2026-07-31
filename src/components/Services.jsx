import { motion } from 'framer-motion'
import {
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlinePaintBrush,
  HiOutlineCloud,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineCheckBadge,
  HiOutlineGlobeAlt,
  HiOutlineBriefcase,
  HiOutlineShieldCheck,
  HiOutlineCheck,
  HiOutlineArrowRight,
} from 'react-icons/hi2'
import { services } from '../data/portfolioData'

const iconMap = {
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlinePaintBrush,
  HiOutlineCloud,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineCheckBadge,
  HiOutlineGlobeAlt,
  HiOutlineBriefcase,
  HiOutlineShieldCheck,
}

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0a0d14] relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-400 uppercase tracking-widest border border-indigo-500/30 mb-4">
            Professional Web Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-gradient-primary">Web Development Services</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            From custom MERN stack applications to API engineering, dashboards, AI workflows, and performance optimization.
          </p>
        </motion.div>

        {/* Services Grid (10 Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || HiOutlineCodeBracket

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-7 border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all">
                      <IconComponent className="text-2xl" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 glass-pill px-3 py-1 rounded-full border border-white/10">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-400 mt-1">{service.tagline}</p>

                  <p className="text-slate-300 text-sm leading-relaxed mt-4 mb-6">
                    {service.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <HiOutlineCheck className="text-[10px]" />
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-slate-400 glass-pill px-2.5 py-1 rounded-md border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-300 hover:text-white group-hover:translate-x-1 transition-all"
                  >
                    <span>Inquire About Service</span>
                    <HiOutlineArrowRight className="text-xs" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
