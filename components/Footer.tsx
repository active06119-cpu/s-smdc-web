'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
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
              
              {/* Legal Links */}
              <div className="flex items-center gap-4 text-sm overflow-visible">
                <a
                  href="#privacy"
                  className="text-slate-400 hover:text-white transition-colors duration-200 overflow-visible"
                >
                  Privacy Policy
                </a>
                <span className="text-slate-600 overflow-visible">|</span>
                <a
                  href="#terms"
                  className="text-slate-400 hover:text-white transition-colors duration-200 overflow-visible"
                >
                  Terms of Service
                </a>
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
    </footer>
  )
}
