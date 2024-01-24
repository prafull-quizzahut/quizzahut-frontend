import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { MdQuiz } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

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
    <header className=" max-w-[1550px] mx-auto w-full h-20 bg-[#ffffff] text-slate-800 flex justify-between items-center shadow-md  ">
      <div className="logo h-full ml-8 shrink-0">
        <img
          src="https://raw.githubusercontent.com/prafull-quizzahut/quizzahut-design/30cf68e4c2a9db59275bb492d611c6eb34db2ec6/Logo%20Assets/Group%201.svg"
          alt="QuizzaHut"
          className="h-full"
          width={150}
        />
      </div>
              
      <ul
        className={`transition duration-500 flex-1 flex relative justify-center items-center gap-8 max-lg:flex-col max-lg:items-end max-lg:gap-10 max-lg:fixed max-lg:top-[5%] max-lg:right-[15%] ${
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
          <a
            href="#"
            className="flex items-center gap-2 leading-normal font-medium text-lg text-slate-800 text- hover:text-sky-800  hover:bg-blue-100 py-2 px-4 rounded-full transition-all duration-500 bg-blue-100"
          >
            <IoMdHome/> Home
          </a>
        </li>

        <li className="h-full max-lg:w-full ">
          <a
            href="#"
            className="flex items-center gap-2 leading-normal font-medium text-lg text-slate-800 text- hover:text-sky-800  hover:bg-blue-100 py-2 px-4 rounded-full transition-all duration-500"
          >
            <MdQuiz /> Quizzes
          </a>
        </li>

        <li className="h-full max-lg:w-full ">
          <a
            href="#"
            className="flex items-center gap-2 leading-normal font-medium text-lg text-slate-800 text- hover:text-sky-800  hover:bg-blue-100 py-2 px-4 rounded-full transition-all duration-500"
          >
            <FaTelegramPlane /> Telegram
          </a>
        </li>

        <li className="h-full max-lg:w-full ">
          <a
            href="#"
            className="flex items-center gap-2 leading-normal font-medium text-lg text-slate-800 text- hover:text-sky-800  hover:bg-blue-100 py-2 px-4 rounded-full transition-all duration-500"
          >
            <IoIosContact /> Contact
          </a>
        </li>

        <li className="h-full max-lg:w-full ">
          <a
            href="#"
            className="flex items-center gap-2 leading-normal font-medium text-lg text-slate-800 text- hover:text-sky-800  hover:bg-blue-100 py-2 px-4 rounded-full transition-all duration-500"
          >
            <GrCircleInformation /> About
          </a>
        </li>
      </ul>

      <div className="flex h-full items-center justify-center mr-8 ">
        <div
          className={`hidden max-lg:flex cursor-pointer duration-1000 mx-8  w-10   items-center justify-center ${
            hamOpen && "hidden "
          } `}
          onClick={toggleHamButton}
        >
          {hamIcon}
        </div>
        <div className="user flex justify-center items-center m-2 px-4 h-1/2 rounded-full bg-blue-100  gap-3 cursor-pointer">
          <FaUser />
          {"User"}
          <IoIosArrowDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
