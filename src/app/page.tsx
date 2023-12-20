'use client'
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Logo from '@/components/Logo';

interface ITabProps {
  name: string
}

const tabs: ITabProps[] = [
  {name: 'All'}, {name: 'Companies'}, {name: 'Phones'}
];

export default function Home() {

  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <main className='h-screen overflow-x-hidden relative'>
      <Header />
      <div className='flex flex-col justify-center items-center mt-24'>
        <Logo />
        <div className='flex items-center gap-16 md:mt-20 mt-14'>
          {tabs.map((tab, index) => (
            <div
              role='tab'
              onClick={() => setActiveTab(index)}
              className={`text-xl pb-1.5 
              ${activeTab === index ?
                  'text-main-1 border-main-1 border-b-[1.7px]' : 'border-b-[1.5px] border-main-10 text-main-10 '} 
                  font-bold md:w-32 text-center rounded-sm cursor-pointer transition-all duration-100 delay-100 ease-in-out`}
              key={index}>
              {tab.name}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};
