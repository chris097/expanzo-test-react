import React from 'react';
import Image from 'next/image';
import logo from '@/public/svgs/logo.svg';

const Logo:React.FC = () => {
  return (
     <Image className='md:w-[225.46px] md:h-full w-44' src={logo} alt='expanzo logo' />
  )
}

export default Logo;