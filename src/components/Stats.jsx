import { motion } from 'framer-motion'
import { HiOutlineBriefcase, HiOutlineUsers, HiOutlineTrophy } from 'react-icons/hi2'

const statsData = [
  {
    icon: HiOutlineBriefcase,
    title: 'Completed',
    desc: '15+ Finished Projects',
  },
  {
    icon: HiOutlineUsers,
    title: 'Clients',
    desc: '25+ Happy Clients',
  },
  {
    icon: HiOutlineTrophy,
    title: 'Experience',
    desc: '3+ Years in the field',
  },
]

export default function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-12">
      {statsData.map((stat, i) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="hover-slide-box bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center h-60 cursor-pointer"
          >
            <div className="slide-content flex flex-col items-center">
              <Icon className="text-5xl text-[#00c9ff] mb-5 transition-colors" />
              <h3 className="text-xl font-semibold text-[#333333] mb-2">{stat.title}</h3>
              <p className="text-[#777777] text-sm font-medium">{stat.desc}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
