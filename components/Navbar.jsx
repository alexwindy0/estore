import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from '../sanity_estore/node_modules/react-icons/ai'; 

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p>
        <Link href="/">Booming Headphones</Link>
      </p>

      <button type='button' className='cart-icon' onClick="">
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Navbar;