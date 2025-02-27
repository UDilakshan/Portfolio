import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import ParticleBackground from './components/Particle'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
    <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </>
  )
}

export default App