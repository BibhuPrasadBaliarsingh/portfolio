import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
  HiOutlineExclamationCircle,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClock,
  HiOutlineGlobeAmericas,
  HiOutlineDocumentText,
} from 'react-icons/hi2'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

const TYPO_DOMAINS = {
  'gmai.com': 'gmail.com',
  'gmial.com': 'gmail.com',
  'gmil.com': 'gmail.com',
  'gmaill.com': 'gmail.com',
  'gmai.co': 'gmail.com',
  'yaho.com': 'yahoo.com',
  'yaho.co': 'yahoo.com',
  'hotmial.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
}

const DISPOSABLE_DOMAINS = [
  'test.com',
  'example.com',
  'mailinator.com',
  'tempmail.com',
  'yopmail.com',
]

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [emailError, setEmailError] = useState('')
  const [emailVal, setEmailVal] = useState('')
  const [serverError, setServerError] = useState('')
  const [copyEmail, isCopied] = useCopyToClipboard()

  const isValidEmailFormat = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).trim().toLowerCase())
  }

  const verifyEmailDomain = async (email) => {
    const trimmed = String(email).trim().toLowerCase()
    if (!isValidEmailFormat(trimmed)) {
      return { valid: false, reason: 'Please enter a valid email format (e.g. name@company.com)' }
    }

    const parts = trimmed.split('@')
    const username = parts[0]
    const domain = parts[1]

    if (TYPO_DOMAINS[domain]) {
      return { valid: false, reason: `Did you mean ${username}@${TYPO_DOMAINS[domain]}?` }
    }

    if (DISPOSABLE_DOMAINS.includes(domain)) {
      return { valid: false, reason: 'Please enter a valid personal or corporate work email address.' }
    }

    try {
      const response = await fetch(`https://dns.google/resolve?name=${domain}&type=MX`)
      if (response.ok) {
        const data = await response.json()
        if (data.Status !== 0 || !data.Answer || data.Answer.length === 0) {
          return {
            valid: false,
            reason: `The domain "@${domain}" does not appear to have active email servers.`,
          }
        }
      }
    } catch (e) {
      console.warn('DNS MX validation fallback:', e)
    }

    return { valid: true }
  }

  const handleEmailChange = (e) => {
    const val = e.target.value
    setEmailVal(val)
    if (emailError && isValidEmailFormat(val)) {
      setEmailError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerError('')
    setEmailError('')

    const form = e.target
    const formData = new FormData(form)
    const email = formData.get('email')
    const name = formData.get('name')
    const service = formData.get('service')

    setStatus('sending')

    const verification = await verifyEmailDomain(email)
    if (!verification.valid) {
      setEmailError(verification.reason)
      setStatus('idle')
      return
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || ''

    if (accessKey) {
      try {
        formData.append('access_key', accessKey)
        formData.append('subject', `New Project Inquiry from ${name} [${service}]`)
        formData.append('from_name', name)

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        })
        const data = await response.json()
        if (data.success) {
          setStatus('sent')
          form.reset()
          setEmailVal('')
          setTimeout(() => setStatus('idle'), 5000)
          return
        } else {
          setServerError(data.message || 'Submission failed. Please email directly.')
          setStatus('error')
          return
        }
      } catch (err) {
        console.error('Submit error:', err)
        setServerError('Network error. Opening direct email client...')
      }
    }

    // Direct mailto fallback
    const message = formData.get('message')
    window.location.href = `mailto:${personalInfo.email}?subject=Project Inquiry: ${encodeURIComponent(
      service || 'MERN Development'
    )} - ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
      email
    )}%0A%0AMessage:%0A${encodeURIComponent(message)}`

    setStatus('sent')
    form.reset()
    setEmailVal('')
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="py-28 bg-[#0a0d14] relative overflow-hidden">
      {/* Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-indigo-600/15 via-purple-600/15 to-cyan-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-400 uppercase tracking-widest border border-emerald-500/30 mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Discuss Your <span className="text-gradient-primary">Web Project</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Have a project in mind or looking for a MERN Stack Developer? Send a message below or reach out via WhatsApp / Email.
          </p>
        </motion.div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links & Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="glass-card rounded-3xl p-7 border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact Channels</h3>

              {/* Email Row */}
              <div className="flex items-center justify-between p-3.5 glass-pill rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <HiOutlineEnvelope className="text-lg" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-mono text-slate-400">Direct Email</p>
                    <p className="text-xs font-bold text-white truncate">{personalInfo.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyEmail(personalInfo.email)}
                  className="p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all shrink-0 ml-2"
                  title="Copy Email"
                >
                  {isCopied ? (
                    <HiOutlineClipboardDocumentCheck className="text-emerald-400 text-lg" />
                  ) : (
                    <HiOutlineEnvelope className="text-base" />
                  )}
                </button>
              </div>

              {/* WhatsApp Row */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 glass-pill rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400">WhatsApp Chat</p>
                    <p className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-semibold font-mono">Chat Now →</span>
              </a>

              {/* Location & Response Time */}
              <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <HiOutlineGlobeAmericas className="text-indigo-400 text-base shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineClock className="text-emerald-400 text-base shrink-0" />
                  <span>{personalInfo.responseTime}</span>
                </div>
              </div>
            </div>

            {/* Social Links & Resume Download Card */}
            <div className="glass-card rounded-3xl p-7 border border-white/10 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Connect & Resume
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 glass-pill py-3 rounded-2xl border border-white/10 hover:border-white/20 text-xs font-semibold text-white transition-all"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 glass-pill py-3 rounded-2xl border border-indigo-500/30 hover:border-indigo-500/50 text-xs font-semibold text-indigo-300 transition-all"
                >
                  <FaLinkedinIn className="text-base" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download="BibhuPrasadBaliarsingh_CV.pdf"
                className="btn-secondary-dark w-full justify-center text-xs py-3.5 font-semibold"
              >
                <HiOutlineDocumentText className="text-base" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-slate-400 mb-8">
              Fill out the form below and I will get back to you within 2 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Alex Johnson"
                    required
                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={emailVal}
                    onChange={handleEmailChange}
                    required
                    className={`w-full h-12 bg-white/5 border rounded-xl px-4 text-xs text-white placeholder-slate-500 outline-none transition-colors ${
                      emailError ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'
                    }`}
                  />
                  {emailError && (
                    <p className="text-rose-400 text-[11px] mt-1.5 flex items-center gap-1">
                      <HiOutlineExclamationCircle className="text-xs shrink-0" />
                      {emailError}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">Service Needed</label>
                <select
                  name="service"
                  className="w-full h-12 bg-[#0f172a] border border-white/10 rounded-xl px-4 text-xs text-white outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="Custom Web Development">Custom Web Development</option>
                  <option value="MERN Stack Development">MERN Stack Development</option>
                  <option value="React Frontend Development">React Frontend Development</option>
                  <option value="Backend API Development">Backend API Development</option>
                  <option value="Admin Dashboard Development">Admin Dashboard Development</option>
                  <option value="AI Integration">AI Integration</option>
                  <option value="Website Optimization">Website Optimization</option>
                  <option value="Business Websites">Business Websites</option>
                  <option value="ERP Solutions">ERP Solutions</option>
                  <option value="Maintenance & Support">Maintenance & Support</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">Project Details & Requirements *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project goals, deadlines, or tech stack requirements..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              {serverError && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <HiOutlineExclamationCircle className="text-base shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              {status === 'sent' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <HiOutlineCheckCircle className="text-base shrink-0" />
                  <span>Thank you! Your message has been sent. I will respond within 2 hours.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary-gradient w-full justify-center text-xs py-3.5 font-semibold disabled:opacity-50"
              >
                <span>
                  {status === 'sending' ? 'Validating Email & Submitting...' : 'Send Message'}
                </span>
                <HiOutlinePaperAirplane className="text-base" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
