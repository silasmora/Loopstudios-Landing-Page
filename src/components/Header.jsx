import React from 'react'
import logo from '/images/logo.svg'
import hamburger from '/images/icon-hamburger.svg'
import ListItems from './ListItems'


export default function Header({handleClick}) {

  return (
    <header className='bg-image-hero bg-cover h-[650px] py-10 px-8 md:bg-image-hero-desktop md:bg-center sm:px-40 sm:py-20'
    >
      <div className='flex justify-between items-center text-gray-100'>
        <img className='w-1/2 md:w-1/6' src={logo} alt="loopstudios-logo" />
        <img onClick={handleClick} className='h-4  md:hidden' src={hamburger} alt="hamburger-icon" />
        <ul className='hidden md:flex gap-8 font-normal cursor-pointer'>
          <ListItems />
        </ul>
      </div>
      
      <div className='mt-6 mb-16'>
        <div className='border-2 border-white my-32 p-6 md:w-1/2'>
            <h1 className='font-josefin uppercase text-white text-4xl md:text-3xl lg:text-4xl xl:text-6xl '>immersive experiences <br />that deliver</h1>
        </div>
      </div>

    </header>
  )
}
