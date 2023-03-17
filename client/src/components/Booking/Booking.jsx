import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { AiFillStar, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartReducer";
// import { useNavigate } from "react-router-dom";
const Booking = ({ productPrice, itemId, pet }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let [quantity, setQuantity] = useState(1)
  const [items, setItems] = useState({
    productId: "",
    quantity: "",
    price: ""
  })
  useEffect(() => {
    setItems({
      price: productPrice,
      quantity: quantity,
      productId: itemId
    })
  }, [productPrice, quantity, itemId])

  const { user } = useSelector(state => state.auth)
  const [customerId] = useState(user._id)
  const orderId = nanoid()
  const serviceCharge = 16
  const totalPrice = serviceCharge + parseInt(productPrice * quantity)
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    mobile: "",
    email: ""
  })
  // const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setDeliveryDetails({
      ...deliveryDetails,
      [name]: value
    })
  };
  const incrementQuantity = (e) => {
    e.preventDefault()
    setQuantity(quantity += 1)
  }
  const decrementQuantity = (e) => {
    e.preventDefault()
    if (quantity > 1)
      setQuantity(quantity -= 1)
    if (quantity === 0)
      setQuantity(1)
  }
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
      {/* <div className="info w-[90%] mx-auto">
          <div className="information w-full">
            <h1 className="p-4 font-semibold text-xl">Enter your details</h1>
          </div>wha
          <div className="form pl-4  w-full mx-auto">
            <form action="" >
              <input required={true}
                onChange={handleChange}
                placeholder="Enter Name"
                id="name"
                className="w-[100%] rounded-sm shadow-md m-2 h-8 mx-auto p-6 outline-none"
                type="text"
                name="name"
                value={deliveryDetails.name}
              />
              <input required={true}
                onChange={handleChange}
                placeholder="Enter Mobile"
                id="mobile"
                className="w-[100%] rounded-sm shadow-md m-2 h-8 mx-auto p-6 outline-none"
                type="text"
                name="mobile"
                value={deliveryDetails.mobile}
              />
              <input required={true}
                onChange={handleChange}
                placeholder="Enter Email"
                id="email"
                className="w-[100%] rounded-sm shadow-md m-2 h-8 mx-auto p-6 outline-none"
                type="email"
                name="email"
                value={deliveryDetails.email}
              />{" "}
              <textarea
                onChange={handleChange}
                placeholder="Enter Home Address"
                id="address"
                className="w-[100%] rounded-sm shadow-md m-2 overflow-hidden  mx-auto p-6 outline-none"
                type="text"
                name="address"
                value={deliveryDetails.address}
              />{" "}
            </form>
          </div>
        </div> */}
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
