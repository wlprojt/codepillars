'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SiGithub, SiYoutube, SiMaildotru } from 'react-icons/si'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY
      const bottom = document.body.offsetHeight - 50 // trigger near bottom
      setShowFooter(scrollPosition >= bottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={showFooter ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative py-10 px-6 md:px-20 z-50 bg-[#d6e0ec] backdrop-blur-md border-t border-white/30"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 via-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-col items-center text-center md:text-left md:items-start gap-4 mb-4">
          {/* Logo + Name */}
          <div className="flex gap-3">
            <Image
              src="/codelogo.png"
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <h1 className="text-[#101a32] text-2xl font-semibold tracking-wide">
              CodePillars<span className="text-[#3a82e8] text-lg">.net</span>
              </h1>
          </div>

          {/* Divider */}
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} CodePillars. All rights reserved.
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-8 items-center justify-center text-gray-900">
          <Link href="/contact" className="flex items-center gap-2 hover:text-[#3a82e8] transition">
            <SiMaildotru className="h-4 w-4" />
            <span>Contact</span>
          </Link>
          <Link href="https://github.com/wlprojt" target="_blank" className="flex items-center gap-2 hover:text-[#3a82e8] transition">
            <SiGithub className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
          <Link href="https://youtube.com/wlproject" target="_blank" className="flex items-center gap-2 hover:text-[#3a82e8] transition">
            <SiYoutube className="h-4 w-4" />
            <span>YouTube</span>
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}
