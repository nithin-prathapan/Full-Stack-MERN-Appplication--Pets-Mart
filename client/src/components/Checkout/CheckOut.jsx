import React, { useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux'
import { createPayment } from '../../redux/paymentReducer'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'
import SuccessOrder from '../SuccessOrder/SuccessOrder'
import Failure from '../Failure/Failure'
const CheckOut = ({ subtotal }) => {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)
    const { items } = useSelector(state => state.cart)
    const { isLoading, error, isPaid } = useSelector(state => state.payment)
    const dispatch = useDispatch()
    const tokenHandler = (token) => {
        console.log(token);
        dispatch(createPayment({ subtotal, token, user, items }))

    }
    useEffect(() => {
        if (isPaid) {
            setTimeout(() => {
                navigate('/')
            }, [1000])

        }
    })
    return (
        <div>
            {
                isLoading && (<Loading />)
            }
            {
                error && (<Failure />)
            }
            {
                isPaid && (<SuccessOrder />)

            }
            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={tokenHandler}
                currency='INR'
                stripeKey='pk_test_51Mh4jiSEx7nkkDnCzHPPPIWPUcjlezgOqQLQPyC8M0PGXu1sTNtGXOy6LyqUrXiJdRAknVEN78cr1vwbJYZan9hs00YSQh7hTe'
            >
                <button
                    className=' w-full text-2xl p-2 rounded-md font-semibold hover:bg-[#000] text-[#fff] bg-gray-dark'
                >Place Order</button>
            </StripeCheckout >
        </div>
    )
}
export default CheckOut