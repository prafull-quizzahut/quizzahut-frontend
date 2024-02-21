import React from 'react'
import DevCarousel from '../../../components/Carousel/DevCarousel'

const Developers = () => {
  return (
    <section className='container mx-auto pt-6 md:py-4 md:mt-6' >

    <h2 className='mx-auto text-center text-xl md:text-3xl font-medium'>Developers Team</h2>

    <DevCarousel data={[1,2,3,4,5,6]} />
</section>
  )
}

export default Developers