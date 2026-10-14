/**
 * SectionHeading — editorial section label + headline pattern.
 * Consistent vertical margins and readable supporting copy.
 *
 * @param {object} props
 * @param {string} props.label   — small uppercase label e.g. "01 / SELECTED WORK"
 * @param {string|React.ReactNode} props.title   — main headline
 * @param {string} [props.description] — optional supporting paragraph
 * @param {boolean} [props.light] — use light text (for dark backgrounds)
 * @param {string} [props.className]
 */
export default function SectionHeading({
  label,
  title,
  description,
  light = false,
  className = '',
}) {
  const textColor = light ? 'text-[#F5F2EA]' : 'text-[#171717]'
  const mutedColor = light ? 'text-white/60' : 'text-[#858585]'
  const descColor = light ? 'text-[#F5F2EA]/75' : 'text-[#555]'

  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      {label && <p className={`text-label mb-3 ${mutedColor}`}>{label}</p>}
      <h2 className={`text-headline ${textColor}`}>{title}</h2>
      {description && (
        <p
          className={`mt-3.5 text-base md:text-lg max-w-2xl leading-relaxed ${descColor}`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
