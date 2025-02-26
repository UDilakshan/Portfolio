import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import ParticleBackground from './components/Particle'

const App = () => {
  return (
    <>
    <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer/>
    </>
  )
}

export default App