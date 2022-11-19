import React from 'react';
import Web2 from './Web2';
import Web3 from './Web3';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../../styles/projects.css'

export default function ProjectsBlock() {
  
  const [alignment, setAlignment] = React.useState('web2');
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  let page;
  if (alignment === "web2") {
    page = <Web2 />
      } else {
        page = <Web3 />
      }
  
  return (
    <>
    <div id='Projects' className='project-container'>
      <div className='project-header'>
        <div className='section-title'>Development Projects</div>
        <div className='toggle-button'>
        <ToggleButtonGroup
        className='toggle-button-cell'
        color="secondary" 
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        >
        <ToggleButton default value="web2">Web 2.0</ToggleButton>
        <ToggleButton value="web3">Web 3.0</ToggleButton>
        </ToggleButtonGroup>
        </div>
      </div>

    </div>
        {page}
    </>
  )
}