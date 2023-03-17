import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import gallery1 from '../../assets/images/gallery1.jpg'
import pet2 from '../../assets/images/pet2.jpg'
import pet4 from '../../assets/images/pet4.jpg'
import pet3 from '../../assets/images/pet3.jpg'
import pet8 from '../../assets/images/pet8.avif'
import pet7 from '../../assets/images/pet7.avif'
import pet10 from '../../assets/images/pet10.avif'
import pet11 from '../../assets/images/pet11.avif'
import pet12 from '../../assets/images/pet12.avif'
import pet13 from '../../assets/images/pet13.avif'
import pet14 from '../../assets/images/pet14.avif'
import pet16 from '../../assets/images/pet16.avif'
import pet15 from '../../assets/images/pet15.avif'
import pet17 from '../../assets/images/pet17.avif'

const CustomGallary = () => {
    return (
        <div className="p-4">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 400: 3, 760: 5, 900: 6 }}
            >
                <Masonry gutter='1rem'>
                    <img className='w-[100%] block rounded-lg ' src={pet2} alt="noimage" />
                    <img className='w-[100%] block rounded-lg ' src={gallery1} alt="noimage" />
                    <img className='w-[100%] block rounded-lg ' src={pet10} alt="noimage" />
                    <img className='w-[100%] block rounded-lg ' src={pet4} alt="noimage" />
                    <img className='w-[100%] block rounded-lg ' src={pet11} alt="noimage" />
                    <img className='w-[100%] block rounded-lg ' src={pet7} alt="noimage" />
                    <img className='w-[100%] block rounded-lg ' src={pet12} alt="noimage" />
                    <img className='w-[100%] block rounded-lg ' src={pet13} alt="noimage" />
                    <img className='w-[100%] block rounded-lg ' src={pet14} alt="noimage" />
                    <img className='w-[100%] block rounded-lg ' src={pet15} alt="noimage" />
                    <img className='w-[100%] block rounded-lg ' src={pet16} alt="noimage" />
                    /                    <img className='w-[100%] block rounded-lg ' src={pet8} alt="noimage" />
                    <img className='w-[100%] block rounded-lg ' src={pet3} alt="noimage" />
                </Masonry>
            </ResponsiveMasonry>
        </div>





    )
}

export default CustomGallary