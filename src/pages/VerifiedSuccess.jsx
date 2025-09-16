import React from "react";
import { Link } from "react-router-dom";

const VerifiedSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h1 className="text-2xl font-bold text-green-700">✅ Email Verified!</h1>
      <p className="mt-2 text-gray-600">
        Your email has been verified. You can now log in.
      </p>
      <Link
        to="/signin"
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default VerifiedSuccess;
