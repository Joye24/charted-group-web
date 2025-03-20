// app/components/footer/PartnersFooter.tsx
"use client";
import Image from 'next/image';

export default function PartnersFooter() {
  return (
    <div className="flex items-center gap-[35px] relative">
      {/* <img
        src="/icons/question-circle.svg"
        alt="Sample"
        width={40}
        height={40}
        className="w-[40px] h-[20px] object-contain"
      /> */}
      <Image
        src="https://simplyjet-sos-new.sos-ch-gva-2.exoscale-cdn.com/website/media/1715171667931~EBAA.svg"
        alt="ebaa"
        width={100}
        height={100}
        className="w-[100px] h-[100px] object-contain"
      />
      <Image
        src="https://simplyjet-sos-new.sos-ch-gva-2.exoscale-cdn.com/website/media/1715171677323~My_climate.svg"
        alt="my climate"
        width={100}
        height={100}
        className="w-[100px] h-[100px] object-contain"
      />
      <Image
        src="https://simplyjet-sos-new.sos-ch-gva-2.exoscale-cdn.com/website/media/1715171682924~Bitpay.svg"
        alt="bit pay"
        width={100}
        height={100}
        className="w-[100px] h-[100px] object-contain"
      />
    </div>
  );
}
