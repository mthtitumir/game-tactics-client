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
    const [cart] = useCart();
    const { id } = useParams();
    // console.log(cart);
    const payItem = cart?.find(item => id === item._id) || {};
    const { _id, price } = payItem;
    console.log(payItem);
    // console.log(id);
    return (
        <div>
            <DashboardHeader heading={"Payment Now"} />
            {
                price && <Elements stripe={stripePromise}>
                    <CheckoutForm _id={_id} price={price} />
                </Elements>
            }
        </div>
    );
};

export default Pay;