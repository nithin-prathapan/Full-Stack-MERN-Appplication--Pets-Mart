import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import { useSelector } from "react-redux";
import ReviewCard from "../components/Ratings/ReviewCard"
const PetDetails = () => {
  const petDetail = useSelector(state => state.product.petDetail)
  const [petData, setPetData] = useState([])
  useEffect(() => {
    setPetData(petDetail)
  }, [petDetail])

  return (
    <div>
      {
        petData ? (
          <div className="flex w-full  md:h-full md:text-sm sm:h-full h-[100vh] sm:grid-cols-1 m-4 mx-auto font-primary">
            <div className="col-span-4 w-[60%] mx-auto overflow-y-auto  ">
              <div className="image-container w-full flex justify-center ">
                <img className="rounded-lg w-[70%] shadow-md" src={`http://localhost:4000/images/${petData.image}`} alt={petData.name} />
              </div>
              <div className="description  p-10 mb-4 mt-4">
                <div className="name p-1 ">
                  <h1 className="uppercase text-lg font-semibold">{petData.name}</h1>
                </div>
                <div className=" w-full items-start ">
                  <div className="w-full flex p-1 justify-between">
                    <div>
                      <span className="flex"> Price : <h1>{petData.price}</h1></span>
                      <div className="block">
                        <span className="block"> Coat : <h1>{petData.coat}</h1></span>
                      </div>
                      <div>
                        <span className="flex"> Size : <h1>{petData.size}</h1></span>

                      </div>
                    </div>
                  </div>
                  <div className="flex w-full p-1 justify-between">
                    <div>
                      <span className="block"> Color :  <h1>{petData.color}</h1></span>
                      <div>
                        <span className="block"> Temperment : <h1>{petData.temperment}</h1></span>

                      </div>
                    </div>
                    {/* <h1>{species}</h1>
              <h1>{birthYear}</h1> */}
                  </div>
                  <div className="flex w-full p-1 justify-between">
                    <div>
                      <span className="flex"> Purpose :  <h1>{petData.purpose}</h1></span>
                      <div>
                        <span className="flex"> Life Span : <h1>{petData.lifespan}</h1></span>

                      </div>
                    </div>

                    {/* <h1>{species}</h1>
              <h1>{birthYear}</h1> */}
                  </div>
                </div>
                <div className="name  w-full mb-4">
                  <div className="w-full mt-2">
                    <h1 className=" sm:text-xs font-semibold">Description</h1>
                  </div>
                  <div className="w-full sm:overflow-x-visible mt-2">
                    <h1 className=" ">
                      {petData.description}
                    </h1>
                  </div>
                </div>
              </div>

            </div>
            <div className=" mx-auto w-[400px]">

              {/* ==========BOOKING==================== */}
              <Booking pet={petData} productPrice={petData.price} itemId={petData._id} />
              {/* ==========BOOKING==================== */}
              <ReviewCard id={petData._id} />
            </div>
          </div>
        ) : (
          <Link to='/'>
            <button className="bg-button-primary px-4 py-2 text-[#fff] rounded-md text-xl tracking-wide font-semibold mx-auto flex justify-center mt-[10%] mb-[10%]">CLICK TO  SHOW PRODUCTS</button >
          </Link>
        )
      }
    </div>

  );
};

export default PetDetails;
