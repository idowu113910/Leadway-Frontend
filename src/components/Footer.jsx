import React from "react";
import lead2 from "../assets/lead2.png";
import fb from "../assets/fb image.png";
import ig from "../assets/iG.png";
import twi from "../assets/twitter.png";
import you from "../assets/youtube.png";
import likedin from "../assets/Linkedin.png";

const Footer = () => {
  return (
    <div className="w-[376px] h-auto  bg-[#000000] mt-8 text-white px-[20px] py-[16px] text-left md:w-[1440px] md:mx-auto md:px-16 md:py-16">
      {/* Mobile Version: everything stacked */}
      <div className="flex flex-col md:hidden">
        {/* Header */}
        <h1 className="text-center font-semibold text-[25px] mb-3 w-full">
          Subscribe to our newsletter
        </h1>

        {/* Email Input */}
        <div className="rounded-[4.2px] bg-[#FDEFE7] py-[0.42px] pl-[85px] w-[276px] h-[34px] flex mb-4 mt-2 ml-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="pop font-normal text-[12px] text-[#585858] flex-1 placeholder:text-left"
          />
          <div className="bg-[#EC5B0C] rounded-[4.2px] ml-28.5 mt-0.5 px-2 h-[30px]">
            <button className="pop font-semibold text-[12px] ">
              Subscribe
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          {/* Mobile Image */}
          <img
            src={lead2}
            alt="mobile banner"
            className="w-[280px] relative bottom-[58px] right-11 block md:hidden"
          />

          {/* Desktop Image */}
        </div>

        {/* Links Sections */}
        <div className="flex flex-col gap-3 w-full mb-20 -mt-28 md:mr-30">
          {/* Section 1 */}
          <div className="pl-4 mt-3">
            <h2 className="font-semibold text-[25px] mb-1 md:ml-8">
              Our Company
            </h2>
            <div className="flex flex-col gap-1 pl-1">
              <p>About Us</p>
              <p>Our History</p>
              <p>Leadership</p>
              <p>Our Boards</p>
              <p>Investor Portal</p>
              <p>Career</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="pl-4 mt-7">
            <h2 className="font-semibold text-[25px] mb-1">Services</h2>
            <div className="flex flex-col gap-1">
              <p>Personal Insurance</p>
              <p>Business Insurance</p>
              <p>Auto Insurance</p>
              <p>Retirement Plans</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="pl-4 mt-7">
            <h2 className="font-semibold text-[25px] mb-1">Help & Support</h2>
            <div className="flex flex-col gap-1 pl-1">
              <p>Claim/Complaints Procedure</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
              <p>Whistleblowing</p>
              <p>Our Branches</p>
              <p>Agent Login</p>
              <p>FAQs</p>
              <p>Media</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="-mt-10">
          <p className="pl-6 font-medium text-[12px] pr-4">
            &copy; 2025 Leadway Assurance Company Limited. All{" "}
            <span className="ml-23.5">Rights Reserved.</span>
          </p>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block  md:flex md:h-[300px] md:flex-row">
        {/* Left: Image above Input */}
        <div className="md:flex md:flex-col md:w-[40%] md:items-start md:gap-6 relative mt-2">
          <img
            src={lead2}
            alt=""
            className="w-[300px] relative bottom-[80px] pl-3"
          />
          <div className="md:flex md:gap-[10px] text-[white] relative bottom-[156px] left-[80px]">
            <img src={ig} alt="" />
            <img src={twi} alt="" />
            <img src={you} alt="" />
            <img src={likedin} alt="" />
          </div>

          <div className="md:w-[341.31px] relative bottom-[156px] pl-19">
            <h1 className="font-semibold md:text-[20px] md:text-left md:pb-3">
              Subscribe to our newsletter
            </h1>
            <div className="flex items-center w-[320px] md:w-[300px] h-[34px] rounded-[4.2px] bg-[#FDEFE7] px-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="pop font-normal text-[14px] text-[#585858] flex-1 bg-transparent outline-none placeholder:text-left"
              />
              <button className="bg-[#EC5B0C] text-white pop font-semibold text-[14px] px-3 h-[28px] rounded-[4.2px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Right: Sections aligned horizontally */}
        <div className="flex flex-row md:w-[717px]  md:gap-[80px]">
          {/* Section 1 */}
          <div className="flex flex-col gap-2 text-left">
            <h2 className="font-semibold md:text-[20px] mb-1">Our Company</h2>
            <div className="flex flex-col gap-1">
              <p className="md:font-normal md:text-[17px] ">About Us</p>
              <p className="md:font-normal md:text-[17px] ">Our History</p>
              <p className="md:font-normal md:text-[17px] ">Leadership</p>
              <p className="md:font-normal md:text-[17px] ">Our Boards</p>
              <p className="md:font-normal md:text-[17px] ">Investor Portal</p>
              <p className="md:font-normal md:text-[17px] ">Career</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-2 text-left">
            <h2 className="font-semibold text-[20px] mb-1">Services</h2>
            <div className="flex flex-col gap-1">
              <p className="md:font-normal md:text-[17px] ">
                Personal Insurance
              </p>
              <p className="md:font-normal md:text-[17px] ">
                Business Insurance
              </p>
              <p className="md:font-normal md:text-[17px] ">Auto Insurance</p>
              <p className="md:font-normal md:text-[17px] ">Retirement Plans</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-2 text-left">
            <h2 className="font-semibold text-[20px] mb-1">Help & Support</h2>
            <div className="flex flex-col gap-1">
              <p className="md:font-normal md:text-[17px] ">
                Claim/Complaints Procedure
              </p>
              <p className="md:font-normal md:text-[17px] ">Contact Us</p>
              <p className="md:font-normal md:text-[17px] ">Privacy Policy</p>
              <p className="md:font-normal md:text-[17px] ">Whistleblowing</p>
              <p className="md:font-normal md:text-[17px] ">Our Branches</p>
              <p className="md:font-normal md:text-[17px] ">Agent Login</p>
              <p className="md:font-normal md:text-[17px] ">FAQs</p>
              <p className="md:font-normal md:text-[17px] ">Media</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block ">
        <p className="font-medium text-[14px] text-center mt-38">
          &copy; 2025 Leadway Assurance Company Limited. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
