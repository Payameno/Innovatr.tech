import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import '../../styles/about.css'


const About = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      p: 2,
      borderRadius: 0,
    }}
    >
      <Box>
        <img src='https://cdn.sanity.io/images/8qkhegzl/production/aff65217bab1884ba8fb73ca81e13030cd5b37c7-240x320.png'/>
      </Box>
      <Box sx={{ flexgrow: 1}}>
        <p>Here is a little background</p>
        <p>
        I'm Abdulrahman. Over the past couple of years I have been interested in tech and was learning through free resources online such as Youtube, FreeCodeCamp, CodeCademy, etc... In the year 2021 I decided to attend a coding bootcamp; The Lighthouse Labs Web Development Bootcamp, based in CANADA. LHL is the main source of my education and after graduating I had the opportunity to work as a Freelancer for a couple of companies. I also completed some projects of my own, that I am really proud of. Projects that helped me learn a lot more new tech stacks, languages, and libraries. With this motivation, I believe that I am ready to take on what is to come and accomplish my goals in life.
        </p>
      </Box>
    </Box>
  )
}

export default About
