'use client'


import { motion } from "framer-motion";
import Link from "next/link";
import Contactitem from "./Contactitem";
import { BsSignal, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { SiSignal } from "react-icons/si";


const Contacttwo = () => {

  const features = [
    {
      wicon: <BsWhatsapp className="w-8 h-8 text-[#142342]" />,
      ticon: <FaTelegramPlane className="w-8 h-8 text-[#142342]" />,
      sicon: <SiSignal className="w-8 h-8 text-[#142342]" />,
      eicon: <MdOutlineEmail className="w-8 h-8 text-[#142342]" />,
      nimber: "+91 7970731851",
      email: "hello@codepillars.net"
    }
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
          <div className="grid grid-cols-1 gap-6">
          {/* <Link href="/contact" className="grid grid-cols-1 gap-6"> */}
        {features.map((item, i) => (
          <Contactitem
            key={i}
            aicon={item.wicon}
            bicon={item.ticon}
            cicon={item.sicon}
            dicon={item.eicon}
            ntitle={item.nimber}
            etitle={item.email}
          />
        ))}
        {/* </Link> */}
      </div>  
      </motion.div>
    
    </section>
  )
}

export default Contacttwo