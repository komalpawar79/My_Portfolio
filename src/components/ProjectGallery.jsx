import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Github } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { getFeaturedProjects } from '../data/projects.js'

/**
 * ProjectGallery — asymmetric editorial project showcase.
 *
 * Layout:
 *  Row 1: Full-width large feature row (CampusConnect)
 *  Row 2: Full-width contrasting feature row (QuickBite)
 */
export default function ProjectGallery() {
  const projects = getFeaturedProjects()

  return (
    <section id="work" aria-labelledby="work-heading" className="pt-10 md:pt-14 pb-20 md:pb-28 bg-[#F5F2EA]">
      <div className="container-xl">
        <Reveal>
          <SectionHeading
            label="01 / SELECTED WORK"
            title="Things I've built."
            description="Production-style web applications with role-based architectures, real-time communication, and data-driven interfaces."
          />
        </Reveal>

        <div className="flex flex-col gap-12 sm:gap-16 md:gap-24">
          {projects.map((project, idx) => (
            <Reveal key={project.id}>
              <LargeProjectRow project={project} imageLeft={idx % 2 !== 0} />
            </Reveal>
          ))}
        </div>

        {/* Bottom hairline divider */}
        <div className="divider mt-20 md:mt-24" />
      </div>
    </section>
  )
}

/* ── Large editorial project row ─────────────────────────────── */
function LargeProjectRow({ project, imageLeft }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0)
  const hasScreenshots = Boolean(project.screenshots && project.screenshots.length > 0)
  const currentScreen = hasScreenshots ? project.screenshots[activeScreenIndex] : null
  const displayImage = currentScreen ? currentScreen.url : project.image
  const displayAlt = currentScreen ? currentScreen.title : project.imageAlt

  const imageContent = (
    <div className="flex flex-col gap-2.5">
      {/* Device / Browser Window Mockup */}
      <div className="group rounded-xs overflow-hidden border border-[#D9D5CC] bg-[#12161C] shadow-xl hover:border-[#171717] transition-all duration-300">
        {/* Browser Chrome Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#0B0F15] border-b border-white/10 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" />
            <div className="ml-2 hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/50 tracking-wide max-w-[220px] truncate">
              <span className="text-[#C7FF4A]">🔒</span>
              <span className="truncate">
                {project.liveUrl ? new URL(project.liveUrl).hostname : 'komalpawar.dev'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {hasScreenshots && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C7FF4A] bg-[#C7FF4A]/10 px-2 py-0.5 rounded-xs border border-[#C7FF4A]/25">
                {activeScreenIndex === 0 ? 'MAIN VIEW' : `VIEW 0${activeScreenIndex + 1}`}
              </span>
            )}
            <span className="font-mono text-xs text-white/40 tracking-widest">
              {project.number}
            </span>
          </div>
        </div>

        {/* Visual Viewport with precise 2.18:1 ratio matching screenshots */}
        <Link
          to={`/work/${project.slug}`}
          className="block relative overflow-hidden bg-[#0A1017] aspect-[2.18/1] w-full"
          aria-label={`View ${project.title} — ${currentScreen ? currentScreen.title : project.category}`}
        >
          <img
            src={displayImage}
            alt={displayAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] ui-screenshot"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />

          {/* Subtle Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#C7FF4A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-xl">
              <ArrowUpRight size={20} color="#171717" strokeWidth={2.5} aria-hidden="true" />
            </div>
          </div>
        </Link>

        {/* Thumbnail Selector (for multi-screen projects like CampusConnect) */}
        {hasScreenshots && (
          <div className="p-2 sm:p-2.5 bg-[#0B0F15] border-t border-white/10">
            <div className="flex items-center justify-between gap-1 text-[11px] font-mono text-white/50 mb-1.5 px-1">
              <span className="text-white/60 font-semibold tracking-wider uppercase text-[10px]">
                PORTAL SCREENS ({project.screenshots.length}):
              </span>
              <span className="text-[#C7FF4A] text-[10px] hidden sm:inline truncate max-w-[220px]">
                {currentScreen.subtitle}
              </span>
            </div>
            <div className={`grid gap-1.5 ${project.screenshots.length > 4 ? 'grid-cols-2 xs:grid-cols-3 sm:grid-cols-6' : 'grid-cols-2 xs:grid-cols-4'}`}>
              {project.screenshots.map((screen, idx) => {
                const isActive = idx === activeScreenIndex
                const shortLabel =
                  screen.subtitle?.split(' ')[0] ||
                  screen.title?.split(' ')[0] ||
                  `View 0${idx + 1}`
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setActiveScreenIndex(idx)
                    }}
                    className={`text-left p-1.5 rounded-xs transition-all duration-200 border cursor-pointer ${
                      isActive
                        ? 'bg-[#1A2634] border-[#C7FF4A] text-white shadow-sm'
                        : 'bg-[#101720]/80 border-white/5 text-white/50 hover:bg-[#16212E] hover:text-white/80 hover:border-white/20'
                    }`}
                    title={screen.title}
                    aria-label={`Switch to view ${screen.title}`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#C7FF4A]' : 'text-white/40'}`}>
                        0{idx + 1}
                      </span>
                      {screen.isMain && (
                        <span className="text-[8px] uppercase tracking-wider text-[#C7FF4A] font-bold bg-[#C7FF4A]/10 px-1 rounded-2xs">
                          MAIN
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] font-medium leading-tight truncate">
                      {shortLabel}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* View Caption below screenshot */}
      {currentScreen && (
        <div className="flex items-center justify-between px-1 text-xs text-[#666]">
          <span className="font-mono text-[11px] truncate max-w-[80%]">
            <strong className="text-[#171717]">{currentScreen.category}:</strong> {currentScreen.title}
          </span>
          <Link
            to={`/work/${project.slug}`}
            className="text-xs font-semibold text-[#171717] hover:text-[#555] inline-flex items-center gap-1 shrink-0"
          >
            Case Study ↗
          </Link>
        </div>
      )}
    </div>
  )

  const textContent = (
    <div className="flex flex-col justify-center py-2">
      <p className="text-label text-[#858585] mb-2.5">{project.category}</p>

      <Link
        to={`/work/${project.slug}`}
        className="group arrow-link inline-block mb-3"
        aria-label={`Read ${project.title} case study`}
      >
        <h3
          className="font-bold text-[#171717] group-hover:text-[#858585] transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.015em',
          }}
        >
          {project.title}
          <ArrowUpRight className="inline-block ml-2 arrow-icon" size={24} aria-hidden="true" />
        </h3>
      </Link>

      <p
        className="text-[#555] leading-relaxed text-base md:text-lg max-w-lg mb-6"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {project.shortDescription}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium tracking-wide uppercase px-2.5 py-1.5 border border-[#D9D5CC] text-[#555] bg-white/40"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-2.5 sm:gap-3.5">
        <Link
          to={`/work/${project.slug}`}
          className="btn-outline-dark text-center justify-center"
          aria-label={`View ${project.title} full case study`}
        >
          VIEW CASE STUDY ↗
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center justify-center"
            aria-label={`Open live demo of ${project.title}`}
          >
            LIVE DEMO ↗
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#171717] border border-[#D9D5CC] bg-white/40 px-3.5 py-3 hover:bg-[#171717] hover:text-[#F5F2EA] transition-all duration-200"
            aria-label={`View source code of ${project.title} on GitHub`}
            title="GitHub Repository"
          >
            <Github size={15} />
            <span>CODE</span>
          </a>
        )}
      </div>
    </div>
  )

  return (
    <article className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      <div className={imageLeft ? 'order-1 md:order-1' : 'order-1 md:order-2'}>
        {imageContent}
      </div>
      <div className={imageLeft ? 'order-2 md:order-2' : 'order-2 md:order-1'}>
        {textContent}
      </div>
    </article>
  )
}

/* ── Medium project card (two-column row) ───────────────────── */
function MediumProjectCard({ project, topOffset = false }) {
  return (
    <article className={`group ${topOffset ? 'md:mt-16' : ''}`}>
      <Link
        to={`/work/${project.slug}`}
        className="block"
        aria-label={`View ${project.title} — ${project.category}`}
      >
        <div
          className="aspect-[16/10] overflow-hidden relative mb-5 border border-[#D9D5CC]"
          style={{ background: project.bgColor }}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <span
            className="absolute top-4 left-4 font-mono text-xs text-white/50 tracking-widest bg-black/40 px-2 py-0.5 rounded-xs backdrop-blur-xs"
            aria-hidden="true"
          >
            {project.number}
          </span>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-[#C7FF4A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 shadow-lg">
              <ArrowUpRight size={18} color="#171717" strokeWidth={2.5} aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-label text-[#858585] mb-2">{project.category}</p>
            <h3
              className="font-bold text-[#171717] group-hover:text-[#858585] transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
              }}
            >
              {project.title}
            </h3>
            <p
              className="mt-2 text-sm md:text-base text-[#555] leading-relaxed max-w-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {project.shortDescription}
            </p>
          </div>
          <div className="arrow-link mt-1 shrink-0">
            <ArrowUpRight size={22} className="arrow-icon text-[#171717]" aria-hidden="true" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium tracking-wide uppercase px-2.5 py-1 border border-[#D9D5CC] text-[#555] bg-white/40"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </article>
  )
}
