'use client'

import { motion } from 'framer-motion'
import Lanyard from './Lanyard'
import Link from 'next/link'
import GlareHover from '@/components/GlareHover'
import { Button } from '@/components/ui/button'


export default function AboutPage() {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-32 pb-20">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left"
      >
        <h4 className="mb-4 mt-4 text-[#101a32]">
          WELCOME TO MY WORLD 
        </h4>
        <h2 className="mb-2 text-[#101a32] font-bold">
          <span className="text-3xl font-bold">Hi,</span> <span className="text-2xl font-bold">I’m</span> Rakesh Vishwas
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#101a32] mb-6 leading-tight">
          <span className="text-[#3a82e8]">WEB&APP</span> DEVELOPER
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Hey there I’m{' '}
          <span className="text-[#101a32] font-semibold">Rakesh Vishwas</span>, a
          passionate{' '}
          <span className="text-[#3a82e8] font-medium">Web</span>,{' '}
          <span className="text-[#3a82e8] font-medium">Android</span>, and{' '}
          <span className="text-[#3a82e8] font-medium">iOS</span> developer who
          loves building elegant, performant apps that blend design and
          functionality.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          With a strong background in full-stack development, I work with modern
          frameworks like{' '}
          <span className="text-[#101a32] font-medium">Next.js</span>,{' '}
          <span className="text-[#101a32] font-medium">Jetpack Compose</span>, and{' '}
          <span className="text-[#101a32] font-medium">SwiftUI</span>. My focus is
          on crafting smooth user experiences, clean codebases, and scalable
          architectures that power real products.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Whether it’s a mobile app, web dashboard, or a full digital product —
          I love transforming ideas into reality through code, creativity, and
          collaboration.
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
              href="/payment"
            >
          <Button
          className="px-6 py-6 w-full bg-[#3a82e8] hover:bg-[#3a82e8] hover:mb-2 text-white font-semibold rounded-1 shadow-lg transition-all duration-300"
          >
               Make a Payment 💳
          </Button>
          </Link>
          </GlareHover>
          </motion.div>
          
        </div>
      </motion.div>

      {/* Right Side - Lanyard 3D */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 }}
        className="relative w-full max-w-md h-[400px] md:h-[500px] flex items-center justify-center"
      >
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </motion.div>
      
    </section>
  )
}
