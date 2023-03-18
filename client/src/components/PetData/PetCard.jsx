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
        <div className=' shadow-md max-h-[300px] my-2 rounded-lg duration-300 p-2 mr-2 ml-2  mx-auto'>
            <div className="image-container w-full px-4  image  flex justify-center">
                <img
                    onClick={e => showPetDetail(data._id)}
                    className='rounded-lg shadow-lg drop-shadow-md w-[180px] -translate-y-4 h-[200px] object-cover
                    hover:-translate-y-2 duration-300 ease-in-out'
                    src={`http://localhost:4000/images/${data.image}`} alt={data.name} />
            </div>
            <div className='w-full'>
                <h1 className='text-center  uppercase font-semibold text-md'>{data.name}</h1>
            </div>
            <div className=" cart-section mt-2   w-[90%] mx-auto mb-4 rounded-md p-1 flex justify-between">
                <AddShoppingCartIcon className='cursor-pointer' onClick={handleAddToCart} />
                <span><CurrencyRupeeRoundedIcon className='' size={20} />{data.price}</span>
            </div>
        </div >
    )
}

export default PetCard