import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { siteConfig } from '../data/siteConfig.js'

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function handleNavClick(e, href) {
    setMenuOpen(false)
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.replace('/#', '')
      if (pathname !== '/') {
        window.location.href = href
        return
      }
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#171717]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-xl">
          <nav
            aria-label="Primary navigation"
            className="flex items-center justify-between h-16 md:h-20"
          >
            {/* Logo */}
            <Link
              to="/"
              className="font-bold text-sm md:text-base uppercase tracking-wider text-[#F5F2EA] hover:text-[#C7FF4A] transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
              aria-label={`${siteConfig.name} — home`}
            >
              {siteConfig.name}
              <sup className="ml-1 text-[0.6em] text-[#858585]">®</sup>
            </Link>

            {/* Desktop navigation */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs font-semibold uppercase tracking-widest text-[#F5F2EA]/85 hover:text-[#C7FF4A] transition-colors duration-200 py-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Availability button + mobile menu toggle */}
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5F2EA] border border-white/25 px-3.5 py-2 hover:border-[#C7FF4A] hover:text-[#C7FF4A] transition-all duration-200"
                style={{ fontFamily: 'var(--font-body)' }}
                aria-label="Open to opportunities — send email"
              >
                <span className="w-2 h-2 rounded-full bg-[#C7FF4A] animate-pulse" aria-hidden="true" />
                {siteConfig.availabilityShort}
              </a>

              <button
                type="button"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-xs text-[#F5F2EA] hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#C7FF4A]"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu modal */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#171717] flex flex-col pt-24 pb-10 px-6 sm:px-10"
          >
            <nav aria-label="Mobile navigation">
              <ul role="list" className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.05, duration: 0.35 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-4 text-3xl font-bold text-[#F5F2EA] border-b border-white/10 hover:text-[#C7FF4A] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-8 border-t border-white/10">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#858585] text-sm md:text-base hover:text-[#F5F2EA] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C7FF4A]" aria-hidden="true" />
                <span className="text-xs uppercase tracking-wider text-[#858585]">
                  {siteConfig.availability}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
