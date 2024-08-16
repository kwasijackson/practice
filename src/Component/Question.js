import React, { useState } from 'react'
import '../Question.css'

const Question = ({question, options, currQues,onSelectAnswer,selectedOption,status }) => {
    const [selected, setSelected]=useState(false);
    

    const _onSelectAnswer = (option) => {
        if(onSelectAnswer) {
            onSelectAnswer(question.id, option)
            
        }
    }

  return (
    <div className='question'>
        <h1>Question : {currQues +1}</h1>
        <div className='singleQuestion'>
            <h2>{question.questionTitle}</h2>
        </div>
        <div className='options'>
            {options && options.map(i=>{
             // return  <button className='singleOption' key={i} disabled={selected} onClick={()=>_onSelectAnswer(i)}>{i}</button>

             return  <button className={`singleOption ${selectedOption === i ? `selectedOption${status ? '-' + status : ''}`:''}`} key={i} onClick={()=>_onSelectAnswer(i)}>{i}</button>

            })}
        </div>

      
    </div>
  )
}

export default Question
