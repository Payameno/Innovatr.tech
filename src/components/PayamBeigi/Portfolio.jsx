import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header';
import SkillsBlock from './Skills';
import ProjectsBlock from './Projects';
import About from './About';
import Contact from './Contact';


const PayamBeigi = () => {

  return (
    <div id='Home'>
      <Navbar/>
        <Header/>
        <About />
        <SkillsBlock />
        <ProjectsBlock />
        <Contact />
      <Footer/>
    </div>
  )
}

export default PayamBeigi
