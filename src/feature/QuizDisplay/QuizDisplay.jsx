import React, { useState } from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import TopBar from "./Topbar/TopBar";
import Sidebar from "./Sidebar/Sidebar";
import QuestionContainerUI from "./QuestionContainerUI/QuestionContainerUI";
import Pagination from "../../components/Pagination/Pagination";


const QuizDisplay = () => {


  return (
    <ContentWrapper>
      <TopBar />
      <div className="flex ">
        <Sidebar />
        <div className="w-full px-8 pt-6">
        <QuestionContainerUI />
        
        <Pagination/>

        </div>
      </div>

    </ContentWrapper>
  );
};

export default QuizDisplay;
