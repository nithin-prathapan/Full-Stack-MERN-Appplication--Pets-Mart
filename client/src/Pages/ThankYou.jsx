import React from "react";
import { Link } from "react-router-dom";
const ThankYou = () => {
  return (
    <div className="flex w-full ">
      <div className="mx-auto block mt-10">
        <div className="mx-auto items-center justify-center flex mt-4">
          <span className="border-[5px] text-lg font-bold border-[#00d100ee] rounded-full p-2">
            ✔
          </span>
        </div>
        <div className="mx-auto items-center justify-center flex mt-4">
          <h1 className="font-fancy font-bold tracking-wider drop-shadow-md text-3xl">
            Thank You
          </h1>
        </div>
        <div className="mx-auto font-primary items-center justify-center flex mt-4">
          <h1 className="drop-shadow-md font-semibold text-xl">
            Your Order has been placed
          </h1>
        </div>
        <div className="mx-auto font-primary font-semibold bg-button-primary rounded-3xl p-2 text-[#fff] items-center justify-center flex mt-4">
          <Link to="/">
            <button>Back To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
