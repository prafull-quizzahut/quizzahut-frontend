import React from 'react'
import Carousel from '../components/Carousel'

const CarouselSection = ({label}) => {
  return (
    <div className='w-full mx-auto my-10 overflow-y-hidden relative max-md:top-30 shadow-lg py-5  '>
        <h1 className='text-center text-3xl font-bold my-4 '>{label}</h1>
        <Carousel/>

    </div>
  )
}

export default CarouselSection