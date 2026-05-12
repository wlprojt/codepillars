'use client'

import { Monitor, Pencil, Server, Smartphone } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import BServiceCard from "./BServiceCard";
import BProjectCard from "./BProjectCard";
import OProjectCard from "./OProjectCard";


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
          <OProjectCard
            image="/fimage2.png"
            title="AI Remove Image Background Android App Using Kotlin and Jetpack Compose"
            description="This project focuses on building a powerful AI-powered image background remover Android application designed to deliver fast, accurate, and high-quality results directly on mobile devices. The application was developed using Kotlin and Jetpack Compose, ensuring a modern, scalable, and highly responsive user interface. The core functionality of the app leverages advanced AI-based image segmentation technology to automatically detect and remove backgrounds from images with precision. Users can simply upload or capture an image, and within seconds, the application processes it to isolate the main subject while removing unwanted backgrounds seamlessly. The application also supports zooming, panning, undo/redo functionality, and allows users to add custom backgrounds after removal. This makes it ideal for creating professional-looking images for social media, e-commerce, or personal use."
            ylink="https://youtu.be/o7WO75s8fVk"
            glink="https://github.com/wlprojt/ARemovebg"
            olink="https://play.google.com/store/apps/details?id=com.codepillars.removebg"
          />

          <BProjectCard
            image="/fimage12.png"
            title="AI Remove Image Background iOS App Using Swift and SwiftUI"
            description="This project focuses on building a powerful AI-powered image background remover iOS application designed to deliver fast, accurate, and high-quality results directly on mobile devices. The application was developed using Swift and SwiftUI, ensuring a modern, scalable, and highly responsive user interface. The core functionality of the app leverages advanced AI-based image segmentation technology to automatically detect and remove backgrounds from images with precision. Users can simply upload or capture an image, and within seconds, the application processes it to isolate the main subject while removing unwanted backgrounds seamlessly. The application also supports zooming, panning, undo/redo functionality, and allows users to add custom backgrounds after removal. This makes it ideal for creating professional-looking images for social media, e-commerce, or personal use."
            ylink="https://youtu.be/Z_XTNQ2mzOo"
            glink="https://github.com/wlprojt/iRemovebg"
          />
          
          <OProjectCard
            image="/fimage8.png"
            title="AI Remove Image Background Web App Using Next.js and TypeScript"
            description="This project focuses on building a powerful AI-powered image background remover web application designed to deliver fast, accurate, and high-quality results directly on the web. The application was developed using Next.js and TypeScript, ensuring a modern, scalable, and highly responsive user interface. The core functionality of the app leverages advanced AI-based image segmentation technology to automatically detect and remove backgrounds from images with precision. Users can simply upload or capture an image, and within seconds, the application processes it to isolate the main subject while removing unwanted backgrounds seamlessly. The application also supports zooming, panning, undo/redo functionality, and allows users to add custom backgrounds after removal. This makes it ideal for creating professional-looking images for social media, e-commerce, or personal use."
            ylink="https://youtu.be/VvFTsWFHCAE"
            glink="https://github.com/wlprojt/WRemovebg"
            olink="https://removebg.codepillars.net/"
          />

          <BProjectCard
            image="/aecom.png"
            title="Ecommerce Android App Using Kotlin and Jetpack Compose"
            description="This project focuses on building a powerful e-commerce Android application designed to provide a seamless shopping experience for users. The application was developed using Kotlin and Jetpack Compose, ensuring a modern, scalable, and highly responsive user interface. The app features a comprehensive product catalog with advanced search and filtering capabilities, allowing users to easily find products of interest. It also includes a secure and efficient shopping cart system, enabling users to add items, view their cart, and proceed to checkout with ease. The application integrates with popular payment gateways to facilitate smooth transactions. Additionally, it offers personalized recommendations based on user behavior and preferences, enhancing the overall shopping experience. With its intuitive design and robust functionality, this e-commerce app aims to meet the needs of modern online shoppers."
            ylink="https://youtu.be/Ornj3_rEpXM"
            glink="https://github.com/wlprojt/AWishmart"
          />

          <BProjectCard
            image="/iecom.png"
            title="Ecommerce iOS App Using Swift and SwiftUI"
            description="This project focuses on building a powerful e-commerce iOS application designed to provide a seamless shopping experience for users. The application was developed using Swift and SwiftUI, ensuring a modern, scalable, and highly responsive user interface. The app features a comprehensive product catalog with advanced search and filtering capabilities, allowing users to easily find products of interest. It also includes a secure and efficient shopping cart system, enabling users to add items, view their cart, and proceed to checkout with ease. The application integrates with popular payment gateways to facilitate smooth transactions. Additionally, it offers personalized recommendations based on user behavior and preferences, enhancing the overall shopping experience. With its intuitive design and robust functionality, this e-commerce app aims to meet the needs of modern online shoppers."
            ylink="https://youtu.be/rlI1RuqdS3g"
            glink="https://github.com/wlprojt/iWihsmart"
          />

          <BProjectCard
            image="/ecomw.png"
            title="Ecommerce web App Using Next.js and TypeScript"
            description="This project focuses on building a powerful e-commerce web application designed to provide a seamless shopping experience for users. The application was developed using Next.js and TypeScript, ensuring a modern, scalable, and highly responsive user interface. The app features a comprehensive product catalog with advanced search and filtering capabilities, allowing users to easily find products of interest. It also includes a secure and efficient shopping cart system, enabling users to add items, view their cart, and proceed to checkout with ease. The application integrates with popular payment gateways to facilitate smooth transactions. Additionally, it offers personalized recommendations based on user behavior and preferences, enhancing the overall shopping experience. With its intuitive design and robust functionality, this e-commerce app aims to meet the needs of modern online shoppers."
            ylink="https://youtu.be/WKpAQ3wr0O4"
            glink="https://github.com/wlprojt/wishmart"
          />

          <BProjectCard
            image="/atxvoice.png"
            title="AI Text-to-Speech and Speech-to-Text Android App Using Kotlin and Jetpack Compose"
            description="This project focuses on building a powerful AI-powered text-to-speech and speech-to-text Android application designed to deliver natural-sounding speech synthesis and recognition directly on mobile devices. The application was developed using Kotlin and Jetpack Compose, ensuring a modern, scalable, and highly responsive user interface. The core functionality of the app leverages advanced AI-based speech synthesis and recognition technology to automatically convert text into lifelike speech with precision and vice versa. Users can simply input text or speak into the microphone, and within seconds, the application processes it to generate high-quality audio output or transcribe speech into text. The application also supports various voice options, speed controls, and allows users to save synthesized audio or transcribed text for later use. This makes it ideal for creating accessible content for social media, e-commerce, or personal use."
            ylink="https://youtu.be/HUAV9qaiaKk"
            glink="https://github.com/wlprojt/ATxVoice"
          />

          <BProjectCard
            image="/itxvoice.png"
            title="AI Text-to-Speech and Speech-to-Text iOS App Using Swift and SwiftUI"
            description="This project focuses on building a powerful AI-powered text-to-speech and speech-to-text iOS application designed to deliver natural-sounding speech synthesis and recognition directly on mobile devices. The application was developed using Swift and SwiftUI, ensuring a modern, scalable, and highly responsive user interface. The core functionality of the app leverages advanced AI-based speech synthesis and recognition technology to automatically convert text into lifelike speech with precision and vice versa. Users can simply input text or speak into the microphone, and within seconds, the application processes it to generate high-quality audio output or transcribe speech into text. The application also supports various voice options, speed controls, and allows users to save synthesized audio or transcribed text for later use. This makes it ideal for creating accessible content for social media, e-commerce, or personal use."
            ylink="https://youtu.be/ORksmvP6bAM"
            glink="https://github.com/wlprojt/iTxVoice"
          />

          <OProjectCard
            image="/wtxvoice.png"
            title="AI Text-to-Speech web App Using Next.js and TypeScript"
            description="This project focuses on building a powerful AI-powered text-to-speech web application designed to deliver natural-sounding speech synthesis and recognition directly on devices. The application was developed using Next.js and TypeScript, ensuring a modern, scalable, and highly responsive user interface. The core functionality of the app leverages advanced AI-based speech synthesis and recognition technology to automatically convert text into lifelike speech with precision. Users can simply input text, and within seconds, the application processes it to generate high-quality audio output. The application also supports various voice options, speed controls, and allows users to save synthesized audio for later use. This makes it ideal for creating accessible content for social media, e-commerce, or personal use."
            ylink="https://youtu.be/6dl3nzJiC6g"
            glink="https://github.com/wlprojt/WTxVoice"
            olink="https://txvoice.codepillars.net/"
          />

      </div>  
      </motion.div>
    
    </section>
  )
}

export default Projecttwo

