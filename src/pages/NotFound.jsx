import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

/**
 * Custom 404 Not Found page.
 */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-[#171717] flex flex-col items-center justify-center pt-16 px-6"
        aria-label="Page not found"
      >
        <div className="text-center max-w-lg">
          {/* 404 */}
          <p className="text-label text-[#858585] mb-6">404 / PAGE NOT FOUND</p>

          <h1
            className="text-[#F5F2EA] mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(5rem, 18vw, 14rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
            aria-label="404 — page not found"
          >
            <span className="text-[#C7FF4A]">4</span>0
            <span className="text-[#C7FF4A]">4</span>
          </h1>

          <p
            className="text-[#858585] text-base leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            The page you're looking for doesn't exist or has been moved.
            Let's get you back somewhere useful.
          </p>

          <Link to="/" className="btn-primary">
            ← BACK TO HOME
          </Link>

          {/* Decorative SVG */}
          <div className="mt-16 opacity-20 mx-auto w-32" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="55" stroke="#F5F2EA" strokeWidth="0.5" strokeDasharray="4 8" />
              <circle cx="60" cy="60" r="35" stroke="#C7FF4A" strokeWidth="0.5" />
              <circle cx="60" cy="60" r="10" fill="#C7FF4A" fillOpacity="0.5" />
            </svg>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

