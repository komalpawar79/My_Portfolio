import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ArrowDown, Mail } from 'lucide-react'
import { Github, Linkedin } from './Icons.jsx'
import { siteConfig } from '../data/siteConfig.js'

/**
 * Editorial Dark Hero Section — precisely matching the reference design.
 * Features oversized condensed typography with hollow outline, neon-lime accents,
 * the user's authentic portrait blended seamlessly into black, handwritten annotations,
 * and bottom scroll/social anchors.
 */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.04,
      },
    },
  }

  const fadeUp = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const portraitReveal = {
    hidden: shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const annotationFade = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  }

  function handleScrollToWork(e) {
    e.preventDefault()
    const el = document.getElementById('work')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      aria-label="Hero — Komal Pawar introduction"
      className="relative min-h-screen bg-[#080808] text-white flex flex-col justify-between pt-20 sm:pt-24 lg:pt-20 pb-4 sm:pb-6 overflow-hidden select-none"
    >
      {/* Main hero grid */}
      <div className="container-xl relative z-10 w-full my-auto py-2 sm:py-4">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] xl:grid-cols-[1.14fr_0.86fr] gap-6 lg:gap-4 xl:gap-8 items-center">

          {/* Left Column: Text Content & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center max-w-2xl lg:max-w-none z-20"
          >
            {/* Introductory metadata label */}
            <motion.p
              variants={fadeUp}
              className="font-tech text-xs sm:text-[0.8rem] font-medium tracking-[0.2em] text-[#888888] uppercase mb-3 sm:mb-4"
            >
              01 / FRONTEND &amp; MERN STACK DEVELOPER
            </motion.p>

            {/* Bold condensed editorial headline */}
            <h1
              className="font-editorial uppercase tracking-tight text-white leading-[0.85] select-none text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] lg:text-[4.1rem] xl:text-[5.4rem] 2xl:text-[6.2rem]"
              aria-label="I BUILD INTERACTIVE WEB EXPERIENCES."
            >
              <motion.div variants={fadeUp} className="block text-white">
                I BUILD
              </motion.div>

              <motion.div variants={fadeUp} className="relative inline-flex items-center my-0.5 sm:my-1">
                <span
                  className="text-transparent inline-block"
                  style={{
                    WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.85)',
                  }}
                >
                  INTERACTIVE
                </span>

                {/* Hand-drawn neon lime zigzag scribble doodle beside INTERACTIVE */}
                <svg
                  className="inline-block ml-2 sm:ml-3 md:ml-4 w-9 sm:w-14 lg:w-16 xl:w-20 h-4 sm:h-6 lg:h-7 text-[#C8FF19] pointer-events-none select-none -translate-y-1"
                  viewBox="0 0 76 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 14 L18 8 L32 20 L50 8 L72 18" />
                  <path d="M8 20 L22 14 L36 24 L54 14 L74 22" strokeOpacity="0.85" />
                </svg>
              </motion.div>

              <motion.div variants={fadeUp} className="block">
                <span className="text-[#C8FF19]">WEB </span>
                <span className="text-white">EXPERIENCES.</span>
              </motion.div>
            </h1>

            {/* Supporting paragraph */}
            <motion.p
              variants={fadeUp}
              className="text-[#9CA3AF] text-sm sm:text-[0.95rem] xl:text-base leading-relaxed max-w-lg mt-4 sm:mt-5 mb-5 sm:mb-7 font-normal"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              I'm Komal, a Frontend &amp; MERN Stack Developer. I turn ideas into real web applications — from clean UI components to complete backend workflows. I love solving problems, learning new things and building things that actually make a difference.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#C8FF19] text-black font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#d8ff3d] hover:scale-105 hover:shadow-[0_0_20px_rgba(200,255,25,0.35)] cursor-pointer"
                aria-label="Explore my work — scroll to projects"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>

              <a
                href={siteConfig.resume}
                download="Komal_Pawar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#121212] text-white border border-white/20 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:border-white/70 hover:bg-white/10 hover:scale-105 cursor-pointer"
                aria-label="View or download resume — opens PDF"
              >
                <span>VIEW RESUME</span>
                <ArrowDown size={15} strokeWidth={2} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Real Portrait with Neon-Lime Handwritten Annotations */}
          <motion.div
            variants={portraitReveal}
            initial="hidden"
            animate="visible"
            className="relative flex items-end justify-center lg:justify-end w-full max-w-[480px] lg:max-w-none mx-auto select-none mt-4 lg:mt-0"
          >
            {/* Portrait Frame */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[490px] 2xl:max-w-[530px] flex justify-center">
              <img
                src="/images/komal-portrait-clean.png"
                alt="Komal Pawar — Frontend & MERN Stack Developer portrait"
                className="w-full h-auto max-h-[60vh] sm:max-h-[64vh] lg:max-h-[68vh] xl:max-h-[72vh] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] pointer-events-none"
                loading="eager"
              />

              {/* Annotation 1: Top Left near head (Frontend Developer (MERN)) with arrow */}
              <motion.div
                variants={annotationFade}
                className="absolute -top-3 sm:top-[2%] -left-2 sm:-left-5 md:-left-7 lg:-left-5 xl:-left-9 z-20"
              >
                <div className="font-handwriting text-[#C8FF19] text-base sm:text-xl lg:text-2xl leading-tight -rotate-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pointer-events-none select-none">
                  <div>Frontend</div>
                  <div>Developer</div>
                  <div className="text-sm sm:text-lg lg:text-xl font-normal">(MERN)</div>
                  {/* Curved arrow pointing down to shoulder */}
                  <svg
                    className="w-9 sm:w-12 lg:w-13 h-8 sm:h-10 lg:h-11 text-[#C8FF19] ml-4 sm:ml-6 -mt-1"
                    viewBox="0 0 54 44"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 6 C 18 12, 36 18, 42 34" />
                    <path d="M32 33 L 42 34 L 43 24" />
                  </svg>
                </div>
              </motion.div>

              {/* Annotation 2: Upper Right (Turning ideas into real products.) with double underline */}
              <motion.div
                variants={annotationFade}
                className="absolute top-[12%] sm:top-[15%] -right-2 sm:-right-4 md:-right-6 lg:-right-3 xl:-right-8 z-20"
              >
                <div className="font-handwriting text-[#C8FF19] text-base sm:text-xl lg:text-2xl leading-tight rotate-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pointer-events-none select-none">
                  <div>Turning</div>
                  <div>ideas into</div>
                  <div>real products.</div>
                  {/* Hand-drawn double underline */}
                  <svg
                    className="w-20 sm:w-26 lg:w-28 h-3.5 sm:h-4 text-[#C8FF19] mt-1"
                    viewBox="0 0 110 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M4 6 Q 30 14, 60 6 T 106 6" />
                    <path d="M10 11 Q 35 15, 65 9 T 100 11" />
                  </svg>
                </div>
              </motion.div>

              {/* Annotation 3: Lower Right (React Node.js Express MongoDB) */}
              <motion.div
                variants={annotationFade}
                className="absolute top-[52%] sm:top-[55%] -right-2 sm:-right-4 md:-right-6 lg:-right-2 xl:-right-5 z-20"
              >
                <div className="font-handwriting text-[#C8FF19] text-sm sm:text-lg lg:text-xl leading-snug rotate-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pointer-events-none select-none">
                  <div>React</div>
                  <div>Node.js</div>
                  <div>Express</div>
                  <div>MongoDB</div>
                  {/* Subtle underline accent */}
                  <svg
                    className="w-20 sm:w-24 lg:w-26 h-3.5 sm:h-4 text-[#C8FF19] mt-1"
                    viewBox="0 0 110 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M4 8 Q 30 14, 60 8 T 104 8" />
                  </svg>
                </div>
              </motion.div>

              {/* Blazer Right Sleeve Contour line matching reference */}
              <svg
                className="absolute right-[14%] sm:right-[16%] top-[38%] w-14 sm:w-18 h-44 sm:h-52 text-[#C8FF19]/70 pointer-events-none z-10"
                viewBox="0 0 60 180"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M46 10 C 26 50, 18 110, 36 170" />
              </svg>

              {/* Blazer Left Contour line matching reference */}
              <svg
                className="absolute left-[8%] sm:left-[12%] bottom-[20%] w-10 sm:w-12 h-18 sm:h-20 text-[#C8FF19]/60 pointer-events-none z-10"
                viewBox="0 0 40 70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M30 8 C 12 24, 10 46, 26 62" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar: Scroll Down indicator (Left) & Social Links (Right) matching reference */}
      <div className="container-xl relative z-10 w-full flex items-center justify-between pt-4 sm:pt-5 border-t border-white/10 text-xs text-[#888888]">
        {/* Scroll down indicator */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div
            className="w-4 sm:w-5 h-7 sm:h-8 border border-white/30 rounded-full flex justify-center pt-1"
            aria-hidden="true"
          >
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="w-1 h-1.5 sm:h-2 bg-white/70 rounded-full"
            />
          </div>
          <div className="flex items-center gap-2 font-mono text-[0.7rem] sm:text-xs tracking-[0.2em] text-[#888888] uppercase">
            <span className="text-[#444444]">|</span>
            <span>SCROLL DOWN</span>
          </div>
        </div>

        {/* Social media icons on bottom right */}
        <div className="flex items-center gap-4 sm:gap-5 text-[#888888]">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-[#C8FF19] transition-colors duration-200 p-1"
          >
            <Github size={17} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-[#C8FF19] transition-colors duration-200 p-1"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Send email"
            className="hover:text-[#C8FF19] transition-colors duration-200 p-1"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
