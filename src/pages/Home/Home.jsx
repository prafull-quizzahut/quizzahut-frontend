import React from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import Developers from './sections/Developers'
import {HeroSection }from './sections/HeroSection'
import Quizes from './sections/Quizes'

const Home = () => {
  return (
    <div className='w-full mx-auto'>
      <ContentWrapper>
      
        <HeroSection/>
        <Quizes/>
        <Developers/>
      
      </ContentWrapper>
    </div>
  )
}

export default Home