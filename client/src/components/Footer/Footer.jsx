import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="grid grid-cols-12 sm:block sticky  sm:text-xs  font-primary w-[90%] p-3 mx-auto mt-8">
      <div className="logo mx-aut mt-4 col-span-4 w-[80%] sm:w-full mx-auto">
        <div className="logo">
          <h1 className="font-fancy text-3xl text-[#ec2b2b] shadow-[#000] font-bold drop-shadow-lg mb-4 ">
            Pets-Mart
          </h1>
        </div>
        <div className="description w-full">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            molestias perspiciatis fugiat id sequi?
          </h1>
        </div>
        <div className="social-icons flex mt-2 mb-2">
          <h1 className="m-2 hover:scale-105 duration-300 ease-in-out rounded-full cursor-pointer ">
            <AiFillInstagram size={25} color="#0c002b" />
          </h1>
          <h1 className="m-2 hover:scale-105 duration-300 ease-in-out rounded-full cursor-pointer">
            <AiFillFacebook size={25} color="#0c002b" />
          </h1>
          <h1 className="m-2 hover:scale-105 duration-300 ease-in-out rounded-full cursor-pointer">
            <RiWhatsappFill size={25} color="#0c002b" />
          </h1>
        </div>
      </div>
      <div className="links col-span-8 grid grid-cols-3 my-auto md:grid-cols-2 sm:grid-cols-1  ml-2">
        <div className="Links mr-2">
          <ul>
            <li className="font-semibold  mb-3 mt-4 ">Discover</li>
            <li>Home</li>
            <li>About</li>
            <li>Our Features</li>
          </ul>
        </div>
        <div className="quicklinks mr-2 ">
          <ul>
            <li className="font-semibold  mb-3 mt-4 ">Quick Links</li>
            <li>Gallary</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className="font-semibold  mb-3 mt-4 ">Contact</li>

            <li className="flex ">
              <span className="mt-1 mr-1">
                <BiCurrentLocation />
              </span>{" "}
              Address:Baker Street UK
            </li>

            <li className="flex">
              <span className="my-auto mr-1">
                <AiTwotoneMail />
              </span>{" "}
              Email:petsmart124@gmail.com
            </li>

            <li className="flex">
              <span className="my-auto mr-1">
                <AiFillPhone />
              </span>{" "}
              Phone:+1585226876
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-12 w-full mx-auto">
        <p className="w-full font-medium mt-4 text-center mx-auto text-xs">
          Copyright 2023, designed and developed by Nithin Prathapan. All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
