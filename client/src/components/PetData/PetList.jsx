import React, { useEffect, useState } from 'react'
import PetCard from './PetCard'
import Slider from 'react-slick'
import axios from 'axios'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux'
const PetList = () => {
  const { isCategory, isPrice } = useSelector(state => state.product)
  console.log(isPrice, isCategory);
  const [data, setData] = useState([])
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
  const dogs = data.filter((item) => item.category === "Dog")
  const cats = data.filter((item) => item.category === "Cat")
  const others = data.filter((item) => item.category !== "Dog" && item.category !== "Cat")
  console.log("dog", dogs);
  //slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]

  }
  return (
    <div className='w-full'>
      {
        data.length === 0 ? (
          <div>
            <h1 className=' bg-button-primary p-4 mt-10  text-[#fff] rounded-lg  w-[80%] mx-auto z-10'>
              We're sorry, but the product you requested is not currently
              available. Please try searching for a similar product or checking back later
            </h1>
          </div>

        ) : (
          <div className=' '>
            <div className='my-6 mb-12 mt-4 w-full mx-auto'>
              {
                dogs.length === 0 ? (<></>) : (
                  <div>
                    <h1 className='rounded-2xl mx-auto font-fancy text-[25px] px-2 py-1  my-4 ' >Dogs</h1>

                    <Slider slidesToShow={2}  {...settings}>
                      {
                        dogs.map((pet) => (
                          <PetCard key={pet._id} pet={pet} />
                        ))
                      }
                    </Slider>
                  </div>
                )
              }
            </div>
            <div className='my-6 mb-12 mt-4 w-full mx-auto'>
              {
                cats.length === 0 ? (<></>) : (

                  <div>
                    <h1 className='rounded-2xl mx-auto font-fancy text-[25px] px-2 py-1  my-4 ' >Cats</h1>
                    <Slider slidesToShow={2}  {...settings}>
                      {
                        cats.map((pet) => (
                          <PetCard key={pet._id} pet={pet} />
                        ))
                      }
                    </Slider>
                  </div>
                )
              }
            </div>
            <div className='my-6 mb-12 mt-4 w-full mx-auto'>
              {
                others.length === 0 ? (<></>) : (
                  <div className='w-full'>
                    <h1 className='rounded-2xl  mx-auto font-fancy text-[25px] px-2 py-1 w-full my-4' >You may like</h1>

                    <div className='grid grid-cols-5 sm:grid-cols-3 md:grid-cols-3'>
                      {
                        others.map((pet) => (
                          <PetCard key={pet._id} pet={pet} />
                        ))
                      }

                    </div>
                  </div>
                )
              }
            </div>
          </div>
        )
      }
    </div>

  )
}

export default PetList