import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/auth/users')
            .then((response) => {
                setUsers(response.data);
            })
    }, []);
    const handleDelete = async (id) => {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this user?')) {
            await axios.delete(`http://localhost:4000/auth/users/${id}`)
                .then((response) => {
                    console.log(response.data);
                    setUsers(users.filter(user => user._id !== id));
                })
                .catch((err) => {
                    console.log(err)
                });
        }

    }
    return (
        <div className='w-[80%] mx-auto  rounded-md'>
            <div className="header grid grid-cols-3 p-4 border">
                <div className='text-center font-semibold text-lg uppercase'>Name</div>
                <div className='text-center font-semibold text-lg uppercase'>Email</div>
                <div className='text-center font-semibold text-lg uppercase'>Action</div>
            </div>
            {users.map((user) => (
                <div key={user._id} className="header grid grid-cols-3 p-4 border">
                    <div className='text-center'>{user.name}</div>
                    <div className='text-center'>{user.email}</div>
                    <div className='text-center'><button onClick={() => handleDelete(user._id)} className='bg-[#FF4136] w-[100px] font-semibold p-1 rounded-md text-sm text-[#fff]'>Remove</button></div>
                </div>
            ))}


        </div>
    )
}
export default AllUsers