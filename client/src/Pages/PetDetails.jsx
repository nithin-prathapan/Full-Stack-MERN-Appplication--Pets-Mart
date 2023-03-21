import React from "react";
import { Link } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import { useSelector } from "react-redux";
import ReviewCard from "../components/Ratings/ReviewCard"
const PetDetails = () => {
  const { petDetail } = useSelector(state => state.product)
  return (
    <div>
      {
        petDetail ? (
          <div className="flex w-full  md:h-full md:text-sm sm:h-full h-[100vh] sm:grid-cols-1 m-4 mx-auto font-primary">
            <div className="col-span-4 w-[60%] mx-auto overflow-y-auto  ">
              <div className="image-container w-full flex justify-center ">
                <img className="rounded-lg w-[70%] shadow-md" src={`http://localhost:4000/images/${petDetail.image}`} alt={petDetail.name} />
              </div>
              <div className="description  p-10 mb-4 mt-4">
                <div className="name p-1 ">
                  <h1 className="uppercase text-lg font-semibold">{petDetail.name}</h1>
                </div>
                <div className=" w-full items-start ">
                  <div className="w-full flex p-1 justify-between">
                    <div>
                      <span className="flex"> Price : <h1>{petDetail.price}</h1></span>
                      <div className="block">
                        <span className="block"> Coat : <h1>{petDetail.coat}</h1></span>
                      </div>
                      <div>
                        <span className="flex"> Size : <h1>{petDetail.size}</h1></span>

                      </div>
                    </div>
                  </div>
                  <div className="flex w-full p-1 justify-between">
                    <div>
                      <span className="block"> Color :  <h1>{petDetail.color}</h1></span>
                      <div>
                        <span className="block"> Temperment : <h1>{petDetail.temperment}</h1></span>

                      </div>
                    </div>

                  </div>
                  <div className="flex w-full p-1 justify-between">
                    <div>
                      <span className="flex"> Purpose :  <h1>{petDetail.purpose}</h1></span>
                      <div>
                        <span className="flex"> Life Span : <h1>{petDetail.lifespan}</h1></span>

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
                      {petDetail.description}
                    </h1>
                  </div>
                </div>
              </div>

            </div>
            <div className=" mx-auto w-[400px]">

              {/* ==========BOOKING==================== */}
              <Booking pet={petDetail} productPrice={petDetail.price} itemId={petDetail._id} />
              {/* ==========BOOKING==================== */}
              <ReviewCard id={petDetail._id} />
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
