// app/components/footer/PartnersFooter.tsx
"use client";
import Image from "next/image";

export default function MainPartnersFooter() {
  return (
    <div className="flex items-center gap-[35px] relative">
      <div className="w-full md:w-1/3 flex justify-center lg:justify-start">
        <Image
          src="https://simplyjet-sos-new.sos-ch-gva-2.exoscale-cdn.com/website/media/1715171667931~EBAA.svg"
          alt="ebaa"
          width={100}
          height={100}
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
      <div className="w-full md:w-1/3 flex justify-center lg:justify-start">
        <Image
          src="https://simplyjet-sos-new.sos-ch-gva-2.exoscale-cdn.com/website/media/1715171677323~My_climate.svg"
          alt="my climate"
          width={100}
          height={100}
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
      <div className="w-full md:w-1/3 flex justify-center lg:justify-start">
        <Image
          src="https://simplyjet-sos-new.sos-ch-gva-2.exoscale-cdn.com/website/media/1715171682924~Bitpay.svg"
          alt="bit pay"
          width={100}
          height={100}
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
    </div>
  );
}
