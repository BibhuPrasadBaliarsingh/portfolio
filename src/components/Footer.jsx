import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Case Studies' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Tech Stack' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { icon: FaGithub, href: personalInfo.githubUrl, label: 'GitHub' },
  { icon: FaLinkedinIn, href: personalInfo.linkedinUrl, label: 'LinkedIn' },
  { icon: FaInstagram, href: personalInfo.instagramUrl, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-[#070a0f] border-t border-white/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-indigo-500/20">
                B
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Bibhu Prasad Baliarsingh
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-sm">
              Senior MERN & Full-Stack Solutions Architect. Engineering scalable digital products for global businesses.
            </p>
          </div>

          {/* Nav Links */}
          <nav>
            <ul className="flex flex-wrap justify-center items-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/20 transition-all text-sm"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Systems Operational • 99.9% Uptime</span>
          </div>

          <p>
            Copyright &copy; {new Date().getFullYear()}{' '}
            <span className="text-slate-300 font-semibold">{personalInfo.name}</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
