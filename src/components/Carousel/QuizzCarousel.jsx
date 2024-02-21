import React, { useRef, useState } from "react";
// import ContentWrapper from "../ContentWrapper/ContentWrapper";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

function QuizzCarousel({ data }) {
  // console.log(data);
  const carouselContainer = useRef();

  const navigation = (direction) => {
    const container = carouselContainer.current;

    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth - 200)
        : container.scrollLeft + (container.offsetWidth - 200);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    let count = 0;
    count = count + 1;
    return (
      <div className="w-[300px] h-[300px] shrink-0 border-none max-md:w-[270px] max-md:h-[250px] bg-white rounded-2xl">
        {count}
      </div>
    );
  };

  return (
    <div className="container relative w-full my-6 px-4 select-none">
      <IoMdArrowBack
        className="carouselLeftNav arrow text-2xl text-black bg-white p-4 w-14 h-14 rounded-full absolute -translate-y-2/4 cursor-pointer z-[2] hidden top-[44%] md:block transition-all hover:scale-110 left-6 shadow-even"
        onClick={() => navigation("left")}
      />
      <IoMdArrowForward
        className="carouselRightNav arrow text-2xl text-black bg-white p-4 w-14 h-14 rounded-full absolute -translate-y-2/4 cursor-pointer z-[2] hidden top-[44%] md:block transition-all hover:scale-110 right-6 shadow-even"
        onClick={() => navigation("right")}
      />
      <div
        className="carouselItems w-11/12 flex gap-2.5 sm:gap-8 py-4 mx-auto overflow-x-scroll overflow-y-hidden "
        ref={carouselContainer}
      >
        {data?.map((details) => {
          return (
            <div
              className="w-[350px] shadow-lg py-2 h-fit border-2 shrink-0  max-md:w-[270px]  bg-white-200 rounded-2xl"
              key={details.id}
            >
              <div className="p-3 relative">
                <img
                  src={
                    "https://studycafe.in/cdn-cgi/image/fit=contain,format=webp,gravity=auto,metadata=none,quality=80,width=1200,height=730/wp-content/uploads/2023/11/C-dac-2023-Recruitment-for-Post-of-MTS-1.jpg"
                  }
                  className="rounded-2xl  w-[350px] h-[250px]  max-md:w-[270px] max-md:h-[180px] opacity-50"
                />
               

                <div className="w-[150px] h-[72px] absolute bg-[#8bb3d9]  top-[47%] right-6 ">
                <img
                  src="https://raw.githubusercontent.com/prafull-quizzahut/quizzahut-design/30cf68e4c2a9db59275bb492d611c6eb34db2ec6/Logo%20Assets/Group%201.svg"
                  alt=""
                  className="w-28 translate-x-4 translate-y-2 opacity-80"
                />
                </div>
              </div>
              <div>
                <h3 className="text-center font-semibold p-2  rounded-xl">
                  {details.title}
                </h3>
                <h2 className="text-center font-medium p-2 truncate " > {"Section "+details.section} {"- "} {details.subject} </h2>
                <p className="p-2 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex justify-center">
                  <button className="bg-sky-300 max-md:text-sm m-2 p-2 text-slate-800 font-medium rounded-full px-4 py-2">
                    {" "}
                    Take Test
                  </button>
                  <button className="bg-sky-300 max-md:text-sm m-2 p-2 text-slate-800 font-medium rounded-full px-4 py-2">
                    Add to Favorite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuizzCarousel;
