import React from "react";

const HeroSection = () => {
  return (
    <section className="max-w-[1500] w-full flex flex-col md:flex-row h-fit min-h-[50vh] shadow-2xl ">
      <div className="description relative w-full md:w-1/2 p-6 md:min-h-full  md:px-20 flex flex-col justify-center items-center lg:justify-start ">
        <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-slate-100 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#a2d8ff"
              fill-opacity="1"
              d="M0,320L80,298.7C160,277,320,235,480,197.3C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>

        <h1 className="font-bold text-4xl my-8 ">Hello World...</h1>
        <p>
          Unlock Your Potential with QuizzaHut: <br />A Student-Driven Quiz
          Community!
        </p>
        <button className="px-8 py-3 bg-sky-300 my-4  rounded-full hover:bg-sky-400 transition-all duration-500">
          Learn More...
        </button>
      </div>
      <div className="hero relative w-full  md:w-1/2 bg-slate-500 md:min-h-full   p-6  gap:4  md:px-20 flex flex-col justify-between items-center md:flex-row ">
        {/* <div className="img md:w-1/2 md:h-full shrink-0 max-w-1/2 max-h-full ">
            
        <img src="https://raw.githubusercontent.com/adarshrangare/quizzahut-frontend/main/src/Hero.png" className='p-4 w-full max-h-full min-h-full min-w-full max-w-full ' alt="hero" />
        
        </div> */}


        <div className="login-register">
          <button className="px-8 py-3 max:md:min-h-fit  bg-sky-300 my-4 rounded-full font-medium text-xl hover:bg-sky-400 transition-all duration-500">
            Register for Quizzes
          </button>
          <p className="text-white text-lg font-medium m-2">
            Register Today and Unlock Your Potential!
          </p>
          <span className="text-sm text-blue-500 hover:text-slate-400 cursor-pointer m-3">
            {" "}
            Join with Email{" "}
          </span>
          <br />
          <span className="text-sm text-blue-500 hover:text-slate-400 cursor-pointer m-3">
            {" "}
            Join with WhatsApp{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
