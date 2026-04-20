
import Contactone from "@/components/Contactone";
import Contacttwo from "@/components/Contacttwo";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodePillars | Contact",
  description: "Website, Android, and iOS app developer portfolio",
};

export default function Contact() {
  return (
    <div className="relative w-full">

      {/* Top Section (bg1) */}
      <div className="h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
          <div className="relative z-10">
                 <Contactone />
                 <div className="flex items-center">
              <div className="flex-grow border-t border-white/25" />
              <span className="mx-2 text-gray-900 text-sm">
                <div className="text-center">
                  <h1 className="font-bold text-2xl lg:text-4xl">Contact Us</h1>
                  <p className="lg:text-lg text-gray-700">Get in Touch</p>
                </div>
              </span>
              <div className="flex-grow border-t border-white/25" />
            </div>
            <Contacttwo />
            <Footer />
        </div>
        </div>

        {/* Bottom Section (bg2) */}
      <div className="lg:h-100 bg-[url('/fbg2.png')] bg-cover bg-center bg-no-repeat" />

    </div>
  );
}
