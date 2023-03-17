import React from 'react'
import user1 from '../../assets/images/user.jpg'
import user2 from '../../assets/images/user2.jpeg'
import user3 from '../../assets/images/user3.jpg'

const ReviewCard = () => {
    return (
        <div className='grid grid-cols-3 md:text-xs sm:text-xs font-primary text-sm sm:block md:block mt-4'>
            <div className='shadow-md p-3 mb-2 bg-mid-dark text-[#fff] m-1 rounded-xl'>
                <div className="review ">
                    <h1>
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Velit repudiandae suscipit
                        alias amet quia atque, eius molestias placeat
                        ab sunt maiores ipsum quasi ut facere consectetur
                        natus vitae. Nesciunt, architecto. Quasi autem
                        repellendus dolore, consequatur beatae, fugit
                        itaque ex recusandae. Eligendi, molestiae iure.
                    </h1>
                </div>
                <div className="flex m-4">
                    <div >
                        <img className='w-[60px] rounded-full bg-[#000]' src={user2} alt="noimage" />
                    </div>
                    <div className="name p-2 my-auto">
                        <h1>John Doe</h1>
                        <h1>Customer</h1>
                    </div>
                </div>

            </div>
            <div className='shadow-md p-3 mb-2  bg-mid-dark text-[#fff] m-1 rounded-xl'>
                <div className="review">
                    <h1>
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Velit repudiandae suscipit
                        alias amet quia atque, eius molestias placeat
                        ab sunt maiores ipsum quasi ut facere consectetur
                        natus vitae. Nesciunt, architecto. Quasi autem
                        repellendus dolore, consequatur beatae, fugit
                        itaque ex recusandae. Eligendi, molestiae iure.
                    </h1>
                </div>
                <div className="flex m-4">
                    <div>
                        <img className='w-[60px] rounded-full' src={user3} alt="noimage" />
                    </div>
                    <div className="name p-2 my-auto">
                        <h1>John Doe</h1>
                        <h1>Customer</h1>
                    </div>
                </div>

            </div>
            <div className='shadow-md p-3 mb-2  bg-mid-dark text-[#fff] m-1 rounded-xl'>
                <div className="review">
                    <h1>
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Velit repudiandae suscipit
                        alias amet quia atque, eius molestias placeat
                        ab sunt maiores ipsum quasi ut facere consectetur
                        natus vitae. Nesciunt, architecto. Quasi autem
                        repellendus dolore, consequatur beatae, fugit
                        itaque ex recusandae. Eligendi, molestiae iure.
                    </h1>
                </div>
                <div className="flex m-4">
                    <div>
                        <img className='w-[60px] rounded-full' src={user1} alt="noimage" />
                    </div>
                    <div className="name p-2 my-auto">
                        <h1>John Doe</h1>
                        <h1>Customer</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReviewCard