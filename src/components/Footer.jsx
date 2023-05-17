import React from 'react'
import logo from '/images/logo.svg'
import ListItems from './ListItems'
import facebook from '/images/icon-facebook.svg'
import twitter from '/images/icon-twitter.svg'
import pinterest from '/images/icon-pinterest.svg'
import instagram from '/images/icon-instagram.svg'


export default function Footer() {
  return (
    <div className='bg-black flex flex-col sm:pb-2'>
      <div className='flex flex-col sm:flex-row sm:justify-between mt-20 sm:mt-10 sm:mx-40'>
        <img className='px-20 sm:px-0 sm:w-40' src={logo} alt="logo" />
        <div className='self-center mt-6 sm:hidden'>
          <ListItems />
        </div>
        <div className='self-center mt-16 sm:mt-0 cursor-pointer'>
          <img src={facebook} alt="facebook" className='inline-block mr-4' />
          <img src={twitter} alt="twitter" className='inline-block mr-4' />
          <img src={pinterest} alt="pinterest" className='inline-block mr-4' />
          <img src={instagram} alt="instagram" className='inline-block' />
        </div>
      </div>
      <div className='sm:flex justify-between sm:mx-40'>
        <div className='hidden sm:flex gap-8 sm:my-6'>
          <ListItems />
        </div>
        <p className='text-very-dark-gray my-6 text-center'><span>&copy;</span> 2021 Loopstudios. All rights reserved.</p>
      </div>
    </div>
  )
}
