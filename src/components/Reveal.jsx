import { motion, useReducedMotion } from 'motion/react'

/**
 * Reveal — wraps children with a scroll-triggered fade-up animation.
 * Respects prefers-reduced-motion: returns static div without animation.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.delay=0] — stagger delay in seconds
 * @param {string} [props.className]
 * @param {number} [props.threshold=0.05] — fraction of element visible before animating
 */
export default function Reveal({ children, delay = 0, className = '', threshold = 0.05 }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold, margin: '0px 0px -30px 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
