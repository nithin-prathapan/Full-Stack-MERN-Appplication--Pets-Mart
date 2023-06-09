import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import AddPet from '../components/Add-Product/AddPet'
import AdminHeader from '../components/Admin-Header/AdminHeader'
import AllPets from '../components/ShowAllPets/AllPets'
import AllUsers from '../components/ShowAllUsers/AllUsers'
import ShowOrders from '../components/showOrders/ShowOrders'
const AdminPage = () => {
    const location = useLocation()
    console.log(location.pathname.substring(1));
    const { isShowPets, isShowUsers, isShowAddPet, isShowOrders } = useSelector((state) => state.admin)
 
    return (
        <div>
            {
                location.pathname.substring(1) === "admin" ? (<AdminHeader />) : (<></>)
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