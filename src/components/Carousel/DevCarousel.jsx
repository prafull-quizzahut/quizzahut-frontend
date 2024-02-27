import React, { useRef, useState } from "react";
// import ContentWrapper from "../ContentWrapper/ContentWrapper";
import "./style.scss";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { IoMdArrowBack, IoMdArrowForward, IoMdMail } from "react-icons/io";
import { FacebookFilled } from "@ant-design/icons";

function DevCarousel({ data }) {
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
        className="carouselItems shadow-inner w-11/12 flex gap-2.5 sm:gap-8 py-4 mx-auto overflow-x-scroll overflow-y-hidden "
        ref={carouselContainer}
      >
        {data?.map((details) => {
          return (
            <>
              <div className="card shadow-lg  card-one min-w-72 rounded-md border-2 ">
                <header>
                  <div className="avatar">
                    <img
                      // src="https://avatars.githubusercontent.com/u/14923323?s=400&u=f513c9eba3cfc3e90bb67ac6859631244cc774af&v=4"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg"
                      alt="Jhon Doe"
                      
                    />
                  </div>
                </header>

                <h3>Jhon Doe</h3>
                
                <div className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit et
                  cupiditate deleniti.
                </div>
                {/* <div className="contacts">
                  <a href="">
                    <FacebookFilled/>
                  </a>
                  <a href="">
                   <FaGithub/>
                  </a>
                  <a href="">
                    <IoMdMail/>
                  </a>
                  <div className="clear"></div>
                </div>

                <footer>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram"></i>
                  </a>
                </footer> */}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default DevCarousel;
