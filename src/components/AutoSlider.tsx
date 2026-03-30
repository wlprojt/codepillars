'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const images = ['/sbtandroid.png', '/sbios.png', '/sbweb.png']

export default function AutoSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  // Auto slide every 3s
  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [paused, current])

  const nextSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <div
      className="relative w-[250px] md:w-[400px] h-[300px] md:h-[500px] overflow-hidden rounded-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      
    </div>
  )
}
