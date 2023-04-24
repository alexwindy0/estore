import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from '../sanity_estore/node_modules/react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Booming Headphones All rights reserved</p>

      <p>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer