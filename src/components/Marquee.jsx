/**
 * Marquee — Big Editorial Kinetic Typography (Option D).
 * Large scale display typography (4xl–6xl) featuring alternating
 * solid off-white text, hollow outline stroke text, and electric lime accents.
 * Dual-track kinetic motion in opposing directions with pause-on-hover.
 */
export default function Marquee() {
  const track1Items = [
    { text: 'FRONTEND ARCHITECTURE', type: 'solid' },
    { text: 'REACT.JS', type: 'stroke' },
    { text: 'MERN STACK', type: 'lime' },
    { text: 'CREATIVE ENGINEERING', type: 'stroke' },
    { text: 'INTERACTIVE EXPERIENCES', type: 'solid' },
    { text: 'COMPONENT DESIGN', type: 'stroke-lime' },
  ]

  const track2Items = [
    { text: 'THOUGHTFUL UI/UX', type: 'stroke-lime' },
    { text: 'NODE.JS & EXPRESS', type: 'solid' },
    { text: 'TAILWIND CSS', type: 'stroke' },
    { text: 'CLEAN & SCALABLE CODE', type: 'solid' },
    { text: 'REST APIS & MONGODB', type: 'stroke' },
    { text: 'RESPONSIVE SYSTEMS', type: 'lime' },
  ]

  const renderItem = (item, idx) => {
    let classes = 'font-bold uppercase tracking-tight transition-all duration-300 '

    if (item.type === 'solid') {
      classes += 'text-[#F5F2EA] hover:text-[#C7FF4A]'
    } else if (item.type === 'stroke') {
      classes += 'text-stroke-white cursor-pointer'
    } else if (item.type === 'stroke-lime') {
      classes += 'text-stroke-lime cursor-pointer'
    } else if (item.type === 'lime') {
      classes += 'text-[#C7FF4A] drop-shadow-[0_0_16px_rgba(199,255,74,0.3)]'
    }

    const separator = (
      <span
        className="mx-3 xs:mx-6 sm:mx-8 md:mx-10 text-[#C7FF4A] text-[0.6em] align-middle select-none animate-pulse"
        aria-hidden="true"
      >
        {idx % 2 === 0 ? '✳' : '✦'}
      </span>
    )

    return (
      <span key={idx} className="inline-flex items-center whitespace-nowrap">
        <span className={classes}>{item.text}</span>
        {separator}
      </span>
    )
  }

  const renderTrackContent = (items) => (
    <div className="inline-flex items-center shrink-0">
      {items.map((item, i) => renderItem(item, i))}
    </div>
  )

  return (
    <section
      aria-label="Core competencies & kinetic typography"
      className="marquee-container overflow-hidden bg-[#111111] border-y border-white/10 py-6 sm:py-8 md:py-10 select-none relative"
    >
      {/* Accessible screen-reader description */}
      <p className="sr-only">
        Core Competencies: Frontend Architecture, React.js, MERN Stack, Creative Engineering,
        Interactive Experiences, Thoughtful UI/UX, Node.js, Express, Tailwind CSS, Clean Code,
        REST APIs, MongoDB.
      </p>

      {/* Edge gradient fade masks */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-16 sm:w-28 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-[#111111] to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-16 sm:w-28 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#111111] to-transparent"
      />

      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
        {/* Track 1: Large Display, Scrolling Left */}
        <div
          aria-hidden="true"
          className="relative flex overflow-hidden text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: 'var(--font-display)', lineHeight: 1.15 }}
        >
          <div className="marquee-track-left">
            {renderTrackContent(track1Items)}
            {renderTrackContent(track1Items)}
          </div>
        </div>

        {/* Track 2: Complementary Kinetic Display, Scrolling Right */}
        <div
          aria-hidden="true"
          className="relative flex overflow-hidden text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'var(--font-display)', lineHeight: 1.15 }}
        >
          <div className="marquee-track-right">
            {renderTrackContent(track2Items)}
            {renderTrackContent(track2Items)}
          </div>
        </div>
      </div>
    </section>
  )
}
