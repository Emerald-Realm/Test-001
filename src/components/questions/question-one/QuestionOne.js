import React from 'react'
import { useState } from 'react'

function QuestionOne(props) {

    const [ansOne, setAnsOne] = useState('')

    const handleChange = (e) => {
        setAnsOne(e.target.value)
    }


    const handleNext = (e) => {
        props.answer(ansOne)
        e.preventDefault()
        console.log(ansOne)
    }

    return (
        <div >
            <p className='ques-no'>Question 1</p>
            <form action="" onSubmit={handleNext}>

                <p className="quest">While performing CPR on an infant, another rescuer appears on the scene, what do you do next?</p>
                <ol className='option-list'>

                    <label className='option'>
                        <input
                            type="radio"
                            value='a'
                            onChange={handleChange}
                            checked={ansOne === 'a'}
                        />
                        <p>Deliver back blows and chest thrusts</p>
                    </label>

                    <label className='option'>
                        <input
                            type="radio"
                            value='b'
                            checked={ansOne === 'b'}
                            onChange={handleChange}
                        />
                        <p>Blind finger Sweep</p>
                    </label>

                    <label className='option'>
                        <input
                            type="radio"
                            value='c'
                            checked={ansOne === 'c'}
                            onChange={handleChange}
                        />
                        <p>Attempt rescue breaths then compressions</p>
                    </label>

                    <label className='option'>
                        <input
                            type="radio"
                            value='d'
                            checked={ansOne === 'd'}
                            onChange={handleChange}
                        />
                        <p>begin CPR</p>
                    </label>
                </ol>

                <button type="submit">Next</button>
            </form>

        </div>
    )
}

export default QuestionOne


