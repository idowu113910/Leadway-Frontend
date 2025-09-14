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

    // Get total width
    const totalWidth = el.scrollWidth / 2;

    // Animate continuously
    gsap.to(el, {
      x: `-${totalWidth}px`,
      ease: "linear",
      duration: 10, // adjust speed here
      repeat: -1, // infinite
    });
  }, []);

  const handleNext = () => {
    if (activeIndex < testimonials.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-screen overflow-x-hidden w-full">
      <header className="w-full flex justify-between items-center p-4 md:px-12 bg-white shadow-md sticky top-0 z-50">
        <Link to="/" className="text-2xl font-bold text-[#EA5B0C]">
          Leadway
        </Link>
        <nav>
          {user ? (
            <div className="flex items-center gap-4">
              <p className="font-semibold text-[#383838]">
                Hi, {user.fullName}
              </p>
              <button
                onClick={handleLogout}
                className="bg-[#EA5B0C] text-white py-2 px-4 rounded-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/Signin"
                className="font-semibold text-[#383838] hover:text-[#EA5B0C]"
              >
                Sign In
              </Link>
              <Link
                to="/Signup"
                className="bg-[#EA5B0C] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#d44e0a]"
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </header>

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

      {/* RETIREMENT, TESTIMONIALS, NEWS, DOWNLOAD APP, ASSOCIATED COMPANIES */}
      {/* Paste all remaining code exactly as in your original snippet, including mobile+desktop layouts and buttons */}
      {/* Testimonials carousel uses handleNext and handlePrev */}
      {/* Associated Companies uses scrollRef and gsap animation */}

      <Downloadappcompo />
      <Footer />
    </div>
  );
};

export default Leadway;
