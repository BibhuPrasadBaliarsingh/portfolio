import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from 'react-icons/fa'
import { HiOutlineDocumentText, HiOutlineArrowDown, HiOutlineCheckCircle, HiOutlineCpuChip } from 'react-icons/hi2'
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si'
import { useTypewriter } from '../hooks/useTypewriter'
import { personalInfo, professionalStats } from '../data/portfolioData'
import profile from '../assets/profile.jpg'

const roles = [
  'MERN Stack Developer',
  'Full Stack Web Developer',
  'Software Engineer',
  'React & Node.js Specialist',
]

const socialLinks = [
  { icon: FaGithub, href: personalInfo.githubUrl, label: 'GitHub' },
  { icon: FaLinkedinIn, href: personalInfo.linkedinUrl, label: 'LinkedIn' },
  { icon: FaInstagram, href: personalInfo.instagramUrl, label: 'Instagram' },
]

const floatingTech = [
  { icon: SiReact, name: 'React 19', color: 'text-cyan-400' },
  { icon: SiNodedotjs, name: 'Node.js', color: 'text-emerald-400' },
  { icon: SiExpress, name: 'Express', color: 'text-slate-300' },
  { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-sky-400' },
  { icon: HiOutlineCpuChip, name: 'AI Integration', color: 'text-purple-400' },
]

export default function Hero() {
  const typedRole = useTypewriter(roles, { typingSpeed: 70, deletingSpeed: 35, pause: 1800 })

  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center overflow-hidden bg-[#0a0d14]"
    >
      {/* Background Radiant Glow Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* 3 Status Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {personalInfo.badges.map((badge) => (
                <div
                  key={badge}
                  className="glass-pill px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Building Modern <br className="hidden sm:inline" />
              <span className="text-gradient-primary">Web Applications</span> <br />
              <span className="text-gradient-cyan">That Help Businesses Grow</span>
            </h1>

            {/* Dynamic Role Tag */}
            <div className="text-lg sm:text-xl font-mono text-indigo-400 font-semibold mb-4">
              <span>I'm a </span>
              <span className="underline decoration-indigo-500/50">{typedRole}</span>
              <span className="typed-cursor text-indigo-400 font-light ml-1">|</span>
            </div>

            {/* Subheading / Value Proposition */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              {personalInfo.subtitle}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary-gradient group text-sm">
                <span>Hire Me</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </a>

              <a href="#projects" className="btn-secondary-dark text-sm">
                <span>View Projects</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="BibhuPrasadBaliarsingh_CV.pdf"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors px-3 py-2"
              >
                <HiOutlineDocumentText className="text-base text-indigo-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Social Trust & Links */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/20 transition-all text-base"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              <div className="h-5 w-[1px] bg-white/10" />
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <HiOutlineCheckCircle className="text-emerald-400 text-base shrink-0" />
                <span>Response Time {personalInfo.responseTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Profile Card & Tech Icons (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-40 animate-pulse-glow" />

              {/* Glass Profile Card */}
              <div className="relative glass-card rounded-3xl p-6 border border-white/15 shadow-2xl">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/10 group">
                  <img
                    src={profile}
                    alt="Bibhu Prasad Baliarsingh"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-80" />

                  {/* Profile Card Label */}
                  <div className="absolute bottom-4 left-4 right-4 glass-pill p-3 rounded-xl border border-white/15">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">Bibhu Prasad Baliarsingh</p>
                        <p className="text-[11px] text-indigo-300 font-mono">B.Tech CS • MERN Stack Developer</p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-semibold tracking-wide uppercase">
                        Available
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Stack Badges */}
                <div className="grid grid-cols-3 gap-2">
                  {floatingTech.map((tech) => {
                    const Icon = tech.icon
                    return (
                      <div
                        key={tech.name}
                        className="glass-pill p-2 rounded-xl border border-white/10 flex items-center justify-center gap-1.5 hover:border-white/20 transition-colors"
                      >
                        <Icon className={`text-sm ${tech.color}`} />
                        <span className="text-[11px] font-medium text-slate-300">{tech.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Professional Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {professionalStats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card glass-card-hover p-4 rounded-2xl border border-white/10 text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-primary font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-white mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-12 flex justify-center z-10">
        <a
          href="#services"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white glass-pill px-4 py-2 rounded-full border border-white/10 transition-colors"
        >
          <HiOutlineArrowDown className="text-sm text-indigo-400 animate-bounce" />
          <span>Explore Services</span>
        </a>
      </div>
    </section>
  )
}
