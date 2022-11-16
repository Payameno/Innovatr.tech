import React from 'react';
import { useState } from 'react'
import { send } from 'emailjs-com';
import validator from 'validator';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import '../../styles/contact.css'

const Contact = () => {

  //message is sent to owner using Emailjs Library
  const [displayForm, setDisplayForm] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Payam Beigi',
    message: '',
    reply_to: '',
  });
  
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_6tnof2i',
      'template_b3olqj8',
      toSend,
      'G0gSl0CqmeraXd9yB'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
      setDisplayForm(false);
  };

  const resendMessage = () => {
    setDisplayForm(true);
    setToSend({
      from_name: '',
      to_name: 'Payam Beigi',
      message: '',
      reply_to: '',
    });
  }
  
  const handleChange = (e) => {

    if (e.target.name === "reply_to") {

      setToSend({ ...toSend, [e.target.name]: e.target.value });
      const email = e.target.value;

      if (validator.isEmail(email)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    } else {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className='contact-section'>
      <div className='contact-message-body'>
        <p className='contact-title'>Let's Connect!</p>
        <p className='contact-message'>
        I'd love to get connected!
        Please feel free to send me a message and I'll get back to you shortly...
        </p>
      </div>
        {displayForm ? 
      <div>
                <Box
                className='contact-form'
                onSubmit={onSubmit}
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '75ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    <TextField 
                    color="secondary" 
                    required label="Full Name" 
                    value={toSend.from_name}
                    name='from_name'
                    onChange={handleChange}
                    /><br />
                      <TextField 
                      color="secondary" 
                      required label="Email"
                      value={toSend.reply_to}
                      name='reply_to'
                      onChange={handleChange}
                      />
                    <br />
                    <TextField 
                    color="secondary" 
                    multiline
                    rows={4}
                    required 
                    label="Message"
                    value={toSend.message}
                    name='message'
                    onChange={handleChange}
                    /><br />
                    {disabled? 
                      <Button
                      disabled
                      color="secondary" 
                      className="contact-button"
                      type="submit" 
                      endIcon={<SendIcon />}
                      variant="contained" 
                      size="large"
                      >Submit
                      </Button>
                    :
                    <Button
                    color="secondary" 
                    className="contact-button"
                    type="submit" 
                    endIcon={<SendIcon />}
                    variant="contained" 
                    size="large"
                    >Submit
                    </Button>
                    }

                </Box> 

      </div>
        :
      <div className='contact-form-submitted'>
        <p>Thank you! I will get back to you as soon as possible...</p>
        <Button onClick={resendMessage} color="secondary" variant="contained">Send another message</Button>
      </div>
        }
    </div>
  )
}

export default Contact
