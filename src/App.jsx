import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './sections/HeroSection'
import CarouselSection from './sections/CarouselSection'
import Carousel from './components/Carousel'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>

        <Header/>
        <HeroSection/>
        <CarouselSection label="Quizes"/>
        <CarouselSection label="Developer Profiles"/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default App