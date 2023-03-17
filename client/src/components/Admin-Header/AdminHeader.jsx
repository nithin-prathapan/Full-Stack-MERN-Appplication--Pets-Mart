import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { showAddPet, showList, showUsers, showOrders } from '../../redux/adminReducer'

const AdminHeader = () => {
    const dispatch = useDispatch()

    const showAllPets = (e) => {
        e.preventDefault()
        dispatch(showList())
    }
    const showAllUsers = (e) => {
        e.preventDefault()
        dispatch(showUsers())
    }
    const addproduct = (e) => {
        e.preventDefault()
        dispatch(showAddPet())
    }
    const showAllOrders = (e) => {
        e.preventDefault()
        dispatch(showOrders())
    }
    const goToHome = (e) => {
        e.preventDefault()
    }
    return (
        <div className='bg-american-dark  flex w-full h-[60px] justify-between mb-4 text-[#fff]'>
            <div onClick={goToHome} className=' w-[30%] md:w-full flex  p-2'>
                <Link to='/'>
                    <h1 className='min-w-full my-auto uppercase tracking-wide text-xl md:text-lg sm:text-lg'>Admin Dashboard</h1>
                </Link>
            </div>
            <div className=' flex  md:hidden sm:hidden'>
                <div className="m-4 my-auto">
                    <button onClick={showAllPets} className='hover:bg-[#fcf9bd] hover:text-[#000] duration-300   rounded-md pl-2 pr-2'>All Pets</button>
                </div>
                <div className="m-4 my-auto">
                    <button onClick={showAllOrders} className='hover:bg-[#fcf9bd] hover:text-[#000] duration-300  rounded-md pl-2 pr-2'>All Orders</button>
                </div>
                <div className="m-4 my-auto">
                    <button onClick={addproduct} className='hover:bg-[#fcf9bd] hover:text-[#000] duration-300  rounded-md pl-2 pr-2'>Add New Product</button>
                </div>
                <div className="m-4 my-auto">
                    <button className='hover:bg-[#fcf9bd] hover:text-[#000] duration-300  rounded-md pl-2 pr-2' onClick={showAllUsers}>All Users</button>
                </div>

            </div>
        </div>
    )
}

export default AdminHeader