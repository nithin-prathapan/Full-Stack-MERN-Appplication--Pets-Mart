import React from 'react'
import './Styles.css'
const CommonSection = ({ title }) => {
    return (
        <div>
            <div className='common-section w-full min-h-full'>
                <h1 className='tracking-[30px] font-bold uppercase  text-4xl text-[#000000a1] 
            mx-auto my-auto'>All Our Pets</h1>
            </div>
        </div>
    )
}

export default CommonSection