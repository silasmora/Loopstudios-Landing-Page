import React from 'react'
import { useState } from 'react'

export default function ListItems({isMenuOpen}) {

  const [items, setItems] = useState(['About', 'Careers', 'Events', 'Products', 'Support'])

  return (
    <>
      {items.map((item, index) => (
        <li className={`relative text-sm list-none text-gray-100 text-center cursor-pointer mt-6 sm:mt-0 ${
          isMenuOpen ? 'text-start text-3xl uppercase pt-6' : ''
        }`} 
        key={index}>
        <span className='before:absolute before:w-0 before:-bottom-2 before:left-0 before:h-0.5 before:bg-white before:duration-500 ease-in-out hover:before:w-full'>{item}</span>
        </li>
      ))}
    </>
  )
}
