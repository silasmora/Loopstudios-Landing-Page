import React from 'react'
import { useState } from 'react'

export default function ListImagesDesktop() {

  const [images, setImages] = useState([
    {
      desktop: 'images/desktop/image-deep-earth.jpg',
      text: 'Deep Earth'
    },
    {
      desktop: 'images/desktop/image-night-arcade.jpg',
      text: 'Night Arcade'
    },
    {
      desktop: 'images/desktop/image-soccer-team.jpg',
      text: 'Soccer Team VR'
    },
    {
      desktop: 'images/desktop/image-grid.jpg',
      text: 'The Grid'
    },
    {
      desktop: 'images/desktop/image-from-above.jpg',
      text: 'From Up Above VR'
    },
    {
      desktop: 'images/desktop/image-pocket-borealis.jpg',
      text: 'Pocket Borealis'
    },
    {
      desktop: 'images/desktop/image-curiosity.jpg',
      text: 'The Curiosity'
    },
    {
      desktop: 'images/desktop/image-fisheye.jpg',
      text: 'Make It Fisheye'
    }
  ])

  return (
    <div className='hidden m-40 sm:grid sm:grid-cols-4 gap-4 mt-0'>
    {images.map((image, index) => (
      <div key={index} className='relative'>
        <img src={image.desktop} alt="desktop-images" className='w-full' />
        <h1 className='sm:text-sm md:text-lg lg:text-2xl xl:text-3xl text-white font-josefin uppercase absolute bottom-7 left-10 w-[70%]'>{image.text}</h1>
        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-900/25 to-transparent'></div>
      </div>
    ))}
    </div>

  )
}
