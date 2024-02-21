import React from 'react'
import useQuestionsStore from '../../../stores/questionsStore'

const Sidebar = () => {
    // const questions = useQuestionsStore((state)=>state.questions)

    const questions = useQuestionsStore((state)=>(state.questions));
    const setSelectedQuestionIndex = useQuestionsStore((state)=>(state.setSelectedQuestionIndex));
    const selectedQuestionIndex = useQuestionsStore((state)=>(state.selectedQuestionIndex));

    // console.log(questions);
    
  return (
    <div  className='flex flex-col border-r gap-2 py-1 px-12'>
        {questions?.map((question,index)=>
           (<div key={question.id} onClick={()=>{
            setSelectedQuestionIndex(index)
           }} className={` py-2 px-4 rounded-md border cursor-pointer ${selectedQuestionIndex===index ? "border-blue-500 bg-blue-100 text-blue-500" : ""}`}>Question {` ${index+1}`}</div>)
        )}
    </div>
  )
}

export default Sidebar