'use client'
// @ts-ignore
import AutoSlider from '@/components/AutoSlider'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import GlareHover from '@/components/GlareHover'
import { Button } from '@/components/ui/button'


export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-32 pb-20">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101a32] mb-2 leading-tight">
          WE BUILD PILLARS <br />FOR YOUR DIGITAL <br />SUCCESS.
        </h1>

        <p className="text-gray-700 text-md sm:text-xl max-w-xl mx-auto lg:mx-0 mb-4">
          App and Web Development that Scales. <br /> Turn Your Idea Into a Robust Platform.
        </p>

        <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4">
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.8 }}>
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <Link
              href="/dashboard"
            >
          <Button
          className="px-6 py-6 w-full bg-[#3a82e8] hover:bg-[#3a82e8] text-white font-bold rounded-1 transition-all duration-300"
          >
              Start Your Project
          </Button>
          </Link>
          </GlareHover>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex-1 mb-10 lg:mb-0 flex justify-center"
      >
        <div className="relative">
          <AutoSlider />
        </div>
      </motion.div>

    </section>
  )
}
