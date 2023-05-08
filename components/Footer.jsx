import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Phone Accessories All rights reserved</p>
      <p>Designed by:
        <a href='https://github.com/alexwindy0' target='_'> Alex Windy</a>      
      </p>

      <p>
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineGithub />
      </p>
    </div>
  )
}

export default Footer