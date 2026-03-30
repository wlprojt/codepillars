"use client";

import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  image: string;
  title: string;
  description: string;
};

export default function ProjectCard({ image, title, description }: Props) {
  return (
    <div className="group relative w-full max-w-xs rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl overflow-hidden">
      
      <div className="h-full w-full rounded-2xl bg-white/20 backdrop-blur-md p-6 shadow-lg border border-white/30 transition-all duration-300 group-hover:scale-105">
        
        {/* Image */}
        <div className="relative rounded-xl overflow-hidden mb-2">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
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
      </div>
    
    </div>
  );
}

