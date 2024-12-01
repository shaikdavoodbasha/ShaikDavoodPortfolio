import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Framer1 } from './components/Framer1'
import { About } from './components/About'
import { Skills } from './components/Skills'
import Projects from './components/Projects'
import ModeloneMain from './components/ModeloneMain'
import { Certifications } from './components/Certifications'
import AboutmeThree from './components/AboutmeThree'
import Footer from './components/Footer'
import MainTwo from './components/MainTwo'
import Change from './components/Change'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Framer1 />
      <AboutmeThree />
      <About />
      <ModeloneMain />
      <Skills />
      <Change />
      <Projects />
      <Certifications />
      <MainTwo />
      <Footer />
    </div>
  )
}

export default App