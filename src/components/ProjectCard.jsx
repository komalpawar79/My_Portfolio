import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

/**
 * ProjectCard — a single project showcase card.
 * Used in the ProjectGallery in different layout modes.
 *
 * @param {object} props
 * @param {object} props.project — project data object
 * @param {'large'|'medium'|'small'} props.variant — layout variant
 */
export default function ProjectCard({ project, variant = 'medium' }) {
  const isLarge = variant === 'large'

  return (
    <article className="group">
      <Link
        to={`/work/${project.slug}`}
        className="block"
        aria-label={`View ${project.title} case study`}
      >
        {/* Image */}
        <div
          className={`project-card-image relative overflow-hidden mb-5 bg-[#1a1a1a] border border-[#D9D5CC] ${
            isLarge ? 'aspect-[16/10] md:aspect-[16/9]' : 'aspect-[16/10]'
          }`}
        >
          <ProjectImage project={project} />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/25 transition-all duration-500 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#C7FF4A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 shadow-lg">
              <ArrowUpRight size={20} color="#171717" strokeWidth={2.5} aria-hidden="true" />
            </div>
          </div>

          {/* Project number */}
          <span
            className="absolute top-4 left-4 font-mono text-xs text-white/50 tracking-widest bg-black/40 px-2 py-0.5 rounded-xs backdrop-blur-xs"
            aria-hidden="true"
          >
            {project.number}
          </span>
        </div>

        {/* Text content */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-label text-[#858585] mb-2">{project.category}</p>
            <h3
              className="font-bold text-[#171717] group-hover:text-[#858585] transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: isLarge ? 'clamp(1.5rem, 2.5vw, 2.2rem)' : 'clamp(1.25rem, 2vw, 1.65rem)',
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
            <ArrowUpRight
              size={22}
              className="arrow-icon text-[#171717]"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-block text-xs font-medium tracking-wide uppercase px-2.5 py-1 border border-[#D9D5CC] text-[#555] bg-white/40"
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

/* ── Project image with CSS mockup fallback ─────────────────── */
function ProjectImage({ project }) {
  return (
    <>
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        onError={(e) => {
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />
      {/* CSS mockup fallback */}
      <div
        className="absolute inset-0 hidden items-center justify-center"
        style={{ background: project.bgColor }}
        aria-hidden="true"
      >
        <ProjectMockup project={project} />
      </div>
    </>
  )
}

/* ── Inline CSS dashboard mockups ───────────────────────────── */
function ProjectMockup({ project }) {
  const mockups = {
    clinix: <ClinicMockup />,
    researchflow: <ResearchMockup />,
    campusconnect: <CampusMockup />,
    quickbite: <QuickbiteMockup />,
    'gre-dashboard': <GREMockup />,
    'project-three': <GREMockup />,
  }
  return mockups[project.id] || <GenericMockup project={project} />
}

function ClinicMockup() {
  return (
    <div className="w-full h-full p-4 flex gap-3" style={{ background: '#111827' }}>
      <div className="w-14 flex flex-col gap-2 pt-2">
        <div className="w-6 h-6 rounded bg-[#C7FF4A] mb-3" />
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-2 rounded bg-white/10 w-full" />
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="h-3 rounded bg-white/5 w-1/3 mb-1" />
        <div className="grid grid-cols-3 gap-2 mb-2">
          {['#1e3a2e', '#1e2a3a', '#2a1e1e'].map((bg, i) => (
            <div key={i} className="rounded p-2" style={{ background: bg }}>
              <div className="h-1.5 rounded bg-white/20 mb-1 w-2/3" />
              <div className="text-[#C7FF4A] font-bold text-xs">{['12', '8', '24'][i]}</div>
            </div>
          ))}
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-6 rounded bg-white/5 flex items-center px-2 gap-2">
            <div className="w-4 h-4 rounded-full bg-white/20" />
            <div className="h-1.5 rounded bg-white/15 flex-1" />
            <div className="h-1.5 rounded bg-[#C7FF4A]/40 w-8" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ResearchMockup() {
  return (
    <div className="w-full h-full p-4 flex gap-3" style={{ background: '#0d1117' }}>
      <div className="flex-1 flex flex-col gap-2">
        <div className="h-3 rounded bg-white/10 w-1/2 mb-2" />
        <div className="h-1.5 rounded-full bg-white/10 mb-3">
          <div className="h-full rounded-full bg-[#C7FF4A] w-3/5" />
        </div>
        {['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'].map((ch, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full border ${i < 2 ? 'bg-[#C7FF4A] border-[#C7FF4A]' : 'border-white/20'}`}
            />
            <div className="h-1.5 rounded bg-white/10 flex-1" />
            <div className={`text-[8px] ${i < 2 ? 'text-[#C7FF4A]' : 'text-white/20'}`}>
              {i < 2 ? '✓' : '—'}
            </div>
          </div>
        ))}
        <div className="mt-2 h-8 rounded bg-white/5 flex items-center px-2 gap-2">
          <div className="text-[8px] text-white/30">PAYMENT STATUS</div>
          <div className="ml-auto text-[8px] text-[#C7FF4A]">PAID</div>
        </div>
      </div>
    </div>
  )
}

function CampusMockup() {
  return (
    <div className="w-full h-full p-4" style={{ background: '#0a0f18' }}>
      <div className="h-3 rounded bg-white/10 w-1/3 mb-3" />
      <div className="grid grid-cols-2 gap-2 mb-3">
        {['Google', 'Infosys', 'TCS', 'Wipro'].map((co, i) => (
          <div key={i} className="rounded p-2 bg-white/5 flex items-center gap-1.5">
            <div className="w-4 h-4 rounded bg-white/20" />
            <div className="flex-1">
              <div className="h-1.5 rounded bg-white/20 mb-0.5 w-full" />
              <div className="h-1 rounded bg-white/10 w-2/3" />
            </div>
          </div>
        ))}
      </div>
      <div className="h-1 bg-white/5 rounded mb-2" />
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-2 mb-1.5">
          <div className="w-5 h-5 rounded-full bg-white/15" />
          <div className="h-1.5 flex-1 bg-white/10 rounded" />
          <div
            className={`text-[7px] px-1 rounded ${['text-[#C7FF4A]', 'text-blue-400', 'text-white/30'][i]}`}
          >
            {['Shortlisted', 'Applied', 'Pending'][i]}
          </div>
        </div>
      ))}
    </div>
  )
}

function QuickbiteMockup() {
  return (
    <div className="w-full h-full p-4 flex gap-3" style={{ background: '#1a0a00' }}>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex gap-1.5 mb-2">
          {['All', 'Pizza', 'Burger', 'Salad'].map((cat, i) => (
            <div
              key={i}
              className={`text-[7px] px-2 py-0.5 rounded-full ${i === 0 ? 'bg-[#C7FF4A] text-[#171717]' : 'bg-white/10 text-white/40'}`}
            >
              {cat}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: 'Margherita', price: '₹299' },
            { name: 'Cheeseburger', price: '₹199' },
            { name: 'Caesar Salad', price: '₹249' },
            { name: 'Pepperoni', price: '₹349' },
          ].map((item, i) => (
            <div key={i} className="rounded bg-white/5 overflow-hidden">
              <div className="h-8 bg-white/10" />
              <div className="p-1.5">
                <div className="h-1.5 rounded bg-white/20 mb-0.5" />
                <div className="flex justify-between items-center">
                  <div className="text-[7px] text-[#C7FF4A]">{item.price}</div>
                  <div className="w-3 h-3 rounded-full bg-[#C7FF4A] flex items-center justify-center text-[6px] font-bold text-[#171717]">
                    +
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-20 bg-white/5 rounded p-2 flex flex-col gap-1.5">
        <div className="text-[7px] text-white/40 font-semibold">CART</div>
        {[1, 2].map((i) => (
          <div key={i} className="h-3 rounded bg-white/10" />
        ))}
        <div className="mt-auto h-5 rounded bg-[#C7FF4A] flex items-center justify-center text-[7px] font-bold text-[#171717]">
          ORDER
        </div>
      </div>
    </div>
  )
}

function GREMockup() {
  return (
    <div className="w-full h-full p-4 flex gap-3" style={{ background: '#09140E' }}>
      <div className="w-12 flex flex-col gap-2 pt-1 border-r border-white/10 pr-2">
        <div className="w-5 h-5 rounded bg-[#10B981] mb-2" />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-1.5 rounded bg-white/10 w-full" />
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex gap-2 mb-1">
          {['Clients: 55', 'Attended: 55', 'Rate: 100%'].map((txt, i) => (
            <div key={i} className="flex-1 bg-white/5 rounded px-2 py-1">
              <div className="text-[7px] text-[#10B981] font-mono font-bold">{txt}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-white/5 rounded p-2 flex flex-col gap-1.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="h-1.5 flex-1 bg-white/10 rounded" />
              <div className="text-[7px] text-[#C7FF4A]">Attended</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GenericMockup({ project }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
      <div
        className="w-12 h-12 rounded-full bg-[#C7FF4A] flex items-center justify-center text-[#171717] font-bold text-lg"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {project.number}
      </div>
      <p className="text-xs tracking-widest uppercase text-white/40">{project.title}</p>
    </div>
  )
}
