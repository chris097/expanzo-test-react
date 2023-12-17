import React from 'react'
import Logo from '../Logo';

const Footer = () => {
  return (
    <div className='mt-36 bg-main-5 md:h-64 h-auto py-10 absolute w-full bottom-0'>
      <div className='md:w-[70%] mx-auto flex md:flex-row flex-col md:justify-between justify-center h-full items-center'>
        <Logo />
        <div className='md:pr-32 md:font-bold md:text-lg text-sm flex gap-5 md:mt-0 mt-10 md:gap-14'>
          <p>CONTACTS</p>
          <p>PHONES</p>
          <p>TOP SEARCH</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;