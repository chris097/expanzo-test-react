'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faPen, faClose } from '@fortawesome/free-solid-svg-icons';
import logo from '@/public/svgs/white-logo.svg';

interface IHeader {
    hasLogo?: boolean
}

const MobileNav = ({handleClick}: any) => {
    return (
        <div className='bg-main-5 h-screen w-full fixed top-0 left-0 z-50'>
            <button onClick={handleClick} type='button' className='flex mt-4 justify-end w-[94%] outline-none'>
                <FontAwesomeIcon className='w-6 h-6' icon={faClose} />
            </button>
            <div className='flex flex-col items-center mt-14 h-full gap-10'>
                <Link href='/'>DASHBOARD</Link>
                <Link href='/pages/contact-us'>CONTACT</Link>
                <div className='flex items-center gap-2 whitespace-nowrap text-sm'>
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
        </div>
    );
};

const Header: React.FC<IHeader> = ({ hasLogo = false }) => {
    const [mobileNav, setMobileNav] = useState<boolean>(false);
    
    return (
        <>
            {mobileNav && <MobileNav handleClick={() => setMobileNav(!mobileNav)} />}
            <div role='header' className='bg-main-1 flex items-center justify-between md:px-10 px-5 py-5'>
                <div className='flex items-center gap-10'>
                    <FontAwesomeIcon className='h-8 text-main-8 md:block hidden' icon={faBars} />
                    <FontAwesomeIcon onClick={() => setMobileNav(!mobileNav)} className='h-8 md:hidden block text-main-8' icon={faBars} />
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