'use client'

import { Monitor, Pencil, Server, Smartphone } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import AndroidCard from "./AndroidCard";
import IosCard from "./iOSCard";
import WebCard from "./WebCard";


const Dasbtwo = () => {


  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto mt-12 px-6 pb-20">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left"
      >
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
          <Link href="/projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AndroidCard />
          <IosCard />
          <WebCard />
          </Link>
      {/* </div>   */}
      </motion.div>
    
    </section>
  )
}

export default Dasbtwo

