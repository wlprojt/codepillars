"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function OtpPage() {
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState(30);

  const email =
    typeof window !== "undefined"
      ? localStorage.getItem("verifyEmail")
      : null;

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  /* ---------------- VERIFY OTP ---------------- */
  async function verifyOtp() {
    if (!email) {
      setError("Email not found. Please register again.");
      return;
    }

    if (!/^\d{6}$/.test(otp)) {
      setError("Enter a valid 6-digit OTP");
      return;
    }

    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Invalid OTP");
        return;
      }

      localStorage.removeItem("verifyEmail");
      router.replace("/dashboard");
    } catch {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  /* ---------------- RESEND OTP ---------------- */
  async function resendOtp() {
    if (!email || resending || timer > 0) return;

    setResending(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to resend OTP");
        return;
      }

      setTimer(30); // restart cooldown
    } catch {
      setError("Unable to resend OTP");
    } finally {
      setResending(false);
    }
  }

  return (
    <>
    <div className="relative w-full bg-[#d6e0ec]">

      {/* Top Section (bg1) */}
      <div className="h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-10">
<div className="min-h-screen flex items-center z-10 justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-md"
      >
        <Card className="rounded-[32px] border border-white/25 bg-white/10 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.45)] text-black">
          <CardContent className="p-6 space-y-6">

        <h1 className="text-xl font-semibold text-center text-[#142342]">
          Verify Email
        </h1>

        <Input
          className="h-10 text-gray-900"
          placeholder="Enter 6-digit OTP"
          value={otp}
          maxLength={6}
          onChange={(e) => setOtp(e.target.value.trim())}
        />

        {error && (
          <p className="text-sm text-red-400 text-center">
            {error}
          </p>
        )}

        <Button
          onClick={verifyOtp}
          disabled={loading}
          className="w-full h-10 py-2 rounded-[32px] flex items-center justify-center gap-2 border border-white/25 font-bold bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] backdrop-blur-md text-[#142342] hover:scale-[1.02] transition-transform disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify & Continue"}
        </Button>

        {/* 🔁 Resend OTP */}
        <button
          onClick={resendOtp}
          disabled={resending || timer > 0}
          className="w-full text-sm text-[#3a82e8] disabled:text-gray-400"
        >
          {timer > 0
            ? `Resend OTP in ${timer}s`
            : resending
            ? "Resending..."
            : "Resend OTP"}
        </button>

          </CardContent>
        </Card>
      </motion.div>
    </div>
    </div>
    </div>
    </div>

  
    </>
  );
}