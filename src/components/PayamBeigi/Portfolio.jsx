import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header';
import SkillsBlock from './Skills';
import ProjectsBlock from './Projects';
import About from './About';
import Contact from './Contact';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const PayamBeigi = () => {

  return (

    <div id='Home'>
      <Navbar/>
      <Box component="main">
        <Toolbar />
        <Typography>
          <Header/>
          <About />
        </Typography>
      </Box>
        <SkillsBlock />
        <ProjectsBlock />
        <Contact />
      <Footer/>
    </div>
  )
}

export default PayamBeigi
