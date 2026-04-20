'use client'

import { motion } from 'framer-motion'
import Lottie from 'lottie-react';
import animationData from '../../public/contact us.json';


export default function Contactone() {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-32 pb-20">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex-1 mb-10 lg:mb-0 flex justify-center"
      >
        <div className="relative">
          <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
        </div>
      </motion.div>

    </section>
  )
}
