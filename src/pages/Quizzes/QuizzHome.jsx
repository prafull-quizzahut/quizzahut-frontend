import React from "react";
import { ContentWrapper } from "../../components/";
import MainContent from "./Sections/MainContent";
import Sidebar from "./Sections/Sidebar";

import { topQuizzes } from "../../utils/constants";
import { useState } from "react";

const QuizzHome = () => {
  const [sectionList, setSectionList] = useState([
    { name: "Top Quizzes 1", topQuizzes },
    { name: "Top Quizzes 2", topQuizzes },
    { name: "Top Quizzes 3", topQuizzes },
  ]);
  // const quizList = new Array(10);
  const [selectedSection, setSelectedSection] = useState(0);
  return (
    <div className="w-full">
      <ContentWrapper>
        <div className="w-full grid grid-cols-5 px-4 sm:px-10">
          <Sidebar
            classname="col-span-1  "
            sectionList={sectionList}
            selectedSection={selectedSection}
            handleChange={(index)=>{
              setSelectedSection(index)
            }}
          />
          <MainContent
            className=" col-span-4"
            quizList={sectionList[selectedSection]}
          />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default QuizzHome;
