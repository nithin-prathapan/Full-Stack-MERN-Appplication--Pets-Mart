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
        <div className=' shadow-md  my-2 rounded-lg duration-300   mx-auto'>

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
            <div className=" cart-section mt-2 shadow-md  w-[90%] mx-auto mb-4 rounded-md p-1 flex justify-between">
                <AddShoppingCartIcon className='cursor-pointer' onClick={handleAddToCart} />
                <span><CurrencyRupeeRoundedIcon className='' size={20} />{data.price}</span>
            </div>


            {/* <div className='name w-full mx-auto pt-4 tracking-widest m-2'>
                <h1 className='font-bold font-primary w-full text-[20px] text-center '>{pet.name}</h1>
            </div>
            <div className='name w-full mx-auto'>
                <h1 className=' font-primary text-[15px] text-[#3caffc] text-center '>{pet.purpose}</h1>
            </div>
            <div className=" w-full  cursor-pointer">
                <div className='card-description  w-full border-b m-1'>
                    <h1 className='mx-auto text-center p-2 font-primary text-xs'>
                        {pet.description}
                    </h1>
                </div>

            </div> */}

        </div >
    )
}

export default PetCard