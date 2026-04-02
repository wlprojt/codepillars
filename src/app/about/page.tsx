

import Aboutone from "@/components/Aboutone";
import Abouttwo from "@/components/Abouttwo";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodePillars | About",
  description: "Website, Android, and iOS app developer portfolio",
};

export default function About() {
  return (
    <div className="relative w-full">

      {/* Top Section (bg1) */}
      <div className="h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
       <div className="relative z-10">
        <Aboutone />
        <div className="flex items-center">
              <div className="flex-grow border-t border-white/25" />
              <span className="mx-2 text-gray-900 text-sm">
                <div className="text-center">
                  <h1 className="font-bold text-2xl lg:text-4xl">Our Services</h1>
                  <p className="lg:text-lg text-gray-700">Building Strong Digital Foundations</p>
                </div>
              </span>
              <div className="flex-grow border-t border-white/25" />
            </div>
        <Abouttwo />
        <Footer />
       </div>
      </div>

      {/* Bottom Section (bg2) */}
      <div className="h-screen bg-[url('/fbg2.png')] bg-cover bg-center bg-no-repeat" />

      {/* Bottom Section (bg3) */}
      <div className="h-screen bg-[url('/bg2.png')] bg-cover bg-center bg-no-repeat" />

      {/* Bottom Section (bg4) */}
      <div className="h-screen bg-[url('/fbg2.png')] bg-cover bg-center bg-no-repeat" />

      {/* Bottom Section (bg5) */}
      <div className="h-screen bg-[url('/bg2.png')] bg-cover bg-center bg-no-repeat" />

      {/* Bottom Section (bg6) */}
      <div className="md:h-screen bg-[url('/fbg2.png')] bg-cover bg-center bg-no-repeat" />

      
    </div>
  );
}



