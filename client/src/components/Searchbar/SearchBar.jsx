import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
const SearchBar = () => {
 
    return (
        <div className='w-[100%] md:w-[90%] md:text-xs sm:hidden border border-[#001]  pl-2  text-sm my-auto rounded-lg flex  '>
            <div className='w-full flex my-auto justify-center'>
                <div className="my-auto">
                    <BiCurrentLocation color='#ff00dd' size={20} />
                </div>
                <div className='flex w-full'>
                    <input
                        
                        className='w-full outline-none p-1 my-auto rounded-md px-2 ' type="text" placeholder='Search your pet by name' />
                </div>
            </div>
            <div className='sm:w-full  flex bg-button-primary w-[40px] rounded-r-md border my-auto justify-center  items-center py-1'>
                <BsSearch type='submit' size={22} color='#000' className='rounded-r-lg my-auto' />
            </div>
        </div>
    )
}

export default SearchBar