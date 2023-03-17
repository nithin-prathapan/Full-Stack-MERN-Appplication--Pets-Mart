// eslint-disable-next-line
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/order').then((response) => {
            setOrders(response.data.orders)
            console.log(response.data.orders)
        })
    }, [setOrders])
    const deleteOrder = (id) => {
        if (window.confirm('Are you sure want to delete this order?'))
            axios.delete(`http://localhost:4000/order/${id}`).then((response) => {
                setOrders(response.data)
                console.log(response.data);
                setOrders(orders.filter(orders => orders._id !== id));
            })
    }
    return (
        <div className="overflow-x-auto font-primary -translate-y-4 p-4  mx-auto">
            <h1 className='text-center text-3xl  font-semibold uppercase mb-4 tracking-wider'>All Orders</h1>
            {
                orders.map((order) => (
                    <div key={order._id} className='bg-[#000] w-full rounded-xl  text-sm text-[#fff] mb-2 text-center gap-2 gap-y-4 px-4 py-2 grid grid-cols-3'>

                        <div className='grid text-left'>
                            <h1 className='mb-4 my-2 uppercase  text-button-primary '>Items</h1>
                            {

                                order.orderItems.map((item) => {
                                    const createdAt = new Date(order.createdAt);
                                    return (
                                        <div key={item._id} className="w-full  mx-auto">
                                            <p className='my-2  '>{item.name} <span className='mx-2'>x</span> <span className='mx-2'>{item.quantity}</span> = <span>{item.totalPrice}</span> </p>
                                            <p className='w-[80%] my-2'>{item.color}</p>
                                            <p><span className='mr-1 text-button-primary'>Ordered At :</span> {createdAt.toLocaleDateString()}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className='grid w-full'>
                            <h1 className='mb-4 my-2 uppercase   text-button-primary '>Address</h1>
                            <div className="w-full  mx-auto">
                                <p>{order.name} </p>
                                <p className=' my-2'>{order.shippingAddress.street}</p>
                                <p>{order.shippingAddress.city},<span> {order.shippingAddress.country}</span> </p>

                                <p>{order.email}</p>

                            </div>
                        </div>
                        <div className="w-full block  text-center my-auto mx-auto">

                            <div>
                                {
                                    order.isDelevered ? (<span className='text-green '> Delivered</span>) : (<span className='text-[#f00] '> Not Delivered</span>)
                                }
                            </div>

                            <button onClick={e => deleteOrder(order._id)} className='my-auto mt-2'>Remove</button>


                        </div>

                    </div>
                ))
            }


        </div>

    )
}

export default ShowOrders