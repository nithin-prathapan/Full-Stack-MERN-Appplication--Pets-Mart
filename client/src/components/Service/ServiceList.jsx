import React from 'react'
import ServiceCard from './ServiceCard'
import call from '../../assets/images/call.png'
import delivery from '../../assets/images/delivery.png'
const serviceData = [
    {
        service: 'Delivery',
        desc: 'Delivery the pet within 5 days',
        image: delivery
    },
    {
        service: 'Video of the pet',
        desc: 'Available desired pet video',
        image: call
    },
    {
        service: 'Retrun',
        desc: 'You can return pet within 10 days after delivery',
        image: call
    },
]
const ServiceList = () => {
    return (
        <div className='grid grid-cols-3 sm:grid-cols-1 '>
            {
                serviceData.map((item, index) => (
                    <ServiceCard item={item} key={index} />
                ))
            }
        </div>
    )
}

export default ServiceList