import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlinePaperAirplane } from 'react-icons/hi2'
import { HiOutlineArrowDown } from 'react-icons/hi'

export default function Contact() {
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const formData = new FormData(form)

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || ''

    if (accessKey) {
      formData.append('access_key', accessKey)
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        })
        const data = await response.json()
        if (data.success) {
          setStatus('sent')
          form.reset()
          setTimeout(() => setStatus('idle'), 4000)
          return
        }
      } catch (err) {
        console.error('Web3Forms submit error:', err)
      }
    }

    // Mailto fallback
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    window.location.href = `mailto:bibhupbaliarsingh@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
      name
    )}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(
      email
    )}%0A%0AMessage:%0A${encodeURIComponent(message)}`

    setStatus('sent')
    form.reset()
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#333333] mb-2">Get in touch</h2>
          <span className="text-[#999999] text-base">
            Do you have a project in your mind, contact me here
          </span>
        </motion.div>

        {/* Contact Row */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Find Me Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="contact-info-card rounded-2xl p-8 sm:p-10 flex flex-col justify-center items-center text-center h-[340px] cursor-pointer"
          >
            <div className="contact-content flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                Find Me <HiOutlineArrowDown className="text-xl rotate-[-45deg]" />
              </h3>
              <p className="text-white text-base sm:text-lg my-2 flex items-center gap-3">
                <HiOutlineEnvelope className="text-xl shrink-0" />
                <span>Email: bibhupbaliarsingh@gmail.com</span>
              </p>
              <p className="text-white text-base sm:text-lg my-2 flex items-center gap-3">
                <HiOutlinePhone className="text-xl shrink-0" />
                <span>Tel: +91 80185 04875</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full h-14 bg-transparent border-2 border-[#aaaaaa] rounded-xl px-5 text-[#333333] placeholder-[#aaaaaa] outline-none focus:border-[#00c9ff] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full h-14 bg-transparent border-2 border-[#aaaaaa] rounded-xl px-5 text-[#333333] placeholder-[#aaaaaa] outline-none focus:border-[#00c9ff] transition-colors"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                required
                rows={6}
                className="w-full bg-transparent border-2 border-[#aaaaaa] rounded-xl p-5 text-[#333333] placeholder-[#aaaaaa] outline-none focus:border-[#00c9ff] transition-colors resize-none"
              />

              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="bg-[#00c9ff] hover:bg-[#00b5e7] text-white px-8 py-3.5 rounded-xl font-medium flex items-center gap-3 transition-colors shadow-md disabled:opacity-50"
                >
                  <span>{status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send'}</span>
                  <HiOutlinePaperAirplane className="text-lg rotate-45" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
