import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import { getProjectBySlug, getAdjacentProjects } from '../data/projects.js'

/**
 * ProjectDetail — reusable case-study page.
 * All content comes from the projects data file. Adding a new project
 * in projects.js automatically makes it available at /work/:slug.
 */
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <ProjectNotFound slug={slug} />
  }

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* ── Header ─────────────────────────────────────────────── */}
        <section
          aria-labelledby="project-title"
          className="pt-28 md:pt-36 pb-16 md:pb-20 bg-[#171717]"
        >
          <div className="container-xl">
            <Reveal>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#858585] hover:text-[#F5F2EA] transition-colors duration-200 mb-8 md:mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
                aria-label="Back to all work"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                <span>All Work</span>
              </Link>
            </Reveal>

            <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end">
              <div>
                <Reveal>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-bold text-[#858585] tracking-widest">
                      {project.number}
                    </span>
                    <span className="w-8 h-px bg-[#858585]" aria-hidden="true" />
                    <span className="text-label text-[#858585]">{project.category}</span>
                  </div>
                </Reveal>

                <Reveal delay={0.05}>
                  <h1
                    id="project-title"
                    className="text-display text-[#F5F2EA] mb-5 md:mb-6"
                  >
                    {project.title}
                  </h1>
                </Reveal>

                <Reveal delay={0.08}>
                  <p
                    className="text-[#858585] text-base md:text-xl leading-relaxed max-w-2xl mb-8"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {project.shortDescription}
                  </p>
                </Reveal>

                {/* Tech tags */}
                <Reveal delay={0.1}>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium tracking-wide uppercase px-3 py-1.5 border border-white/20 text-white/80 bg-white/5"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Action buttons */}
              <Reveal delay={0.12}>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 sm:gap-3.5 w-full sm:w-auto sm:min-w-[200px]">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-center justify-center"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      LIVE DEMO ↗
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold tracking-wider uppercase text-[#858585] border border-white/10 cursor-not-allowed text-center"
                      style={{ fontFamily: 'var(--font-body)' }}
                      title="Demo not deployed"
                    >
                      DEMO NOT AVAILABLE
                    </span>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-center justify-center"
                      aria-label={`Source code for ${project.title} on GitHub`}
                    >
                      SOURCE CODE ↗
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold tracking-wider uppercase text-[#858585] border border-white/10 cursor-not-allowed text-center"
                      style={{ fontFamily: 'var(--font-body)' }}
                      title="Repository not configured"
                    >
                      PRIVATE / NOT CONFIGURED
                    </span>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Demo notice */}
            {project.status === 'demo' && (
              <Reveal delay={0.16}>
                <div className="mt-8 md:mt-10 px-5 py-4 border border-white/15 bg-white/5 flex items-start gap-3.5">
                  <span className="text-[#C7FF4A] text-sm shrink-0 mt-0.5">ℹ</span>
                  <p
                    className="text-xs md:text-sm text-[#858585] leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <strong className="text-[#F5F2EA]">Demo project — </strong>
                    This is illustrative content. All feature descriptions, implementation details,
                    and challenges shown are representative samples until replaced with verified project information.
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* ── Hero image banner ───────────────────────────────────── */}
        <section aria-label="Project Hero Preview" className="bg-[#171717] border-y border-white/10 py-8 md:py-14 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-xs overflow-hidden border border-white/15 bg-[#0B0F15] shadow-2xl">
              {/* Browser Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080B0F] border-b border-white/10 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
                  <div className="ml-3 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 tracking-wide max-w-[340px] truncate">
                    <span className="text-[#C7FF4A]">🔒</span>
                    <span className="truncate">{project.liveUrl || 'https://placement-portal-ashy.vercel.app/login'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C7FF4A]/10 text-[#C7FF4A] border border-[#C7FF4A]/25 text-[11px] font-mono uppercase tracking-wider font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF4A] animate-pulse" />
                    PRIMARY SCREEN
                  </span>
                  <span className="hidden md:inline font-mono text-xs text-white/40 tracking-widest">
                    {project.number}
                  </span>
                </div>
              </div>

              {/* High-res Image Viewport with precise 2.18:1 aspect ratio */}
              <div
                className="relative aspect-[2.18/1] w-full bg-[#0A1017] overflow-hidden"
                style={{ background: project.bgColor }}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover sm:object-contain object-top ui-screenshot"
                  onError={(e) => {
                    e.target.style.opacity = '0'
                  }}
                />
              </div>

              {/* Viewport Caption Bar */}
              <div className="px-4 py-2.5 bg-[#080B0F] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-white/50 font-mono">
                <span className="truncate max-w-xl">
                  <strong className="text-white/80">MAIN INTERFACE:</strong> {project.screenshots?.[0]?.title || project.title}
                </span>
                <span className="text-[#C7FF4A] text-[11px] shrink-0">
                  {project.screenshots ? `${project.screenshots.length} Screenshots Available Below ↓` : 'Verified Production Build'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Body: case study content ────────────────────────────── */}
        <div className="bg-[#F5F2EA]">
          <div className="container-lg py-16 md:py-24">

            {/* Overview */}
            <Reveal>
              <CaseSection label="OVERVIEW" title="What is this project?">
                <div className="flex flex-col gap-4 text-[#555] leading-relaxed text-base md:text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                  {project.overview.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </CaseSection>
            </Reveal>

            {/* Problem */}
            <Reveal>
              <CaseSection label="PROBLEM STATEMENT" title="What problem does it solve?">
                <div className="flex flex-col gap-4 text-[#555] leading-relaxed text-base md:text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                  {project.problem.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </CaseSection>
            </Reveal>

            {/* Goals */}
            <Reveal>
              <CaseSection label="PROJECT GOALS" title="Design objectives.">
                <ul role="list" className="flex flex-col gap-3.5">
                  {project.goals.map((goal, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-base text-[#444] leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span
                        className="mt-1 w-6 h-6 flex items-center justify-center bg-[#C7FF4A] text-[#171717] text-xs font-bold shrink-0 font-mono"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>
            </Reveal>

            {/* Features */}
            <Reveal>
              <CaseSection label="KEY FEATURES" title="What it includes.">
                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="border-l-2 border-[#D9D5CC] pl-4 py-1">
                      {feature.category && (
                        <span className="block text-[11px] font-mono uppercase tracking-widest text-[#858585] mb-1 font-semibold">
                          {feature.category}
                        </span>
                      )}
                      <h4
                        className="font-bold text-[#171717] text-base md:text-lg mb-1.5"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {feature.title}
                      </h4>
                      <p className="text-[#555] text-sm md:text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CaseSection>
            </Reveal>

            {/* System Interface Showcase & Screenshots (if project has screenshots) */}
            {project.screenshots && project.screenshots.length > 0 && (
              <Reveal>
                <SystemScreensGallery
                  screenshots={project.screenshots}
                  projectTitle={project.title}
                  liveUrl={project.liveUrl}
                />
              </Reveal>
            )}

            {/* Design decisions */}
            <Reveal>
              <CaseSection label="DESIGN DECISIONS" title="Why it looks and works this way.">
                <ul role="list" className="flex flex-col gap-3.5">
                  {project.designDecisions.map((decision, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3.5 text-base text-[#555] leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-[#C7FF4A] shrink-0" aria-hidden="true" />
                      <span>
                        {decision.includes(':') ? (
                          <>
                            <strong className="text-[#171717] font-semibold">{decision.split(':')[0]}:</strong>
                            {decision.substring(decision.indexOf(':') + 1)}
                          </>
                        ) : (
                          decision
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </CaseSection>
            </Reveal>

            {/* Technical notes */}
            <Reveal>
              <CaseSection label="TECHNICAL IMPLEMENTATION" title="How it was built.">
                <div className="flex flex-col gap-4 text-[#555] leading-relaxed text-base md:text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                  {project.technicalNotes.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </CaseSection>
            </Reveal>

            {/* Challenges */}
            <Reveal>
              <CaseSection label="CHALLENGES & SOLUTIONS" title="What was difficult.">
                <div className="flex flex-col gap-6 md:gap-8">
                  {project.challenges.map((item, i) => (
                    <div key={i} className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8 items-start">
                      <div className="bg-[#EAE6DC] p-5 md:p-6 border border-[#D9D5CC]">
                        <p className="text-label text-[#858585] mb-1.5">CHALLENGE</p>
                        <p className="text-base font-bold text-[#171717]" style={{ fontFamily: 'var(--font-display)' }}>
                          {item.challenge}
                        </p>
                      </div>
                      <div className="pt-2">
                        <p className="text-label text-[#858585] mb-1.5">SOLUTION</p>
                        <p className="text-sm md:text-base text-[#555] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CaseSection>
            </Reveal>

            {/* Lessons */}
            <Reveal>
              <CaseSection label="OUTCOMES & LESSONS" title="What this project demonstrates.">
                <ul role="list" className="flex flex-col gap-3.5 mb-6">
                  {project.lessons.map((lesson, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3.5 text-base text-[#555] leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-[#C7FF4A] shrink-0" aria-hidden="true" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>

                {project.nextSteps && (
                  <>
                    <p className="text-label text-[#858585] mb-3 mt-8">POTENTIAL NEXT STEPS</p>
                    <ul role="list" className="flex flex-col gap-2.5">
                      {project.nextSteps.map((step, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3.5 text-sm md:text-base text-[#555] leading-relaxed"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#D9D5CC] shrink-0" aria-hidden="true" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </CaseSection>
            </Reveal>

          </div>
        </div>

        {/* ── Project navigation ──────────────────────────────────── */}
        <section aria-label="Project navigation" className="bg-[#EAE6DC] py-14 sm:py-16 md:py-20 border-t border-[#D9D5CC]">
          <div className="container-xl">
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12 items-stretch sm:items-center">

              {/* Prev */}
              {prev ? (
                <Link
                  to={`/work/${prev.slug}`}
                  className="group flex items-center justify-between sm:justify-start gap-3 text-sm md:text-base text-[#555] hover:text-[#171717] transition-colors p-3 sm:p-0 border sm:border-0 border-[#D9D5CC] bg-white/40 sm:bg-transparent"
                  aria-label={`Previous project: ${prev.title}`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block text-label text-[#858585]">PREVIOUS</span>
                    <span className="font-semibold">{prev.title}</span>
                  </span>
                </Link>
              ) : <div className="hidden sm:block" />}

              {/* All work */}
              <div className="flex justify-center order-first sm:order-none">
                <Link
                  to="/#work"
                  className="w-full sm:w-auto text-xs font-semibold text-[#858585] hover:text-[#171717] transition-colors uppercase tracking-widest text-center py-2.5 px-4 border border-[#D9D5CC] bg-white/60 sm:bg-white/40"
                  aria-label="Back to all work"
                >
                  ALL WORK
                </Link>
              </div>

              {/* Next */}
              {next ? (
                <Link
                  to={`/work/${next.slug}`}
                  className="group flex items-center justify-between sm:justify-end gap-3 text-sm md:text-base text-[#555] hover:text-[#171717] transition-colors text-right p-3 sm:p-0 border sm:border-0 border-[#D9D5CC] bg-white/40 sm:bg-transparent"
                  aria-label={`Next project: ${next.title}`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span>
                    <span className="block text-label text-[#858585]">NEXT</span>
                    <span className="font-semibold">{next.title}</span>
                  </span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" aria-hidden="true" />
                </Link>
              ) : <div className="hidden sm:block" />}
            </div>

            {/* Contact CTA */}
            <div className="divider mb-12" />
            <div className="text-center max-w-lg mx-auto">
              <p
                className="text-[#171717] font-bold mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  lineHeight: 1.2,
                }}
              >
                Have a project in mind?
              </p>
              <a
                href="/#contact"
                className="btn-outline-dark"
                onClick={(e) => {
                  e.preventDefault()
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#contact'
                  } else {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                aria-label="Go to contact section"
              >
                LET'S CONNECT ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ── Case study section wrapper ──────────────────────────────── */
function CaseSection({ label, title, children }) {
  return (
    <div className="mb-14 md:mb-18">
      <div className="divider mb-8 md:mb-10" />
      <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-12">
        <div>
          <p className="text-label text-[#858585] mb-2">{label}</p>
          <h3
            className="font-bold text-[#171717]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
              lineHeight: 1.25,
            }}
          >
            {title}
          </h3>
        </div>
        <div className="pt-1">{children}</div>
      </div>
    </div>
  )
}

/* ── Project not-found state ─────────────────────────────────── */
function ProjectNotFound({ slug }) {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-[#171717] flex items-center justify-center pt-16 px-6"
        aria-label="Project not found"
      >
        <div className="text-center max-w-lg">
          <p className="text-label text-[#858585] mb-4">PROJECT NOT FOUND</p>
          <h1 className="text-display text-[#F5F2EA] mb-6">
            <span className="text-[#C7FF4A]">/work/</span>
            {slug}
          </h1>
          <p className="text-[#858585] text-base mb-10" style={{ fontFamily: 'var(--font-body)' }}>
            This project doesn't exist. It may have been renamed or removed.
          </p>
          <Link to="/" className="btn-primary">
            BACK TO HOME
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

/* ── Interactive System Screenshots Gallery & Lightbox ──────── */
function SystemScreensGallery({ screenshots, projectTitle, liveUrl }) {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [lightboxIdx, setLightboxIdx] = useState(null)

  const activeScreen = screenshots[selectedIdx] || screenshots[0]
  const isLightboxOpen = lightboxIdx !== null
  const currentLightbox = isLightboxOpen ? screenshots[lightboxIdx] : null

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIdx(null)
      if (e.key === 'ArrowRight') setLightboxIdx((prev) => (prev + 1) % screenshots.length)
      if (e.key === 'ArrowLeft') setLightboxIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen, screenshots.length])

  return (
    <div className="mb-14 md:mb-18">
      <div className="divider mb-8 md:mb-10" />

      {/* Section Header */}
      <div className="mb-8 md:mb-10">
        <p className="text-label text-[#858585] mb-2">SYSTEM ARCHITECTURE & PRODUCT VIEWS</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3
              className="font-bold text-[#171717]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
              }}
            >
              Role-Based Portals & Live Screens.
            </h3>
            <p className="mt-2 text-base text-[#555] max-w-2xl" style={{ fontFamily: 'var(--font-body)' }}>
              Explore the {screenshots.length} primary production interfaces of {projectTitle}, from user-facing workflows to role-based operational dashboards.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-xs text-[#858585] bg-white/60 border border-[#D9D5CC] px-2.5 py-1">
              {screenshots.length} PRODUCTION CAPTURES
            </span>
          </div>
        </div>
      </div>

      {/* ── View Selector Tabs ── */}
      <div className={`grid gap-2 mb-6 ${
        screenshots.length > 4
          ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
          : 'grid-cols-2 md:grid-cols-4'
      }`}>
        {screenshots.map((screen, idx) => {
          const isActive = idx === selectedIdx
          return (
            <button
              key={screen.id}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`text-left p-2.5 sm:p-3 md:p-3.5 transition-all duration-200 border cursor-pointer ${
                isActive
                  ? 'bg-[#171717] text-[#F5F2EA] border-[#171717] shadow-md -translate-y-0.5'
                  : 'bg-white/60 text-[#444] border-[#D9D5CC] hover:bg-white hover:border-[#171717]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#C7FF4A]' : 'text-[#858585]'}`}>
                  0{idx + 1}
                </span>
                {screen.isMain && (
                  <span className={`text-[9px] font-mono uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-2xs ${
                    isActive ? 'bg-[#C7FF4A] text-[#171717]' : 'bg-[#171717] text-[#C7FF4A]'
                  }`}>
                    MAIN VIEW
                  </span>
                )}
              </div>
              <p className="font-bold text-xs md:text-sm leading-tight truncate mb-0.5" style={{ fontFamily: 'var(--font-display)' }}>
                {screen.title}
              </p>
              <p className={`text-[11px] truncate ${isActive ? 'text-white/60' : 'text-[#777]'}`} style={{ fontFamily: 'var(--font-body)' }}>
                {screen.role}
              </p>
            </button>
          )
        })}
      </div>

      {/* ── Active Screen Showcase ── */}
      <div className="border border-[#D9D5CC] bg-[#12161C] shadow-2xl rounded-xs overflow-hidden mb-12">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0B0F15] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
            <div className="ml-3 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/50 tracking-wide max-w-sm truncate">
              <span className="text-[#C7FF4A]">🔒</span>
              <span className="truncate">{liveUrl ? new URL(liveUrl).hostname : 'app.komalpawar.dev'}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setLightboxIdx(selectedIdx)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#C7FF4A] hover:bg-[#b8f533] text-[#171717] text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer"
              title="Inspect full-resolution screenshot"
            >
              <Maximize2 size={13} />
              <span>Full Screen</span>
            </button>
          </div>
        </div>

        {/* High-res Image Viewport with exact 2.18:1 aspect ratio */}
        <div
          className="relative aspect-[2.18/1] w-full bg-[#0A1017] cursor-pointer group overflow-hidden"
          onClick={() => setLightboxIdx(selectedIdx)}
          title="Click to view full screen"
        >
          <img
            src={activeScreen.url}
            alt={activeScreen.title}
            className="w-full h-full object-cover sm:object-contain object-top transition-transform duration-500 group-hover:scale-[1.01] ui-screenshot"
          />
          {/* Zoom hint on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#171717]/90 text-white text-xs font-mono tracking-wider px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-xs flex items-center gap-2">
              <Maximize2 size={14} className="text-[#C7FF4A]" />
              <span>Click to Expand Lightbox</span>
            </div>
          </div>
        </div>

        {/* Screen Breakdown Panel */}
        <div className="p-5 md:p-6 bg-[#0E131A] border-t border-white/10 text-white">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-8 items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#C7FF4A] tracking-wider uppercase">
                  VIEW 0{selectedIdx + 1}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-xs font-mono uppercase tracking-wider text-white/60">
                  {activeScreen.role}
                </span>
                {activeScreen.isMain && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#171717] bg-[#C7FF4A] font-bold px-1.5 py-0.5 rounded-2xs ml-auto">
                    PRIMARY IMAGE
                  </span>
                )}
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[#F5F2EA] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {activeScreen.title}
              </h4>
              <p className="text-sm md:text-base text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                {activeScreen.description}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xs">
              <p className="text-[11px] font-mono uppercase tracking-widest text-[#C7FF4A] mb-3">
                KEY ARCHITECTURAL HIGHLIGHTS
              </p>
              <ul className="flex flex-col gap-2">
                {activeScreen.highlights?.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    <span className="text-[#C7FF4A] mt-0.5 font-bold">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── All 4 Screenshots Side-by-Side Responsive Grid ── */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h4
            className="font-bold text-[#171717] text-lg md:text-xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            All Portal Views ({screenshots.length})
          </h4>
          <span className="text-xs font-mono text-[#858585]">
            Click any image to inspect in full resolution
          </span>
        </div>

        <div className={`grid gap-6 md:gap-8 ${
          screenshots.length > 4
            ? 'md:grid-cols-2 lg:grid-cols-3'
            : 'md:grid-cols-2'
        }`}>
          {screenshots.map((screen, idx) => (
            <div
              key={screen.id}
              className="bg-white border border-[#D9D5CC] rounded-xs overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              {/* Card Mini Header */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#171717] text-white text-xs select-none">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#C7FF4A]">0{idx + 1}</span>
                  <span className="text-white/40">/</span>
                  <span className="font-mono text-white/80 truncate text-[11px]">{screen.subtitle}</span>
                </div>
                {screen.isMain && (
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#171717] bg-[#C7FF4A] font-bold px-1.5 py-0.5 rounded-2xs">
                    MAIN VIEW
                  </span>
                )}
              </div>

              {/* Card Image */}
              <div
                className="relative aspect-[2.18/1] bg-[#0A1017] cursor-pointer overflow-hidden"
                onClick={() => setLightboxIdx(idx)}
              >
                <img
                  src={screen.url}
                  alt={screen.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ui-screenshot"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#C7FF4A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg">
                    <Maximize2 size={16} color="#171717" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Card Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-label text-[#858585] mb-1">{screen.role}</p>
                  <h5 className="font-bold text-[#171717] text-base mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
                    {screen.title}
                  </h5>
                  <p className="text-xs text-[#555] leading-relaxed line-clamp-2" style={{ fontFamily: 'var(--font-body)' }}>
                    {screen.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EAE6DC] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedIdx(idx)
                      window.scrollTo({ top: window.scrollY - 300, behavior: 'smooth' })
                    }}
                    className="text-xs font-semibold text-[#171717] hover:text-[#555] transition-colors cursor-pointer"
                  >
                    Select Active View ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxIdx(idx)}
                    className="text-xs font-mono font-bold text-[#171717] hover:text-[#555] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Zoom</span>
                    <Maximize2 size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Accessible Lightbox Modal ── */}
      {isLightboxOpen && currentLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentLightbox.title}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
          onClick={() => setLightboxIdx(null)}
        >
          {/* Lightbox Header */}
          <div
            className="w-full max-w-7xl flex items-center justify-between py-2 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs font-bold text-[#C7FF4A]">
                0{lightboxIdx + 1} / 0{screenshots.length}
              </span>
              <span className="text-white/40">|</span>
              <span className="text-xs sm:text-sm font-bold text-white truncate max-w-[140px] xs:max-w-xs sm:max-w-md" style={{ fontFamily: 'var(--font-display)' }}>
                {currentLightbox.title}
              </span>
              {currentLightbox.isMain && (
                <span className="hidden xs:inline text-[9px] font-mono uppercase tracking-wider text-[#171717] bg-[#C7FF4A] font-bold px-1.5 py-0.5 rounded-2xs">
                  MAIN VIEW
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => setLightboxIdx(null)}
              className="p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
              aria-label="Close fullscreen modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Lightbox Main Image */}
          <div
            className="relative max-w-7xl max-h-[80vh] w-full flex items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentLightbox.url}
              alt={currentLightbox.title}
              className="max-h-[78vh] w-auto max-w-full object-contain rounded-xs border border-white/20 shadow-2xl ui-screenshot"
            />

            {/* Prev Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length)
              }}
              className="absolute left-1 sm:-left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-all cursor-pointer shadow-lg"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIdx((prev) => (prev + 1) % screenshots.length)
              }}
              className="absolute right-1 sm:-right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-all cursor-pointer shadow-lg"
              aria-label="Next screenshot"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Lightbox Footer Caption */}
          <div
            className="w-full max-w-5xl text-center py-2 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              {currentLightbox.description}
            </p>
            <p className="text-[11px] font-mono text-white/40 mt-1">
              Use Left/Right arrows to navigate • Press Esc to close
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
