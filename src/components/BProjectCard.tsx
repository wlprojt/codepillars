"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { SiGithub, SiYoutube, SiMaildotru } from 'react-icons/si'

type Props = {
  image: string;
  title: string;
  description: string;
  ylink: string;
  glink: string;

};

export default function BProjectCard({ image, title, description, ylink, glink }: Props) {
  return (
    <div className="group relative w-full max-w-6xl rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl overflow-hidden">
      
      <div className="h-full w-full rounded-2xl bg-white/20 backdrop-blur-md p-6 md:p-10 shadow-lg border border-white/30 transition-all duration-300 group-hover:scale-103">
        
        {/* Image */}
        <div className="relative rounded-xl overflow-hidden mb-2">
          <Image
            src={image}
            alt={title}
            width={1100}
            height={1100}
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-4">
        <Link href={ylink} target="_blank">
          <button className="flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] backdrop-blur-md border border-white/40 text-[#142342] font-bold rounded-lg">
            <SiYoutube className="h-4 w-4" />
                        <span>YouTube</span>
          </button>
        </Link>

        <Link href={glink} target="_blank">
          <button className="flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] backdrop-blur-md border border-white/40 text-[#142342] font-bold rounded-lg">
            <SiGithub className="h-4 w-4" />
            <span>GitHub</span>
          </button>
        </Link>
        </div>
      </div>
    
    </div>
  );
}

