import React, { useEffect, useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import './petcard.css'
import { BsBagPlusFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'
import { displayPetDetail } from '../../redux/productReducer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const PetCard = ({ pet }) => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        setData(pet)
    }, [pet])
    const dispatch = useDispatch()

    const handleAddToCart = (e) => {
        dispatch(addToCart(pet))
        alert('ADDED TO CART')
    }
    const showPetDetail = async (id) => {
        await axios.get(`http://localhost:4000/pet/${id}`)
            .then((response) => {
                dispatch(displayPetDetail(response.data))
                navigate('/petDetails')
            })
    }
    return (
        <div className=' shadow-md sm:w-[100px] max-w-[200px] max-h-[270px] sm:max-h-[140px] my-2  mx-auto  rounded-lg duration-300 py-2 p-1 mr-2 ml-2'>
            <div className="w-full flex mx-auto justify-center">
                <img
                    onClick={e => showPetDetail(data._id)}
                    className='rounded-lg shadow-lg drop-shadow-md sm:w-[80px] w-[160px]  -translate-y-4 sm:max-h-[100px] h-[200px] object-cover
                    hover:-translate-y-2 duration-300 ease-in-out relative'
                    src={`http://localhost:4000/images/${data.image}`} alt={data.name} />
            </div>
            <div className='w-full'>
                <h1 className='text-center max-h-[20px] uppercase font-semibold sm:text-[8px] text-[10px]  mb-1'>{data.name}</h1>
            </div>
            <div className="sm:hidden  hover:text-[#fff] duration-300 ease-in-out px-2 cart-section text-[12px] w-[90%] mx-auto   rounded-md p-1 flex justify-between">
                <AddShoppingCartIcon style={{ fontSize: 15 }} className='cursor-pointer' onClick={handleAddToCart} />
                <span className='my-auto'><CurrencyRupeeRoundedIcon className='-translate-y-[2px]' style={{ fontSize: 15 }} />{data.price}</span>
            </div>
        </div >
    )
}

export default PetCard