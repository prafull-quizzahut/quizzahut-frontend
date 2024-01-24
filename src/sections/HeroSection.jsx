import React from 'react'

const HeroSection = () => {
  return (
    <section className='max-w-[1500] w-full flex flex-col md:flex-row h-[50dvh] bg-red-200 '>

    <div className="description w-full md:w-1/2 p-6 bg-slate-200 h-full  md:px-20 flex flex-col justify-center items-center ">
        
        <h1 className='font-bold text-4xl my-8 '>Hello World...</h1>
        <p>Unlock Your Potential with QuizzaHut: <br />
A Student-Driven Quiz Community!</p>
        <button className='px-8 py-3 bg-sky-300 my-4 rounded-full hover:bg-sky-300' >Learn More...</button>

    </div>
    <div className="hero w-full md:w-1/2 bg-slate-600 h-72">

        

    </div>

    </section>
  )
}

export default HeroSection