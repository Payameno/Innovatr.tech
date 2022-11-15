import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header';
import ProjectsBlock from './Projects';
import About from './About';
import Contact from './Contact';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const PayamBeigi = () => {
  return (
    <div>
      <Navbar/>
      <Box component="main">
        <Toolbar />
        <Typography>
          <Header/>
          <About />
          <Box sx={{ p: 3 }}>
            <h1>Section2</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
          at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
          Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
          numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
          asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
          assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
          soluta accus
          </Box>
        </Typography>
      </Box>
        <ProjectsBlock />
        <Contact />
      <Footer/>
    </div>
  )
}

export default PayamBeigi
