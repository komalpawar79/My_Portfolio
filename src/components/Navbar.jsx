import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { siteConfig } from '../data/siteConfig.js'

const navLinks = [
  { label: 'Home', href: '/#hero', id: 'hero' },
  { label: 'Work', href: '/#work', id: 'work' },
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'Skills', href: '/#skills', id: 'skills' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      // Active section tracking
      const sections = ['hero', 'work', 'about', 'skills', 'contact']
      const scrollPos = window.scrollY + 180
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
      if (window.scrollY < 80) {
        setActiveSection('hero')
      }
    }

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

  function handleNavClick(e, href, id) {
    e.preventDefault()
    setMenuOpen(false)
    setActiveSection(id)

    if (pathname !== '/') {
      window.location.href = href
      return
    }

    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080808]/92 backdrop-blur-md border-b border-white/10 shadow-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container-xl">
          <nav
            aria-label="Primary navigation"
            className="flex items-center justify-between h-16 sm:h-20"
          >
            {/* Logo: KOMAL. with neon lime dot */}
            <Link
              to="/"
              className="font-editorial text-2xl sm:text-[1.75rem] font-bold uppercase tracking-wider text-white hover:opacity-90 transition-opacity inline-flex items-baseline"
              aria-label={`${siteConfig.name} — home`}
            >
              <span>KOMAL</span>
              <span className="text-[#C8FF19] font-sans text-3xl font-black leading-none ml-0.5">.</span>
            </Link>

            {/* Desktop navigation matching reference */}
            <ul className="hidden md:flex items-center gap-7 lg:gap-9" role="list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <li key={link.label} className="relative py-1">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.id)}
                      className={`text-sm tracking-wide transition-colors duration-200 block ${
                        isActive
                          ? 'text-[#C8FF19] font-medium'
                          : 'text-[#9E9E9E] hover:text-white font-normal'
                      }`}
                    >
                      {link.label}
                    </a>
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#C8FF19] absolute -bottom-1.5 left-1/2 -translate-x-1/2"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Resume button & mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.resume}
                download="Komal_Pawar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 rounded-full px-4 sm:px-5 py-2 hover:border-white/60 hover:bg-white/5 transition-all duration-200"
                aria-label="View or download resume"
              >
                <span>Resume</span>
                <ArrowDown size={14} className="text-white/80" />
              </a>

              <button
                type="button"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-sm text-white hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#C8FF19]"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu drawer */}
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
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col pt-24 pb-10 px-6 sm:px-10"
          >
            <nav aria-label="Mobile navigation">
              <ul role="list" className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.05, duration: 0.35 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.id)}
                      className={`block py-3 text-2xl font-bold uppercase tracking-wider border-b border-white/10 font-editorial ${
                        activeSection === link.id
                          ? 'text-[#C8FF19]'
                          : 'text-white hover:text-[#C8FF19]'
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-4 pt-8 border-t border-white/10">
              <a
                href={siteConfig.resume}
                download="Komal_Pawar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-black bg-[#C8FF19] rounded-full py-3 hover:bg-[#d4ff35] transition-colors"
              >
                <span>View Resume</span>
                <ArrowDown size={16} />
              </a>
              <div className="flex items-center justify-between text-xs text-[#888888] font-mono">
                <span>{siteConfig.email}</span>
                <span className="text-[#C8FF19]">OPEN TO WORK</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
