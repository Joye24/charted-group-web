// app/page.tsx
"use client";

import { ibmPlexSerif } from "../fonts";

export default function About() {
  return (
    <div className="bg-slate-950 relative">
      <main
        className="h-[700px] lg:h-[1100px] md:min-h-screen
        mx-auto
        pt-[60px] 
        px-5 md:px-20 lg:px-[60px]
        pb-0
        bg-fixed
        relative
        z-[2]"
        style={{
          background:
            "url('/images/services-bg.jpg') center 50% / cover no-repeat",
        }}>
        <div className="absolute inset-0 bg-slate-950/50 w-full h-full" />
        <div
          className="
          flex
          sticky
          top-[100px]
          min-w-full
          text-center
        "
          style={{
            zIndex: 1,
          }}>
          <div className={`${ibmPlexSerif.className} w-full`}>
            <h1 className="text-white text-5xl md:text-7xl leading-tight mb-4 font-light text-center pt-[5vh] pb-[50vh]">
              Our Services
            </h1>
          </div>
        </div>
        <div>
          <svg className="absolute w-0 h-0">
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
              <path d="M0,0 C0,0.485,0.06,0.878,0.5,0.878 C0.94,0.878,1,0.485,1,0 V1 H0 V0" />
            </clipPath>
          </svg>
          <div
            className="
            bg-slate-950
             w-full 
              h-[25vh] lg:h-[71vh]
              object-contain 
              object-bottom 
              absolute 
              left-0 
              bottom-[-2px] 
              z-[0]
                    "
            style={{
              clipPath: "url(#my-clip-path)",
            }}></div>
        </div>
      </main>
      <div
        className="
        relative
        flex
        flex-col
        items-start
        py-10
        px-10
        lg:px-60
        quote-wrapper
      "></div>
      <div
        className={`${ibmPlexSerif.className} flex flex-col gap-10 px-5 md:px-10 lg:px-20 py-10`}>
        <h1 className="leading-relaxed text-3xl text-center md:text-left md:text-7xl font-normal w-full">
          Why Charted Group?
        </h1>
        <div className="border-1 border-gray-500 border-opacity-50 rounded-4xl md:rounded-r-[130px] px-5 py-15 md:pl-100 md:pr-60 md:-ml-60 md:mr-40">
          <h2 className="text-2xl md:text-5xl mb-5 md:mb-7 font-light">
            Who we are
          </h2>
          <p className="font-light md:font-thin text-md md:text-xl mb-10">
            Charted Group was established in 2022 in Dublin, Ireland, with a
            vision to provide unparalleled luxury ground transportation services
            to high-end clients who expect nothing but the best. From the very
            beginning, we set out to redefine the standard for chauffeur-driven
            experiences, ensuring every journey is not only comfortable and
            reliable but also an exceptional experience from start to finish.
            <br />
            <br />
            Our first major client was the Minister of Petroleum for Nigeria, a
            landmark moment that highlighted our commitment to excellence and
            professional service. Since then, we have been privileged to serve
            an exclusive roster of remarkable individuals, high-profile
            executives, celebrities, and world-renowned companies. Our clients
            trust us to offer a seamless, luxurious, and discreet transportation
            solution, and we consistently meet and exceed those expectations.
            <br />
            <br />
            In the short time since our inception, Charted Group has completed
            over 1,100 transfers. Each transfer represents our dedication to
            precision, punctuality, and personalized service. We are proud of
            the relationships we’ve built with our clients and the strong
            reputation we’ve established in the luxury transportation industry.
            <br />
            <br />
            At Charted Group, we are more than just a chauffeur service. We are
            a symbol of sophistication, luxury, and reliability. Whether you’re
            traveling for business or leisure, we ensure your journey is as
            memorable as the destination.
          </p>
          <h2 className="text-2xl md:text-5xl mb-5 md:mb-7 font-light">
            What we do
          </h2>
          <p className="font-light md:font-thin text-md md:text-xl mb-10">
            ​​At Charted Group, we specialize in delivering a wide range of
            luxury ground transportation services tailored to meet the diverse
            needs of our clients. Whether you require a simple one-way transfer
            or a bespoke, full-day itinerary, we bring the same level of
            professionalism, discretion, and attention to detail to every
            journey.
            <br />
            <br />
            We offer one-way trips, return journeys, private chauffeured tours,
            golf outings, government assignments, and exclusive private
            transportation solutions. For clients with heightened needs, we also
            provide optional security services alongside our vehicles, ensuring
            peace of mind throughout your trip.
            <br />
            <br />
            Our team is experienced in managing special occasions such as
            birthdays, weddings, and milestone celebrations, where elegance,
            punctuality, and a seamless experience are essential. We understand
            that these moments are once-in-a-lifetime, and we are honored to
            play a role in making them unforgettable. From corporate executives
            to government officials, from leisure travelers to VIP guests,
            Charted Group is trusted to deliver luxury, safety, and precision
            every step of the way. Our mission is simple: to elevate your travel
            experience, no matter the occasion.
          </p>
        </div>
      </div>
    </div>
  );
}
