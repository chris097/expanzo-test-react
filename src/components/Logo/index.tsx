import React from 'react';
import Image from 'next/image';
import logo from '@/public/svgs/logo.svg';

const Logo:React.FC = () => {
  return (
     <Image src={logo} alt='expanzo logo' />
  )
}

export default Logo;