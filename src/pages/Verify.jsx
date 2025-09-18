import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Verify() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const BACKEND = import.meta.env.VITE_API_URL; // must be set in Vercel

  const [status, setStatus] = useState("pending"); // 'pending' | 'success' | 'fail'

  useEffect(() => {
    // Fail fast if backend URL missing
    if (!BACKEND) {
      console.error(
        "VITE_API_URL is not set. Set VITE_API_URL to your backend URL in Vercel environment variables."
      );
      navigate("/verifiedfailed", { replace: true });
      return;
    }

    if (!token) {
      navigate("/verifiedfailed", { replace: true });
      return;
    }

    const verify = async () => {
      try {
        setStatus("pending");

        const res = await fetch(
          `${BACKEND.replace(/\/+$/, "")}/api/auth/verify`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
            // If you use cookie auth on verify, uncomment the next line:
            // credentials: "include"
          }
        );

        const data = await res.json().catch(() => ({}));

        if (res.ok && data.ok) {
          setStatus("success");
          // Replace current entry (which contains token) with the success page and pass email via state.
          navigate("/verifiedsuccess", {
            replace: true,
            state: { email: data.email },
          });
        } else {
          console.warn("Verify failed:", data);
          setStatus("fail");
          navigate("/verifiedfailed", { replace: true });
        }
      } catch (err) {
        console.error("Verify error:", err);
        setStatus("fail");
        navigate("/verifiedfailed", { replace: true });
      }
    };

    verify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, BACKEND, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {status === "pending" && <p>Verifying your account — please wait…</p>}
      {status === "success" && <p>Verification succeeded. Redirecting…</p>}
      {status === "fail" && <p>Verification failed. Redirecting…</p>}
    </div>
  );
}
