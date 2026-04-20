'use client'

import { Monitor, Pencil, Server, Smartphone } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import BServiceCard from "./BServiceCard";
import BProjectCard from "./BProjectCard";


const Projecttwo = () => {


  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto mt-12 px-6 pb-20">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left"
      >
          <div className="grid grid-cols-1 gap-6 md:gap-10">
          <BProjectCard
            image="/fimage2.png"
            title="AI Remove Image Background Android App Using Kotlin and Jetpack Compose"
            description="This project focuses on building a powerful AI-powered image background remover Android application designed to deliver fast, accurate, and high-quality results directly on mobile devices. The application was developed using Kotlin and Jetpack Compose, ensuring a modern, scalable, and highly responsive user interface. The core functionality of the app leverages advanced AI-based image segmentation technology to automatically detect and remove backgrounds from images with precision. Users can simply upload or capture an image, and within seconds, the application processes it to isolate the main subject while removing unwanted backgrounds seamlessly. The application also supports zooming, panning, undo/redo functionality, and allows users to add custom backgrounds after removal. This makes it ideal for creating professional-looking images for social media, e-commerce, or personal use."
            ylink="https://youtu.be/o7WO75s8fVk"
            glink="https://github.com/wlprojt/ARemovebg"
          />

          <BProjectCard
            image="/fimage12.png"
            title="AI Remove Image Background iOS App Using Swift and SwiftUI"
            description="This project focuses on building a powerful AI-powered image background remover iOS application designed to deliver fast, accurate, and high-quality results directly on mobile devices. The application was developed using Swift and SwiftUI, ensuring a modern, scalable, and highly responsive user interface. The core functionality of the app leverages advanced AI-based image segmentation technology to automatically detect and remove backgrounds from images with precision. Users can simply upload or capture an image, and within seconds, the application processes it to isolate the main subject while removing unwanted backgrounds seamlessly. The application also supports zooming, panning, undo/redo functionality, and allows users to add custom backgrounds after removal. This makes it ideal for creating professional-looking images for social media, e-commerce, or personal use."
            ylink="https://youtu.be/Z_XTNQ2mzOo"
            glink="https://github.com/wlprojt/iRemovebg"
          />
          
          <BProjectCard
            image="/fimage8.png"
            title="AI Remove Image Background Web App Using Next.js and TypeScript"
            description="This project focuses on building a powerful AI-powered image background remover web application designed to deliver fast, accurate, and high-quality results directly on the web. The application was developed using Next.js and TypeScript, ensuring a modern, scalable, and highly responsive user interface. The core functionality of the app leverages advanced AI-based image segmentation technology to automatically detect and remove backgrounds from images with precision. Users can simply upload or capture an image, and within seconds, the application processes it to isolate the main subject while removing unwanted backgrounds seamlessly. The application also supports zooming, panning, undo/redo functionality, and allows users to add custom backgrounds after removal. This makes it ideal for creating professional-looking images for social media, e-commerce, or personal use."
            ylink="https://youtu.be/VvFTsWFHCAE"
            glink="https://github.com/wlprojt/WRemovebg"
          />

      </div>  
      </motion.div>
    
    </section>
  )
}

export default Projecttwo

