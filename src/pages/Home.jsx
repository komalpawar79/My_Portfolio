import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import Introduction from '../components/Introduction.jsx'
import ProjectGallery from '../components/ProjectGallery.jsx'
import Skills from '../components/Skills.jsx'
import Process from '../components/Process.jsx'
import About from '../components/About.jsx'
import Journey from '../components/Journey.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

/**
 * Home page — the full single-page portfolio experience.
 * All sections are composed here; each section manages its own ID
 * for smooth-scroll anchor navigation.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Introduction />
        <ProjectGallery />
        <Skills />
        <Process />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

