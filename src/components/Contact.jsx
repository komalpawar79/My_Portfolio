import { Mail, FileText } from 'lucide-react'
import { Github, Linkedin } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { siteConfig } from '../data/siteConfig.js'

/**
 * Contact section — bold dark closing section with all contact links.
 * Comfortable card spacing, legible link typography, and working mailto.
 */
export default function Contact() {
  const links = [
    {
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      note: siteConfig.email.includes('YOUR_EMAIL')
        ? '[Configure in src/data/siteConfig.js]'
        : null,
    },
    {
      label: 'GitHub',
      value: siteConfig.github.replace('https://', ''),
      href: siteConfig.github,
      icon: Github,
      note: siteConfig.github.includes('YOUR_USERNAME')
        ? '[Configure in src/data/siteConfig.js]'
        : null,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: siteConfig.linkedin.replace('https://', ''),
      href: siteConfig.linkedin,
      icon: Linkedin,
      note: siteConfig.linkedin.includes('YOUR_PROFILE')
        ? '[Configure in src/data/siteConfig.js]'
        : null,
      external: true,
    },
    {
      label: 'Resume',
      value: 'Download PDF',
      href: siteConfig.resume,
      icon: FileText,
      external: true,
      download: 'Komal_Pawar_Resume.pdf',
    },
  ]

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-[#171717]"
    >
      <div className="container-xl">
        <Reveal>
          <p className="text-label text-[#858585] mb-5">05 / LET'S CONNECT</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="contact-heading"
            className="text-display text-[#F5F2EA] mb-6 md:mb-8 max-w-3xl"
          >
            Have an interesting problem?
            <br />
            <span className="text-[#C7FF4A]">Let's build</span>
            <br />
            something useful.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p
            className="text-[#858585] text-base md:text-lg leading-relaxed max-w-xl mb-12 md:mb-14"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            I'm interested in developer opportunities where I can contribute, keep
            learning, and build useful digital experiences.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divider-dark mb-10 md:mb-12" />
        </Reveal>

        {/* Contact links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {links.map(({ label, value, href, icon: Icon, note, external, download }, i) => (
            <Reveal key={label} delay={0.08 + i * 0.06}>
              <a
                href={href}
                {...(download ? { download } : {})}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group block bg-[#1e1e1e] border border-white/10 p-4 sm:p-6 md:p-7 hover:border-[#C7FF4A]/50 hover:bg-[#232323] transition-all duration-200"
                aria-label={note ? `${label} — ${note}` : `${label}: ${value}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <Icon
                    size={20}
                    className="text-[#858585] group-hover:text-[#C7FF4A] transition-colors duration-200"
                  />
                  <span
                    className="text-[#C7FF4A] text-lg font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
                <p className="text-label text-[#858585] mb-2">{label}</p>
                <p
                  className="text-[#F5F2EA] text-sm md:text-base font-semibold break-all leading-snug"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {value}
                </p>
                {note && (
                  <p className="text-xs text-[#858585] mt-2 italic">{note}</p>
                )}
              </a>
            </Reveal>
          ))}
        </div>

        {/* Location & Availability badge */}
        <Reveal delay={0.25}>
          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 mt-10 md:mt-12 pt-8 border-t border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#C7FF4A] animate-pulse mt-1 sm:mt-0 shrink-0" aria-hidden="true" />
            <p
              className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#858585]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Based in {siteConfig.location} — {siteConfig.availability}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
