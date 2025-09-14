import React from "react";
import lead from "../assets/leadway image.png";
import { Link } from "react-router-dom";
import error from "../assets/404.gif";

const Error = () => {
  return (
    <div className="h-[1045px] ">
      <Link className="flex justify-center mt-4.5 shadow-[0px_2px_4px_0px_#0000000A,_0px_24px_48px_0px_#0000001F] border-b-2  w-full border-[#FFFFFF]">
        <img src={lead} alt="" className="mb-6" />
      </Link>

      <div className="flex justify-center mt-8">
        <img src={error} alt="" />
      </div>

      <div className="flex flex-col items-center justify-center ">
        <p className="font-semi-bold text-[30px] text-[#383838] pop">Oops!</p>
        <p className="pop font-medium text-[20px] md:text-[35px] text-[#5A5A5A]">
          We can’t find the page you’re looking for
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <div className="rounded-[10px] bg-[#EA5B0C] px-[20px] py-[15px] w-[181px]">
          <button className="text-[#FFFFFF] flex items-center justify-center text-[20px] font-semibold w-full">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
