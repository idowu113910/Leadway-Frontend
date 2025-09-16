import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const VerifyHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Grab token from URL
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (token) {
      axios
        .get(`http://localhost:3000/api/auth/verify?token=${token}`)
        .then(() => {
          navigate("/verifiedsuccess"); // redirect if success
        })
        .catch(() => {
          navigate("/verifiedfailed"); // redirect if failed
        });
    } else {
      navigate("/verifiedfailed");
    }
  }, [location, navigate]);

  return <p>Verifying your email, please wait...</p>;
};

export default VerifyHandler;
