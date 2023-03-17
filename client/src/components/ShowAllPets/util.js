import axios from 'axios';
import React, { useState } from 'react'

const EditProduct = ({ post }) => {
  const [image, setImage] = useState({ ...post.image })
  const [temperment, settemperment] = useState({ ...post.temperment })
  const [color, setcolor] = useState({ ...post.color })
  const [price, setprice] = useState({ ...post.price })
  const [size, setsize] = useState({ ...post.size })
  const [weight, setweight] = useState({ ...post.weight })
  const [name, setname] = useState({ ...post.name })
  const [coat, setcoat] = useState({ ...post.coat })
  const [purpose, setpurpose] = useState({ ...post.purpose })
  const [description, setdescription] = useState({ ...post.description })
  const [lifespan, setlifespan] = useState({ ...post.lifespan })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(coat);
    await axios.put(`http://localhost:4000/${post._id}`,
      { name, size, weight, purpose, temperment, color, image, description, lifespan, price, coat })
      .then((response) => {
        console.log(response);
      })
  }
  return (
    <div className='bg-[#fee]'>
      <label >
        Name
      </label>
      <input type="text" name="name" id="" onChange={(e) => setname(e.target.value)} />
      <input type="text" name="coat" id="" onChange={(e) => setcoat(e.target.value)} />
      <input type="text" name="purpose" id="" onChange={(e) => setpurpose(e.target.value)} />
      <button onClick={handleSubmit}>Save</button>
    </div>

  )
}

export default EditProduct