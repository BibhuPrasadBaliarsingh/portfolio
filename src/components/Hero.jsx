import { motion } from 'framer-motion'
import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaGithub,
} from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { HiOutlineArrowDown } from 'react-icons/hi2'
import { useTypewriter } from '../hooks/useTypewriter'
import profile from '../assets/profile.jpg'

const roles = ['Frontend Developer', 'MERN Developer', 'React Specialist', 'UI/UX Enthusiast']

const socials = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaDribbble, href: 'https://dribbble.com', label: 'Dribbble' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
]

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center bg-[#fafafa] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 items-center gap-12 my-auto">
        {/* Left Column: Featured Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-start"
        >
          {/* Badge */}
          <div className="inline-block bg-[#c0a631] text-white px-3 py-1 text-xs font-semibold rounded-md shadow-sm mb-4">
            <span>Bibhu Prasad Baliarsingh</span>
          </div>

          {/* Heading with Typewriter */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight my-2">
            I'm <br />
            <span className="text-[#1e9fab] font-semibold tracking-tight">{typed}</span>
            <span className="typed-cursor text-[#1e9fab] font-light">|</span>
          </h1>

          {/* Info Paragraph */}
          <p className="text-[#666666] text-base sm:text-lg max-w-lg mt-4 leading-relaxed">
            Experienced frontend developer with a passion for creating visually stunning
            and user-friendly websites.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a
              href="/Bibhucv.pdf"
              download="BibhuPrasadBaliarsingh_CV.pdf"
              className="btn-secondary"
            >
              Download CV <HiOutlineDocumentText className="text-lg" />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-12 sm:mt-16">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="social-icon-box text-lg"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="flex justify-center md:justify-end items-center"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[380px] lg:h-[380px] animate-img-float overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
            <img
              src={profile}
              alt="Bibhu Prasad Baliarsingh"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="#about"
          className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-full text-sm font-medium text-[#444444] shadow-md hover:shadow-lg hover:text-[#6e57e4] transition-all"
        >
          <HiOutlineArrowDown className="text-base animate-bounce" />
          <span>Scroll Down</span>
        </a>
      </motion.div>
    </section>
  )
}
