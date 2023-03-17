import React from 'react'
import Petlist from '../components/PetData/PetList'
import SearchBar from '../components/Searchbar/SearchBar'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import CommonSection from '../components/commonSection/CommonSection'
import { useState } from 'react'
import { useEffect } from 'react'
import './Styles.css'

const AllPets = () => {
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    useEffect(() => {
        const page = Math.ceil(5 / 4)
        setPageCount(page)
    }, [page])
    return (
        <div className='w-full h-full'>
            <CommonSection title={"All Pets"} />
            <div>
                <div className='search-bar w-[80%] mx-auto'>
                    <SearchBar />
                </div>
                <div className='w-[80%] mx-auto mt-6'>
                    <Petlist />
                </div>
                <div className="pageination flex m-4  gap-3 justify-center items-center">

                    {
                        [...Array(pageCount).keys()].map((number) => (
                            <span className={page === number ? "active-page" : ""} key={number} onClick={() => setPage(number)}>
                                {number + 1}
                            </span>
                        ))
                    }
                </div>
                <div>
                    <NewsLetter />
                </div>
            </div>
        </div>
    )
}

export default AllPets