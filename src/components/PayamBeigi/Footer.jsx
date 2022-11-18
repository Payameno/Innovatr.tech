import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../../styles/footer.css'

const Footer = () => {
  return (
    <>

    <div className='footer'>
      <div className='footer-text'>© 2022 Payam Beigi</div>
      {/* <div className='scroll-up' >
        <a href='payambeigi#header'><img className='arrow-up' src='/media/icons/arrow-up.png'/></a>
      </div> */}
      <div>
        <a href="payambeigi#header" class="shadow btn-primary rounded-circle back-to-top">
          <KeyboardArrowUpIcon fontSize="large" />
        </a>
      </div>

    </div>
    </>
  )
}

export default Footer
