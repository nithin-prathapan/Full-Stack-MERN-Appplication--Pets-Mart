import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchByCategory, searchByPrice } from '../../redux/productReducer'
import PetList from '../PetData/PetList'

const DropDown = () => {

    const dispatch = useDispatch()
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    useEffect(() => {
        dispatch(searchByCategory(category))
        dispatch(searchByPrice(price))
    }, [category, price, dispatch])
    return (
        <div>
            <div className='w-full my-4 flex '>
                <div className='items-center flex border-button-primary rounded-md  mx-4  border-2 p-2'>
                    <select className='outline-none font-semi-bold' name="" id=""
                        onChange={(e) => setCategory(e.target.value)} value={category}
                    >
                        <option value="">
                            Select Category
                        </option>
                        <option value="Dog">
                            Dog
                        </option>
                        <option value="Cat">
                            Cat
                        </option>
                        <option value="Fish">
                            Fish
                        </option>
                        <option value="Birds">
                            Birds
                        </option>
                        <option value="Tropical Fishes">
                            Tropical Fishes
                        </option>
                        <option value="Rabbits">
                            Rabbits
                        </option>
                        <option value="Parrot">
                            Parrot
                        </option>
                    </select>

                </div>
                <div className='items-center flex border-button-primary rounded-md mx-a4   border-2 p-2'>
                    <select
                        onChange={(e) => { setPrice(e.target.value) }} value={price}
                        className='outline-none font-semi-bold' name="" id="">
                        <option className='font-bold' value="">
                            Price Range
                        </option>
                        <option value="1000">
                            1000 or Less
                        </option>
                        <option value="2000">
                            Less than 2000
                        </option>
                        <option value="3000">
                            Less than 3000
                        </option>
                        <option value="4000">
                            Less than 4000
                        </option>
                        <option value="5000">
                            Less than 5000
                        </option>
                        <option value="6000">
                            Above 5000
                        </option>
                    </select>

                </div>
            </div>
            <PetList />

        </div>
    )
}

export default DropDown