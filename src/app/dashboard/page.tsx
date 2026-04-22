"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Lottie from 'lottie-react';
import Link from "next/link";

type UserType = {
  id: string;
  email: string;
  emailVerified: boolean;
  createdAt: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function fetchUser() {
    try {
      const res = await fetch("/api/auth/me", {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        router.replace("/login");
        return;
      }

      const data: UserType = await res.json();
      setUser(data);
    } catch (err) {
      console.error("Failed to fetch user:", err);
      router.replace("/login");
    } finally {
      setLoading(false);
    }
  }

  fetchUser();
}, [router]);

  async function logout() {
  try {
    // 1️⃣ call logout API
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    // 2️⃣ clear client-side state
    setUser(null); // If Navbar stores user in useState

    // 3️⃣ refresh server components (if you rely on server session)
    router.refresh();

    // ✅ HARD reload + redirect
    window.location.href = "/login";
  } catch (err) {
    console.error("Logout failed:", err);
  }
}



  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <>
    <div className="relative w-full bg-[#d6e0ec]">

      {/* Top Section (bg1) */}
      <div className="h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-10">
      <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 pb-20">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left"
      >
          <div className="grid grid-cols-1 mt-25 gap-6">
          {/* <Link href="/contact" className="grid grid-cols-1 gap-6"> */}
          <div className="group relative flex flex-col items-center justify-center text-center w-full rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl overflow-hidden">
      
      <div className="flex flex-col items-center justify-center h-full w-full rounded-2xl bg-white/20 backdrop-blur-md p-6 shadow-lg border border-white/30 transition-all duration-300 group-hover:scale-105">

        <div className="flex justify-center items-center">
          
        <span className="font-bold text-lg text-[#142342]">{user.email}</span>
        </div>

        <div className="flex justify-center items-center mt-4">
          <button
            onClick={logout}
            className="text-red-400"
          >
            Logout
          </button>
        </div>
      </div>
      
    </div>
        {/* </Link> */}
      </div>  
      </motion.div>
    
    </section>
    </div>
    </div>
    </div>

    </>
  );
}