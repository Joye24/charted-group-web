// WeCareWeSmile.tsx
"use client";

export default function WeCareWeSmile() {
  return (
    <div className="relative mb-[-260px]">
      {/* This "pin-spacer" container replicates the large space and positioning */}
      <div
        className="
          block
          mt-[40px]
          relative
          w-[1856px]
          h-[1902px]
          overflow-visible
          box-border
        "
        /* If you need the exact 40px top margin, 0 bottom margin, etc.:
           style={{ margin: "40px 0px 0px" }} 
         */
      >
        {/* The main "valueSection" container */}
        <div
          className="
            mx-0
            my-0
            max-w-[1856px]
            w-[1856px]
            max-h-[887px]
            h-[887px]
            p-0
            relative
            transform-none
          "
        >
          {/* 1) "We care" */}
          <div className="relative z-[0] mb-0">
            <h3 className="text-white text-3xl font-semibold">We care</h3>
            <p
              className="
                my-[18px]
                py-[16px]
                h-[116px]
                opacity-100
              "
            >
              <span aria-hidden="true">
                {/* Each line displayed block in the original snippet */}
                <span className="block opacity-100">
                  <span>
                    We are deeply committed to providing genuine care and
                    support
                  </span>
                </span>
                <span className="block opacity-100">
                  <span>
                    throughout your entire journey, blending the ethos of top
                    hospitality
                  </span>
                </span>
                <span className="block opacity-100">
                  <span>management with aviation expertise.</span>
                </span>
              </span>
            </p>
          </div>

          {/* 2) "We smile" */}
          <div className="relative z-[1] mb-0">
            <h3 className="text-[#181F32] text-3xl font-semibold">We smile</h3>
            <p
              className="
                my-[18px]
                py-[16px]
                h-[144px]
                opacity-100
              "
            >
              <span aria-hidden="true">
                <span className="block opacity-0 translate-y-[30px]">
                  Despite the demanding nature of coordinating private jet
                  flights,
                </span>
                <span className="block opacity-0 translate-y-[30px]">
                  our team thrives in a flexible, modern work environment.
                </span>
                <span className="block opacity-0 translate-y-[30px]">
                  We’re always available with the right energy to deliver
                  solutions
                </span>
                <span className="block opacity-0 translate-y-[30px]">
                  tailored to you, ensuring your satisfaction.
                </span>
              </span>
            </p>
          </div>

          {/* 3) "We get it done" */}
          <div className="relative z-[2] mb-0">
            <h3 className="text-[#181F32] text-3xl font-semibold">
              We get it done
            </h3>
            <p
              className="
                my-[18px]
                py-[16px]
                h-[116px]
                opacity-100
              "
            >
              <span aria-hidden="true">
                <span className="block opacity-0 translate-y-[30px]">
                  Rooted in Swiss values of punctuality and reliability, we
                  tackle
                </span>
                <span className="block opacity-0 translate-y-[30px]">
                  challenges head-on, executing them with perfection
                </span>
                <span className="block opacity-0 translate-y-[30px]">
                  every time you choose Simply Jet.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
