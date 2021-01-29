import React from 'react'
import QuestionOne from './question-one/QuestionOne'
import { useState } from 'react'

function Questions(){


    // const [result, setResult] = useState(0)

    const [answers, setAnswers] = useState({
        one: ''
    })


    const answerOne = (choice) => {

        setAnswers({
            one: choice
        })

        // if(choice === 'a'){
        //     setResult(result + 1)
        // } else {
        //     setResult(0)
        // }
    }

    return(
        <div className='questions-container'>
            <QuestionOne answer={answerOne} />
            <div>
                {/* {result} */}
            </div>
        </div>
    )


}

export default Questions;