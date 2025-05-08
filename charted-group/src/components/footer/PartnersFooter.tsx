// app/components/footer/PartnersFooter.tsx
"use client";
import Image from "next/image";

export default function MainPartnersFooter() {
  return (
    <div className="flex items-center gap-[35px] relative">
      <div className="w-full md:w-1/3 flex justify-center lg:justify-start">
        <Image
          src="/images/partners/black-diamond-hotel.png"
          alt="ebaa"
          width={100}
          height={100}
          className="w-[100px] h-[100px] object-contain filter grayscale"
        />
      </div>
      <div className="w-full md:w-1/3 flex justify-center lg:justify-start">
        <Image
          src="/images/partners/nig-embassy.png"
          alt="nigerian embassy"
          width={80}
          height={80}
          className="w-[80px] h-[80px] object-contain filter grayscale"
        />
      </div>
      <div className="w-full md:w-1/3 flex justify-center lg:justify-start">
        <Image
          src="/images/partners/warner-bros.svg"
          alt="bit pay"
          width={75}
          height={75}
          className="w-[75px] h-[75px] object-contain filter grayscale"
        />
      </div>
    </div>
  );
}
