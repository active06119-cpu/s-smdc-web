'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

// Formspree: replace placeholder with your form endpoint (e.g. https://formspree.io/f/xxxxxxxx)
const FORMSPREE_ACTION = 'https://formspree.io/f/placeholder'

const INQUIRY_TYPES = [
  'Business Partnership',
  'Investment & IR',
  'Technical Inquiry',
  'Other',
] as const

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    inquiryType: '' as string,
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const body = new FormData()
      body.append('name', formData.name)
      if (formData.company) body.append('company', formData.company)
      body.append('email', formData.email)
      if (formData.inquiryType) body.append('inquiryType', formData.inquiryType)
      body.append('message', formData.message)

      const res = await fetch(FORMSPREE_ACTION, {
        method: 'POST',
        body,
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', company: '', email: '', inquiryType: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const inputClass =
    'w-full rounded-lg border border-slate-600 bg-slate-900/80 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors'
  const labelClass = 'mb-1.5 block text-sm font-medium text-slate-300'

  return (
    <section
      id="contact"
      className="relative min-h-fit py-24 px-4 sm:px-6 lg:px-8 bg-[#020617] border-t border-white/5 overflow-visible"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-slate-400">
            For business partnerships, investment inquiries, or technical questions.
          </p>
        </motion.div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-cyan-500/50 bg-cyan-500/10 px-6 py-10 text-center"
          >
            <p className="text-lg font-semibold text-cyan-300">
              Thank you! We&apos;ll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-cyan-500/30 bg-slate-900/60 backdrop-blur-sm p-6 md:p-8 shadow-xl"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                  disabled={status === 'submitting'}
                />
              </div>
              <div>
                <label htmlFor="contact-company" className={labelClass}>
                  Company
                </label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Company (optional)"
                  disabled={status === 'submitting'}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="contact-email" className={labelClass}>
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="you@example.com"
                disabled={status === 'submitting'}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="contact-inquiry" className={labelClass}>
                Inquiry Type
              </label>
              <select
                id="contact-inquiry"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className={inputClass}
                disabled={status === 'submitting'}
              >
                <option value="">Select...</option>
                {INQUIRY_TYPES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="contact-message" className={labelClass}>
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-y min-h-[120px]`}
                placeholder="Your message..."
                disabled={status === 'submitting'}
              />
            </div>

            {status === 'error' && (
              <p className="mt-3 text-sm text-red-400">
                Something went wrong. Please try again or email us at contact@s-smdc.com.
              </p>
            )}

            <div className="mt-6">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 border border-cyan-400/50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
