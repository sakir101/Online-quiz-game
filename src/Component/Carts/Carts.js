import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Carts = () => {
    const carts = useLoaderData();



    return (
        <div className="container my-4">
            <div className='row g-4'>

                {
                    carts.data.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }


            </div>

        </div>



    );
};

export default Carts;