'use client'

import Image from 'next/image'
import Link from 'next/link'
import LogoLoop from './LogoLoop'

const testimonials = [
  {
    name: '@SarahThompson',
    img: '/face.jpeg',
    testimonial:
      'Working with Rakesh was an absolute pleasure. He built our custom mobile app for both Android and iOS, and it runs flawlessly.'
  },
  {
    name: '@MichaelRodriguez',
    img: '/facea.jpeg',
    testimonial:
      'Rakesh brought our web platform to life with speed and precision. Everything exceeded expectations!'
  },
  {
    name: '@AditiSharma',
    img: '/faceb.jpeg',
    testimonial:
      'He completely transformed our MVP into a polished, scalable app. We saw a 40% increase in user engagement after launch!'
  },
  {
    name: '@DavidLee',
    img: '/facec.jpeg',
    testimonial:
      'He developed our cross-platform learning app with clean code and zero bugs. Truly professional!'
  }
]

const testimonialtwo = [
  {
    name: "@BrianJohnson",
    img: '/faced.jpeg',
    testimonial: "Working with CodePillars was a game-changer for our digital platform. Their team delivered a beautifully designed product on time and exceeded our expectations at every step. Communication was clear, development was smooth, and the final result was exactly what we needed to grow our business. Highly recommended!"
  },
  {
    name: "@JohnDoe",
    img: '/facee.jpeg',
    testimonial: "We’re so glad we chose CodePillars for our app development. They really listened to our needs and turned our ideas into reality. The final app works flawlessly and looks amazing. We couldn’t be happier with the results!"
  },
  {
    name: "@SarahWilson",
    img: '/facef.jpeg',
    testimonial: "CodePillars helped us increase user engagement by 40% with a fresh redesign and performance-focused build. Their expertise in both design and development made all the difference. We saw real results — fast."
  },
  {
    name: "@JamesCarter",
    img: '/faceg.jpeg',
    testimonial: "Rakesh’s ability to handle full-stack development is rare. He built both our admin dashboard and mobile app with perfect API integration. Clear communication and zero missed deadlines!"
  }
]

const testimonialthree = [
  {
    name: "@LindaMartinez",
    img: '/faceh.jpeg',
    testimonial: "Our eCommerce site redesign was handled brilliantly. The new layout loads faster, looks beautiful, and works perfectly on all devices. Rakesh’s attention to detail is remarkable."
  },
  {
    name: "@DavidKim",
    img: '/facei.jpeg',
    testimonial: "Fast, talented, and reliable — CodePillars delivered beyond our expectations. A fantastic partner for any digital project!"
  },
  {
    name: "@EmilyClark",
    img: '/facej.jpeg',
    testimonial: "The CodePillars team showcased exceptional technical skill and project ownership. From architectural decisions to UI polish, they delivered high-quality code and seamless user experience. We’re thrilled with the product and the process."
  },
  {
    name: "@MarkAnderson",
    img: '/facek.jpeg',
    testimonial:
      "CodePillars transformed our idea into a polished, production-ready product. Their attention to detail, clean design approach, and technical expertise made the entire process smooth and stress-free. We felt supported from concept to launch — truly outstanding work."
  }
]

const Homefive = () => {
  const velocity = 35

  const testimonialCard = (t: any, i: React.Key) => (
  <div
    key={i}
    aria-label={`Testimonial from ${t.name}`}
    className="min-w-[300px] max-w-[350px]"
  >
    <div
      className="group relative flex flex-col items-center justify-center text-center w-full rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
    >
        <div className="flex flex-col h-full w-full rounded-2xl bg-white/20 backdrop-blur-md p-6 shadow-lg border border-white/30">
      <p
        title={t.testimonial}
        className="text-gray-700 text-sm italic mb-4 leading-relaxed line-clamp-4"
      >
        “{t.testimonial}”
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <Image
          src={t.img}
          alt={`Avatar of ${t.name}`}
          width={50}
          height={50}
          loading="lazy"
          className="rounded-full"
        />
        <h3 className="font-semibold text-sm">{t.name}</h3>
      </div>
      </div>
    </div>
  </div>
)



  return (
    <section className="relative flex flex-col-reverse lg:flex-row mt-12 items-center justify-between max-w-6xl mx-auto px-6 pb-20">
      

      {/* Scroll wrapper */}
      <div className="relative w-full max-w-6xl overflow-hidden">
        <div className="flex flex-col gap-8">
          <LogoLoop
            logos={testimonials as any}
            speed={80}
            direction="left"
            logoHeight={20}
            gap={20}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#a6b7d4"
            ariaLabel="Client testimonials"
            renderItem={(item, i) => testimonialCard(item, i)}
          />


          <LogoLoop
            logos={testimonialtwo as any}
            speed={80}
            direction="right"
            logoHeight={20}
            gap={20}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#a6b7d4"
            ariaLabel="Client testimonials"
            renderItem={(item, i) => testimonialCard(item, i)}
          />


          <LogoLoop
            logos={testimonialthree as any}
            speed={80}
            direction="left"
            logoHeight={20}
            gap={20}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#a6b7d4"
            ariaLabel="Client testimonials"
            renderItem={(item, i) => testimonialCard(item, i)}
          />

        </div>
        </div>
    </section>
  )
}

export default Homefive
