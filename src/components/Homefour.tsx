'use client'

import { BarChart3, Lock, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import FeatureItem from "./FeatureItem";


const Homefour = () => {

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#142342]" />,
      title: "Fast Delivery"
    },
    {
      icon: <Lock className="w-8 h-8 text-[#142342]" />,
      title: "Secure Code"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#142342]" />,
      title: "Scalable Architecture"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#142342]" />,
      title: "Clean UI/UX"
    },
  ];


  return (
    <section className="relative flex flex-col-reverse lg:flex-row mt-12 items-center justify-between max-w-6xl mx-auto px-6 pb-20">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left"
      >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, i) => (
          <FeatureItem
            key={i}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>  
      </motion.div>
    
    </section>
  )
}

export default Homefour