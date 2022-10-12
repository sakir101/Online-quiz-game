import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const CartDetail = () => {
    const cartInfo = useLoaderData()

    const [corr, setCorr] = useState(0)
    const [incorr, setIncorr] = useState(0)

    const corrAns = () => {
        setCorr(corr + 1)
    }

    const incorr1 = () => {
        setIncorr(incorr + 1)
    }

    return (
        <div className='my-2 p-5'>
            <h2 className='text-primary'>{cartInfo.data.name}</h2>
            <h3>Total Correct: {corr} </h3>
            <h3>Total Incorrect: {incorr}</h3>
            {
                cartInfo.data.questions.map(ques => <Question key={ques.id} ques={ques} corrAns={corrAns} incorr1={incorr1}></Question>)
            }
        </div>
    );
};

export default CartDetail;