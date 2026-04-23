"use client";

import { Eye, EyeOff } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ResetPasswordClient() {
  const params = useSearchParams();
  const router = useRouter();

  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!token) {
      setError("Invalid or expired reset link");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        return;
      }

      router.replace("/login");
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-500 font-medium">
          Invalid or expired reset link
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-[#d6e0ec]">
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
                  <h1 className="text-xl font-bold text-[#142342] text-center mb-4">
                    Reset Password
                  </h1>

                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="New password (min 6 chars)"
                      className="h-10 text-gray-900"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                  <button
                    onClick={submit}
                    disabled={loading}
                    className="w-full h-10 py-2 rounded-[32px] flex items-center justify-center gap-2 border border-white/25 bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] backdrop-blur-md text-[#142342] hover:scale-[1.02] transition-transform disabled:opacity-50 font-bold"
                  >
                    {loading ? "Resetting..." : "Reset password"}
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}