"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Dasbtwo from "@/components/Dasbtwo";
import Footer from "@/components/Footer";

type UserType = {
  id: string;
  name?: string;
  email: string;
  provider?: string;
  image?: string;
  emailVerified: boolean;
  createdAt?: string;
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
          cache: "no-store",
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
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      setUser(null);
      router.refresh();
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#d6e0ec]">
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
      
      <div className="flex items-center justify-center h-full w-full rounded-2xl bg-white/20 backdrop-blur-md p-6 shadow-lg border border-white/30 transition-all duration-300 group-hover:scale-105">

        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white/40 flex items-center justify-center">
                    {user.image ? (
                      <img
                        src={user.image}
                        alt={user.name || user.email}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-[#142342]">
                        {(user.name || user.email).charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center px-4">
                  {user.name && (
                    <h2 className="mt-4 text-xl font-bold text-[#142342]">
                      {user.name}
                    </h2>
                  )}

                  <button
                    onClick={logout}
                    className="text-red-400 mt-4 px-4"
                  >
                    Logout
                  </button>
                  </div>

                  <span className="mt-2 px-4 font-bold text-lg text-[#142342] break-all">
                    {user.email}
                  </span>

                  
                  <button
                    onClick={() => router.push("/projects")}
                    className="w-50 h-12 mt-4 mx-2 rounded-[32px] bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] backdrop-blur-md border border-white/25 text-[#142342] font-bold text-lg hover:scale-[1.02] transition-transform disabled:opacity-50"
                  >
                    My Project
                  </button>

                  </div>
      </div>
      
    </div>
        {/* </Link> */}
      </div>  
      </motion.div>
    
    </section>

    <div className="flex items-center">
              <div className="flex-grow border-t border-white/25" />
              <span className="mx-2 text-gray-900 text-sm">
                <div className="text-center">
                  <h1 className="font-bold text-2xl lg:text-4xl">Choose Projects</h1>
                  <p className="lg:text-lg text-gray-700">Our Best Offers</p>
                </div>
              </span>
              <div className="flex-grow border-t border-white/25" />
            </div>
            <Dasbtwo />
            <Footer />

    </div>
    </div>

      {/* Bottom Section (bg2) */}
      <div className="h-screen lg:h-50 bg-[url('/fbg2.png')] bg-cover bg-center bg-no-repeat" />

    </div>

    </>
  );

}