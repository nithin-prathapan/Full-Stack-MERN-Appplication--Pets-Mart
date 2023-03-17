import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import AddPet from '../components/Add-Product/AddPet'
import AdminHeader from '../components/Admin-Header/AdminHeader'
import AllPets from '../components/ShowAllPets/AllPets'
import AllUsers from '../components/ShowAllUsers/AllUsers'
import ShowOrders from '../components/showOrders/ShowOrders'
import { setAdmin } from '../redux/authReducer'
const AdminPage = () => {
    const location = useLocation()
    console.log(location.pathname.substring(1));
    const dispatch = useDispatch()
    const { isShowPets, isShowUsers, isShowAddPet, isShowOrders } = useSelector((state) => state.admin)
    // useEffect(() => {
    //         dispatch(setAdmin())
    // })
    return (
        <div>
            {
                location.pathname.substring(1) == "admin" ? (<AdminHeader />) : (<></>)
            }

            {
                isShowPets ? (<AllPets />) : (<></>)
            }
            {
                isShowUsers ? (<AllUsers />) : (<></>)
            }
            {
                isShowAddPet ? (<AddPet />) : (<></>)
            }
            {
                isShowOrders ? (<ShowOrders />) : (<></>)
            }


        </div >
    )
}

export default AdminPage