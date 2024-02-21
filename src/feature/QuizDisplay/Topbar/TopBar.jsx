import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

const TopBar = () => {
  return (
    <div className="w-full h-20 top-0 bg-blue-200 bg- shadow-sm ">
      <ContentWrapper>
        <header className="w-full sticky top-0 z-[99999]  h-20  text-slate-800 flex justify-between items-center px-4">
            
        <div className="logo h-full ml-8 shrink-0">
            <img
              src="https://raw.githubusercontent.com/prafull-quizzahut/quizzahut-design/30cf68e4c2a9db59275bb492d611c6eb34db2ec6/Logo%20Assets/Group%201.svg"
              alt="QuizzaHut"
              className="h-full"
              width={150}
            />
          </div>
          
          <div className="routesDetails basis-[70%] font-medium">
                {"HOME > QUIZNAME"}
          </div>

          <div className="profile">

            <div className="avatar bg-white rounded-full border-2 border-black h-14 w-14"></div>


            </div>  

        </header>
      </ContentWrapper>
    </div>
  );
};

export default TopBar;
