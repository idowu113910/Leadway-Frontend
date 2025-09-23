import React from "react";
import lead from "../assets/leadway image.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import home from "../assets/home img.png";
import insurance from "../assets/insurance img.png";
import blogs from "../assets/Blogs img.png";
import About from "../assets/people.png";
import contact from "../assets/contact img.png";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div className="mt-4">
      <nav className="flex justify-between items-center px-6 md:px-18 py-4 bg-white ">
        {/* Logo */}
        <img src={lead} alt="Leadway Logo" className="w-28 md:w-36" />

        {/* Desktop Nav Links (centered) */}
        <div className="relative hidden md:flex flex-1 justify-center items-center gap-1 mr-6">
          <Link
            to="/home"
            className="hover:text-[#EA5B0C] flex items-center gap-1.5 font-medium text-[20px]"
          >
            <img src={home} alt="" className="w-5 h-5" />
            Home
          </Link>
          <Link
            to="/insurance"
            className="hover:text-[#EA5B0C] flex items-center gap-1.5 font-medium text-[20px]"
          >
            <img src={insurance} alt="" className="w-5 h-5" />
            Insurance
          </Link>
          <Link
            to="/blog"
            className="hover:text-[#EA5B0C] flex items-center gap-1.5 font-medium text-[20px]"
          >
            <img src={blogs} alt="" className="w-5 h-5" />
            Blogs
          </Link>
          <Link
            to="/about"
            className="hover:text-[#EA5B0C] flex items-center gap-1.5 font-medium text-[20px]"
          >
            <img src={About} alt="" className="w-5 h-5" />
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#EA5B0C] flex items-center gap-1.5 font-medium text-[20px]"
          >
            <img src={contact} alt="" className="w-5 h-5" />
            Contact Us
          </Link>

          {/* Desktop User Section (far right) */}
          {user && (
            <div className="hidden md:flex items-center gap-4 absolute right-0">
              <p className="font-semibold text-[#383838]">
                Hi, {user.fullName}
              </p>
              <button
                onClick={() => logout(navigate)}
                className="px-4 py-2 bg-[#EA5B0C] text-white rounded-[10px] font-semibold hover:bg-[#d44e0a] transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Hamburger for mobile */}
        <GiHamburgerMenu
          className="w-7 h-7 cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
        />

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close */}
          <div className="flex justify-between items-center p-4 border-b">
            <img src={lead} alt="Leadway" className="w-24" />
            <IoMdClose
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Mobile User Section (under logo) */}
          {user && (
            <div className="p-4 border-b">
              <p className="font-semibold text-[#383838]">
                Hi, {user.fullName}
              </p>
              <button
                onClick={logout}
                className="mt-2 w-full px-4 py-2 bg-[#EA5B0C] text-white rounded-[10px] font-semibold hover:bg-[#d44e0a] transition"
              >
                Logout
              </button>
            </div>
          )}

          {/* Mobile Links */}
          <div className="flex flex-col p-4 gap-5 bg-black text-white">
            <Link
              to="/home"
              onClick={() => setIsOpen(false)}
              className="flex gap-2"
            >
              <img src={home} alt="" className="w-5 h-5" /> Home
            </Link>
            <Link
              to="/marine"
              onClick={() => setIsOpen(false)}
              className="flex gap-2"
            >
              <img src={insurance} alt="" className="w-5 h-5" /> Insurance
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="flex gap-2"
            >
              <img src={blogs} alt="" className="w-5 h-5" /> Blogs
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="flex gap-2"
            >
              <img src={About} alt="" className="w-5 h-5" /> About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex gap-2"
            >
              <img src={contact} alt="" className="w-5 h-5" /> Contact Us
            </Link>
          </div>
        </div>

        {/* Overlay */}
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
