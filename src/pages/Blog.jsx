import React, { useEffect } from "react";
import bloggg from "../assets/blog2.jpg";
import search from "../assets/search-normal blog.png";
import { useState } from "react";
import car from "../assets/car blog.jpg";
import arr from "../assets/read arrow.png";
import ralph from "../assets/ralph blog.jpg";
import insur from "../assets/home insur blog.jpg";
import cal from "../assets/calendar.png";
import ScrollReveal from "scrollreveal";
import Compo from "../components/blogcompo";
import Downloadappcompo from "../components/downloadappcompo";
import Scrollcompo from "../components/Scrollcompo";

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(".left-element", {
      origin: "right", // come from right
      distance: "100px",
      duration: 5000, // slow animation
      easing: "ease-out",
      opacity: 0,
      interval: 1500, // stagger multiple elements
    });

    ScrollReveal().reveal(".center-element", {
      origin: "right",
      distance: "100px",
      duration: 5000,
      easing: "ease-out",
      opacity: 0,
      interval: 1500,
    });

    ScrollReveal().reveal(".right-element", {
      origin: "right",
      distance: "100px",
      duration: 5000,
      easing: "ease-out",
      opacity: 0,
      interval: 1500,
    });
  }, []);

  return (
    <div className="">
      <div className="h-[441px] mt-4 md:w-[1440px] hero-bg">
        <h1 className="pop text-[40px] font-bold text-[#FFFFFF] text-center pt-43">
          Blog
        </h1>
      </div>

      <div className="mt-4">
        <div>
          <div className="flex px-6  justify-between">
            <h2 className="text-[#000000] font-bold text-[25px]">
              All Articles
            </h2>
            <div>
              <img
                src={search}
                alt=""
                className=" w-[24px] h-[24px] mt-2 md:hidden "
              />
            </div>

            <div
              className={`relative flex items-center bg-white border rounded-full transition-all duration-500 overflow-hidden hidden md:block ${
                isOpen ? "w-72" : "w-12"
              }`}
            >
              {/* Input field */}
              {isOpen && (
                <input
                  type="text"
                  placeholder="Search here..."
                  className="flex-1 outline-none px-4 py-2 text-[12px] text-black"
                  autoFocus
                />
              )}

              {/* Search Icon */}
              <img
                src={search}
                alt="Search"
                className="w-10 h-10 p-2 cursor-pointer "
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center md:gap-x-9 -mt-5 md:mt-6 md:max-w-[1238.03px] mx-auto">
        {/* Card 1 */}
        <div className="w-[307px] md:w-[388.68px]  md:mt-0 mt-8 mx-auto left-element">
          {/* Mobile Image */}
          <img
            src={car}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={car}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              Why Car Insurance is Mandatory in Nigeria and the Risks of
              Driving...
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Lois</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">May 29, 2024</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-12 pr-14 font-normal">
              Nigeria’s bustling roads are filled with millions of vehicles
              daily, and regardless of where you drive, car insurance remains a
              mandatory requirement by...
            </p>
          </div>

          <button className="pop mt-5 flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>

        {/* Card 2 */}
        <div className="w-[307px] md:w-[388.68px] md:mt-0 mt-8 mx-auto center-element">
          {/* Mobile Image */}
          <img
            src={ralph}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={ralph}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              How to Build Financial Stability with Leadway
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Lane</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">April 8, 2025</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-10 pr-14 font-normal">
              We all strive for financial stability, but it can feel out of
              reach, especially in uncertain times. The good news? Leadway can
              help you achieve that...
            </p>
          </div>

          <button className="pop md:mt-5 mt-5 flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>

        {/* Card 3 */}
        <div className="w-[307px] md:w-[388.68px] md:mt-0 mt-8 mx-auto right-element">
          {/* Mobile Image */}
          <img
            src={insur}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={insur}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              Understanding Comprehensive Auto Insurance Coverage
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Allen</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">May 29, 2025</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-10 pr-14 font-normal">
              The rains are back with a vengeance, and if you have been on
              social media lately, you have probably seen the endless complaints
              — hailstorm in Delta, Homes...
            </p>
          </div>

          <button className="pop md:mt-5 mt-5 flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>
      </div>

      <Compo />

      <Downloadappcompo />

      <Scrollcompo />
    </div>
  );
};

export default Blog;
