import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userIcon from "../assets/images/user.png";
import login from "../assets/images/login.png";
import { useDispatch, useSelector } from "react-redux";
import { authSignin, setUser, reset } from "../redux/authReducer";

const Login = () => {
  const { success } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  useEffect(() => {
    if (success) {
      const user = JSON.parse(localStorage.getItem('user'))
      console.log(user);
      dispatch(setUser(user))
      navigate('/')
    }
    dispatch(reset())
  }, [success, dispatch, navigate])
  const { email, password } = formData
  const userData = { email, password }
  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setFormData({
      ...formData,//spread operator 
      [name]: value
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter your email and password')
    } else {
      dispatch(authSignin(userData))
    }
  };
  return (
    <div className="w-[80%] sm:w-full md:w-full mx-auto my-[5%]  flex items-center justify-center h-full  align-middle">
      <div className="w-[80%] sm:block drop-shadow-2xl sm:w-full md:w-full flex mx-auto p-4">
        <div className="mx-auto drop-shadow-2xl w-full sm:w-full ">
          <img className="w-[80%] sm:w-full md:w-full object-fill sm:[90%] mx-auto" src={login} alt="login" />
        </div>
        <div className="form  bg-button-primary rounded-md  top-0 col-span-2 min-h-full mx-auto sm:w-full  w-full">
          <div>
            <img
              className="w-[15%] -translate-y-[50%] mx-auto"
              src={userIcon}
              alt="usericon"
            />
          </div>
          <div className="form w-[90%] mt-[10%] mx-auto ">
            <form action="#" className="mx-auto w-[90%]">
              <input
                placeholder="Enter Your Email"
                onChange={handleChange}
                name='email'
                value={formData.email}
                className="block mt-8 outline-none mx-auto w-[80%]  p-2 rounded-md "
                type="text"
              />
              <input
                placeholder="Enter Your Password"
                onChange={handleChange}
                value={formData.password}
                name="password"
                className="block mt-8 outline-none mx-auto w-[80%]  p-2 rounded-md "
                type="text"
              />
              <div className="w-full mx-auto items-center flex justify-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-[80%] mt-6 mb-[10%] mx-auto p-2 rounded-md text-[#fff] font-semibold bg-mid-dark "
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-sm text-center text-[#fff] m-4">
              No Account ? Create a new One
              <span
                className="ml-2 text-[#000]
              cursor-pointer font-semibold hover:text-[#01f]"
              >
                <Link to="/signup">Click Here</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
