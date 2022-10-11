import React from 'react';
import './Question.css'
const Question = ({ ques, corrAns, incorr1 }) => {
    const { id, question, correctAnswer, options } = ques;
   
    const check = e => {
        const { value, name } = e.target;
        if (value === name) {
            alert("Correct")
            corrAns()
        }
        else {
            alert("Incorrect")
            incorr1()
        }
    }
    return (
        <div>
            <div className='question-container my-4 p-4'>
            <h4>{question}</h4>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <input type="radio" id={options[0]} value={options[0]} name={correctAnswer} onChange={check} />
                        <label htmlFor="">{options[0]}</label>

                    </div>
                    <div className='col-12'>
                        <input type="radio" id={options[1]} value={options[1]} name={correctAnswer} onChange={check} />
                        <label htmlFor="">{options[1]}</label>
                    </div>
                    <div className='col-12'>
                        <input type="radio" id={options[2]} value={options[2]} name={correctAnswer} onChange={check} />
                        <label htmlFor="">{options[2]}</label>
                    </div>
                    <div className='col-12'>
                        <input type="radio" id={options[3]} value={options[3]} name={correctAnswer} onChange={check} />
                        <label htmlFor="">{options[3]}</label>
                    </div>
                </div>


            </div>
        </div>
        </div>
        
    );
};

export default Question;