import React from "react";
import { Link } from "react-router-dom";

const VerifiedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <h1 className="text-2xl font-bold text-red-700">
        ❌ Verification Failed
      </h1>
      <p className="mt-2 text-gray-600">
        The verification link is invalid or expired.
      </p>
      <Link
        to="/signup"
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
      >
        Go back to Signup
      </Link>
    </div>
  );
};

export default VerifiedPage;
