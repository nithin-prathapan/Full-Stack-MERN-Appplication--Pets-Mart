import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { showList } from '../../redux/adminReducer';
const EditProduct = (props) => {
  const dispatch = useDispatch()
  const id = props.id
  //FETCHED DATA
  //SETTING THE DATA INTO USESTATES
  const [image, setimage] = useState('')
  const [temperment, settemperment] = useState('')
  const [color, setcolor] = useState('')
  const [price, setprice] = useState('')
  const [size, setsize] = useState('')
  const [weight, setweight] = useState('')
  const [name, setname] = useState('')
  const [coat, setcoat] = useState('')
  const [purpose, setpurpose] = useState('')
  const [description, setdescription] = useState('')
  const [lifespan, setlifespan] = useState('')

  //FETCHING SINGLE PET USING THE ID PASSED
  useEffect(() => {
    axios.get(`http://localhost:4000/pet/${id}`).then((response) => {
      const data = response.data
      setname(data.name)
      setcolor(data.color)
      setpurpose(data.purpose)
      setcoat(data.coat)
      setlifespan(data.lifespan)
      settemperment(data.temperment)
      setsize(data.size)
      setweight(data.weight)
      setprice(data.price)
      setimage(data.image)
      setdescription(data.description)
    })
  }, [id])
  console.log(name, color, purpose, temperment, size, weight, image, price);
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('image', image)
    formData.append('price', price)
    formData.append('coat', coat)
    formData.append('temperment', temperment)
    formData.append('size', size)
    formData.append('weight', weight)
    formData.append('color', color)
    formData.append('lifespan', lifespan)
    formData.append('purpose', purpose)
    axios.put(`http://localhost:4000/pet/${id}`, formData).then((response) => {
      console.log(response.data.success);
      if (response.data.success) {
        alert(response.data.message)
        dispatch(showList())
      }
    })
  }
  return (
    <div className=' grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[90%] md:w-full sm:w-full mx-auto m-4  shadow-md  p-4 rounded-lg'>
      <input className='block m-4 p-4 drop-shadow-md rounded-lg' type="text" name="name" id="" defaultValue={name}
        onChange={(e) => setname(e.target.value)} />
      <input className='block m-4 p-4 drop-shadow-md rounded-lg' type="text" name="coat" id="" defaultValue={coat}
        onChange={(e) => setcoat(e.target.value)} />
      <input className='block m-4 p-4 drop-shadow-md rounded-lg' type="text" name="price" id="" defaultValue={price}
        onChange={(e) => setprice(e.target.value)} />
      <input className='block m-4 p-4 drop-shadow-md rounded-lg' type="text" name="weight" id="" defaultValue={weight}
        onChange={(e) => setweight(e.target.value)} />
      <input className='block m-4 p-4 drop-shadow-md rounded-lg' type="text" name="size" id="" defaultValue={size}
        onChange={(e) => setsize(e.target.value)} />
      <input className='block m-4 p-4 drop-shadow-md rounded-lg' type="text" name="purpose" id="" defaultValue={purpose}
        onChange={(e) => setpurpose(e.target.value)} />
      <input className='block m-4 p-4 drop-shadow-md rounded-lg' type="text" name="description" id="" defaultValue={description}
        onChange={(e) => setdescription(e.target.value)} />
      <input className='block m-4 p-4 drop-shadow-md rounded-lg' type="text" name="temperment" id="" defaultValue={temperment}
        onChange={(e) => settemperment(e.target.value)} />
      <input className='block m-4 p-4 drop-shadow-md rounded-lg' type="text" name="color" id="" defaultValue={color}
        onChange={(e) => setcolor(e.target.value)} />
      <input className='block m-4 p-4 drop-shadow-md rounded-lg' type="text" name="lifespan" id="" defaultValue={lifespan}
        onChange={(e) => setlifespan(e.target.value)} />
      <input className='block m-4 p-4 drop-shadow-md rounded-lg' type="file" defaultValue={image} name="image" id="" onChange={(e) => setimage(e.target.files[0])} />
      <button onClick={handleSubmit}>Save</button>
    </div>

  )
}

export default EditProduct