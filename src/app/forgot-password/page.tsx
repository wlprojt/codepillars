"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email) {
      setError("Email is required");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
      } else {
        setMessage(data.message);
      }
    } catch {
      setError("Network error. Please try again.");
    }

    setLoading(false);
  };

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
          <h1 className="text-xl text-[#142342] text-center font-bold mb-2">Forgot Password</h1>
         <p className="text-sm text-gray-600 text-center mb-4">
           Enter your email to receive a password reset link.
         </p>

         <Input
          type="email"
          placeholder="Enter your email"
          className="h-10 text-gray-900"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p className="text-sm text-red-400 mb-2">{error}</p>}
        {message && <p className="text-sm text-green-400 mb-2">{message}</p>}

        <button
          onClick={submit}
          disabled={loading}
          className="w-full h-10 py-2 rounded-[32px] flex items-center justify-center gap-2 font-bold border border-white/25 bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] backdrop-blur-md text-[#142342] hover:scale-[1.02] transition-transform disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send reset link"}
        </button>

        <a
          href="/login"
          className="block text-center text-sm text-[#3a82e8] hover:underline mt-4"
        >
          Back to login
        </a>
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