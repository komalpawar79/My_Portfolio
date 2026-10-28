import { ArrowUp, Mail } from 'lucide-react'
import { Github, Linkedin } from './Icons.jsx'
import { siteConfig } from '../data/siteConfig.js'

/**
 * Footer — minimal dark footer with social links and back-to-top.
 * Clear typography, accessible touch targets, and dynamic year.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      role="contentinfo"
      className="bg-[#171717] border-t border-white/10"
    >
      <div className="container-xl py-10 md:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Left: name + statement */}
          <div>
            <p
              className="font-bold text-[#F5F2EA] text-sm md:text-base uppercase tracking-[0.08em] mb-1.5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {siteConfig.name}
            </p>
            <p
              className="text-[0.68rem] sm:text-xs tracking-wider sm:tracking-widest uppercase text-[#858585]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              DESIGNED WITH INTENTION. BUILT WITH CODE.
            </p>
          </div>

          {/* Right: social + back-to-top */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[#858585] hover:text-[#C7FF4A] transition-colors duration-200"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[#858585] hover:text-[#C7FF4A] transition-colors duration-200"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2.5 text-[#858585] hover:text-[#C7FF4A] transition-colors duration-200"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>

            <div className="w-px h-5 bg-white/15 mx-1" aria-hidden="true" />

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#858585] hover:text-[#C7FF4A] transition-colors duration-200 group py-2 px-2.5"
              aria-label="Back to top of page"
            >
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-0.5 transition-transform duration-200"
                aria-hidden="true"
              />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="divider-dark mt-8 mb-5" />
        <p
          className="text-xs text-[#858585] tracking-wide"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          © {year} {siteConfig.name}. Portfolio work shown is demonstration content.
        </p>
      </div>
    </footer>
  )
}
