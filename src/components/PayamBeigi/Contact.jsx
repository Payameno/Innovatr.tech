import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <form>
      <TextField label="Full Name" />
      <TextField label="Email"/>
      <TextField label="Message"/>
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Contact
