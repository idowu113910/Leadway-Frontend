import React from "react";

import lead from "../assets/lead3.png";
import { Link, useNavigate } from "react-router-dom";
import goo from "../assets/google.png";
import fb from "../assets/facebook.png";
import { useState } from "react";
import app from "../assets/apple.png";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const navigate = useNavigate();

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(
        "https://leadway-backend-1.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName, email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("Signup successful! Please verify your email");
        setFullName("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
      } else {
        setMessage(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Try again.");
    }
  };

  return (
    <div className="bg-[#EC5B0C] min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSignup}
        className="bg-[#FFFFFF] w-full max-w-[400px] md:max-w-[600px] p-6 md:p-[32px] rounded-2xl text-start"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={lead}
            alt="Logo"
            className="w-[100px] md:w-[141px] h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-[24px] md:text-[30px] font-bold text-[#000000] text-center md:text-left mb-6">
          Create Free Account
        </h1>

        {/* Inputs */}
        <div className="flex flex-col gap-5">
          <input
            placeholder="Full Name"
            type="Name"
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border-b border-b-[#ADADAD] outline-none text-[#000000] text-[16px] font-semibold placeholder:text-[#ADADAD] placeholder:font-medium"
          />

          <input
            placeholder="Email Address"
            type="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-b-[#ADADAD] outline-none text-[#000000] text-[16px] font-semibold placeholder:text-[#ADADAD] placeholder:font-medium"
          />
          <div className="relative">
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b mt-1 border-b-[#ADADAD] outline-none text-[#000000] text-[16px] font-semibold placeholder:text-[#ADADAD] placeholder:font-medium pr-10"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-3 cursor-pointer text-[#969696] text-lg"
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>

          <div className="relative">
            <input
              placeholder="Repeat Password"
              type={showPassword ? "text" : "password"}
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="w-full border-b mt-1  border-b-[#ADADAD] outline-none text-[#000000] text-[16px] font-semibold placeholder:text-[#ADADAD] placeholder:font-medium"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-3 cursor-pointer text-[#969696] text-lg"
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>

          {message && <p className="text-center text-red-500">{message}</p>}

          {/* Button */}
          <button
            type="submit"
            className="bg-[#EC5B0C] text-[#ffffff] font-bold text-[15px] py-3 rounded-md hover:bg-[#d44e0a] transition mt-2"
          >
            Sign Up
          </button>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center justify-center my-6">
          <div className="w-full flex items-center">
            <div className="flex-grow border-t border-[#ADADAD]"></div>
            <span className="px-3 text-[#5A5A5A] text-sm md:text-base font-medium">
              Or Sign Up With
            </span>
            <div className="flex-grow border-t border-[#ADADAD]"></div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4 justify-center">
            <img
              src={goo}
              alt="Google"
              className="w-8 h-8 md:w-[34px] md:h-[34px]"
            />
            <img
              src={fb}
              alt="Facebook"
              className="w-8 h-8 md:w-[34px] md:h-[34px]"
            />
            <img
              src={app}
              alt="Apple"
              className="w-8 h-8 md:w-[34px] md:h-[34px]"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex justify-center">
          <p className="text-sm md:text-[17px] font-medium text-[#969696] text-center">
            Already have an account?{" "}
            <Link className="text-[#EA5B0C] cursor-pointer" to="/login">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
