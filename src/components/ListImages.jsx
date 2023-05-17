import React from 'react'
import { useState } from 'react'

export default function ListImages() {

  const [images, setImages] = useState([
    {
      mobile: 'images/mobile/image-deep-earth.jpg',
      text: 'Deep Earth'
    },
    {
      mobile: 'images/mobile/image-night-arcade.jpg',
      text: 'Night Arcade'
    },
    {
      mobile: 'images/mobile/image-soccer-team.jpg',
      text: 'Soccer Team VR'
    },
    {
      mobile: 'images/mobile/image-grid.jpg',
      text: 'The Grid'
    },
    {
      mobile: 'images/mobile/image-from-above.jpg',
      text: 'From Up Above VR'
    },
    {
      mobile: 'images/mobile/image-pocket-borealis.jpg',
      text: 'Pocket Borealis'
    },
    {
      mobile: 'images/mobile/image-curiosity.jpg',
      text: 'The Curiosity'
    }
    
    
  ])

  return (
    <>
      {images.map((image, index) => (
        <div key={index} className='my-3 max-w-xl px-6 relative sm:hidden'>
          <div className='relative'>
            <div className='h-40 w-full'>
              <img className='h-full w-full' src={image.mobile} alt="images" />
            </div>
            <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-900/50 to-transparent'></div>
          </div>
          <h1 className='text-xl text-gray-200 font-josefin uppercase absolute bottom-7 left-10 w-1/3'>{image.text}</h1>
        </div>
      ))}
    </>

  )
}
