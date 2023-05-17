import React from 'react'
import ListImages from './ListImages'
import ListImagesDesktop from './ListImagesDesktop'

export default function MainContent() {
  return (
    <>
      <div className='relative mt-20 px-6 flex flex-col md:flex-row md:mx-40 md:my-28 w-auto md:min-w-1/2 md:px-0 '>
        <img className='md:hidden' src='/images/mobile/image-interactive.jpg' alt="" />
        <img className='hidden md:block' src="/images/desktop/image-interactive.jpg" alt="" />
        <div className='md:w-1/2 md:pl-20 bg-gray-100 md:absolute bottom-0 right-0'>
          <h1 className='text-4xl uppercase font-josefin py-8 mt-8 text-center md:text-left xl:text-4xl'>the leader in interactive vr</h1>
          <p className='text-dark-gray text-center text-md md:text-left line leading-7'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>   
        
      </div>
      <div className='flex flex-col md:flex-row  md:mx-40 w-auto'
      >
        <div className='flex flex-col md:flex-row md:justify-between md:w-full md:items-center'>
          <h1 className='text-4xl uppercase font-josefin py-6 mt-12 mb-4 text-center md:text-4xl md:mt-0 sm:mb-16'>our creations</h1>
          <ListImages />
          <button className='border border-black uppercase self-center py-2 px-8 mt-7 mb-20 tracking-widest cursor-pointers sm:mt-0'>See all</button>
        </div>
      </div>
      <ListImagesDesktop />
    </>
  )
}
