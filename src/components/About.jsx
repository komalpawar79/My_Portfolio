import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

/**
 * About section — asymmetric layout with personal statement and details.
 * Balanced typography, readable paragraph line lengths, and framed abstract visual.
 */
export default function About() {
  const details = [
    { label: 'Role', value: 'Full Stack & MERN Developer' },
    { label: 'Location', value: 'Panvel, Navi Mumbai' },
    { label: 'Core Stack', value: 'MERN / PERN Stack' },
    { label: 'Looking For', value: 'Developer Opportunities' },
    { label: 'Education', value: 'BCA (CGPA: 9.62) — CSMU University' },
    { label: 'Experience', value: 'Freelance & Frontend Developer' },
  ]

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-[#EAE6DC]"
    >
      <div className="container-xl">
        <Reveal>
          <SectionHeading
            label="04 / THE PERSON BEHIND THE CODE"
            title={<>Curious by nature.<br />Practical by design.</>}
          />
        </Reveal>

        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-center">

          {/* Left: bio & personal details */}
          <div className="max-w-2xl">
            <Reveal>
              <p
                className="text-[#171717] leading-relaxed text-lg md:text-xl font-normal mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                I'm Komal Pawar, a Full Stack Developer with hands-on experience building
                production-style web applications using the MERN/PERN stack. I care about
                developing secure authentication systems, responsive React interfaces, and
                clean, data-driven backends.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p
                className="text-[#555] leading-relaxed text-base md:text-lg mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                From client-facing freelance applications to full-scale systems like CampusConnect,
                QuickBite, and the GRE Dashboard, I enjoy building reliable features across the full stack — connecting
                modern frontend interfaces with PostgreSQL and MongoDB databases.
              </p>
            </Reveal>

            {/* Personal details grid */}
            <Reveal delay={0.12}>
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 pt-8 border-t border-[#D9D5CC]">
                {details.map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-label text-[#858585] mb-1">{label}</p>
                    <p
                      className="text-sm md:text-base text-[#171717] font-semibold"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Download Resume Action */}
              <div className="mt-8 pt-6 border-t border-[#D9D5CC]">
                <a
                  href="/resume.pdf"
                  download="Komal_Pawar_Resume.pdf"
                  className="btn-outline-dark w-full sm:w-auto text-center justify-center"
                  aria-label="Download Komal Pawar resume PDF"
                >
                  DOWNLOAD RESUME (PDF) ↘
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: framed abstract composition */}
          <Reveal delay={0.16}>
            <div
              className="aspect-square w-full max-w-[340px] md:max-w-[380px] mx-auto bg-[#171717] p-8 flex items-center justify-center border border-[#171717] shadow-md"
              aria-hidden="true"
            >
              <AbstractComposition />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ── Abstract geometric SVG composition ──────────────────────── */
function AbstractComposition() {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background circles */}
      <circle cx="140" cy="140" r="120" stroke="#F5F2EA" strokeWidth="1" strokeOpacity="0.18" />
      <circle cx="140" cy="140" r="90" stroke="#F5F2EA" strokeWidth="1" strokeOpacity="0.14" />
      <circle cx="140" cy="140" r="60" stroke="#C7FF4A" strokeWidth="1.2" strokeOpacity="0.4" />

      {/* Grid lines */}
      <line x1="20" y1="140" x2="260" y2="140" stroke="#F5F2EA" strokeWidth="0.8" strokeOpacity="0.15" />
      <line x1="140" y1="20" x2="140" y2="260" stroke="#F5F2EA" strokeWidth="0.8" strokeOpacity="0.15" />

      {/* Diagonal cross */}
      <line x1="55" y1="55" x2="225" y2="225" stroke="#F5F2EA" strokeWidth="0.6" strokeOpacity="0.12" />
      <line x1="225" y1="55" x2="55" y2="225" stroke="#F5F2EA" strokeWidth="0.6" strokeOpacity="0.12" />

      {/* Central lime square rotated */}
      <rect
        x="112"
        y="112"
        width="56"
        height="56"
        fill="#C7FF4A"
        fillOpacity="0.95"
        transform="rotate(15 140 140)"
      />

      {/* Corner dots */}
      <circle cx="50" cy="50" r="3.5" fill="#F5F2EA" fillOpacity="0.5" />
      <circle cx="230" cy="50" r="3.5" fill="#F5F2EA" fillOpacity="0.5" />
      <circle cx="50" cy="230" r="3.5" fill="#F5F2EA" fillOpacity="0.5" />
      <circle cx="230" cy="230" r="3.5" fill="#F5F2EA" fillOpacity="0.5" />

      {/* Labels */}
      <text x="16" y="24" fill="#858585" fontSize="7.5" fontFamily="monospace" letterSpacing="1.2">
        KP / 2026
      </text>
      <text x="16" y="268" fill="#858585" fontSize="7.5" fontFamily="monospace" letterSpacing="1.2">
        KOMAL PAWAR®
      </text>
    </svg>
  )
}
