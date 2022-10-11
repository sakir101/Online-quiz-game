import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CartDetail = () => {
    const cartInfo = useLoaderData()
   console.log(cartInfo.data.questions)
    return (
        <div>
            
        </div>
    );
};

export default CartDetail;