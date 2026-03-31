import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
};

export default function FeatureItem({ icon, title }: Props) {
  return (
    <div className="group relative flex flex-col items-center justify-center text-center w-full rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl overflow-hidden">
      
      <div className="flex flex-col items-center justify-center h-full w-full rounded-2xl bg-white/20 backdrop-blur-md p-6 shadow-lg border border-white/30 transition-all duration-300 group-hover:scale-105">
        
        {/* Icon */}
        <div className="mb-4 flex items-center justify-center text-center w-12 h-12 rounded-full bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] backdrop-blur-md border border-white/40">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg text-gray-900 mb-2">
          {title}
        </h3>
      </div>
      
    </div>
  );
}

