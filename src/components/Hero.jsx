import { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { siteConfig } from '../data/siteConfig.js'

/**
 * Hero — the first screen of the portfolio.
 * Balanced editorial headline, responsive typography,
 * interactive orbit visual, accessible buttons, and metadata.
 */
export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const visualRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return
    const handleMouseMove = (e) => {
      if (!visualRef.current) return
      const rect = visualRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      setMousePos({
        x: Math.max(-20, Math.min(20, ((e.clientX - cx) / rect.width) * 20)),
        y: Math.max(-20, Math.min(20, ((e.clientY - cy) / rect.height) * 20)),
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [shouldReduceMotion])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }

  const fadeUp = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="hero"
      aria-label="Hero — Komal Pawar introduction"
      className="relative min-h-screen bg-[#171717] flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 md:pb-10"
    >
      {/* Background subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#F5F2EA 1px, transparent 1px), linear-gradient(90deg, #F5F2EA 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-xl relative z-10 py-4 md:py-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] xl:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-8 xl:gap-14 items-center">

          {/* Left: text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Label */}
            <motion.p variants={fadeUp} className="text-label text-[#858585] mb-4 md:mb-5 tracking-[0.16em]">
              FRONTEND DEVELOPMENT / FULL-STACK ENGINEERING
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={fadeUp}
              className="text-display text-[#F5F2EA] mb-6 md:mb-7"
              aria-label="I build digital experiences that work."
            >
              I BUILD
              <br />
              DIGITAL
              <br />
              <span className="text-[#C7FF4A]">EXPERIENCES</span>
              <br />
              THAT WORK.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-[#999999] text-base md:text-lg leading-relaxed max-w-xl mb-8 md:mb-10 font-normal"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              I'm Komal Pawar, a Frontend &amp; MERN Stack Developer interested in building
              responsive interfaces, practical web applications, and digital experiences that
              make complex tasks easier.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
                aria-label="Explore my work — scroll to projects"
              >
                EXPLORE MY WORK ↘
              </a>
              <a
                href={siteConfig.resume}
                download="Komal_Pawar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="View or download resume — opens PDF"
              >
                VIEW RESUME ↗
              </a>
            </motion.div>

            {/* Metadata tags */}
            <motion.div
              variants={fadeUp}
              className="mt-10 md:mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {[
                `BASED IN ${siteConfig.location.toUpperCase()}`,
                'REACT / JAVASCRIPT / MERN',
                siteConfig.availability.toUpperCase(),
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium tracking-wider text-[#858585] uppercase flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#858585]" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: abstract orbit visual */}
          <motion.div
            ref={visualRef}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] xl:max-w-[420px] aspect-square mx-auto select-none"
            aria-label="Interactive abstract orbit visual — decorative"
            aria-hidden="true"
          >
            <OrbitVisual mousePos={mousePos} shouldReduceMotion={shouldReduceMotion} />
          </motion.div>

        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div
        className="container-xl relative z-10 flex items-center justify-between text-xs text-[#858585] tracking-widest uppercase pt-4 border-t border-white/5"
        aria-hidden="true"
      >
        <span>EDITORIAL ENGINEERING</span>
        <div className="flex items-center gap-2">
          <span>SCROLL TO EXPLORE</span>
          <span className="text-[#C7FF4A]">↓</span>
        </div>
      </div>
    </section>
  )
}

/* ── Orbit Visual sub-component ──────────────────────────────── */
function OrbitVisual({ mousePos, shouldReduceMotion }) {
  return (
    <div
      className="relative w-full h-full"
      style={
        shouldReduceMotion
          ? {}
          : {
              transform: `perspective(800px) rotateX(${-mousePos.y * 0.35}deg) rotateY(${mousePos.x * 0.35}deg)`,
              transition: 'transform 0.12s ease-out',
            }
      }
    >
      {/* Soft ambient lime background glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none opacity-20 blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(199,255,74,0.4) 0%, rgba(23,23,23,0) 70%)',
        }}
      />

      <svg
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
        role="img"
        aria-label="Decorative orbital rings animation"
      >
        {/* Outer ring */}
        <circle
          cx="210"
          cy="210"
          r="190"
          stroke="#F5F2EA"
          strokeWidth="1"
          strokeOpacity="0.18"
          className="orbit-ring-1"
          style={{ transformOrigin: '210px 210px' }}
        />

        {/* Orbit ring 2 */}
        <ellipse
          cx="210"
          cy="210"
          rx="155"
          ry="155"
          stroke="#F5F2EA"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="6 12"
          className="orbit-ring-2"
          style={{ transformOrigin: '210px 210px' }}
        />

        {/* Inner ring */}
        <circle
          cx="210"
          cy="210"
          r="110"
          stroke="#C7FF4A"
          strokeWidth="1.2"
          strokeOpacity="0.45"
          className="orbit-ring-3"
          style={{ transformOrigin: '210px 210px' }}
        />

        {/* Mid ring plain */}
        <circle
          cx="210"
          cy="210"
          r="75"
          stroke="#F5F2EA"
          strokeWidth="1"
          strokeOpacity="0.15"
        />

        {/* Orbiting dots — ring 2 */}
        <circle
          cx="365"
          cy="210"
          r="4.5"
          fill="#F5F2EA"
          fillOpacity="0.75"
          className="orbit-ring-2"
          style={{ transformOrigin: '210px 210px' }}
        />
        <circle
          cx="55"
          cy="210"
          r="3"
          fill="#F5F2EA"
          fillOpacity="0.5"
          className="orbit-ring-2"
          style={{ transformOrigin: '210px 210px' }}
        />

        {/* Orbiting dot — lime ring */}
        <circle
          cx="210"
          cy="100"
          r="5.5"
          fill="#C7FF4A"
          className="orbit-ring-1"
          style={{ transformOrigin: '210px 210px' }}
        />

        {/* Core glow */}
        <circle cx="210" cy="210" r="54" fill="#C7FF4A" fillOpacity="0.1" className="orbit-core" />
        <circle cx="210" cy="210" r="36" fill="#C7FF4A" fillOpacity="0.22" className="orbit-core" />
        <circle cx="210" cy="210" r="22" fill="#C7FF4A" fillOpacity="0.95" className="orbit-core" />

        {/* Crosshair on center */}
        <line x1="210" y1="196" x2="210" y2="204" stroke="#171717" strokeWidth="2" />
        <line x1="210" y1="216" x2="210" y2="224" stroke="#171717" strokeWidth="2" />
        <line x1="196" y1="210" x2="204" y2="210" stroke="#171717" strokeWidth="2" />
        <line x1="216" y1="210" x2="224" y2="210" stroke="#171717" strokeWidth="2" />

        {/* Corner technical labels */}
        <text x="20" y="28" fill="#858585" fontSize="8" fontFamily="monospace" letterSpacing="1.2">
          INTERACTIVE OBJECT / 001
        </text>
        <text x="20" y="404" fill="#858585" fontSize="8" fontFamily="monospace" letterSpacing="1.2">
          MOVE TO EXPLORE
        </text>
        <text x="360" y="404" fill="#858585" fontSize="8" fontFamily="monospace" letterSpacing="1.2">
          KP®
        </text>

        {/* Tick marks around perimeter */}
        {[0, 90, 180, 270].map((angle) => {
          const rad = (angle * Math.PI) / 180
          const x1 = 210 + 186 * Math.cos(rad)
          const y1 = 210 + 186 * Math.sin(rad)
          const x2 = 210 + 196 * Math.cos(rad)
          const y2 = 210 + 196 * Math.sin(rad)
          return (
            <line
              key={angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#F5F2EA"
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />
          )
        })}
      </svg>
    </div>
  )
}

