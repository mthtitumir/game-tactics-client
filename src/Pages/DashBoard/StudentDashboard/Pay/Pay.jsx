import React from 'react';
import DashboardHeader from '../../../../componants/DashboardHeader/DashboardHeader';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import useCart from '../../../../hooks/useCart';
// provide pk
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Pay = () => {
    const {id} = useParams();
    const [cart] = useCart();
    const payItem = cart.find(item=> item._id === id);
    const {price} = payItem;
    // console.log(price);
    // console.log(id);
    return (
        <div>
            <DashboardHeader heading={"Payment Now"} />
            <Elements stripe={stripePromise}>
                <CheckoutForm price = {price}/>
            </Elements>
        </div>
    );
};

export default Pay;