import React from "react";
import lead from "../assets/leadway image.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import home from "../assets/home img.png";
import insurance from "../assets/insurance img.png";
import blogs from "../assets/Blogs img.png";
import About from "../assets/people.png";
import contact from "../assets/contact img.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between pt-[35px] pl-[25px] md:pl-[80px] pr-[21px] items-center bg-white">
        <img src={lead} alt="" />

        {/* Desktop Nav - Top Center */}
        <div className="pop  hidden md:flex gap-4 items-center absolute left-[47%] -translate-x-1/2  mt-1">
          <Link
            to="/"
            className="hover:text-[#EA5B0C] flex gap-1.5 font-medium text-[18px]"
          >
            <img src={home} alt="" className="w-5 h-5" />
            Home
          </Link>
          <Link
            to="/marine"
            className="hover:text-[#EA5B0C] flex gap-1.5 font-medium text-[18px]"
          >
            <img src={insurance} alt="" className="w-5 h-5" />
            Insurance
          </Link>
          <Link
            to="/blog"
            className="hover:text-[#EA5B0C] flex gap-1.5 font-medium text-[18px]"
          >
            <img src={blogs} alt="" className="w-5 h-5" />
            Blogs
          </Link>
          <Link
            to="/about"
            className="hover:text-[#EA5B0C] flex gap-1.5 font-medium text-[18px]"
          >
            <img src={About} alt="" className="w-5 h-5" />
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#EA5B0C] flex gap-1.5 font-medium text-[20px]"
          >
            <img src={contact} alt="" className="w-5 h-5" />
            Contact Us
          </Link>
        </div>

        {/* Desktop Auth Buttons - Far Right */}
        <div className="pop hidden md:flex gap-4 items-center absolute right-20 top-9">
          <button className="px-[20px] py-[15px]  bg-[#EA5B0C] font-semibold text-white rounded-[10px]  transition cursor-pointer">
            Sign Up
          </button>
          <button
            className="px-[20px] py-[15px] border border-[#EA5B0C] font-semibold text-[#EA5B0C] rounded-[10px]
          transition cursor-pointer"
          >
            Login
          </button>
        </div>

        {/* Hamburger for mobile only */}
        <GiHamburgerMenu
          className="w-[24px] h-[28px] mt-2 text-2xl cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
        />

        {/* Sidebar for mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform 
            transition-transform duration-300 md:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close button */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">Menu</h2>
            <IoMdClose
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Links */}
          <div className="flex flex-col p-4 gap-5 bg-black text-white">
            <Link
              to="/"
              className="hover:text-blue-600 flex gap-1.5"
              onClick={() => setIsOpen(false)}
            >
              <img src={home} alt="" className="w-5 h-5" />
              Home
            </Link>
            <Link
              to="/marine"
              className="hover:text-blue-600 flex gap-1.5"
              onClick={() => setIsOpen(false)}
            >
              <img src={insurance} alt="" className="w-5 h-5" />
              Insurance
            </Link>
            <Link
              to="/blog"
              className="hover:text-blue-600 flex gap-1.5"
              onClick={() => setIsOpen(false)}
            >
              <img src={blogs} alt="" className="w-5 h-5" />
              Blogs
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-600 flex gap-1.5"
              onClick={() => setIsOpen(false)}
            >
              <img src={About} alt="" className="w-5 h-5" />
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-600 flex gap-1.5 "
              onClick={() => setIsOpen(false)}
            >
              <img src={contact} alt="" className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>

        {/* Overlay (click to close) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
