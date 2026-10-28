import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { journeyItems } from '../data/journey.js'

/**
 * Journey section — development timeline.
 * Legible milestone badges, clear typography hierarchy, and comfortable vertical rhythm.
 */
export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="section-padding bg-[#F5F2EA]"
    >
      <div className="container-xl">
        <Reveal>
          <SectionHeading
            label="DEVELOPMENT JOURNEY"
            title={<>Experience & Education.</>}
            description="A timeline of professional freelance engagements, frontend engineering experience, and academic milestones."
          />
        </Reveal>

        <div className="relative max-w-4xl">
          {/* Vertical hairline connector */}
          <div
            className="absolute left-3.5 sm:left-4 md:left-6 top-3 bottom-8 w-px bg-[#D9D5CC]"
            aria-hidden="true"
          />

          <ol role="list" className="flex flex-col gap-0">
            {journeyItems.map((item, i) => (
              <li key={item.id} className="relative flex gap-3 sm:gap-6 md:gap-10 pb-10 sm:pb-12 md:pb-14 last:pb-4">
                {/* Timeline node */}
                <div className="relative z-10 shrink-0 pt-0.5">
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 flex items-center justify-center bg-[#F5F2EA] border-2 border-[#171717] rounded-full shadow-xs"
                    aria-hidden="true"
                  >
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#C7FF4A]" />
                  </div>
                </div>

                {/* Timeline content card */}
                <div className="flex-1 pt-0.5">
                  <Reveal delay={i * 0.08}>
                    <div className="bg-white/60 border border-[#D9D5CC] p-4 sm:p-6 md:p-7 hover:border-[#171717]/40 transition-colors duration-200">
                      {/* Year pill */}
                      <span className="inline-block px-2.5 sm:px-3 py-1 bg-[#171717] text-[#C7FF4A] text-xs font-mono font-bold tracking-wider mb-2.5 sm:mb-3">
                        {item.year}
                      </span>

                      {/* Title */}
                      <h3
                        className="font-bold text-[#171717] text-lg md:text-xl mb-2.5 tracking-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-[#555] text-sm md:text-base leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {item.description}
                      </p>

                      {item.isDemo && (
                        <p className="mt-3 text-xs text-[#858585] tracking-wide italic">
                          [Demo entry — replace with your real milestone]
                        </p>
                      )}
                    </div>
                  </Reveal>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
