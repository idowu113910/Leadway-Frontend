import React from "react";
import { motion } from "framer-motion";
import boat from "../assets/boat blog.jpg";
import water from "../assets/water.jpg";
import ship from "../assets/ship.jpg";
import con from "../assets/container blog.jpg";
import bro from "../assets/tech.jpg";
import { LuDot } from "react-icons/lu";
import Downloadappcompo from "../components/downloadappcompo";

const Insurance = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden hidden md:block bg-black">
        {/* Background water layer */}
        <motion.img
          src={boat} // replace with your actual image path
          alt="Boats"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Floating boats effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            x: [0, 20, 0, -20, 0], // left & right drift
            y: [0, -15, 0, 15, 0], // up & down drift
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={boat}
            alt="Floating Boats"
            className="w-full h-full object-cover opacity-90"
          />
        </motion.div>
      </div>

      <div
        className="md:hidden h-[451.33px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${boat})`,
          backgroundSize: "cover",
          backgroundPosition: "center 5%",
        }}
      >
        <p className="flex justify-center text-center py-50 font-bold text-[#FFFFFF] text-[40.03px] px-8 pop leading-[100%]">
          Marine Insurance
        </p>
      </div>

      <div className="text-center mt-6">
        <h4 className="text-[25.02px] md:text-[50px] leading-[100%] font-bold pop text-[#000000]">
          Marine Products{" "}
        </h4>
        <p className="text-[14px] md:text-[25px] md:text-center font-normal md:font-medium pop text-[#5A5A5A] px-8 md:px-70 mt-2">
          Comprehensive cover for your vessels, cargo, and goods in transit
          locally and internationally.
        </p>
      </div>

      <div className="md:hidden">
        <div className="mt-6 text-center">
          <img
            src={water}
            alt=""
            className="rounded-[9.64px] w-[300px] h-[280px] ml-9"
          />

          <div className="text-center mt-4">
            <p className="text-[#EA5B0C] pop text-[20px] font-semibold">
              Marine Hull & Machinary
            </p>
            <p className="text-[#383838] font-normal text-[12px] px-16">
              Protect your vessel and machinery from damage, collisions, and
              maritime risks — from port to sea.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <img
            src={ship}
            alt=""
            className="rounded-[9.64px] w-[300px] h-[280px] ml-9"
          />

          <div className="text-center mt-4">
            <p className="text-[#EA5B0C] pop text-[20px] font-semibold">
              Marine Cargo
            </p>
            <p className="text-[#383838] font-normal text-[12px] px-18">
              Secure your goods in transit against loss, theft, or damage —
              whether by sea, air, or land.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <img
            src={con}
            alt=""
            className="rounded-[9.64px] w-[300px] h-[280px] ml-9"
          />

          <div className="text-center mt-4">
            <p className="text-[#EA5B0C] pop text-[20px] font-semibold">
              Goods in Transit
            </p>
            <p className="text-[#383838] font-normal text-[12px] px-16">
              Protect your goods while moving within Nigeria — from warehouse to
              final destination, by road or rail.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:flex mt-4 w-[1116px] gap-10 ml-24">
        <div className="mt-6 text-center">
          <img
            src={water}
            alt=""
            className="rounded-[9.64px] w-[340px] h-[307px] ml-9"
          />

          <div className="text-center mt-4">
            <p className="text-[#EA5B0C] pop text-[25px] font-semibold">
              Marine Hull & Machinary
            </p>
            <p className="text-[#383838] font-normal text-[17px] px-16">
              Protect your vessel and machinery from damage, collisions, and
              maritime risks — from port to sea.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <img
            src={ship}
            alt=""
            className="rounded-[9.64px] w-[348px] h-[307px] "
          />

          <div className="text-center mt-4">
            <p className="text-[#EA5B0C] pop text-[25px] font-semibold">
              Marine Cargo
            </p>
            <p className="text-[#383838] font-normal text-[17px] px-4">
              Secure your goods in transit against loss, theft, or damage —
              whether by sea, air, or land.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <img
            src={con}
            alt=""
            className="rounded-[9.64px] w-[340px] h-[307px] "
          />

          <div className="text-center mt-4">
            <p className="text-[#EA5B0C] pop text-[25px] font-semibold">
              Goods in Transit
            </p>
            <p className="text-[#383838] font-normal text-[17px] px-3">
              Protect your goods while moving within Nigeria — from warehouse to
              final destination, by road or rail.
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden mt-10 text-center">
        <h4 className="pop font-bold text-[25px] leading-[100%] text-[#000000] px-4 ">
          Fast, and Transparent Claims Process
        </h4>
        <p className="text-[#5A5A5A] font-normal pop  mt-3 px-4 ">
          We’re committed to resolving your claims quickly
        </p>
      </div>

      <img
        src={bro}
        alt=""
        className="w-[335.25px] ml-5 rounded-tl-[30px] rounded-br-[30px] h-[297.32px] mt-4 md:hidden"
      />

      <div className="md:hidden">
        <div className="flex mt-3 ml-6">
          <LuDot />
          <p className="font-normal text-[12px] pop px-6">
            Claims acknowledged within 24–48 hours of notification
          </p>
        </div>
        <div className="flex mt-3 ml-6">
          <LuDot />
          <p className="font-normal text-[12px] pop px-6">
            {" "}
            Payments processed in as little as 24 hours for eligible claims
          </p>
        </div>
        <div className="flex mt-3 ml-6">
          <LuDot />
          <p className="font-normal text-[12px] pop px-6">
            Submit and track your claims easily via our online portal
          </p>
        </div>

        <button className="bg-[#EA5B0C] text-white rounded-[6.46px] w-[122.22px] h-[33.38px] text-[9.04px] font-semibold ml-7 mt-4">
          View Procedures
        </button>
      </div>

      <div className="hidden md:block mt-26 md:flex">
        <img
          src={bro}
          alt=""
          className="w-[548px] h-[486px] rounded-br-[59px] ml-24"
        />

       <div className="mt-20 ml-6">
           <p className="pop font-bold text-[45px] px-8 leading-[100%]">Fast, Fair, and Transparent Claims Process</p>
          <p className="font-medium text-[25px] ml-9 mt-2">We’re committed to resolving your claims quickly</p>

            <div className="hidden md:block md:ml-4">
        <div className="flex mt-3 ml-6">
          <LuDot />
          <p className="font-normal text-[17px] pop px-6">
            Claims acknowledged within 24–48 hours of notification
          </p>
        </div>
        <div className="flex mt-3 ml-6">
          <LuDot />
          <p className="font-normal text-[17px] pop px-6">
            {" "}
            Payments processed in as little as 24 hours for eligible claims
          </p>
        </div>
        <div className="flex mt-3 ml-6">
          <LuDot />
          <p className="font-normal text-[17px] pop px-6">
            Submit and track your claims easily via our online portal
          </p>
        </div>

        <button className="bg-[#EA5B0C] text-white rounded-[6.46px] w-[244px] h-[60pxpx] py-[15px] px-[10px] text-[20px] font-semibold ml-7 mt-6">
          View Procedures
        </button>
      </div>
       </div>
       
      </div>

      <div>
        <Downloadappcompo />
      </div>
    </div>
  );
};

export default Insurance;
