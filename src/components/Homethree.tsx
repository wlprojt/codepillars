'use client'

import { Monitor, Pencil, Server, Smartphone } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";


const Homethree = () => {


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
          <ProjectCard
            image="/aremovebg.png"
            title="AI Background Remover App"
            description="An AI-powered background remover app built with Kotlin and Jetpack Compose. It allows users to easily remove backgrounds from images using advanced machine learning algorithms. The app provides a user-friendly interface and supports various image formats for seamless editing."
          />
          <ProjectCard
            image="/ichatbot.png"
            title="Chatbot iOS App"
            description="A conversational chatbot for iOS, built with Swift and Xcode. It features a natural language processing engine, smooth conversation flow, and supports various intents. The app allows users to interact with the chatbot and get helpful responses."
          />
          <ProjectCard
            image="/wecom.png"
            title="Ecommerce Website"
            description="A sleek e-commerce website built with React and Node.js. It features a modern design, smooth user experience, and supports various payment methods. The site allows users to browse products, add items to their cart, and complete purchases seamlessly."
          />
          </Link>
      {/* </div>   */}
      </motion.div>
    
    </section>
  )
}

export default Homethree

