import React, { useState } from 'react';
import './Question.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ ques, corrAns, incorr1, p}) => {

    const { id, question, correctAnswer, options } = ques;
    const [state, setState] = useState(false)
    
    const check = e => {
        const { value, name } = e.target;
        if (value === name) {
            setState(true);
            toast("Wow your Answer is correct")
            corrAns()
        }
        else {
            setState(true)
            toast("Oops sorry wrong Answer")
            incorr1()
        }
    }


    const showCorrectAns = () => {
        toast(`Correct answer is ${correctAnswer}`)
    }
    

    return (
        <div>
            <div className='question-container my-4 p-4 shadow-sm position-relative'>

                <h4><span className='text-primary'>Ques: {p}</span>{question}</h4>
                <EyeIcon className=" icon text-blue-500 position-absolute top-0 end-0" onClick={showCorrectAns} />


                <div className='container'>
                    <div>
                        <div className='ques'>
                            <input type="radio" id={options[0]} value={options[0]} name={correctAnswer} onChange={check} disabled={state} />
                            <label htmlFor="">{options[0]}</label>

                        </div>
                        <div className='ques'>
                            <input type="radio" id={options[1]} value={options[1]} name={correctAnswer} onChange={check} disabled={state} />
                            <label htmlFor="">{options[1]}</label>
                        </div>
                        <div className='ques'>
                            <input type="radio" id={options[2]} value={options[2]} name={correctAnswer} onChange={check} disabled={state} />
                            <label htmlFor="">{options[2]}</label>
                        </div>
                        <div className='ques'>
                            <input type="radio" id={options[3]} value={options[3]} name={correctAnswer} onChange={check} disabled={state} />
                            <label htmlFor="">{options[3]}</label>
                        </div>
                    </div>


                </div>

                <ToastContainer />
            </div>

        </div>

    );
};

export default Question;