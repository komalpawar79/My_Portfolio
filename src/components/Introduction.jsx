import Reveal from './Reveal.jsx'

/**
 * Introduction section — short personal statement with editorial layout.
 * Tightened vertical spacing to connect smoothly with the project gallery.
 */
export default function Introduction() {
  return (
    <section
      id="about-intro"
      aria-labelledby="intro-heading"
      className="pt-14 md:pt-20 pb-8 md:pb-12 bg-[#F5F2EA]"
    >
      <div className="container-xl">
        <div className="divider mb-10 md:mb-14" />

        <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-14 items-start mb-10 md:mb-14">
          {/* Section number */}
          <Reveal>
            <span
              className="text-xs tracking-widest uppercase text-[#858585] font-semibold block pt-1"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              00 / A LITTLE ABOUT MY WORK
            </span>
          </Reveal>

          {/* Headline + copy grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
            <Reveal>
              <h2
                id="intro-heading"
                className="text-headline text-[#171717]"
              >
                I like turning complicated ideas into simple experiences.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="pt-1">
                <p
                  className="text-[#555] leading-relaxed text-base md:text-lg mb-6"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  I enjoy building web applications that combine useful functionality with
                  thoughtful interface design. From reusable React components to complete
                  dashboard workflows, I focus on making digital products easier to
                  understand and use.
                </p>

                {/* Editorial side note */}
                <div className="border-l-2 border-[#C7FF4A] pl-4 py-1">
                  <p
                    className="text-xs font-semibold tracking-[0.14em] uppercase text-[#777]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    THINK CLEARLY. BUILD CAREFULLY. KEEP IMPROVING.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="divider" />
      </div>
    </section>
  )
}
