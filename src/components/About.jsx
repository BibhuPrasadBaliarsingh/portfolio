import { motion } from 'framer-motion'
import { HiOutlineArrowDownTray } from 'react-icons/hi2'

const skillGroups = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Tailwind css', 'React'],
  },
  {
    category: 'Backend',
    items: ['Node js', 'Express js', 'Java'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'MySQL'],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#333333]">About Me</h2>
        </motion.div>

        {/* 2 Column Row */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: My Introduction Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-2xl p-8 sm:p-10 shadow-[1px_8px_20px_2px_rgba(0,0,0,0.08)] flex flex-col justify-between min-h-[340px]"
          >
            <div>
              <h3 className="text-xl font-semibold text-[#333333] mb-4">My introduction</h3>
              <p className="text-[#777777] text-base leading-relaxed">
                I am well-versed in HTML, CSS and JavaScript, and other cutting edge
                frameworks and libraries, which allows me to implement interactive features.
                Additionally, I have experience working with content management systems (CMS) like
                WordPress, and I take pride in delivering fast, accessible, responsive user interfaces.
              </p>
            </div>

            {/* Download CV button aligned bottom right */}
            <div className="mt-8 flex justify-end">
              <a
                href="/Bibhucv.pdf"
                download="BibhuPrasadBaliarsingh_CV.pdf"
                className="inline-flex items-center gap-2 bg-[#6e57e4] hover:bg-[#285bd4] text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
              >
                Download CV <HiOutlineArrowDownTray className="text-base" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Skills Boxes */}
          <div className="space-y-8">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-[#333333] mb-4">{group.category}</h4>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#6e57e4] text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-md shadow-xs hover:bg-[#285bd4] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
