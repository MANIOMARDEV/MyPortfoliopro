import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer/footer.jsx'
import Hero from './sections/Hero.jsx'
import LogoSection from './components/LogoSection.jsx'
import NavBar from './components/NavBar.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Experience from './sections/ExpereinceSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Testimonials from './sections/Testimonials.jsx'
import ResumeSection from './sections/ResumeSection.jsx'
import AboutMeSection from './sections/AboutMeSection.jsx'

function App() {


  return (
    <div>
      {/* <h1 className='text-3xl underline'>My Portfolio</h1> */}
      <NavBar />
      <Hero />
      <LogoSection/>
      <ShowcaseSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <AboutMeSection />
      <ResumeSection />
      <Footer />
    </div>
  );
}

export default App
