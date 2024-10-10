'use client'
import { navbar } from '@/utils/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Set the initial scroll position
    setScrollY(window.scrollY);

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);
  return (
    <div className='w-[100%] sticky top-2 justify-center items-center flex flex-1 p-3 z-20'>
      <div className={`min-w-[60%] h-[auto] flex flex-wrap justify-center items-center gap-6 p-2 rounded-full transition-all ease-in-out delay-700 backdrop-blur-lg backdrop-saturate-200 ${scrollY<100?'bg-[#C92842]':'bg-[#c92843a6]'} text-white `}>
        { 
          navbar.map((item, index) => (
            <Link
              className={`p-[8px] rounded-[20px] px-5 hover:bg-[white] hover:text-[#C92842] ease-in-out transition-all  font-semibold capitalize `}
              href={item.link} key={index}>{item.label}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar