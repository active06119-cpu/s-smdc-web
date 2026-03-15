'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, X } from 'lucide-react'

export default function Footer() {
  const [modal, setModal] = useState<'privacy' | 'terms' | null>(null)

  return (
    <footer id="contact" className="relative min-h-fit block py-16 px-4 sm:px-6 lg:px-8 bg-dark-slate border-t border-gray-800 overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-visible"
        >
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 overflow-visible">
            {/* Left: Logo & Slogan */}
            <div className="overflow-visible">
              <h3 className="text-2xl font-black text-white mb-3 overflow-visible">
                S-SMDC
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed overflow-visible">
                Sustainable Modular Data Center Solution
              </p>
            </div>

            {/* Center: Contact & Location */}
            <div className="space-y-4 overflow-visible">
              <div className="overflow-visible">
                <a
                  href="mailto:contact@s-smdc.com"
                  className="inline-flex items-center gap-3 text-base text-slate-400 hover:text-cyan-400 transition-colors duration-200 overflow-visible"
                >
                  <Mail className="w-5 h-5" />
                  <span className="overflow-visible">contact@s-smdc.com</span>
                </a>
              </div>
              <div className="flex items-center gap-3 text-base text-slate-400 overflow-visible">
                <MapPin className="w-5 h-5" />
                <span className="overflow-visible">Jeju, South Korea</span>
              </div>
            </div>

            {/* Right: Contact CTA & Legal */}
            <div className="space-y-6 overflow-visible">
              {/* Contact Call-to-Action */}
              <div className="space-y-3 overflow-visible">
                <p className="text-sm text-slate-400 leading-relaxed overflow-visible">
                  For detailed business inquiries and IR materials, please contact us via email.
                </p>
                <div className="overflow-visible">
                  <a
                    href="mailto:contact@s-smdc.com"
                    className="text-base md:text-lg font-semibold text-cyan-400 hover:underline transition-all duration-200 overflow-visible"
                  >
                    contact@s-smdc.com
                  </a>
                </div>
              </div>
              
              {/* Legal Links — open modals */}
              <div className="flex items-center gap-4 text-sm overflow-visible">
                <button
                  type="button"
                  onClick={() => setModal('privacy')}
                  className="text-slate-400 hover:text-white transition-colors duration-200 overflow-visible"
                >
                  Privacy Policy
                </button>
                <span className="text-slate-600 overflow-visible">|</span>
                <button
                  type="button"
                  onClick={() => setModal('terms')}
                  className="text-slate-400 hover:text-white transition-colors duration-200 overflow-visible"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800/50 overflow-visible">
            <div className="text-center overflow-visible">
              <p className="text-xs text-slate-400 italic mb-2 overflow-visible">
                A Pre-Seed Stage Venture Project targeting 2026 Launch.
              </p>
              <p className="text-sm text-slate-400 overflow-visible">
                © 2026 S-SMDC. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Privacy Policy & Terms of Service Modals */}
      <AnimatePresence>
        {modal === 'privacy' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 md:p-8 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="prose prose-invert prose-slate max-w-none text-sm text-slate-300 space-y-4">
                <p><strong>Last updated:</strong> 2026</p>
                <p>S-SMDC (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy describes how we collect, use, and protect information when you use our website or contact us.</p>
                <p><strong>Information we collect:</strong> When you contact us (e.g. via email), we may store your email address and message content to respond and maintain business records.</p>
                <p><strong>Use of information:</strong> We use this information only to respond to inquiries, provide IR materials, and improve our services. We do not sell or share your data with third parties for marketing.</p>
                <p><strong>Security:</strong> We take reasonable measures to protect your data. Communication over the internet is not guaranteed secure.</p>
                <p><strong>Contact:</strong> For privacy-related questions, contact us at contact@s-smdc.com.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
        {modal === 'terms' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 md:p-8 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Terms of Service</h3>
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="prose prose-invert prose-slate max-w-none text-sm text-slate-300 space-y-4">
                <p><strong>Last updated:</strong> 2026</p>
                <p>By using the S-SMDC website (s-smdc.com), you agree to these terms.</p>
                <p><strong>Use of site:</strong> This site is for informational purposes. Content is provided &quot;as is&quot; without warranties. We do not guarantee accuracy of forward-looking statements or projections.</p>
                <p><strong>No offer:</strong> Nothing on this site constitutes an offer to sell securities or a solicitation of investment. IR materials are for information only.</p>
                <p><strong>Intellectual property:</strong> All content, logos, and materials are owned by S-SMDC or licensors. You may not copy or use them without permission.</p>
                <p><strong>Contact:</strong> For questions about these terms, contact us at contact@s-smdc.com.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}
