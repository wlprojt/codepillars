
import Projectone from "@/components/Projectone";
import Projecttwo from "@/components/Projecttwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodePillars | Projects",
  description: "Website, Android, and iOS app developer portfolio",
};

export default function Projects() {
  return (
    <div className="relative w-full">

      {/* Top Section (bg1) */}
      <div className="h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
       <div className="relative z-10">
                 <Projectone />
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
            <Projecttwo />
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
      <div className="lg:h-screen bg-[url('/fbg2.png')] bg-cover bg-center bg-no-repeat" />

      {/* Bottom Section (bg7) */}
      <div className="lg:h-40 bg-[url('/bg2.png')] bg-cover bg-center bg-no-repeat" />

    </div>
  );
}
