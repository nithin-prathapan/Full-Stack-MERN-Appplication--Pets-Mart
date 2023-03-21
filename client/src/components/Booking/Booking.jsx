import React from "react";
import { AiFillStar} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartReducer";
// import { useNavigate } from "react-router-dom";
const Booking = ({ productPrice, pet }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  const serviceCharge = 16
  const totalPrice = serviceCharge + parseInt(productPrice)
  
 
  const handleOrderSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCart(pet))
    alert('ADDED TO CART')
    navigate('/cart')
  };
  return (
    <div className="booking w-[80%]  mx-auto font-primary rounded-md shadow-lg p-4">
      <div className="shadow-md  mx-auto flex p-4 justify-between">
        <h1 className=" text-3xl font-semibold ">
          <span>Rs : </span>
          {productPrice}</h1>
        <h1 className="my-auto  font-semibold text-xl flex">
          5
          <span className="my-auto ml-1  mr-1">
            <AiFillStar color="orange" />
          </span>
        </h1>
      </div>
      <div className="booking w-[90%] mx-auto mt-4 p-2 font-medium  rounded-md">

        <div className="w-full mx-auto flex justify-between mt-4 ">
          <h1>Price</h1>
          <h1>
            <span>Rs : </span>
            {productPrice}</h1>
        </div>
        <div className="w-full mx-auto flex justify-between mt-4 ">
          <h1>Service Charge</h1>
          <h1>
            <span>Rs : </span>
            {serviceCharge}</h1>
        </div>
        <div className="w-full mx-auto flex justify-between mt-4 ">
          <h1>Total Amount</h1>
          <h1>
            <span>Rs : </span>
            {
              totalPrice
            }
          </h1>
        </div>
        <div className="w-full mx-auto flex justify-between mt-4 ">
          <button
            onClick={handleOrderSubmit}
            className="bg-button-primary w-full p-2 rounded-3xl text-[#fff] font-semibold"
          >
            Save to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
