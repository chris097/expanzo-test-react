import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapSigns} from '@fortawesome/free-solid-svg-icons';

const ContactUS = () => {
  return (
    <div className='h-screen overflow-x-hidden relative'>
      <Header hasLogo={true} />
      <div className='md:w-[35%] w-[90%] mx-auto mt-32'>
        <h2 className='text-center font-bold text-lg text-main-11'>Contact</h2>
        <div className='flex justify-between text-base text-main-4 mt-3'>
          <div>
            <FontAwesomeIcon className='h-5 text-main-8' icon={faMapSigns} /> <span className='font-medium text-base'>Headquater</span>
            <p className='mt-6'>DHO s.r.o</p>
            <p>Bor&#771;ivojova 878/35</p>
            <p>130 00 Praha 3</p>
          </div>
          <div>
            <FontAwesomeIcon className='h-5 text-main-7 mr-1' icon={faEnvelope} /> <span>Email</span>
            <p className='mt-6'>info@expanzo.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUS;