import React from "react";
import abt from "../assets/About URL.jpg";
import meet from "../assets/meeting img.jpg";
import first from "../assets/first guy.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";
import star from "../assets/star2.png";
import msg from "../assets/message box desktop.png";
import run from "../assets/run.png";
import trust from "../assets/solar_shield-bold.png";
import indus from "../assets/indus.png";
import finan from "../assets/fluent-mdl2_financial-solid.png";
import inno from "../assets/mage_light-bulb-fill.png";
import int from "../assets/mdi_shield-star-outline.png";
import ser from "../assets/mingcute_service-fill.png";
import cus from "../assets/mingcute_target-line.png";
import open from "../assets/material-symbols_door-open-outline-rounded.png";
import res from "../assets/material-symbols_handshake-outline.png";
import cro from "../assets/material-symbols_crown-outline-rounded.png";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import gbo from "../assets/gbo.png";
import fum from "../assets/fum.png";
import ern from "../assets/Ern.png";
import yem from "../assets/yem.png";
import kik from "../assets/kik.png";
import tun from "../assets/tunde.png";
import Downloadappcompo from "../components/downloadappcompo";
import Scrollcompo from "../components/Scrollcompo";

const faqs = [
  {
    question: "How do I file a claim?",
    answer:
      "File online via the Claims Portal or visit any branch with your policy and supporting documents.",
  },
  {
    question: "Can I buy insurance online?",
    answer:
      "Yes, you can get a quote and buy policies like Motor, Life, and Travel directly on our website.",
  },
  {
    question: "Can I insure goods in transit within Nigeria?",
    answer:
      "Yes, our Goods-in-Transit policy covers losses during local transportation by road or rail .",
  },
  {
    question: "What types of insurance does Leadway offer?",
    answer:
      "We offer Motor, Life, Health, Marine, Travel, Fire, SME and Investment plans.",
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className=" mt-4 md:w-[1440px] flex h-[400px] md:h-[500px] justify-center items-center  hero-bg2">
        <h1 className="pop text-[40px] md:text-[55px] font-bold text-[#FFFFFF] text-center pt-44 -mt-40">
          About Us
        </h1>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex md:flex-row md:items-start md:gap-8 md:pl-5 md:pr-5 md:mt-10">
        {/* Left side (text + images + stars) */}
        <div className="flex flex-col">
          <h1 className="font-bold text-[45px] leading-[100%] text-start mt-6">
            About Leadway Assurance
          </h1>

          <p className="pop font-normal text-[20px] pr-10 h-[180px] w-[603.62px] pl-1 mt-5">
            For over 45 years, LEADWAY has honored its underwriting commitments
            and has earned its reputation of excellence in claims handling. The
            evolution of LEADWAY since 1970 has mirrored the dramatic expansion
            of indigenous insurance service providers, with LEADWAY remaining in
            the forefront as an insurer of repute.
          </p>

          {/* First-fourth images + stars/reviews */}
          <div className="flex items-start gap-6 mt-4">
            {/* First - Fourth Images */}
            <div className="flex gap-2">
              <img src={first} alt="" />
              <img src={second} alt="" />
              <img src={third} alt="" />
              <img src={fourth} alt="" />
            </div>

            {/* Stars + reviews */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-[20px] h-[20px]" />
                <img src={star} alt="" className="w-[20px] h-[20px]" />
                <img src={star} alt="" className="w-[20px] h-[20px]" />
                <img src={star} alt="" className="w-[20px] h-[20px]" />
                <img src={star} alt="" className="w-[20px] h-[20px]" />
                <p className="text-[#EA5B0C]">5.0</p>
              </div>
              <p className="text-[#969897] mt-1">From 2000+ reviews</p>
            </div>
          </div>
        </div>

        {/* Right side (image) */}
        <div className="ml-auto">
          <img
            src={meet}
            alt=""
            className="w-[550px] rounded-[12px] object-cover"
          />

          <img src={msg} alt="" className="absolute -bottom-30 right-9" />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden mt-6">
        <h1 className="font-bold text-[25px] md:text-[45px] leading-[100%] pr-20 text-center md:text-start pl-10">
          About Leadway Assurance
        </h1>

        <img src={meet} alt="" className="rounded-[20px] mt-5 px-4" />

        <p className="mt-2.5 font-normal text-[14px] pr-16 pl-5">
          For over 45 years, LEADWAY has honored its underwriting commitments
          and has earned its reputation of excellence in claims handling. The
          evolution of LEADWAY since 1970 has mirrored the dramatic expansion of
          indigenous insurance service providers, with LEADWAY remaining in the
          forefront as an insurer of repute.
        </p>

        <div className="flex flex-row">
          {/* First - Fourth Images */}
          <div className="flex pl-5 mt-4.5 w-[108.48px] h-[31.73px]">
            <img src={first} alt="" />
            <img src={second} alt="" />
            <img src={third} alt="" />
            <img src={fourth} alt="" />
          </div>

          {/* Stars + reviews */}
          <div className="pop mt-2 ml-6">
            <div className="flex gap-2 pl-5.5 w-[145.33px] h-[24.56px]">
              <img src={star} alt="" className="w-[15px] h-[15px]" />
              <img src={star} alt="" className="w-[15px] h-[15px]" />
              <img src={star} alt="" className="w-[15px] h-[15px]" />
              <img src={star} alt="" className="w-[15px] h-[15px]" />
              <img src={star} alt="" className="w-[15px] h-[15px]" />
              <small className="text-[#EA5B0C]">5.0</small>
            </div>
            <small className="text-[#969897] block mt-1 ml-7">
              From 2000+ reviews
            </small>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-12 md:mt-24 items-center">
        <h2 className="text-[25px] md:text-[45px] pop  font-bold leading-[100%] pop ">
          Why Choose Us
        </h2>

        <p className="text-[14px] md:text-[20px]  font-medium md:font-normal text-[#5A5A5A] px-6 md:w-[781.7px] md:pr-14 md:items-center pr-12 mt-2.5 text-center">
          Our strong claims service and solid financial standing support the
          diverse clients who trust us to manage their risks
        </p>
      </div>

      <div className="block md:hidden mt-6 overflow-x-auto">
        <div className="flex gap-1 px-2 w-max">
          <div className="block md:hidden mt-6  rounded-[4.16px] border-[1.5px] border-[#F6BC9B] px-[20px] py-[15px] w-[312px] ml-4  gap-[11px]">
            <img src={run} alt="" />

            <p className="text-[17px] font-medium pop mt-3">Fast and Fair</p>

            <p className="font-normal pop text-[12px] mt-3 pr-8">
              Fast, fair, and dependable claims handling with N67.1 billion paid
              in 2023 alone
            </p>
          </div>

          <div className="block md:hidden mt-6  rounded-[4.16px] border-[1.5px] border-[#F6BC9B] px-[20px] py-[15px] w-[312px] ml-4  gap-[11px]">
            <img src={trust} alt="" />

            <p className="text-[17px] font-medium pop mt-3">Trustworthy</p>

            <p className="font-normal pop text-[12px] mt-3 pr-8">
              Decades of trust, from personal home to businesses and farmers
            </p>
          </div>

          <div className="block md:hidden mt-6  rounded-[4.16px] border-[1.5px] border-[#F6BC9B] px-[20px] py-[15px] w-[312px] ml-4  gap-[11px]">
            <img src={indus} alt="" />

            <p className="text-[17px] font-medium pop mt-3">
              Industry Recognized
            </p>

            <p className="font-normal pop text-[12px] mt-3 pr-8">
              Award-winning performance recognized by industry leaders
            </p>
          </div>

          <div className="block md:hidden mt-6  rounded-[4.16px] border-[1.5px] border-[#F6BC9B] px-[20px] py-[15px] w-[312px] ml-4  gap-[11px]">
            <img src={finan} alt="" />

            <p className="text-[17px] font-medium pop mt-3">
              Financial Stability
            </p>

            <p className="font-normal pop text-[12px] mt-3 pr-8">
              Strong financial backing and industry leading crediworthiness
            </p>
          </div>

          <div className="block md:hidden mt-6  rounded-[4.16px] border-[1.5px] border-[#F6BC9B] px-[20px] py-[15px] w-[312px] ml-4  gap-[11px]">
            <img src={inno} alt="" />

            <p className="text-[17px] font-medium pop mt-3">Innovative</p>

            <p className="font-normal pop text-[12px] mt-3 pr-8">
              Strong financial backing and industry leading crediworthiness
            </p>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="hidden md:flex md:flex-col items-center mt-10 px-12">
        {/* First row (3 cards) */}
        <div className="grid grid-cols-3 gap-6 w-full max-w-[1100px]">
          {/* Card 1 */}
          <div className="rounded-[4.16px] border-[1.5px] border-[#F6BC9B] px-[20px] py-[15px]">
            <img src={run} alt="" />
            <p className="text-[17px] md:text-[25.73px] font-medium pop mt-3">
              Fast and Fair
            </p>
            <p className="font-normal pop text-[12px] mt-3 pr-2 md:pr-2 md:text-[#5A5A5A] md:text-[20px]">
              Fast, fair, and dependable claims handling with N67.1 billion paid
              in 2023 alone
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[4.16px] border-[1.5px] border-[#F6BC9B] px-[20px] py-[15px]">
            <img src={trust} alt="" />
            <p className="text-[17px] font-medium pop mt-3 md:text-[25.73px]">
              Trustworthy
            </p>
            <p className="font-normal pop text-[12px] mt-3 pr-2 md:text-[20px] md:pr-5.5 md:text-[#5A5A5A]">
              Decades of trust, from personal home to businesses and farmers
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[4.16px] border-[1.5px] border-[#F6BC9B] px-[20px] py-[15px]">
            <img src={indus} alt="" />
            <p className="text-[17px] font-medium pop mt-3 md:text-[25.73px]">
              Industry Recognized
            </p>
            <p className="font-normal pop text-[12px] mt-3 pr-2 md:text-[20px] md:pr-16 md:text-[#5A5A5A]">
              Award-winning performance recognized by industry leaders
            </p>
          </div>
        </div>

        {/* Second row (2 centered cards) */}
        <div className="grid grid-cols-2 gap-6 mt-14">
          {/* Card 4 */}
          <div className="rounded-[4.16px] border-[1.5px] border-[#F6BC9B] px-[20px] py-[15px] md:w-[378px]">
            <img src={finan} alt="" />
            <p className="text-[17px] font-medium pop mt-3 md:text-[25.73px]">
              Financial Stability
            </p>
            <p className="font-normal pop text-[12px] md:text-[20px] md:pr-6 md:text-[#5A5A5A] mt-3 pr-2">
              Strong financial backing and industry leading creditworthiness
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-[4.16px] border-[1.5px] md:w-[378px] border-[#F6BC9B] px-[20px] py-[15px]">
            <img src={inno} alt="" />
            <p className="text-[17px] font-medium pop mt-3 md:text-[25.73px]">
              Innovative
            </p>
            <p className="font-normal pop text-[12px] md:text-[20px] mt-3 pr-2 md:pr-6 md:text-[#5A5A5A]">
              Strong financial backing and industry leading creditworthiness
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-28  items-center text-center px-10">
        <h4 className="text-[25px] md:text-[45px] text-[#000000] pop font-bold leading-[100%]">
          Our Core Values
        </h4>

        <p className="font-medium pop text-[#5A5A5A] text-[14px] md:text-[20px] md:px-36 md:mt-2 mt-3">
          At Leadway Assurance, our daily operations and long-term vision are
          shaped by our unwavering core values collectively represented by
          iSCORE
        </p>
      </div>

      <div className="block md:hidden mt-2 overflow-x-auto">
        <div className="flex gap-1 px-2 w-max">
          <div className="block md:hidden mt-6  rounded-[10.59px] border-[1.5px] border-[#F6BC9B] bg-[#FDEFE7] px-[20px] py-[15px] w-[312px] ml-4  gap-[11px]">
            <img src={int} alt="" />

            <p className="text-[17px] font-medium pop mt-3">Integrity</p>

            <p className="font-normal pop text-[12px] mt-3 pr-8">
              We uphold honesty and unwavering service because trust is the
              foundation of every partnership.
            </p>
          </div>

          <div className="block md:hidden mt-6  rounded-[10.59px] border-[1.5px] border-[#F6BC9B] bg-[#FDEFE7] px-[20px] py-[15px] w-[312px] ml-4  gap-[11px]">
            <img src={ser} alt="" />

            <p className="text-[17px] font-medium pop mt-3">Service</p>

            <p className="font-normal pop text-[12px] mt-3 pr-8">
              If service quality matters to you, Leadway is the smart choice
              where protection meets performance.
            </p>
          </div>

          <div className="block md:hidden mt-6  rounded-[10.59px] border-[1.5px] border-[#F6BC9B] bg-[#FDEFE7] px-[20px] py-[15px] w-[312px] ml-4  gap-[11px]">
            <img src={cus} alt="" />

            <p className="text-[17px] font-medium pop mt-3">Customer Focus</p>

            <p className="font-normal pop text-[12px] mt-3 pr-8">
              We uphold honesty and unwavering service because trust is the
              foundation of every partnership.
            </p>
          </div>

          <div className="block md:hidden mt-6  rounded-[10.59px] border-[1.5px] border-[#F6BC9B] bg-[#FDEFE7] px-[20px] py-[15px] w-[312px] ml-4  gap-[11px]">
            <img src={open} alt="" />

            <p className="text-[17px] font-medium pop mt-3">Openness</p>

            <p className="font-normal pop text-[12px] mt-3 pr-8">
              We believe in clear, honest policies no hidden clauses, just
              transparency you can trust.
            </p>
          </div>

          <div className="block md:hidden mt-6  rounded-[10.59px] border-[1.5px] border-[#F6BC9B] bg-[#FDEFE7] px-[20px] py-[15px] w-[312px] ml-4  gap-[11px]">
            <img src={res} alt="" />

            <p className="text-[17px] font-medium pop mt-3">
              Respectful Service
            </p>

            <p className="font-normal pop text-[12px] mt-3 pr-8">
              At Leadway, we treat every individual with dignity, care, and
              respect earning the lasting trust of those we serve.
            </p>
          </div>

          <div className="block md:hidden mt-6  rounded-[10.59px] border-[1.5px] border-[#F6BC9B] bg-[#FDEFE7] px-[20px] py-[15px] w-[312px] ml-4  gap-[11px]">
            <img src={cro} alt="" />

            <p className="text-[17px] font-medium pop mt-3">Excellence</p>

            <p className="font-normal pop text-[12px] mt-3 pr-8">
              We value relationships and strive for excellence so your goals, in
              life and business, stay supported at every step.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-3 gap-6 mt-10 px-12">
        {/* Card 1 */}
        <div className="rounded-[10.59px] border-[1.5px] border-[#F6BC9B] bg-[#FDEFE7] px-[20px] py-[15px]">
          <img src={int} alt="" />
          <p className="text-[17px] md:text-[26.48px] text-[#000000] font-medium pop mt-3">
            Integrity
          </p>
          <p className="font-normal pop text-[12px] md:text-[18px] md:text-[#5A5A5A] mt-3 pr-2">
            We uphold honesty and unwavering service because trust is the
            foundation of every partnership.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-[10.59px] border-[1.5px] border-[#F6BC9B] bg-[#FDEFE7] px-[20px] py-[15px]">
          <img src={ser} alt="" />
          <p className="text-[17px] md:text-[26.48px] text-[#000000] font-medium pop mt-3">
            Service
          </p>
          <p className="font-normal pop text-[12px] md:text-[18px] md:text-[#5A5A5A] mt-3 pr-2">
            If service quality matters to you, Leadway is the smart choice where
            protection meets performance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-[10.59px] border-[1.5px] border-[#F6BC9B] bg-[#FDEFE7] px-[20px] py-[15px]">
          <img src={cus} alt="" />
          <p className="text-[17px] md:text-[26.48px] text-[#000000]  font-medium pop mt-3">
            Customer Focus
          </p>
          <p className="font-normal pop text-[12px] md:text-[18px] md:text-[#5A5A5A] mt-3 pr-2">
            We uphold honesty and unwavering service because trust is the
            foundation of every partnership.
          </p>
        </div>

        {/* Card 4 */}

        {/* Card 5 */}
        <div className="rounded-[10.59px] border-[1.5px] border-[#F6BC9B] bg-[#FDEFE7] px-[20px] py-[15px]">
          <img src={open} alt="" />
          <p className="text-[17px] md:text-[26.48px] text-[#000000] font-medium pop mt-3">
            Openness
          </p>
          <p className="font-normal pop text-[12px] md:text-[18px] md:text-[#5A5A5A] mt-3 pr-2">
            We believe in clear, honest policies no hidden clauses, just
            transparency you can trust.
          </p>
        </div>

        {/* Card 6 */}
        <div className="rounded-[10.59px] border-[1.5px] border-[#F6BC9B] bg-[#FDEFE7] px-[20px] py-[15px]">
          <img src={res} alt="" />
          <p className="text-[17px] md:text-[26.48px] text-[#000000] font-medium pop mt-3">
            Respectful Service
          </p>
          <p className="font-normal pop text-[12px] md:text-[18px] md:text-[#5A5A5A] mt-3 pr-2">
            At Leadway, we treat every individual with dignity, care, and
            respect earning the lasting trust of those we serve.
          </p>
        </div>

        {/* Card 7 */}
        <div className="rounded-[10.59px] border-[1.5px] border-[#F6BC9B] bg-[#FDEFE7] px-[20px] py-[15px] col-span-3 sm:col-span-1">
          <img src={cro} alt="" />
          <p className="text-[17px] md:text-[26.48px] text-[#000000] font-medium pop mt-3">
            Excellence
          </p>
          <p className="font-normal pop text-[12px] md:text-[18px] md:text-[#5A5A5A] mt-3 pr-2">
            We value relationships and strive for excellence so your goals, in
            life and business, stay supported at every step.
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-28 px-10 md:px-32">
        <h4 className="text-[25px] md:text-[45px] text-[#000000] pop font-bold leading-[100%] text-center md:text-left">
          Frequently Asked{" "}
          <span className="hidden md:inline md:mt-">
            <br />
          </span>{" "}
          Questions
        </h4>

        <p className="font-medium pop text-[#5A5A5A] text-[14px] md:text-[20px] mt-3 md:mt-3 text-center md:text-left ">
          Find quick answers to common questions about{" "}
          <span className="hidden md:inline">
            <br />
          </span>{" "}
          our products, policies, and claims.
        </p>
      </div>

      <div className="block md:hidden mt-6 px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              {/* Question */}
              <span className="font-semibold text-[16px] leading-snug break-words max-w-[80%]">
                {faq.question}
              </span>

              {/* Arrow inside circle */}
              <div className="w-4 h-4 flex items-center justify-center rounded-full border border-[#292D32]">
                <IoIosArrowDown
                  className={`text-gray-600 text-lg transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Desktop FAQ Section */}
      <div className="hidden md:block mt-10 px-10 relative bottom-53 mr-14">
        <div className="max-w-[500px] ml-auto ">
          {" "}
          {/* pushes it to the right */}
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                {/* Question */}
                <span className="font-medium text-[25px] leading-snug break-words max-w-[80%]">
                  {faq.question}
                </span>

                {/* Arrow inside circle */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full border border-[#292D32]">
                  <IoIosArrowDown
                    className={`text-gray-600 text-xl transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <p className="mt-2 text-[15px] text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="block md:hidden px-4 mt-14">
        <h2 className="pop text-center text-[25px] leading-[100%] font-bold mb-6">
          Our Leadership
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className=" border-gray-300 rounded-lg p-3 text-center">
            <img
              src={gbo}
              alt="Gboyega Lesi"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="font-medium text-[14px] text-[#000000] mt-2">
              Gboyega Lesi
            </h3>
            <p className="text-[12px]  font-normal text-[#000000]">
              Managing Director
            </p>
          </div>

          {/* Card 2 */}
          <div className=" border-gray-300 rounded-lg p-3 text-center">
            <img
              src={fum}
              alt="Olufunmilayo Amanwa"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="font-meddium text-[14px] mt-2 text-[#000000]">
              Olufunmilayo Amanwa
            </h3>
            <p className="text-[12px]  font-normal text-[#000000]">
              Executive Director
            </p>
          </div>

          {/* Card 3 */}
          <div className=" border-gray-300 rounded-lg p-3 text-center">
            <img
              src={ern}
              alt="Ernest Aziagba"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="font-medium text-[14px] mt-2 text-[#000000]">
              Ernest Aziagba
            </h3>
            <p className="text-[12px]  font-normal text-[#000000]">
              Divisional Director
              <br />
              General Business
            </p>
          </div>

          {/* Card 4 */}
          <div className=" border-gray-300 rounded-lg p-3 text-center">
            <img
              src={yem}
              alt="Yemisi Rotimi"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="font-medium text-[14px] mt-2 text-[#000000]">
              Yemisi Rotimi
            </h3>
            <p className="text-[12px] px-4 font-normal text-[#000000]">
              Chief Financial Officer
            </p>
          </div>

          {/* Card 5 */}
          <div className=" border-gray-300 rounded-lg p-3 text-center">
            <img
              src={kik}
              alt="Kikelomo Fischer"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="font-medium text-[14px] mt-2 text-[#000000]">
              Kikelomo Fischer
            </h3>
            <p className="text-[12px] font-normal text-[#000000]">
              Divisional Director
              <br />
              Retail & Partnership
            </p>
          </div>

          {/* Card 6 */}
          <div className=" border-gray-300 rounded-lg p-3 text-center">
            <img
              src={tun}
              alt="Tunde Alao-Olaifa"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="font-medium text-[#000000] text-[14px] mt-2">
              Tunde Alao-Olaifa
            </h3>
            <p className="text-[12px] font-normal text-[#000000]">
              Divisional Director
              <br />
              Strategy & Special <br /> Project
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block px-40 mt-12">
        <h2 className="text-center text-[32px] md:text-[45px] font-bold mb-10">
          Our Leadership
        </h2>

        <div className="grid grid-cols-3 gap-8 md:w-[1031px] md:items-center md:justify-center">
          {/* Card 1 */}
          <div className=" border-gray-300 rounded-lg p-5 md:w-[315px] md:h-[383px] text-center">
            <img
              src={gbo}
              alt="Gboyega Lesi"
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="font-semibold text-[18px] mt-4">Gboyega Lesi</h3>
            <p className="text-[14px] md:text-[17px] font-normal text-[#000000]">
              Managing Director
            </p>
          </div>

          {/* Card 2 */}
          <div className=" border-gray-300 rounded-lg p-5 text-center md:w-[315px] md:h-[383px]">
            <img
              src={fum}
              alt="Olufunmilayo Amanwa"
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="font-semibold text-[18px] mt-4">
              Olufunmilayo Amanwa
            </h3>
            <p className="text-[14px] md:text-[17px] font-normal text-[#000000]">
              Executive Director
            </p>
          </div>

          {/* Card 3 */}
          <div className=" border-gray-300 rounded-lg p-5 text-center md:w-[315px] md:h-[383px]">
            <img
              src={ern}
              alt="Ernest Aziagba"
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="font-semibold text-[18px] mt-4">Ernest Aziagba</h3>
            <p className="text-[14px] md:text-[17px] font-normal text-[#000000]">
              Divisional Director <br /> General Business
            </p>
          </div>

          {/* Card 4 */}
          <div className=" border-gray-300 rounded-lg p-5 text-center md:w-[315px] md:h-[383px]">
            <img
              src={yem}
              alt="Yemisi Rotimi"
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="font-semibold text-[18px] mt-4">Yemisi Rotimi</h3>
            <p className="text-[14px] md:text-[17px] font-normal text-[#000000]">
              Chief Financial Officer
            </p>
          </div>

          {/* Card 5 */}
          <div className=" border-gray-300 rounded-lg p-5 text-center md:w-[315px] md:h-[383px]">
            <img
              src={kik}
              alt="Kikelomo Fischer"
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="font-semibold text-[18px] mt-4">Kikelomo Fischer</h3>
            <p className="text-[14px] md:text-[17px] font-normal text-[#000000]">
              Divisional Director <br /> Retail & Partnership
            </p>
          </div>

          {/* Card 6 */}
          <div className=" border-gray-300 rounded-lg p-5 text-center md:w-[315px] md:h-[383px]">
            <img
              src={tun}
              alt="Tunde Alao-Olaifa"
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="font-semibold text-[18px] md:text-[25px] mt-4">
              Tunde Alao-Olaifa
            </h3>
            <p className="text-[14px] md:text-[17px] font-normal text-[#000000]">
              Divisional Director <br /> Strategy & Special Project
            </p>
          </div>
        </div>
      </div>

      <Downloadappcompo />

      <Scrollcompo />
    </div>
  );
};

export default About;
