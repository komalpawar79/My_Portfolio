import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const steps = [
  {
    number: '01',
    title: 'UNDERSTAND',
    description:
      'Analyze the problem, user requirements, and desired outcomes before determining interface structure or component architecture.',
  },
  {
    number: '02',
    title: 'DESIGN',
    description:
      'Establish visual hierarchy, responsive layout patterns, intuitive navigation, and micro-interactions for a friction-free experience.',
  },
  {
    number: '03',
    title: 'BUILD',
    description:
      'Translate designs into modular, reusable React components with clean state management, accessible markup, and efficient logic.',
  },
  {
    number: '04',
    title: 'TEST & IMPROVE',
    description:
      'Verify cross-browser responsiveness, keyboard accessibility, edge cases, and performance before deploying to production.',
  },
]

/**
 * Process section — four-step development workflow.
 * Clear numbering, generous breathing room, and distinguished typography.
 */
export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-padding bg-[#F5F2EA]"
    >
      <div className="container-xl">
        <Reveal>
          <SectionHeading
            label="03 / HOW I WORK"
            title="From problem to product."
            description="A structured, iterative engineering approach to building thoughtful digital solutions."
          />
        </Reveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 relative">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="group h-full flex flex-col pt-6 border-t-2 border-[#D9D5CC] hover:border-[#171717] transition-colors duration-300">
                {/* Number marker + tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#D9D5CC] bg-white/60 group-hover:bg-[#C7FF4A] group-hover:border-[#C7FF4A] transition-colors duration-300">
                    <span className="text-xs font-mono font-bold text-[#171717]">
                      {step.number}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#858585] tracking-widest uppercase">
                    PHASE 0{i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-[#171717] text-lg md:text-xl mb-3 tracking-tight group-hover:text-[#858585] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#555] text-sm md:text-base leading-relaxed mt-auto"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="divider mt-16 md:mt-20" />
      </div>
    </section>
  )
}
