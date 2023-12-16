import React from 'react'
import Logo from '../Logo';

const Footer = () => {
  return (
    <div className='mt-36 bg-main-5 h-64 absolute w-full bottom-0'>
      <div className='w-[70%] mx-auto flex justify-between h-full items-center'>
        <Logo />
        <div className='pr-32 font-bold text-lg flex gap-14'>
          <p>CONTACTS</p>
          <p>PHONES</p>
          <p>TOP SEARCH</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;