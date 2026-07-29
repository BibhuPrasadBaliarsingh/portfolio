import { motion } from 'framer-motion'
import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaGithub,
} from 'react-icons/fa'

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaDribbble, href: 'https://dribbble.com', label: 'Dribbble' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-[#f8f8f8] py-12 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-8">
        {/* Top Footer Logo/Name */}
        <div className="text-2xl sm:text-3xl font-semibold text-[#333333]">
          <p>Bibhu Prasad Baliarsingh</p>
        </div>

        {/* Middle Footer Menu */}
        <nav>
          <ul className="flex flex-wrap justify-center items-center gap-8">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#444444] font-medium text-base hover:text-[#6e57e4] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6">
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

        {/* Bottom Footer Copyright */}
        <div className="text-[#777777] text-sm mt-2">
          <p>
            Copyright &copy; {new Date().getFullYear()}{' '}
            <a href="#home" className="text-[#333333] font-semibold hover:underline">
              Bibhu Prasad Baliarsingh
            </a>{' '}
            - All rights reserved
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
