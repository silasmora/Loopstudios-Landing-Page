import React from 'react'
import logo from '/images/logo.svg'
import close from '/images/icon-close.svg'
import ListItems from './ListItems'

export default function MobileMenu({handleClick, isMenuOpen}) {
  return (
    <div className='bg-black fixed top-0 right-0 bottom-0 left-0'>
      <div className='flex flex-col px-8 py-16'>
        <div className='flex justify-between mb-40'>
          <img src={logo} alt="logo" />
          <img onClick={handleClick} className='w-6 h-6' src={close} alt="close" />
        </div>
        <div className='self-start font-josefin text-left'>
          <ListItems isMenuOpen={isMenuOpen}/>
        </div>
      </div>
    </div>
  )
}
