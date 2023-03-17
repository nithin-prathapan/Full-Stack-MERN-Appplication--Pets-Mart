import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userIcon from "../assets/images/user.png";
import login from "../assets/images/login.png";
import { useDispatch, useSelector } from 'react-redux'
import { authSignup, reset, setUser } from "../redux/authReducer";
const Signup = () => {
  const { success } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  useEffect(() => {
    if (success) {
      const user = JSON.parse(localStorage.getItem('profile'))
      console.log(user);
      dispatch(setUser(user))
      navigate('/')
    }
    dispatch(reset())
  }, [success, dispatch, navigate])

  const { name, email, password } = formData
  const userData = { name, email, password }
  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setFormData({
      ...formData,//spread operator 
      [name]: value
    })
  }
  const registerUser = (e) => {
    e.preventDefault();
    dispatch(authSignup(userData))
  };

  return (
    <div className="w-[80%] mx-auto drop-shadow-2xl  flex items-center justify-center h-full  align-middle">
      <div className="flex p-4 sm:block drop-shadow-2xl  w-[80%] md:w-full sm:w-full mt-[10%] mb-[10%]  justify-between">
        <div className="mx-auto w-[50%] drop-shadow-2xl sm:w-full ">
          <img className=" object-cover  mx-auto" src={login} alt="login" />
        </div>
        <div className="form  bg-button-primary rounded-md  top-0 col-span-2 min-h-full mx-auto sm:w-full  w-[50%]">
          <div>
            <img
              className="w-[15%] -translate-y-[50%] mx-auto"
              src={userIcon}
              alt=""
            />
          </div>
          <div className="form w-[90%] mt-[10%] mx-auto ">
            <form
              action="#"
              className="mx-auto w-[90%]"
            >
              <input
                placeholder="Full Name"
                onChange={handleChange}
                value={formData.name}
                className="block mt-8 outline-none mx-auto w-[80%]  p-2 rounded-md "
                type="text"
                name="name"
              />
              <input
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="block mt-8 outline-none mx-auto w-[80%]  p-2 rounded-md "
                type="email"
                name="email"
              />
              <input
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="block mt-8 outline-none mx-auto w-[80%]  p-2 rounded-md "
                type="password"
                name="password"
              />
              <div className="w-full mx-auto items-center flex justify-center">
                <button onClick={registerUser}
                  type="submit"
                  className="w-[80%] mt-6 mb-[10%] mx-auto p-2 rounded-md text-[#fff] font-semibold bg-mid-dark "
                >
                  Register
                </button>
              </div>
            </form>
            <p className="text-sm text-center text-[#fff] m-4">
              Already have an account ?
              <span
                className="ml-2 text-[#000]
              cursor-pointer font-semibold hover:text-[#01f]"
              >
                <Link to="/signup">Login Here</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
