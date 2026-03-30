"use client";

import Homeone from "@/components/Homeone";
import Hometwo from "@/components/Hometwo";

export default function Home() {
  return (
    <div className="relative w-full">

      {/* Top Section (bg1) */}
      <div className="h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-10">
          <Homeone />
          <Hometwo />
        </div>
      </div>

      {/* Bottom Section (bg2) */}
      <div className="h-screen bg-[url('/fbg2.png')] bg-cover bg-center bg-no-repeat" />

    </div>
  );
}