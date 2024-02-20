import React, { useState } from "react";
import { useRef } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth - 200)
        : container.scrollLeft + (container.offsetWidth - 200);

    // console.log({scrollAmount,"sL":container.scrollLeft,"width":container.offsetWidth});

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative max-w-[1440px] w-full mx-4 ">
      {title && <div className="carouselTitle">{title}</div>}
      <IoMdArrowBack
        className="carouselLeftNav arrow text-2xl text-blue-500 bg-white p-4 w-14 h-14 rounded-full absolute -translate-y-2/4 cursor-pointer z-[2] hidden top-[44%] md:block transition-all hover:scale-110 -left-4 shadow-even"
        onClick={() => navigation("left")}
      />
      <IoMdArrowForward
        className="carouselRightNav arrow text-2xl text-blue-500 bg-white p-4 w-14 h-14 rounded-full absolute -translate-y-2/4 cursor-pointer z-[2] hidden top-[44%] md:block transition-all hover:scale-110 -right-4 shadow-even"
        onClick={() => navigation("right")}
      />
      {
        <div
          className="carouselItems px-14 flex overflow-x-scroll gap-2.5 overflow-y-hidden py-4 mx-auto  "
          ref={carouselContainer}
        >
          <div className="w-[250px] h-[150px] m-2 shrink-0 border-2 border-slate-500 max-sm:w-[150px] max-sm:h-[100px] bg-sky-200 rounded-md">
            1
          </div>
          <div className="w-[250px] h-[150px] m-2 shrink-0 border-2 border-slate-500 max-sm:w-[150px] max-sm:h-[100px] bg-sky-200 rounded-md">
            2
          </div>
          <div className="w-[250px] h-[150px] m-2 shrink-0 border-2 border-slate-500 max-sm:w-[150px] max-sm:h-[100px] bg-sky-200 rounded-md">
            3
          </div>
          <div className="w-[250px] h-[150px] m-2 shrink-0 border-2 border-slate-500 max-sm:w-[150px] max-sm:h-[100px] bg-sky-200 rounded-md">
            4
          </div>
          <div className="w-[250px] h-[150px] m-2 shrink-0 border-2 border-slate-500 max-sm:w-[150px] max-sm:h-[100px] bg-sky-200 rounded-md">
            5
          </div>
          <div className="w-[250px] h-[150px] m-2 shrink-0 border-2 border-slate-500 max-sm:w-[150px] max-sm:h-[100px] bg-sky-200 rounded-md">
            6
          </div>
        </div>
      }
    </div>
  );
};

export default Carousel;
