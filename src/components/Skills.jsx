import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { skillGroups } from '../data/skills.js'

/**
 * Skills section — grouped technology toolkit.
 * Enhanced readability, generous row/column breathing room,
 * and distinct typography hierarchy without fake skill bars.
 */
export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-padding bg-[#171717]"
    >
      <div className="container-xl">
        <Reveal>
          <SectionHeading
            label="02 / THE TOOLKIT"
            title="Tools of the trade."
            description="The technologies I use to build interfaces, connect applications, and turn ideas into working products."
            light
          />
        </Reveal>

        <div className="divider-dark mb-10 md:mb-14" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillGroups.map((group, groupIdx) => (
            <Reveal key={group.id} delay={groupIdx * 0.08}>
              <div className="bg-[#1e1e1e] border border-white/10 p-5 sm:p-7 md:p-8 h-full flex flex-col justify-between transition-colors duration-200 hover:border-white/20">
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3.5 sm:pb-4 border-b border-white/10">
                    <p
                      className="text-[#C7FF4A] text-xs font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {group.label}
                    </p>
                    <span className="font-mono text-xs text-[#858585]">
                      0{groupIdx + 1}
                    </span>
                  </div>

                  <ul role="list" className="flex flex-col gap-3.5">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-sm md:text-[0.95rem] text-[#F5F2EA]/85 leading-normal"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#858585] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="divider-dark mt-12 md:mt-16" />
      </div>
    </section>
  )
}
