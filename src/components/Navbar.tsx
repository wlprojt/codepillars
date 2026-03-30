'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover="hover">
            <Link href="/" className="flex items-center gap-2 logo">
              <motion.div
                variants={{ hover: { rotate: 45, scale: 0.9 } }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <Image
                  src="/codelogo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  priority
                  className="h-7 w-auto object-contain"
                />
              </motion.div>
              <motion.span className="text-[#101a32] font-semibold text-2xl">
                Codepillars<span className="text-[#3a82e8] text-lg">.net</span>
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition duration-300 transform ${
                  pathname === href
                    ? 'text-[#3a82e8] scale-105'
                    : 'text-[#101a32] hover:text-[#3a82e8] hover:-translate-y-0.5'
                }`}
              >
                {label}
              </Link>
            ))}

          
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-[#3a82e8] focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`transition ${
                    pathname === href
                      ? 'text-[#3a82e8]'
                      : 'text-[#101a32] hover:text-[#3a82e8]'
                  }`}
                >
                  {label}
                </Link>
              ))}

              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
