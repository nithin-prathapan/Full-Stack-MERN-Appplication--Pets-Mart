import React from "react";
import catImage from '../../assets/images/home-cat.png';

const Subtitle = () => {
  return (
    <div className=" mt-4 font-primary w-full">
      <div className="bg-[#ff9100] flex h-auto w-[200px] rounded-3xl">
        <h1 className="flex my-auto w-[100%] text-xl p-1 font-fancy font-extrabold">
          Read Before You Go <span className="my-auto">
            <img
              className="w-8 ml-2 h-8  rounded-full bg-[#0000] hover:scale-105 duration-300 hover:bg-[#000]"
              src={catImage}
              alt={catImage}
            />
          </span>
        </h1>
      </div>
      <div className="description text-left m-3 w-[100%] mx-auto">
        <h1 className="font-semibold uppercase mx-auto ">Lorem, ipsum dolor.</h1>
        <h1 className="  mx-auto ">Lorem, ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ipsa natus aliquid, distinctio explicabo consectetur?.</h1>
      </div>

    </div>
  );
};

export default Subtitle;
