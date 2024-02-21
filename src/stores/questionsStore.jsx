import {create} from "zustand";

import { questionsTable } from '../utils/dummyQuestionData';


const useQuestionsStore = create((set) => ({
    // questions: [...questionsTable] ,
    // setQuestions: (question) => set({ questions: question}), 

    questions: questionsTable,
    setQuestions:(question)=>set({questions:question}),
    selectedQuestionIndex: 0,
    setSelectedQuestionIndex: (questionIndex) => set({selectedQuestionIndex: questionIndex}),
    
}));
  
  export default useQuestionsStore;
  