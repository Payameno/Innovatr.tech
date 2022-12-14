import React from 'react';
import { useState } from 'react'
import '../../styles/projects.css'
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Web3 = () => {
  
  //State: project showcase image transition to left or right
  const [P1, setP1] = useState(null)


  //State: Display stack and info button - project showcase
  const [descp1, setdescp1] = useState(null)

  const handleHoverLeftP1 = () => {
    P1 ? setP1(null) : setP1("hover-left");
    descp1 ? setdescp1(null) : setTimeout(() => setdescp1(true), 500);
  }

  return (
    <div className='project-container'>
      <div className={`project-block`}>
        <div className="inner-container s1 border background-reverse">
            {descp1 && 
          <div className='stack-info-left' >
                <img className='stack-icon' src='https://jbridges1119.net/static/media/mui.5b2d8a0a309d9f7d47c1.png' />
                <img className='stack-icon' src='data:image/png;base64,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' />
                <img className='stack-icon' src='https://jbridges1119.net/static/media/REACT.283f9f863581bb226e65.png' />
                <Button className='info-button' color="secondary" variant="contained">More Info</Button>
          </div>
            }
          <div className={`image-card-left ${P1}`}>
            <img className={`gif-showcase`} src='/media/img/portfolio.gif' alt='testing' onClick={handleHoverLeftP1} />
          </div>
          <div className="description-card-right background-reverse">
            <div className='project-description-container'>
              <div className='project-title text-reverse'> Portfolio</div>
              <div className='project-description text-reverse'>
                My portfolio built with React.js. Incorporated an extensive varity of stylings, designs, and effects to enhance my front-end skills.
              </div>
              <div className='button-wrapper background text'>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Web3
