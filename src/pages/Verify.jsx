import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    if (!token) return navigate("/verifiedfailed");

    const backendBase =
      import.meta.env.VITE_BACKEND_URL ??
      "https://leadway-backend-1.onrender.com";

    console.log("Using backend:", backendBase); // quick debug

    axios
      .get(`${backendBase}/api/auth/verify?token=${token}`)
      .then((res) => {
        if (res.data?.success) navigate("/verifiedsuccess");
        else navigate("/verifiedfailed");
      })
      .catch((err) => {
        console.error(
          "Verify request failed:",
          err.response?.data || err.message
        );
        navigate("/verifiedfailed");
      });
  }, [location, navigate]);

  return <p>Verifying your email, please wait...</p>;
};

export default VerifyHandler;
