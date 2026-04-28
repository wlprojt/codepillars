"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ReactNode } from "react";


export default function IosCard() {
  const router = useRouter();

  return (
    <div className="group relative w-full max-w-xs rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl overflow-hidden">
      
      <div className="h-full w-full rounded-2xl bg-white/20 backdrop-blur-md p-6 shadow-lg border border-white/30 transition-all duration-300 group-hover:scale-105">

        {/* Title */}
        <h3 className="text-lg font-bold text-start text-gray-900 mb-8">
          iOS App Project
        </h3>

        {/* Price */}
        <h3 className="text-5xl font-bold text-gray-900 mb-2">
          $25<span className="text-sm font-normal text-gray-900">us/month(inclusive of tax)</span>
        </h3>

        <button
            onClick={() => router.push("/projects")}
            className="w-full h-12 mt-4 rounded-[32px] bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] backdrop-blur-md border border-white/25 text-[#142342] font-bold text-lg hover:scale-[1.02] transition-transform disabled:opacity-50"
        >
            Create Project
        </button>

        {/* Features */}
        <p className="text-sm font-bold text-start text-gray-900 leading-relaxed">
          <span className="font-bold text-5xl">. </span>
          Morden UI/UX Design
        </p>

        <p className="text-sm font-bold text-start text-gray-900 leading-relaxed">
          <span className="font-bold text-5xl">. </span>
          jWT Authentication
        </p>

        <p className="text-sm font-bold text-start text-gray-900 leading-relaxed">
          <span className="font-bold text-5xl">. </span>
          API Integration
        </p>

        <p className="text-sm font-bold text-start   text-gray-900 leading-relaxed">
          <span className="font-bold text-5xl">. </span>
          Firebase/Mongodb
        </p>

        <p className="text-sm font-bold text-start text-gray-900 leading-relaxed">
          <span className="font-bold text-5xl">. </span>
          Payment Gateway
        </p>
      </div>
    
    </div>
  );
}

