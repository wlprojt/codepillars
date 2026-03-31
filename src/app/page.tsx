

import Homefive from "@/components/Homefive";
import Homefour from "@/components/Homefour";
import Homeone from "@/components/Homeone";
import Homethree from "@/components/Homethree";
import Hometwo from "@/components/Hometwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodePillars | Home",
  description: "Website, Android, and iOS app developer portfolio",
};

export default function Home() {
  return (
    <div className="relative w-full">

      {/* Top Section (bg1) */}
      <div className="h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-10">
          <Homeone />
          <Hometwo />
          <div className="flex items-center">
              <div className="flex-grow border-t border-white/25" />
              <span className="mx-2 text-gray-900 text-sm">
                <div className="text-center">
                  <h1 className="font-bold text-2xl lg:text-4xl">Recent Projects</h1>
                  <p className="lg:text-lg text-gray-700">Our Latest Work</p>
                </div>
              </span>
              <div className="flex-grow border-t border-white/25" />
            </div>
          <Homethree />
          <div className="flex items-center">
              <div className="flex-grow border-t border-white/25" />
              <span className="mx-2 text-gray-900 text-sm">
                <div className="text-center">
                  <h1 className="font-bold text-2xl lg:text-4xl">Why Choose Us</h1>
                  <p className="lg:text-lg text-gray-700">Crafting Excellence in Every Step</p>
                </div>
              </span>
              <div className="flex-grow border-t border-white/25" />
            </div>
          <Homefour />
          <div className="flex items-center">
              <div className="flex-grow border-t border-white/25" />
              <span className="mx-2 text-gray-900 text-sm">
                <div className="text-center">
                  <h1 className="font-bold text-2xl lg:text-4xl">Loved by users worldwide</h1>
                  <p className="lg:text-lg text-gray-700">See what users are saying about wish-light</p>
                </div>
              </span>
              <div className="flex-grow border-t border-white/25" />
            </div>
          <Homefive />
        </div>
      </div>

      {/* Bottom Section (bg2) */}
      <div className="h-screen bg-[url('/fbg2.png')] bg-cover bg-center bg-no-repeat" />

      {/* Bottom Section (bg3) */}
      <div className="h-screen bg-[url('/bg2.png')] bg-cover bg-center bg-no-repeat" />

      {/* Bottom Section (bg4) */}
      <div className="h-screen lg:h-150 bg-[url('/fbg2.png')] bg-cover bg-center bg-no-repeat" />

      {/* Bottom Section (bg5) */}
      <div className="h-screen sm:h-150 md:h-200 lg:hidden bg-[url('/bg2.png')] bg-cover bg-center bg-no-repeat" />

      {/* Bottom Section (bg6) */}
      <div className="h-screen sm:hidden bg-[url('/fbg2.png')] bg-cover bg-center bg-no-repeat" />

      {/* Bottom Section (bg7) */}
      <div className="h-50 sm:hidden bg-[url('/bg2.png')] bg-cover bg-center bg-no-repeat" />

    </div>
  );
}

