'use client'

import { Monitor, Pencil, Server, Smartphone } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import BServiceCard from "./BServiceCard";


const Abouttwo = () => {


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
          <BServiceCard
            image="/abanner.png"
            title="Modern Android App Development"
            description="We specialize in building modern, high-performance Android applications using Kotlin and Jetpack Compose, Google’s latest UI toolkit. Our development approach focuses on creating clean, scalable, and maintainable codebases that ensure long-term reliability and performance.

From intuitive user interfaces to advanced features, we design apps that deliver a seamless and engaging user experience across all Android devices. With Jetpack Compose, we craft dynamic and responsive UI components with smooth animations and minimal boilerplate code.

We also follow best practices like MVVM architecture, state management, and efficient API integration to ensure your app is fast, secure, and production-ready. Whether it’s a startup idea or an enterprise solution, we turn your vision into a powerful Android application."
          />
          <BServiceCard
            image="/ibanner.png"
            title="iOS App Development"
            description="Our iOS development services focus on delivering premium-quality applications using Swift and Xcode, optimized for the Apple ecosystem. We build apps that are not only visually stunning but also highly functional and reliable.

We emphasize clean UI/UX design, smooth navigation, and high performance to meet Apple’s strict standards. From iPhone to iPad, our apps are fully responsive and provide a consistent experience across all screen sizes.

With a strong focus on performance, security, and scalability, we implement modern development practices and integrate powerful features such as real-time data, APIs, and animations. Our goal is to create iOS apps that users love and businesses can rely on."
          />
          <BServiceCard
            image="/wbanner.png"
            title="Web Development Solutions"
            description="We create modern, fast, and scalable web applications using React for the frontend and Node.js for the backend. Our websites are designed to deliver exceptional performance, responsiveness, and user engagement across all devices.

From sleek landing pages to complex web platforms, we build solutions that are both visually appealing and highly functional. Our development process includes optimized performance, SEO-friendly structure, and secure backend systems.

We focus on delivering a smooth user experience, fast loading times, and scalable architecture that grows with your business. Whether you need a business website, SaaS platform, or custom web solution, we ensure your online presence stands out."
          />
          <BServiceCard
            image="/uibanner.png"
            title="Creative UI/UX Design Solutions"
            description="We design intuitive, visually stunning, and user-centric digital experiences that leave a lasting impression. Our UI/UX design process focuses on understanding user behavior, business goals, and modern design trends to create interfaces that are both beautiful and highly functional.

From wireframes and prototypes to final design systems, we ensure every element is crafted with precision. We prioritize usability, accessibility, and seamless navigation to enhance user satisfaction and engagement across mobile and web platforms.

Our goal is to transform ideas into elegant designs that not only look great but also deliver real results by improving user retention and conversion rates."
            />
            <BServiceCard
              image="/bbanner.png"
              title="Scalable API & Backend Development"
              description="We build robust, secure, and scalable backend systems that power modern applications. Using technologies like Node.js and advanced database solutions, we create high-performance APIs that ensure smooth communication between frontend and backend systems.

Our backend architecture is designed for speed, reliability, and scalability, allowing your application to handle growth effortlessly. We focus on clean code, efficient data handling, authentication, and secure integrations to deliver production-ready solutions.

Whether it's RESTful APIs, real-time services, or complex business logic, we provide backend systems that are optimized for performance and built to scale with your business needs."
            />

      </div>  
      </motion.div>
    
    </section>
  )
}

export default Abouttwo

