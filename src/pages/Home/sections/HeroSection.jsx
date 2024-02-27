import React from "react";
import Link from "antd/es/typography/Link";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import logo from "../../../assets/Logos/QuizzaHutLogo.svg";
import HeroImage from "../../../assets/HeroImage/HeroImage";

export const HeroSection = () => {
  return (
    <section className="relative w-full flex justify-between mx-auto flex-col md:flex-row px-5 md:px-20 bg-gradient-to-br from-slate-50 via-sky-200 to-sky-100">
      <div className="relative md:w-2/5  flex flex-col justify-center items-start w-full max-md:padding-x pt-10 ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Ultimate Quiz Series
        </p>
        <h1 className=" font-palanquin text-6xl max-sm:text-[55px] max-sm:leading-[60px] font-bold z-1 max-lg:z-0 leading-12 ">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10 rounded-full text-5xl ">
            To Enhance <br /> Knowledge
          </span>
          <br />
          <span className="max-sm:text-4xl text-6xl inline-block mt-3 pr-3 text-slate-600">
            Have QuizzaHut
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-8 sm:max-w-sm ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          praesentium, id quidem ipsum unde omnis obcaecati. Repellendus tenetur
          cumque pariatur distinctio nostrum!
        </p>

        <button className="bg-sky-500 mb-6 hover:bg-sky-600 transition-all active:scale-90  rounded-full text-xl font-semibold py-3 px-8 text-white ">
          {" "}
          Register Now
        </button>
      </div>

      <div className="w-full md:w-2/4 shrink-0 flex scale-90 pr-10">
        <HeroImage />
      </div>
    </section>
  );
};
