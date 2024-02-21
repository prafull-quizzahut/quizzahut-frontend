import React from 'react'
import QuizzCarousel from '../../../components/Carousel/QuizzCarousel'
import { topQuizzes } from '../../../utils/constants'
const Quizes = () => {
  return (
    <section className='container mx-auto pt-10 md:py-12 md:mt-10' >

        <h2 className='mx-auto text-center text-xl md:text-3xl font-medium'>Top Quizzes</h2>

        <QuizzCarousel data={topQuizzes} />
    </section>
  )
}

export default Quizes