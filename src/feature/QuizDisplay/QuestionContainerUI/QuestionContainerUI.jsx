import React from "react";
import useQuestionsStore from "../../../stores/questionsStore";

const QuestionContainerUI = () => {
  const selectedQuestionIndex = useQuestionsStore(
    (state) => state.selectedQuestionIndex
  );
  const questions = useQuestionsStore((state) => state.questions);
  const setQuestions = useQuestionsStore((state) => state.setQuestions);
  const handleRadio = (e) => {
    setQuestions(
      questions.map((que, idx) => {
        if (idx === selectedQuestionIndex) {
          return { ...que, answer: e.target.value };
        } else return { ...que };
      })
    );

    console.log("seelcted",questions[selectedQuestionIndex]);
  };
  return (
    <div
      className="min-h-[70vh] w-full"
      key={questions[selectedQuestionIndex].id}
    >
      <div className="question">
        {questions[selectedQuestionIndex].question}
      </div>

      <div className="options">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="radio"
              name="option"
              value={questions[selectedQuestionIndex]?.answer}
              onChange={handleRadio}
            />
            <p>{questions[selectedQuestionIndex].options.a}</p>
          </div>

          <div className="flex gap-2">
            <input
              type="radio"
              name="option"
              value={questions[selectedQuestionIndex]?.answer}
              onChange={handleRadio}
            />
            <p>{questions[selectedQuestionIndex].options.b}</p>
          </div>

          <div className="flex gap-2">
            <input
              type="radio"
              value={questions[selectedQuestionIndex]?.answer}
              name="option"
              onChange={handleRadio}
            />
            <p>{questions[selectedQuestionIndex].options.c}</p>
          </div>

          <div className="flex gap-2">
            <input
              type="radio"
              name="option"
              value={questions[selectedQuestionIndex]?.answer}
              onChange={handleRadio}
            />
            <p>{questions[selectedQuestionIndex].options.d}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionContainerUI;
