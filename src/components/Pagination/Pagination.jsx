import React from "react";
import useQuestionsStore from "../../stores/questionsStore";

const Pagination = () => {
  const setSelectedQuestionIndex = useQuestionsStore(
    (state) => state.setSelectedQuestionIndex
  );
  const selectedQuestionIndex = useQuestionsStore(
    (state) => state.selectedQuestionIndex
  );
  const questions = useQuestionsStore((state) => state.questions);
  // console.log(setSelectedQuestionIndex);
  return (
    <div className="w-10/12 flex justify-between ">
      <button
      className="px-2 py-1 border-2 border-black w-20 rounded-md disabled:cursor-not-allowed disabled:opacity-50"
        disabled={selectedQuestionIndex == 0}
        onClick={() => {
          setSelectedQuestionIndex(selectedQuestionIndex - 1);
        }}
      >
   
        Previous
      </button>
      <button
      className="px-2 py-1 border-2 border-black bg-black text-white w-20 rounded-md disabled:cursor-not-allowed disabled:opacity-50"
        disabled={selectedQuestionIndex === questions.length - 1}
        onClick={() => {
          setSelectedQuestionIndex(selectedQuestionIndex + 1);
        }}
      >
        {" "}
        Next
      </button>
    </div>
  );
};

export default Pagination;
