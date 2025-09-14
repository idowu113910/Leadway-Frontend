import React from "react";
import con from "../assets/contact image.jpg";
import { motion } from "framer-motion";
import email from "../assets/email.png";
import phone from "../assets/phone call.png";
import clock from "../assets/clock.png";
import toast from "react-hot-toast";
import { useRef } from "react";
import map from "../assets/map image 1.png";
import loc from "../assets/location.png";
import arr from "../assets/read arrow.png";
import map1 from "../assets/image map.png";

const ContactUs = () => {
  const text = "Contact Us";

  const formRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    toast.success("Message Successfully Sent");

    formRef.current.reset();
  };

  return (
    <div>
      <div className="relative w-full max-w-[1440px] h-[600px] mx-auto mt-6">
        {/* Background Image */}
        <img
          src={con}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

        {/* Animated Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* First word */}
          <div className="flex space-x-2 md:text-[80px] text-[40.03px] font-bold text-white">
            {"Contact".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: -60, opacity: 0 }} // animate from top
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Second word */}
          <div className="flex space-x-2 md:text-[80px] text-[40.03px] font-bold text-white ">
            {"Us".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: (index + 7) * 0.1, // start after "Contact"
                  type: "spring",
                  stiffness: 120,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center md:hidden">
        <h2 className="pop font-medium text-[17px] leading-[100%] px-8">
          Have a Question? Connect With Us Quicker
        </h2>
        <h3 className="pop text-[14px] font-medium text-[#000000] mt-2">
          Reach out to us with any questions or concerns{" "}
        </h3>
      </div>

      <div className="px-8 mt-4 h-[95px] md:hidden">
        <div className="flex gap-3 mt-2">
          <img src={phone} alt="" />
          <p className="text-[#EA5B0C] text-[14px]">+234 02-012800700</p>
        </div>

        <div className="flex gap-3 mt-2">
          <img src={email} alt="" />
          <p className="text-[#EA5B0C] text-[14px]">insure@leadway.com</p>
        </div>

        <div className="flex gap-3 mt-2">
          <img src={clock} alt="" />
          <p className="text-[#EA5B0C] text-[14px]">
            Mon to Fri, 9AM - 5PM (GMT)
          </p>
        </div>
      </div>

      <form ref={formRef} className="flex flex-col mt-7 md:hidden">
        {/* Full name */}
        <label
          htmlFor="fullName"
          className="text-[17px] font-medium text-[#000000] ml-8"
        >
          Name
        </label>
        <div className="w-[300px] h-[38px] border border-[#ADADAD] rounded-[4px] mt-3 ml-8">
          <textarea
            id="fullName"
            name="fullName"
            rows={1}
            placeholder="Enter your full name"
            className="w-full h-full px-3 text-sm text-gray-700 placeholder-[#ADADAD] mt-2 rounded-[4px] focus:outline-none resize-none"
          />
        </div>

        {/* Message */}
        <label
          htmlFor="message"
          className="text-[17px] font-medium text-[#000000] mt-5 ml-8"
        >
          Message
        </label>
        <div className="w-[300px] h-[128px] border border-[#ADADAD] rounded-[5px] mt-3 ml-8">
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell us how we can help"
            className="w-full h-full px-3 py-2 text-sm text-gray-700 placeholder-[#ADADAD] rounded-[5px] resize-none focus:outline-none"
          />
        </div>

        <button
          type="sunmit"
          onClick={handleSendMessage}
          className="md:hidden pop mt-6 ml-9 bg-[#EA5B0C] rounded-[10px] py-[15px] px-[20px] text-[#FFFFFF] text-[14px] font-semibold w-[300px] "
        >
          Send Message
        </button>
      </form>

      <div className="md:hidden mt-6 relative">
        <img src={map} alt="" className="h-[297px]" />

        <div className="bg-[#FDEFE7] rounded-[10px] pl-[21px] w-[278px] h-[127.42px] absolute bottom-5 ml-7">
          <p className="text-[#000000] text-[12px] font-medium mt-2.5 ml-2">
            Visit Our Office
          </p>
          <div className="flex mt-1.5">
            <img src={loc} alt="" className="w-[24px] h-[24px]" />
            <p className="font-normal pop text-[12px] ml-1.5">
              121/123 Funso Williams Avenue, Iponri Surulere, Lagos
            </p>
          </div>

          <div className="mt-4 flex">
            <div className="flex border-[1px] border-[#EA5B0C] rounded-[8.35px] p-[6.68px] w-[110px] gap-4">
              <p className="text-[#383838] font-semibold text-[10px]">
                Get Directions
              </p>
              <img src={arr} alt="" className="w-3 h-3 mt-0.5" />
            </div>

            <div className="flex ml-4 mt-2 gap-2">
              <p className="text-[#383838] font-semibold text-[10px]">
                View All Locations
              </p>
              <img src={arr} alt="" className="w-3 h-3 mt-0.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex w-full min-h-screen bg-gray-50 justify-center items-center">
        <div className="max-w-5xl w-full grid grid-cols-2 gap-12">
          {/* Left: Form */}
          <form
            ref={formRef}
            className="bg-[#EBEBEB] w-[557px] h-[347px] p-6 rounded-lg shadow-md border border-gray-200 flex flex-col"
          >
            {/* Name */}
            <label
              htmlFor="fullName"
              className="text-gray-800 font-medium text-sm mb-2 ml-0.5"
            >
              Name
            </label>
            <textarea
              type="text"
              id="fullName"
              name="fullName"
              rows={1}
              placeholder="Enter your name"
              className="w-[497px] border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-[#ADADAD] focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />

            {/* Message */}
            <label
              htmlFor="message"
              className="text-gray-800 font-medium text-sm mb-2 mt-4 ml-0.5"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell us how we can help"
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-[#ADADAD] mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />

            {/* Send Message button */}
            <button
              onClick={handleSendMessage}
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition w-full"
            >
              Send Message
            </button>
          </form>

          {/* Right: Contact Info */}
          <div className="flex flex-col justify-start ">
            <h2 className="text-[25px] text-center font-semibold text-gray-900 mb-2">
              Have a Question? Connect With Us Quicker
            </h2>
            <div className="ml-13 mt-0.5">
              <p className="text-sm text-[#000000] mb-6">
                Reach out to us with any questions or concerns
              </p>

              <p className="text-[17px]  flex items-center text-[#EA5B0C] gap-2 mb-3">
                <span className="text-orange-500">📞</span>
                +234 01-2800700
              </p>
              <p className="text-[17px] text-[#EA5B0C] flex items-center gap-2 mb-3">
                <span className="text-orange-500">✉️</span>
                insure@leadway.com
              </p>
              <p className="text-[17px] text-[#EA5B0C] flex items-center gap-2">
                <span className="text-orange-500">⏰</span>
                Mon to Fri, 9AM – 5PM (GMT)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative mb-14">
        <img src={map1} alt="" />

        <div className="bg-[#FDEFE7] rounded-[10px] pl-[21px] w-[460px] h-[169px] absolute bottom-5 ml-22">
          <p className="text-[#000000] text-[17px] font-medium mt-2.5 ml-2">
            Visit Our Office
          </p>
          <div className="flex mt-1.5">
            <img src={loc} alt="" className="w-[24px] h-[24px]" />
            <p className="font-normal pop text-[14px] text-[#383838] ml-1.5">
              121/123 Funso Williams Avenue, Iponri Surulere, Lagos
            </p>
          </div>

          <div className="mt-4 flex">
            <div className="flex border-[1px] border-[#EA5B0C] rounded-[8.35px] p-[6.68px] w-[170px] h-[51px] gap-4">
              <p className="text-[#EA5B0C] font-semibold text-[14px] ml-2 mt-1 ">
                Get Directions
              </p>
              <img src={arr} alt="" className="w-6 h-5 mt-1.5" />
            </div>

            <div className="flex ml-4 mt-2 gap-2">
              <p className="text-[#EA5B0C] font-semibold text-[14px] ml-2 mt-1">
                View All Locations
              </p>
              <img src={arr} alt="" className="w-6 h-5 mt-1.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
