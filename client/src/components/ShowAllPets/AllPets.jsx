import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditProduct from './EditProduct'

const AllPets = () => {
    const [pets, setPets] = useState([])
    const [id, setId] = useState('')
    const [showEdit, setShowEdit] = useState(false)
    //FETCH ALL POST
    useEffect(() => {
        axios.get('http://localhost:4000/pet').then((response) => {
            setPets(response.data)
        },)
    }, [setPets])
    //DELETE POST
    const handleDelete = async (id) => {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this user?')) {
            await axios.delete(`http://localhost:4000/pet/${id}`)
                .then((response) => {
                    console.log(response.data);
                    setPets(pets.filter(pet => pet._id !== id));
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }
    const handleEdit = async (id) => {
        setShowEdit(!showEdit)
        setId(id)
    }
    console.log(showEdit);
    return (
        <div className='w-full'>

            {
                showEdit ? (<h1 className='text-center mt-4 text-3xl tracking-wider font-bold font-fancy text-[#af2f2f] '>Update Product</h1>) : (<></>)
            }
            {
                showEdit ? (
                    <EditProduct id={id} />
                ) : (<div className='w-[90%] sm:w-full mx-auto  p-2 sm:text-xs shadow-md'>
                    {/* TABLE HEADER */}
                    <div className='w-full grid grid-cols-8 gap-x-2 mx-auto items-center border-b pb-4 pt-2 font-semibold uppercase sm:normal-case'>
                        <div className='mx-auto w-full text-center'>Name</div>
                        <div className='mx-auto w-full text-center'>Image</div>
                        <div className='mx-auto w-full text-center'>Price</div>
                        <div className='mx-auto w-full text-center col-span-3'>Description</div>
                        <div className='mx-auto w-full text-center'>Edit</div>
                        <div className='mx-auto w-full text-center '>Delete</div>
                    </div>
                    {/* TABLE CONTENT */}
                    {
                        pets.map((pet) => (
                            <div key={pet._id} className='w-full grid grid-cols-8 mx-auto items-center p-4'>
                                <div className=''>{pet.name}</div>
                                <div className='mx-auto'>
                                    <img className='w-[50%] rounded-3xl shadow-md mx-auto' src={`http://localhost:4000/images/${pet.image}`} alt="" />
                                </div>
                                <div className='mx-auto'>{pet.price}</div>
                                <div className='mx-auto col-span-3 overflow-y-auto h-[100px]'>{pet.description}</div>
                                <div className='mx-auto w-full'>
                                    <button onClick={() => { handleEdit(pet._id) }} className='bg-[#000] p-1 w-[90%] mx-auto font-semibold rounded-md text-sm text-[#fff]'>Edit</button>
                                </div>
                                <div className='mx-auto w-full'>
                                    <button onClick={() => handleDelete(pet._id)} className='bg-[#000] p-1 w-[90%] sm:text-xs mx-auto font-semibold rounded-md text-sm text-[#fff]'>Remove</button>
                                </div>
                            </div>
                        ))
                    }
                </div>)
            }
        </div>
    )
}
export default AllPets