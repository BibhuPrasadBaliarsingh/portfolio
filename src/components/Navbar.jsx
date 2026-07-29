import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineDocumentText, HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-[#fafafa] py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1e9fab]">
          Bibhu <span className="text-[#333333] font-light">Prasad</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.id} className="relative">
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActiveSection(link.id)}
                    className={`font-medium transition-colors hover:text-[#6e57e4] text-base ${
                      isActive ? 'text-[#6e57e4]' : 'text-[#444444]'
                    }`}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6e57e4]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          {/* Download CV button */}
          <a
            href="/Bibhucv.pdf"
            download="BibhuPrasadBaliarsingh_CV.pdf"
            className="btn-secondary text-sm font-medium"
          >
            Download CV <HiOutlineDocumentText className="text-lg" />
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-2xl text-[#333333] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-6"
          >
            <ul className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setActiveSection(link.id)
                      setMobileMenuOpen(false)
                    }}
                    className={`block py-2 text-lg font-medium ${
                      activeSection === link.id ? 'text-[#6e57e4]' : 'text-[#444444]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/Bibhucv.pdf"
                  download="BibhuPrasadBaliarsingh_CV.pdf"
                  className="btn-secondary w-full justify-center text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download CV <HiOutlineDocumentText className="text-lg" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
