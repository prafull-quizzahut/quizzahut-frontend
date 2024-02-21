import React, { useState } from "react";
import Link from "antd/es/typography/Link";

import { IoIosClose } from "react-icons/io";
import { GrCircleInformation } from "react-icons/gr";
import { MdQuiz } from "react-icons/md";
import { FaTelegramPlane, FaUser } from "react-icons/fa";
import { IoMdHome, IoIosArrowDown, IoIosContact } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import ContentWrapper from "../ContentWrapper/ContentWrapper.jsx";
import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const [hamIcon, sethamIcon] = useState(
    <RxHamburgerMenu className="scale-[150%]" />
  );
  function toggleHamButton() {
    console.log("clicked");

    if (hamOpen) {
      sethamIcon(<RxHamburgerMenu className="scale-[150%]" />);
    } else {
      sethamIcon(<IoIosClose className="scale-[150%] relative" />);
    }
    setHamOpen(!hamOpen);
  }

  return (
    // <ContentWrapper className="w-full">
    

    <div className="w-full h-20 top-0 bg-white bg- shadow-sm ">
      <ContentWrapper>
        <header className="w-full sticky top-0 z-[99999]  h-20  text-slate-800 flex justify-between items-center ">
          <div className="logo h-full ml-8 shrink-0">
            <img
              src="https://raw.githubusercontent.com/prafull-quizzahut/quizzahut-design/30cf68e4c2a9db59275bb492d611c6eb34db2ec6/Logo%20Assets/Group%201.svg"
              alt="QuizzaHut"
              className="h-full"
              width={150}
            />
          </div>
          <ul
            className={`transition duration-500 flex-1 flex relative justify-center items-center gap-8 max-lg:flex-col max-lg:items-end max-lg:gap-10 max-lg:fixed max-lg:top-[5%] max-lg:right-[15%] z-[20] ${
              !hamOpen
                ? "max-lg:translate-x-[200%]"
                : "max-lg:-translate-x-[15px] max-lg:-translate-y-[15px] "
            } max-lg:w-[250px] max-lg:p-10 max-lg:rounded-[10px] max-lg:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] max-lg:bg-white max-lg:z-30 max-lg:font-medium`}
          >
            {/* // NavLinks  */}
            <div
              className={`close absolute top-5 right-5 cursor-pointer  ${
                hamOpen ? "flex " : "hidden "
              }`}
              onClick={toggleHamButton}
            >
              {hamIcon}
            </div>
            <li className="h-full max-lg:w-full ">
              <NavLink to="/" className={`nav-item `}>
                <IoMdHome /> Home
              </NavLink>
            </li>
            <li className="h-full max-lg:w-full ">
              <NavLink to="/quizzes" className="nav-item  ">
                <MdQuiz /> Quizzes
              </NavLink>
            </li>
            <li className="h-full max-lg:w-full ">
              <NavLink to="/telegram" className="nav-item  ">
                <FaTelegramPlane /> Telegram
              </NavLink>
            </li>
            <li className=" h-full max-lg:w-full ">
              <NavLink to="/contact" className="nav-item  ">
                <IoIosContact /> Contact
              </NavLink>
            </li>
            <li className="h-full max-lg:w-full ">
              <NavLink to="/about" className="nav-item  ">
                <GrCircleInformation /> About
              </NavLink>
            </li>
          </ul>
          <div className="flex h-full items-center justify-center mx-4 ">
            <div className="user flex justify-center items-center m-2 px-4 h-1/2 rounded-full bg-blue-100  gap-3 cursor-pointer">
              <FaUser />
              {"User"}
              <IoIosArrowDown />
            </div>
            <div
              className={`hidden max-lg:flex cursor-pointer duration-1000 mx-4  w-10   items-center justify-center ${
                hamOpen && "hidden "
              } `}
              onClick={toggleHamButton}
            >
              {hamIcon}
            </div>
          </div>
        </header>
      </ContentWrapper>
    </div>
  );
};

export default Header;
