import React from 'react'

const ServiceCard = ({ item }) => {
    return (
        <div className='m-1 rounded-md  p-4 font-primary shadow-xl hover:scale-105 duration-100 ease-in'>
            <div className="drop">
                <div className="image w-full h-6 mx-auto m-4">
                    <img className='w-10 mx-auto contrast-[300px] bg-button-primary p-1 rounded-full border-[#00000069] ' src={item.image} alt={item.service} />
                </div>
                <div className="service font-bold">
                    <h1>{item.service}</h1>
                </div>
                <div className="desc font-medium text-sm ">
                    <h1>{item.desc}</h1>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard