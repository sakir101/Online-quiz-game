import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css'

const Cart = ({cart}) => {
    const {name, logo, total, id} = cart
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='div-cl shadow-lg'>
            <img src={logo} alt="" className='img-fluid img-cl'/>
            <div className='d-flex align-items-center justify-content-center  p-4 info'>
            <h5 className='mx-3'>{name}</h5>
            <h6 className='mx-3'>Total: {total}</h6>
            <button className='mx-3 btn btn-outline-primary btn-sm'><Link to={`/cart/${id}`} className='text-decoration-none text-white'>Attempt quiz</Link></button>
            </div>
            

            </div>
           
        </div>
    );
};

export default Cart;