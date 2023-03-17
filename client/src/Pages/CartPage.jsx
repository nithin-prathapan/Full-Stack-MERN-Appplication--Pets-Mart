import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { decrement, increment, removeItem } from '../redux/cartReducer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import CheckOut from '../components/Checkout/CheckOut'
const CartPage = () => {
    const [currency, setCurrency] = useState('usd')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { items, totalPrice, totalQuantity } = useSelector(state => state.cart)
    console.log(items);
    const handleIncrement = (id) => {
        dispatch(increment(id))
    }
    const handleDecrement = (id) => {
        dispatch(decrement(id))
    }
    const handleCheckout = async () => {

    }
    const handleRemove = (id) => {

        if (window.confirm("Are you sure want to remove from cart?")) {

            dispatch(removeItem(id))
            navigate('/')
        }

    }
    const handlePayment = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:4000/payment/create', {
                amount: totalPrice,
                currency,
            })
        } catch (error) {

        }

    }
    const numbers = Array.from(Array(10).keys());
    return (
        <div className='flex md:block sm:block'>
            {
                items.length !== 0 ? (

                    <div className='h-[100vh] md:h-[100%] p-2 overflow-y-auto md:w-[90%] mx-auto  w-[70%] m-2 '>
                        {
                            items.map((item) => (
                                <div className='border  flex md:block sm:block    min-w-full  md:w-full my-2 sm:w-full  items-start p-4 '>

                                    <div className='sm:mx-auto md:mx-auto min-w-[150px] max-w-[150px]'>
                                        <img className='min-w-[150px] max-w-[150px] rounded-md shadow-md mx-auto my-2' src={`http://localhost:4000/images/${item.image}`} alt="" />
                                        <div className='flex my-auto min-w-[150px] max-w-[150px] h-full mx-auto'>
                                            <div className="mx-auto my-2 flex">
                                                <AiOutlineMinusCircle onClick={e => handleDecrement(item._id)} size={30} className='my-auto' />
                                                <h1 className='my-auto mx-2 font-semibold rounded-md text-xl border-2 px-4'>{item.quantity}</h1>
                                                <AiOutlinePlusCircle onClick={e => handleIncrement(item._id)} size={30} className='my-auto' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full font-semibold mx-4 p-4'>
                                        <div className='block'>
                                            <h1 className='text-xl font-semibold text-gray-light uppercase'>{item.name},
                                                <span className='text-md normal-case'> {item.color}</span>,
                                                <span className='text-md normal-case'> {item.temperment}</span>
                                            </h1>
                                            <h1 className='my-4 text-gray-light'>{item.purpose}</h1>
                                            <h1 className='my-4'>Size : {item.size}</h1>
                                            <h1 className='my-4 '>Rs : <span className='line-through decoration-solid mr-2'>{item.price + 100}  </span> {item.price}
                                                <span className='ml-2 text-[#237e28] font-semibold text-xl'>
                                                    10 % Off
                                                </span>
                                            </h1>
                                            <button onClick={e => handleRemove(item._id)} className="text-xl text-[#f00]">REMOVE</button>
                                        </div>
                                    </div>

                                </div>


                            ))
                        }

                    </div>

                ) : (
                    <div className='w-[30%]  p-3 rounded-lg  mx-auto my-[10%]'>
                        <h1 className='my-auto text-center border-b-2 pb-1 rounded-lg text-[#000] cursor-pointer hover:text-button-primary font-fancy text-3xl '>Your Cart Is Empty </h1>
                        <Link to='/'>
                            <h1 className='my-auto text-center border-t-2 rounded-lg mt-2 text-[#000] cursor-pointer hover:text-button-primary font-fancy text-3xl '>Click here to purchase</h1>
                        </Link>
                    </div>
                )
            }
            {
                items.length !== 0 ? (
                    <div className='w-[320px]  md:mx-auto text-lg text-[#197309] font-semibold p-4 m-4 mr-[2%] ml-[2%] mx-auto border-2 h-min border-dashed block border-[#197309]'>
                        <h1 className=' border-b border-dashed text-gray-light  text-xl font-semibold'>PRICE DETAILS</h1>
                        <div className="flex my-6 justify-between">
                            <h1>Price (<span>{totalQuantity} item</span>)</h1>
                            <h1>₹<span> {totalPrice}</span></h1>
                        </div>
                        <div className="flex my-6 justify-between">
                            <h1>Discount </h1>
                            <h1><span> -300</span></h1>
                        </div>
                        <div className="flex my-6 justify-between">
                            <h1>Delivery Charges </h1>
                            <h1><span>Free</span></h1>
                        </div>
                        <div className='border border-dashed'></div>
                        <div className="flex text-xl text-[#000] my-6 justify-between">
                            <h1 className=''>Total Amount</h1>
                            <h1><span>{totalPrice - 300}</span></h1>
                        </div>
                        <div className='border  border-dashed'></div>
                        <h1 className='my-6 text-sm text-center'>You will save ₹{300} on this order</h1>
                        <div className='w-[90%] mx-auto'>
                            <CheckOut subtotal={totalPrice - 300} />
                        </div>
                    </div>
                ) : (<></>)
            }
            <div>
            </div>
        </div >
    )
}
export default CartPage