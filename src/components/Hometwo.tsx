'use client'

import { Monitor, Pencil, Server, Smartphone } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import Link from "next/link";


const Hometwo = () => {

  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-[#142342]" />,
      title: "iOS & Android Development",
      desc: "Crafting seamless native and cross-platform mobile experiences.",
    },
    {
      icon: <Monitor className="w-8 h-8 text-[#142342]" />,
      title: "Web Platform Development",
      desc: "Scalable, responsive websites and complex web applications.",
    },
    {
      icon: <Server className="w-8 h-8 text-[#142342]" />,
      title: "Backend & API Architecture",
      desc: "Robust, secure, and fast server-side solutions.",
    },
    {
      icon: <Pencil className="w-8 h-8 text-[#142342]" />,
      title: "UI/UX Design",
      desc: "Intuitive, beautiful interfaces that drive engagement.",
    },
  ];


  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 pb-20">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left"
      >
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
        <Link href="/about" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, i) => (
          <ServiceCard
            key={i}
            icon={item.icon}
            title={item.title}
            description={item.desc}
          />
        ))}
        </Link>
      {/* </div>   */}
      </motion.div>
    
    </section>
  )
}

export default Hometwo