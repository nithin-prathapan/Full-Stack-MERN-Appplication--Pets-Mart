import React from 'react'
import image from '../../assets/images/newsletterImage.png'

const NewsLetter = () => {
    return (
        <div className='bg-light-blue flex font-primary p-3 md:block sm:block'>
            <div className="form w-[80%] p-3 my-auto">
                <div className='mx-auto w-[80%] my-auto text-3xl sm:text-sm font-semibold'>
                    <h1>Subscribe now to get <br />Pet's Usefull information</h1>
                </div>
                <div className='mx-auto w-[80%] my-auto mt-4 mb-4 flex rounded-lg bg-[#fff] p-1'>
                    <div className='w-full'>
                        <input type="email" className='p-2 rounded-l-lg w-full outline-none' placeholder='youremail@gmail.com' name="" id="" />
                    </div>
                    <div>
                        <button className='bg-button-primary p-[7px] rounded-r-md'>Subscribe</button>
                    </div>
                </div>
                <div className='mx-auto w-[80%] my-auto'>
                    <h1 className='w-[100%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse dolore assumenda
                        voluptatem. </h1>
                </div>

            </div>
            <div className="image w-[100%] my-auto">
                <img src={image} alt="img" />
            </div>

        </div>
    )
}

export default NewsLetter