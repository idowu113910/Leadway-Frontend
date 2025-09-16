import React from "react";
import man from "../assets/a man img.png";
import box from "../assets/checkbox.png";
import hand from "../assets/Frame 15.png";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import thomas from "../assets/Thomas img.png";
import gsap from "gsap";

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

const LeadDesktop = () => {
  const scrollRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;

    // Duplicate the content to make seamless looping
    const clone = el.innerHTML;
    el.innerHTML += clone;

    // Measure one card’s width (including margin)
    const cardEl = el.querySelector("div");
    const cardWidth = cardEl.offsetWidth + 40; // offsetWidth + gap (adjust gap if different)

    // Get total width const cardWidth = 250 + 24; // card width + gap (adjust as needed)
    const totalWidth = el.scrollWidth / 2;

    // Animate continuously
    gsap.to(el, {
      x: `-${totalWidth}px`,
      ease: "linear",
      duration: 40, // adjust speed here
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
    <div>
      {/* Desktop Header Text */}
      <div className="hidden md:flex flex-col text-center mt-16">
        <h4 className="pop text-[45px] font-bold leading-[100%]">
          Enjoy Retirement
        </h4>
        <p className="pop text-[25px] font-normal ml-60 pr-20  w-[967px] mt-4 text-[#000000]">
          <span className="text-[#EC5B0C] font-normal ">20+ years</span> helping
          Nigerians retire with confidence and peace of mind. Start your journey
          toward a secure and fulfilling retirement.
        </p>
      </div>

      <div className="hidden md:flex md:items-start  mt-8 md:gap-8 md:max-w-[1440px] mx-auto">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src={man}
            alt="Retirement"
            className="w-[580px] h-[450px] ml-18 "
          />
        </div>

        {/* Right Feature Boxes */}
        <div className="flex-1 flex flex-col gap-[40px] ml-18">
          <div className="flex items-start gap-3">
            <img src={box} alt="" className="w-[18px] h-[18px] mt-2" />
            <div className="flex flex-col">
              <p className="fpop text-[#000000] text-[20px] font-semibold">
                Guaranteed Retirement Income
              </p>
              <p className="pop text-[17px] font-normal text-[#000000]">
                Enjoy consistent payouts after your working years.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={box} alt="" className="w-[18px] h-[18px] mt-2" />
            <div className="flex flex-col">
              <p className="fpop text-[#000000] text-[20px] font-semibold">
                Flexible Contribution Plans
              </p>
              <p className="pop text-[17px] font-normal text-[#000000]">
                Save at your pace — monthly, quarterly, or annually.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={box} alt="" className="w-[18px] h-[18px] mt-2" />
            <div className="flex flex-col">
              <p className="fpop text-[#000000] text-[20px] font-semibold">
                Easy Access Anytime
              </p>
              <p className="pop text-[17px] font-normal text-[#000000]">
                Track your pension, earnings, and growth from your phone
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={box} alt="" className="w-[18px] h-[18px] mt-2" />
            <div className="flex flex-col">
              <p className="fpop text-[#000000] text-[20px] font-semibold">
                Dedicated Retirement Advisors
              </p>
              <p className="pop text-[17px] font-normal text-[#000000]">
                Get expert guidance tailored to your goals.
              </p>
            </div>
          </div>

          <div className="w-[320px] ml-2 ">
            <button className="bg-[#EA5B0C] text-white pop font-semibold text-[20px] rounded-[10px] py-[15px] px-[20px]">
              Start Your Retirement Plans
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:flex md:gap-1">
        <div className="md:mt-56 md:text-left px-8 ml-8">
          <h4 className="font-bold pop leading-[100%] text-[45px] text-[#383838]">
            Annual Report
          </h4>
          <p className="md:font-medium md:text-[25px] pop text-[#383838] w-[610px] pr-14 mt-3">
            Access detailed performance insights, strategic updates, and how
            we’re delivering long-term value to policyholders and partners.
          </p>
          <div className="rounded-[10px] w-[250px] bg-[#EA5B0C] h-[60px] py-[15px] px-[20px] mt-4">
            <button className="text-[#FFFFFF] pop font-semibold text-[20px]">
              View Annual Reports
            </button>
          </div>
        </div>

        <img src={hand} alt="" className="w-[550px] mt-28" />
      </div>

      <div className="hidden md:block text-center mt-16">
        <h3 className="font-bold text-[45px] leading-[100%] text-[#383838] mb-10">
          Testimonials
        </h3>

        <div
          ref={scrollRef}
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ width: "max-content" }}
        >
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={`min-w-[400px] max-w-[420px] p-8 bg-white rounded-2xl shadow-lg text-center transition-all duration-500
          ${
            index === activeIndex
              ? "scale-105 opacity-100"
              : "scale-95 opacity-60"
          }
        `}
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-orange-500 text-xl">
                      ★
                    </span>
                  ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 text-base mb-6">"{t.text}"</p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <img
                  src={t.img}
                  alt={t.author}
                  className="w-12 h-12 rounded-full mb-3"
                />
                <p className="font-semibold text-lg">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadDesktop;
