"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

declare global {
  interface Window {
    google?: any;
  }
}

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError(null);

    try {
      const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
      if (!clientId) {
        setError("Missing NEXT_PUBLIC_GOOGLE_CLIENT_ID");
        setGoogleLoading(false);
        return;
      }

      if (!window.google?.accounts?.id) {
        setError("Google script not loaded. Refresh and try again.");
        setGoogleLoading(false);
        return;
      }

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: async (resp: any) => {
          try {
            const idToken = resp?.credential;
            if (!idToken) throw new Error("No Google credential");

            const res = await fetch("/api/auth/google", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ idToken }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
              setError(data.error || data.message || "Google login failed");
              setGoogleLoading(false);
              return;
            }

            window.location.href = "/dashboard";
          } catch (e) {
            console.error(e);
            setError("Google login failed. Please try again.");
            setGoogleLoading(false);
          }
        },
      });

      window.google.accounts.id.prompt((notification: any) => {
        if (
          notification.isNotDisplayed?.() ||
          notification.isSkippedMoment?.() ||
          notification.isDismissedMoment?.()
        ) {
          setGoogleLoading(false);
        }
      });
    } catch (err) {
      console.error(err);
      setError("Google login failed. Please try again.");
      setGoogleLoading(false);
    }
  };

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // credentials: "include", // optional; not needed until JWT login
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || data.message || "Registration failed");
        setLoading(false);
        return;
      }

      // ✅ go verify OTP
      localStorage.setItem("verifyEmail", email);
      window.location.href = "/otp"; // or "/verify-otp" (match your route)
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
      setLoading(false);
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
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#142342]">Create account</h1>
              <p className="text-sm text-gray-600">Sign up to get started</p>
            </div>

            <Button
                          onClick={handleGoogleLogin}
                          type="button"
                          disabled={googleLoading}
                          className="w-full h-10 py-2 rounded-[32px] flex items-center justify-center gap-2 border border-white/25 bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] backdrop-blur-md text-[#142342] hover:scale-[1.02] transition-transform disabled:opacity-50"
                        >
                          {googleLoading ? (
                            <span>Signing in...</span>
                          ) : (
                            <>
                              <Image src="/google-icon.svg" alt="Google" width={20} height={20} />
                              Sign in with Google
                            </>
                          )}
                        </Button>
            
                        <div className="flex items-center">
              <div className="flex-grow border-t border-gray-400" />
              <span className="mx-2 text-gray-600 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-400" />
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <Input
              className="h-10 text-gray-900"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <Input
              className="h-10 text-gray-900"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password (min 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  required
                  className="pr-10 h-10 text-gray-900"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-[32px] bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] backdrop-blur-md border border-white/25 text-[#142342] font-bold text-lg hover:scale-[1.02] transition-transform disabled:opacity-50 mt-4"
              >
                {loading ? "Please wait..." : "Create Account"}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-[#3a82e8] hover:underline">
                Login
              </Link>
            </p>
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