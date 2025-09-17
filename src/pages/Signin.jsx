import React from "react";
import lead from "../assets/lead3.png";
import { Link, useNavigate } from "react-router-dom";
import goo from "../assets/google.png";
import fb from "../assets/facebook.png";
import app from "../assets/apple.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import box from "../assets/Check.png";
import { useState } from "react";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://leadway-backend-1.onrender.com/api/auth/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("Login Successful!");
        console.log("Access Token:", data.accessToken);
        console.log("Refresh Token:", data.refreshToken);

        // Optional: Save tokens to localStorage
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect to a protected page, e.g., dashboard
        navigate("/home");
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Try again.");
    }
  };

  return (
    <div className="bg-[#EC5B0C] min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSignIn}
        className="bg-[#FFFFFF] w-full max-w-[600px] p-6 md:p-[32px] rounded-2xl text-start"
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
        <h1 className="text-[24px] md:text-[30px] font-bold text-[#000000] text-center md:text-left">
          Sign In
        </h1>

        {/* Inputs */}
        <div className="mt-8 flex flex-col gap-6">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-b-[#ADADAD] outline-none text-[#000000] text-[16px] font-semibold placeholder:text-[#ADADAD] placeholder:font-medium"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b mt-1  border-b-[#ADADAD] outline-none text-[#000000] text-[16px] font-semibold placeholder:text-[#ADADAD] placeholder:font-medium pr-10"
              required
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
            className="bg-[#EC5B0C] text-[#ffffff] font-bold text-[15px] py-3 rounded-md hover:bg-[#d44e0a] transition"
          >
            Sign In
          </button>

          {/* Remember & Forgot */}
          <div className="flex justify-between mt-2">
            <div className="flex gap-[6px] items-center">
              <img src={box} alt="" className="w-[17px] h-[17px]" />
              <p className="text-[17px] font-medium text-[#222222]">
                Remember me
              </p>
            </div>

            <p className="text-[17px] font-medium text-[#222222] underline cursor-pointer">
              Forgot Password?
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center justify-center my-6">
          <div className="w-full flex items-center">
            <div className="flex-grow border-t border-[#ADADAD]"></div>
            <span className="px-3 text-[#5A5A5A] text-sm md:text-base font-medium">
              Or Sign in With
            </span>
            <div className="flex-grow border-t border-[#ADADAD]"></div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
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
        <div className="mt-6 flex justify-center">
          <p className="text-sm md:text-[17px] font-medium text-[#969696] text-center">
            Don’t have an account?{" "}
            <Link className="text-[#EA5B0C] cursor-pointer" to="/Signup">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
