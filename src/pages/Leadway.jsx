import React, { useState } from "react";
import home from "../assets/url.png";
import msg from "../assets/message box desktop.png";
import { Link, useNavigate } from "react-router-dom";
import pers from "../assets/personal image.png";
import busi from "../assets/hOuse insurance.png";
import auth from "../assets/Auto insurance.png";
import asse from "../assets/image cal.jpg";
import man from "../assets/a man img.png";
import box from "../assets/checkbox.png";
import ann from "../assets/ann img.jpg";
import star from "../assets/star.png";
import thomas from "../assets/Thomas img.png";
import carou from "../assets/right carousel.png";
import carou2 from "../assets/left carousel.png";
import travel from "../assets/travel.png";
import cal from "../assets/calendar.png";
import arr from "../assets/read arrow.png";
import insurance from "../assets/insurance.png";
import blogg from "../assets/blog.jpg";
import play from "../assets/play.png";
import app from "../assets/store.png";
import scrolling from "../assets/scrolling.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import gsap from "gsap";
import { useRef } from "react";
import phone from "../assets/phone img.png";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Downloadappcompo from "../components/downloadappcompo";
import LeadDesktop from "../components/LeadDesktop";
import hand from "../assets/Frame 15.png";
import con from "../assets/med blog.jpg";
import fam from "../assets/blog.jpg";

const testimonials = [
  {
    id: 1,
    text: "Fast, friendly, and reliable! Filing a claim was incredibly easy and the support team was there every step of the way",
    author: "Thomas Avadu",
    img: thomas,
  },
  {
    id: 2,
    text: "I’ve never felt more secure. Their coverage options are clear, affordable, and actually deliver when you need.",
    author: "Joan Eva",
    img: thomas,
  },
  {
    id: 3,
    text: "They saved me hundreds and gave me better coverage. Switching was the best decision i made this year!",
    author: "Dr. Daitah Femi",
    img: thomas,
  },
  {
    id: 4,
    text: "Customer service is outstanding. i got real answers from real people- no endless wait times.",
    author: "Chris Mark",
    img: thomas,
  },
  {
    id: 5,
    text: "Their mobile app makes managing my policy a breeze. Insurance has never been this convenient",
    author: "Eli Ahmed",
    img: thomas,
  },
  {
    id: 6,
    text: "After my accident, they handled everything quickly and compassionately. I felt truly cared for.",
    author: "Syndy Jane",
    img: thomas,
  },
  {
    id: 7,
    text: "The peace of mind the insurance gives me is priceless. I trust them with what matters most",
    author: "Thomas Jake",
    img: thomas,
  },
  {
    id: 8,
    text: "Clear policies, fair rates, and no hidden surprises. I recommend them them to all my friends.",
    author: "Michael Daniel",
    img: thomas,
  },
];

const Leadway = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  useEffect(() => {
    const el = scrollRef.current;

    // Duplicate the content to make seamless looping
    const clone = el.innerHTML;
    el.innerHTML += clone;

    // Measure one card’s width (including margin)
    const cardEl = el.querySelector("div");
    const cardWidth = cardEl.offsetWidth + 24; // offsetWidth + gap (adjust gap if different)

    // Get total width const cardWidth = 250 + 24; // card width + gap (adjust as needed)
    const totalWidth = el.scrollWidth / 2;

    // Animate continuously
    gsap.to(el, {
      x: `-${totalWidth}px`,
      ease: "linear",
      duration: 50, // adjust speed here
      repeat: -1, // infinite
      onUpdate: function () {
        const progress = this.progress(); // 0 → 1
        const offset = progress * totalWidth;
        const currentIndex =
          Math.floor(offset / cardWidth) % testimonials.length;
        setActiveIndex(currentIndex);
      },
    });
  }, []);

  return (
    <div className="max-w-screen overflow-x-hidden w-full">
      <div
        className="h-[441px] relative md:h-[643px] w-full max-w-[375px] md:max-w-[1440px] flex flex-col items-center justify-center text-center mt-7 md:mt-4 mx-auto overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(89.94deg, rgba(236, 91, 12, 0.4) 55.73%, rgba(0, 0, 0, 0.4) 67.19%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="pop font-bold text-[40px] md:text-[50px] leading-[100%] text-[#FFFFFF] w-full max-w-[342px] md:max-w-[900px]  mx-auto">
          Insurance that puts you first.
        </h1>
        <h4 className="pop text-[20px] md:text-[25px] font-medium text-[#FFFFFF] tracking-wide text-center w-full max-w-[323px] md:max-w-[700px] pt-4 mx-auto">
          Confidence in every claim. Support at every step.
        </h4>
        <div className="mt-2 pt-5">
          <button className="rounded-[10px] bg-[#EA5B0C] text-[#FFFFFF] py-[15px] px-[20px] md:py-[15px] md:px-[20px] font-semibold text-[18px] md:text-[20px]">
            Get Quote
          </button>
        </div>
        <img
          src={msg}
          alt=""
          className="hidden md:block absolute bottom-[50px] right-[50px]"
        />
      </div>

      {/* SERVICES */}
      <div className="flex flex-col md:flex-row md:justify-center md:gap-8 w-full mx-auto">
        {/* Personal */}
        <div className="relative rounded-[11.44px] gap-[11.44px] py-[30.88px] px-[30px] bg-[#fdefe7] mt-6 w-[334px] h-[244px] md:w-[334px] md:h-[244px] mx-auto md:mx-0">
          <img src={pers} alt="" />
          <p className="pop font-semibold text-[17px] mt-7 text-[#222222] ">
            Personal Insurance
          </p>
          <p className="pop font-normal text-[14px] text-[#222222] pr-9 mt-1">
            Life, health, and peace of mind—covered your way.
          </p>
          <Link className="pop text-[16.01px] absolute bottom-[25px] font-semibold text-[#EA5B0C]">
            View Details
          </Link>
        </div>

        {/* Business */}
        <div className="relative rounded-[10px] gap-[11.44px] py-[27px] px-[30px] bg-[#fdefe7] mt-6 w-[334px] h-[230.91px] md:w-[334px] md:h-[244px] mx-auto md:mx-0">
          <img src={busi} alt="" className="-mt-6" />
          <p className="pop font-semibold text-[17px] mt-6  text-[#222222] ">
            Business Insurance
          </p>
          <p className="pop font-normal text-[14px] text-[#222222] mt-1 pr-9 ">
            Safeguard your assets, team, and growth—effortlessly.
          </p>
          <Link className="pop text-[16.01px] absolute bottom-[16px] font-semibold text-[#EA5B0C] underline">
            View Details
          </Link>
        </div>

        {/* Auto */}
        <div className="relative rounded-[10px] gap-[11.44px] py-[27px] px-[30px] bg-[#fdefe7] mt-6 w-[334px] h-[230.91px] md:w-[334px] md:h-[244px] mx-auto md:mx-0">
          <img src={auth} alt="" />
          <p className="pop font-semibold text-[17px] mt-6  text-[#222222] ">
            Auto Insurance
          </p>
          <p className="pop font-normal text-[14px] text-[#222222] mt-1 pr-9 ">
            Protection on every ride, with fast claims and flexible plans.
          </p>
          <Link className="pop text-[16.01px] absolute bottom-[16px] font-semibold text-[#EA5B0C] underline">
            View Details
          </Link>
        </div>
      </div>

      {/* ASSET MANAGEMENT */}
      <div
        className="h-[234px] md:h-[494px] w-full md:max-w-[1440px] flex flex-col md:flex-row items-start md:items-center justify-between mt-7 bg-[#00000080] mx-auto overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${asse})`,
          backgroundSize: "cover",
          backgroundPosition: "center 5%",
        }}
      >
        <div className="flex-1 pt-[24px] pl-[19px] md:pl-[60px] md:pt-0">
          <p className="pop font-bold text-[25px] md:text-[40px] leading-[100%] text-[#FFFFFF]">
            Asset Management
          </p>
          <p className="pop font-normal text-[14px] md:text-[25px] md:font-medium  text-[#FFFFFF] pt-3.5 md:pt-6 pr-31 md:pr-[750px]">
            Diversify your portfolio with expert-managed mutual funds and
            investment plans tailored to your risk appetite.
          </p>
          <button className="font-semibold text-[14px] md:text-[20px] pop text-[#FFFFFF] rounded-[10px] bg-[#EA5B0C] py-[15px] px-[20px] md:py-[15px] md:px-[20px] mt-4">
            Explore Plans
          </button>
        </div>
      </div>

      <div className="mt-6 px-8 md:hidden">
        <h4 className="pop text-[25px] font-bold leading-[100%] text-center">
          Enjoy Retirement
        </h4>
        <p className="pop text-[16px] mt-1.5 text-center">
          <span className="text-[#EC5B0C]">20+ years</span> helping Nigerians
          retire with confidence and peace of mind. Start your journey toward a
          secure and fulfilling retirement.
        </p>

        <img src={man} alt="" className="mt-4" />

        <div className="flex flex-col px-1 mt-1.5">
          <div className="flex flex-row items-center gap-3">
            <img src={box} alt="" className="w-[18px] h-[18px] mt-3.5" />
            <div className="flex flex-col mt-4">
              <p className="fpop text-[#000000] text-[17px] font-semibold">
                Guaranteed Retirement Income
              </p>
              <p className="pop text-[12px] font-normal text-[#000000]">
                Enjoy consistent payouts after your working years.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <img src={box} alt="" className="w-[18px] h-[18px] mt-3.5" />
            <div className="flex flex-col mt-4">
              <p className="fpop text-[#000000] text-[17px] font-semibold">
                Flexible Contribution Plans
              </p>
              <p className="pop text-[12px] font-normal text-[#000000]">
                Save at your pace — monthly, quarterly, or annually.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <img src={box} alt="" className="w-[18px] h-[18px] mt-3.5" />
            <div className="flex flex-col mt-4">
              <p className="fpop text-[#000000] text-[17px] font-semibold">
                Easy Access Anytime
              </p>
              <p className="pop text-[12px] font-normal text-[#000000]">
                Track your pension, earnings, and growth{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <img src={box} alt="" className="w-[18px] h-[18px] mt-3.5" />
            <div className="flex flex-col mt-4">
              <p className="fpop text-[#000000] text-[17px] font-semibold">
                Dedicated Retirement Advisors
              </p>
              <p className="pop text-[12px] font-normal text-[#000000]">
                Get expert guidance tailored to your goals.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 bg-[#EA5B0C] rounded-[10px] w-[236px] h-[51px] ml-8">
          <button className="text-[#FFFFFF] pop font-semibold text-[14px] mt-4">
            Start Your Retirement Plans
          </button>
        </div>
      </div>

      <div>
        <LeadDesktop />
      </div>

      <div className="md:hidden mt-10 text-center">
        <h4 className="pop text-[#383838] text-[25px] font-bold leading-[100%]">
          Annual Report
        </h4>
        <img src={hand} alt="" className="w-[334px] px-2 ml-4.5 mt-6" />
        <p className="text-left font-normal pop text-[14px] text-[#383838] ml-2 px-5 mt-3.5 w-[330px]">
          Access detailed performance insights, strategic updates, and how we’re
          delivering long-term value to policyholders and partners.
        </p>
        <div className="mt-2 rounded-[10px] bg-[#EA5B0C] w-[180px] h-[51px] py-[12px] px-[20px] ml-24 mt-5">
          <button className="text-[#FFFFFF] text-[14px] font-semibold pop">
            View Annual Report
          </button>
        </div>
      </div>

      <div className="md:hidden text-center mt-6">
        <h5 className="font-bold text-[25px] text-[#383838] ">Testimonials</h5>

        <div
          ref={scrollRef}
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ width: "max-content" }}
        >
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={` max-w-[335px] p-6 bg-white rounded-xl shadow-md text-center transition-all duration-500
          ${
            index === activeIndex
              ? "scale-105 opacity-100"
              : "scale-95 opacity-50"
          }
        `}
            >
              {/* Stars */}
              <div className="flex justify-center mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-orange-500 text-lg">
                      ★
                    </span>
                  ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 text-sm mb-6">"{t.text}"</p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <img
                  src={t.img}
                  alt={t.author}
                  className="w-10 h-10 rounded-full mb-2"
                />
                <p className="font-semibold">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center md:gap-x-9 mt-10 md:mt-20 md:max-w-[1238.03px] mx-auto">
        {/* Card 1 */}
        <div className="w-[307px] md:w-[388.68px]  md:mt-0 mt-11 mx-auto left-element">
          {/* Mobile Image */}
          <img
            src={travel}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={travel}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              Top Travel Insurance Plans For Nigerians
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Iris</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">Dec 12, 2024</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-12 pr-14 font-normal">
              Asides the excitement that comes with planning for a trip abroad
              and trying to figure out your itineraries, one important aspect
              you should never...
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
            src={con}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={con}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              Get Goods in Transit Insurance: Protect Your Cargo While
              Shipping...
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Barry</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">April 8, 2025</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-10 pr-14 font-normal">
              Shipping valuable items across Nigeria can be risky business.
              Whether you're sending products to customers or moving inventory
              between...
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
            src={fam}
            alt=""
            className="block md:hidden w-[307px] h-[219.58px] rounded-[6.97px]"
          />

          {/* Desktop Image */}
          <img
            src={fam}
            alt=""
            className="hidden md:block w-[388.68px] h-[306.85px] rounded-[9.74px]"
          />

          <div>
            <p className="pop font-semibold text-[17px] md:text-[20px] md:w-[383px] text-[#1E1E1E] mt-2">
              330 Billion Reasons to Smile: Leadway’s Promise to You
            </p>

            <div className="pop flex gap-[30.05px] md:mt-1">
              <p className="text-[12px] font-normal text-[#383838]">
                By <span className="text-[#000000]">Klaus</span>
              </p>
              <div className="flex gap-[3.49px]">
                <img src={cal} alt="" className="w-[18px] h-[18px]" />
                <p className="text-[12px] font-medium">Sep 13, 2024</p>
              </div>
            </div>

            <p className="pop text-[12px] md:text-[14px] md:w-[383px] text-[#383838] md:pr-12 pr-14 font-normal">
              Have you ever made a promise to someone and felt really good when
              you kept it? Maybe you promised your child you would take them for
              a fun outing, or...
            </p>
          </div>

          <button className="pop md:mt-5 mt-5  flex gap-[10px] font-semibold text-[#F1602C] text-[14px] md:underline">
            Read More{" "}
            <img
              src={arr}
              alt=""
              className="md:mt-2.5 md:-mr-20 md:w-[7.93px] md:h-[5.84px]"
            />
          </button>
        </div>
      </div>

      <Downloadappcompo />
    </div>
  );
};

export default Leadway;
