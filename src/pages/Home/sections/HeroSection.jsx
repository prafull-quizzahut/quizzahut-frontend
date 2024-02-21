import React from "react";
import Link from "antd/es/typography/Link";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import logo from '../../../assets/Logos/QuizzaHutLogo.svg'

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container px-5 md:px-20"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-10 md:pt-20 ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Ultimate Quiz Series
        </p>
        <h1 className=" font-palanquin text-6xl max-sm:text-[55px] max-sm:leading-[60px] font-bold z-1 max-lg:z-0 leading-12 ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 rounded-full text-5xl ">
            
            To Enhance <br /> Knowledge
          </span>
          <br />
          <span className="text-coral-red max-sm:text-5xl text-6xl inline-block mt-3 pr-3 text-slate-600">
            Have QuizzaHut
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          praesentium, id quidem ipsum unde omnis obcaecati. Repellendus tenetur
          cumque pariatur distinctio nostrum! Nihil ipsam ipsum eius doloribus
          architecto, repellat nemo!
        </p>
      </div>

      <div className="bg-slate-300 relative flex-1 flex justify-center items-center max-xl:py-20 bg-primary bg-hero bg-center bg-cover">
        <img
          src={logo}
          alt="quizzahut"
          width={610}
          height={500}
          className="object-contain relative "
        />

        <div className="flex gap-4 sm:gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          <img src={logo} alt="" />
        </div>
      </div>
    </section>
  );
};
