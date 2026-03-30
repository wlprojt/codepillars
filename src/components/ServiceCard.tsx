import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({ icon, title, description }: Props) {
  return (
    <div className="group relative w-full max-w-xs rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl overflow-hidden">
      
      <div className="h-full w-full rounded-2xl bg-white/20 backdrop-blur-md p-6 shadow-lg border border-white/30 transition-all duration-300 group-hover:scale-105">
        
        {/* Icon */}
        <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] backdrop-blur-md border border-white/40">
          {icon}
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
      {/* ✅ Gradient Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#c5fdfd] via-[#80bbdd] to-[#8184ce]" />
    </div>
  );
}

