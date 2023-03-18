import React, { useEffect, useState } from 'react'
import PetCard from './PetCard'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './petcard.css'
const PetList = () => {
  //slider settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
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
          <div className='my-auto  w-full'>
            <Slider {...settings}>
              {
                data.map((pet) => (
                  <PetCard key={pet._id} pet={pet} />
                ))
              }
            </Slider>
          </div>
        )
      }


    </div>

  )
}

export default PetList