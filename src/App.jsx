import React from 'react'
import "./App.css"

// files
import Header from "./components/Header.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Hero from "./components/Hero.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Footer from "./components/Footer.jsx"


const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Contact />
    <Projects />
    <Footer />
    </>
  )
}

export default App