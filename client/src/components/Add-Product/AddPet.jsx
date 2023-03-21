import axios from 'axios';
import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddPet = () => {
    const navigate = useNavigate()
    const [category, setCategory] = useState('')
    console.log(category);

    const [petData, setPetData] = useState({
        name: "",
        description: "",
        price: "",
        lifespan: "",
        size: "",
        weight: "",
        color: "",
        coat: "",
        temperment: "",
        purpose: ""
    })

    const [image, setImage] = useState(null)
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setPetData({
            ...petData,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        if (image === null) {
            alert('Please select an image to upload')
        } else {
            e.preventDefault()
            console.log(petData);
            const formData = new FormData()
            formData.append('name', petData.name)
            formData.append('description', petData.description)
            formData.append('price', petData.price)
            formData.append('age', petData.age)
            formData.append('color', petData.color)
            formData.append('temperment', petData.temperment)
            formData.append('size', petData.size)
            formData.append('weight', petData.weight)
            formData.append('lifespan', petData.lifespan)
            formData.append('purpose', petData.purpose)
            formData.append('coat', petData.coat)
            formData.append('category', category)
            formData.append('image', image)
            await axios.post('http://localhost:4000/pet', formData).then((response) => {
                console.log(response.data);
                navigate('/admin')
            })
        }
    }
    return (
        <div className=''>
            <h1 className='text-center mt-4 font-semibold uppercase text-2xl w-[300px] mx-auto pb-3 rounded-lg'>Add New Pet</h1>
            <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[90%] md:w-full sm:w-full mx-auto m-4  shadow-md  p-4 rounded-lg'>

                <input className='block m-4 p-4 drop-shadow-md rounded-lg'
                    type="text" onChange={handleChange} value={petData.name} name="name" placeholder='Pet Name' />
                <input className='block m-4 p-4 drop-shadow-md rounded-lg'
                    type="text" onChange={handleChange} value={petData.lifespan} name='lifespan' placeholder='Life Span' />
                <input className='block m-4 p-4 drop-shadow-md rounded-lg'
                    type="text" onChange={handleChange} value={petData.color} name="color" placeholder='Color' />
                <textarea className='block m-4 p-4 drop-shadow-md rounded-lg'
                    type="text" onChange={handleChange} value={petData.description} name="description" placeholder='Description' />
                <input className='block m-4 p-4 drop-shadow-md rounded-lg'
                    type="text" onChange={handleChange} value={petData.price} name="price" placeholder='Price (INR)' />
                <input className='block m-4 p-4 drop-shadow-md rounded-lg'
                    type="text" onChange={handleChange} value={petData.temperment} name="temperment" placeholder='Temperment' />
                <input className='block m-4 p-4 drop-shadow-md rounded-lg'
                    type="text" onChange={handleChange} value={petData.coat} name="coat" placeholder='Coat' />
                <input className='block m-4 p-4 drop-shadow-md rounded-lg'
                    type="text" onChange={handleChange} value={petData.purpose} name="purpose" placeholder='Purpose' />
                <input className='block m-4 p-4 drop-shadow-md rounded-lg'
                    type="text" onChange={handleChange} value={petData.weight} name="weight" placeholder='Weight' />
                <input className='block m-4 p-4 drop-shadow-md rounded-lg'
                    type="text" onChange={handleChange} value={petData.size} name="size" placeholder='Size' />
                <select
                    className='block m-4 p-4 drop-shadow-md rounded-lg ' name="" id=""
                    onChange={(e) => setCategory(e.target.value)} value={category}
                >
                    <option value="Others">
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
                <div className='m-4 p-4 shadow-md flex rounded-lg'>

                    <p className='my-auto w-full'>Upload a picture</p>
                    <input className='my-auto w-full' type="file" name="image" accept='.png , jpg ,jpeg' onChange={(e) => setImage(e.target.files[0])} />
                </div>
            </div>
            <div className='w-[80%] mx-auto'>
                <button onClick={handleSubmit} className='bg-gray-dark hover:bg-[#091c07] mt-6 w-full rounded-lg p-2 text-lg text-[#fff]'>Add to database</button>

            </div>
        </div>
    )
}

export default AddPet