import React, { useEffect, useState } from "react";
import "./Header.css";
import { HiMenuAlt4, HiOutlineShoppingCart } from "react-icons/hi";
import { BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/authReducer";
import SearchBar from "../Searchbar/SearchBar";

const Header = () => {
  const navigate = useNavigate()
  const [admin, setAdmin] = useState(false)
  const { totalQuantity } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
    const user = localStorage.getItem('user')
    if (user)
      setAdmin(JSON.parse(user).admin)
  });
  const [isMenu, setIsMenu] = useState(false);
  const menuStatus = () => {
    setIsMenu(!isMenu)
  };
  const handleLogout = (e) => {
    e.preventDefault()
    if (window.confirm('Are you sure  want to Logout?')) {
      localStorage.clear()
      dispatch(logoutUser())
      setLoggedIn(false)
      navigate('/')
    }
  }
  return (
    <div className="  p-4 font-primary shadow-md w-full">
      <div className="flex justify-around">
        {/* Logo */}
        <div className="font-fancy my-auto min-w-[130px]   flex items-center justify-start px-4 text-2xl font-extrabold drop-shadow-md z-10">
          <Link to='/'>
            <h1>Pets-Mart</h1>
          </Link>
        </div>
        <div className="w-full my-auto mx-4 ">
          <SearchBar />
        </div>
        <div className="flex justify-around w-full font-medium md:hidden  sm:hidden my-auto">
          <div>
            <Link to='/'>
              <h1 className="px-1 py-1 hover:bg-button-primary rounded-md duration-300 hover:text-[#fff]">Home</h1>
            </Link>
          </div>
          <div>
            {
              loggedIn ? (
                <button className="px-1 py-1 hover:bg-button-primary rounded-md duration-300 hover:text-[#fff]" onClick={handleLogout}>Logout</button>
              ) : (<Link to='/login'>
                <h1 className="px-1 py-1 hover:bg-button-primary rounded-md duration-300 hover:text-[#fff]">Login</h1>
              </Link>)
            }
          </div>
          <div>
            <Link to='/signup'>
              <h1 className="px-1 py-1 hover:bg-button-primary rounded-md duration-300 hover:text-[#fff]">Register</h1>
            </Link>
          </div>
          <div>
            {
              admin ? (
                <Link to='/admin'>
                  <button className="px-1 py-1 hover:bg-button-primary rounded-md duration-300 hover:text-[#fff]" >Dashboard</button>
                </Link>

              ) : (<></>)
            }
          </div>
          {
            loggedIn ? (<div className="">
              <Link to='/cart'>
                <div className="flex bg-[#000]  p-1 rounded-md ">
                  <span><HiOutlineShoppingCart size={25} color="#fff" /></span>
                  <span className="-translate-y-3  pl-1 pt-1 font-semibold text-md text-button-primary rounded-full ">{totalQuantity}</span>
                </div>

              </Link>
            </div>) : (<></>)
          }
        </div>
        {
          isMenu ? (<div className="invisible md:visible sm:visible my-auto mx-4 ">
            <BiHide onClick={menuStatus} className="cursor-pointer" size={30} />
          </div>) : (<div className="invisible md:visible sm:visible my-auto mx-4 ">
            <HiMenuAlt4 onClick={menuStatus} className="cursor-pointer" size={30} />
          </div>)
        }
      </div >
      {
        isMenu ? (<div className="m-4 border-t py-4 invisible  md:visible sm:visible z-10 ">
          <div>
            <Link to='/'>
              <h1 className="px-1 py-1 mt-3  hover:bg-button-primary rounded-md duration-300 hover:text-[#fff]">Home</h1>
            </Link>
          </div>
          <div>
            <Link to='/signup'>
              <h1 className="px-1 py-1 mt-3  hover:bg-button-primary rounded-md duration-300 hover:text-[#fff]">Register</h1>
            </Link>
          </div>
          <div>
            {
              loggedIn ? (
                <button className="px-1 py-1 mt-3  text-start w-full hover:bg-button-primary rounded-md duration-300 hover:text-[#fff]" onClick={handleLogout}>Logout</button>
              ) : (<Link to='/login'>
                <h1 className="px-1 py-1 mt-3  hover:bg-button-primary rounded-md duration-300 hover:text-[#fff]">Login</h1>
              </Link>)
            }
          </div>
          <div>
            {
              admin ? (
                <button className="px-1 py-1 mt-3  text-start w-full hover:bg-button-primary rounded-md duration-300 hover:text-[#fff]" onClick={handleLogout}>Dashboard</button>

              ) : (<></>)
            }
          </div>
          <div>
            {
              loggedIn ? (<div className="">
                <Link to='/cart'>
                  <div className="flex bg-[#000] w-[50px] mt-3   p-2 rounded-md ">
                    <span><HiOutlineShoppingCart size={25} color="#fff" /></span>
                    <span className="-translate-y-3  pl-1 pt-1 font-semibold text-md text-button-primary rounded-full ">{totalQuantity}</span>
                  </div>

                </Link>
              </div>) : (<></>)
            }
          </div>
        </div>) : (<></>)
      }

    </div >
  );
};
export default Header;
