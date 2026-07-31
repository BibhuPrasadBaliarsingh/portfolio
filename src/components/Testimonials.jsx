import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi2'
import { testimonials } from '../data/portfolioData'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#0a0d14] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-amber-400 uppercase tracking-widest border border-amber-500/30 mb-4">
            Client Social Proof
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by <span className="text-gradient-primary">Global Founders & Leaders</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Feedback from clients across the US, UK, Canada, and Europe who rely on my full-stack engineering expertise.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass-card glass-card-hover rounded-3xl p-7 border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <HiStar key={i} className="text-lg" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Profile Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-indigo-500/30 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-indigo-300 font-medium">{item.role} • {item.company}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
