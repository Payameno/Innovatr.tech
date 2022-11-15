import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import '../../styles/contact.css'

const Contact = () => {
  return (
    <div className='contact-section'>
      <div className='contact-body'>
        <p className='contact-title'>Let's Connect!</p>
        <p className='contact-message'>
        I'd love to get connected!
        Please feel free to send me a message and I'll get back to you shortly...
        </p>
      </div>
      <div>
        <Box
        className='contact-form'
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '75ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <TextField required label="Full Name" /><br />
            <TextField required label="Email"/><br />
            <TextField 
            multiline
            rows={4}
            required 
            label="Message"/><br />
            <Button
            className="contact-button"
            type="submit" 
            endIcon={<SendIcon />}
            variant="contained" 
            size="large"
            >Submit
            </Button>
        </Box>  
      </div>
    </div>
  )
}

export default Contact
