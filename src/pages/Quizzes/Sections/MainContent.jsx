import React from "react";
import quizBanner from "../../../assets/Quizzahut Quiz Banner.png";
const MainContent = ({ className, quizList }) => {
  const { name, topQuizzes } = quizList;
  return (
    <main className={` p-4 ${className} min-h-screen`}>
      <h1 className="text-center text-2xl font-bold uppercase">{name}</h1>

      <div className="w-full flex m-4 gap-4 flex-wrap h-screen overflow-y-scroll pb-10  ">

        {topQuizzes.map((details) => (
          <div
            className="w-[350px] shadow-lg py-2 h-fit border-2 shrink-0  max-md:w-[270px]  bg-white-200 rounded-2xl"
            key={details.id}
          >
            <div className="p-3 relative">
              <img
                // src={
                //   "https://studycafe.in/cdn-cgi/image/fit=contain,format=webp,gravity=auto,metadata=none,quality=80,width=1200,height=730/wp-content/uploads/2023/11/C-dac-2023-Recruitment-for-Post-of-MTS-1.jpg"
                // }
                src={quizBanner}
                className="rounded-2xl  w-[350px] h-[250px]  max-md:w-[270px] max-md:h-[180px] "
              />

              {/* <div className="w-[150px] h-[72px] absolute bg-[#8bb3d9]  top-[47%] right-6 ">
              <img
                src="https://raw.githubusercontent.com/prafull-quizzahut/quizzahut-design/30cf68e4c2a9db59275bb492d611c6eb34db2ec6/Logo%20Assets/Group%201.svg"
                alt=""
                className="w-28 translate-x-4 translate-y-2 opacity-80"
              />
              </div> */}
            </div>
            <div>
              <h3 className="text-center font-semibold p-2  rounded-xl">
                {details.title}
              </h3>
              <h2 className="text-center font-medium p-2 truncate ">
                {" "}
                {"Section " + details.section} {"- "} {details.subject}{" "}
              </h2>
              <p className="p-2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex justify-center">
                <button className="bg-sky-300 max-md:text-sm m-2 p-2 text-slate-700 font-medium rounded-full px-4 py-2 hover:bg-sky-400 transition-all">
                  {" "}
                  Take Quiz
                </button>
                <button className="bg-sky-300 max-md:text-sm m-2 p-2 text-slate-700 font-medium rounded-full px-4 py-2 hover:bg-sky-400 transition-all">
                  Add to Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
