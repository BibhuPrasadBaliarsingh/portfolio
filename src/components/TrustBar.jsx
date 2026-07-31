import { motion } from 'framer-motion'
import { trustMetrics } from '../data/portfolioData'

export default function TrustBar() {
  return (
    <section className="py-12 bg-[#0d121f] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {trustMetrics.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-3.5 glass-pill rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="text-xs font-bold text-white tracking-wide">{item.title}</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
