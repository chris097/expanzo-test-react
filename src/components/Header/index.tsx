'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faPen } from '@fortawesome/free-solid-svg-icons';
import logo from '@/public/svgs/white-logo.svg';

interface IHeader {
    hasLogo?: boolean
}

const MobileNav = () => {
    return (
        <div>Hello world</div>
    )
}

const Header: React.FC<IHeader> = ({ hasLogo = false }) => {
    const [mobileNav, setMobileNav] = useState<boolean>(false);
    
    return (
        <>
            {mobileNav && <MobileNav />}
            <div className='bg-main-1 flex items-center justify-between md:px-10 px-5 py-5'>
                <div className='flex items-center gap-10'>
                    <FontAwesomeIcon onClick={() => setMobileNav(!mobileNav)} className='h-8 text-main-8' icon={faBars} />
                    <nav className='md:flex text-sm hidden gap-8 text-white font-medium'>
                        <Link href='/'>DASHBOARD</Link>
                        <Link href='/pages/contact-us'>CONTACT</Link>
                    </nav>
                </div>
                {hasLogo === true && <Image className='md:flex hidden' src={logo} alt='expanzo logo' />}
                <div className='md:flex hidden items-center gap-2 whitespace-nowrap text-sm text-main-9'>
                    <div className='bg-main-6 px-2.5 py-2 rounded-full'>
                        <FontAwesomeIcon className='h-4 w-4 text-white' enableBackground="true" icon={faUser} />
                    </div>
                    <span>LOGIN</span>
                    <div className='bg-main-6 px-2.5 py-2 ml-5 rounded-full'>
                        <FontAwesomeIcon className='h-4 w-4 text-white' enableBackground="true" icon={faPen} />
                    </div>
                    <span>REGISTRATION</span>
                </div>
            </div>
        </>
    );
};

export default Header;