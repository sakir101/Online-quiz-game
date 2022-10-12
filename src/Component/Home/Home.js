import React from 'react';

import Carts from '../Carts/Carts';
import './Home.css'

const Home = () => {

    return (
        <div>
            <div className='bg-img'>
                <div className='header-title container'>
                    <h2 className='text-white'>This is your quiz section</h2>
                    <p className='text-white'>Here you will participate in different courses quiz. This will help yo to grow your knowledge</p>
                </div>

            </div>

            <div >
                <Carts></Carts>
            </div>
        </div>
    );
};

export default Home;