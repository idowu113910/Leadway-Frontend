import React from "react";
import play from "../assets/play.png";
import app from "../assets/store.png";
import phone from "../assets/phone img.png";

const downloadappcompo = () => {
  return (
    <div
      className="flex flex-col md:flex-row bg-[#FDEFE7] rounded-[15.33px] h-auto items-start mt-14 
             md:items-start md:w-[1440px] md:mx-auto md:px-16 md:py-16"
    >
      {/* Left: Text + Buttons */}
      <div className="w-[280.84px] md:w-[500px] md:ml-12 ml-12">
        <p className="pop text-[25px] font-semibold md:font-bold mt-9 md:pr-30 pr-20 text-[#EA5B0C] md:text-[40px] md:mt-0">
          Download Our Mobile App
        </p>

        <p className="pop text-[14px] font-medium text-[#000000] md:text-[#000000] mt-2 md:text-[25px] md:mt-4 md:pr-24 pr-8">
          Manage your Policies, file claims and get quote in one place
        </p>

        <div className="mt-4 bg-[#F6BC9B] py-[6.13px] px-[14.1px] rounded-[6.13px] w-[280px] md:w-[420px] md:py-[10px] md:px-[23px] md:text-left">
          <p className="pop text-[14px] font-medium md:font-bold text-[#222222] md:text-[20px]">
            SEAMLESS, EASY and CONVENIENT
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4 mb-4  mt-5.5 md:mt-8">
          {/* Google Play */}
          <button className="flex flex-row rounded-[10px] bg-[#000000] text-[#FFFFFF] w-[115.89px] h-[39.86px] gap-1 md:w-[140px] md:h-[50px]">
            <img
              src={play}
              alt=""
              className="w-[24.53px] h-[24.53px] mt-2 ml-1 md:ml-2 md:w-[28px] md:h-[28px] md:mt-2"
            />
            <div className="leading-none flex flex-col md:mt-1.5">
              <p className="pop font-semibold text-[8.58px] mt-2 md:text-[10px] md:mt-1 md:text-start text-start">
                Get it on
              </p>
              <p className="pop font-semibold text-[12.26px] mt-1 md:text-[14px]">
                Google Play
              </p>
            </div>
          </button>

          {/* App Store */}
          <button className="flex rounded-[10px] bg-[#000000] text-[#FFFFFF] w-[115.89px] h-[39.86px] gap-1 md:w-[140px] md:h-[50px]">
            <img
              src={app}
              alt=""
              className="w-[15px] h-[18px] mt-2.5 md:mt-2.5 ml-1 md:ml-1.5 md:w-[20px] md:h-[22px]"
            />
            <div className="leading-none flex flex-col md:mt-1.5">
              <p className="pop font-semibold text-[8.58px] mt-2 ml-2 md:text-[10px] md:mt-1 md:text-start">
                Download on the
              </p>
              <p className="pop font-semibold text-[12.26px] mt-1 md:ml-2 md:text-[14px] md:text-start">
                App Store
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Right: Phone Image (Desktop Only) */}
      <div className="hidden md:block md:ml-45">
        <img src={phone} alt="Phone" className="w-[400px] h-auto" />
      </div>
    </div>
  );
};

export default downloadappcompo;
