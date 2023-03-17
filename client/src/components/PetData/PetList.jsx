import React, { useEffect, useState } from 'react'
import PetCard from './PetCard'
import axios from 'axios'
import { useSelector } from 'react-redux'
const PetList = () => {
  const { isCategory, isPrice } = useSelector(state => state.product)
  console.log(isPrice, isCategory);
  const [data, setData] = useState([])
  console.log(data);
  useEffect(() => {
    if (isCategory || isPrice) {
      axios.post('http://localhost:4000/pet/rec', { isPrice, isCategory })
        .then((response) => {
          console.log(response);
          setData(response.data)
        })
    }
    else {
      axios.get('http://localhost:4000/pet').then((response) => {
        setData(response.data);
      })
        .catch(error => {
          console.error(error);
        });
    }
  }, [isCategory, isPrice])
  return (
    <div>
      {
        data.length === 0 ? (
          <div>
            <h1 className=' bg-button-primary p-4 mt-10  text-[#fff] rounded-lg  w-[80%] mx-auto z-10'>
              We're sorry, but the product you requested is not currently
              available. Please try searching for a similar product or checking back later
            </h1>
          </div>

        ) : (
          <div className='grid grid-cols-4 gap-y-4 gap-x-2 md:grid-cols-2 sm:grid-cols-1  '>
            {
              data.map((pet) => (
                <PetCard key={pet._id} pet={pet} />
              ))
            }
          </div>
        )
      }
    </div>

  )
}

export default PetList