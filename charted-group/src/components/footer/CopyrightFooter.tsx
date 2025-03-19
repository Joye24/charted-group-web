// app/components/footer/CopyRightFooter.tsx
"use client";

export default function CopyRightFooter() {
  const year = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="pt-[30px] pb-[30px] flex items-center justify-center gap-[64px] text-[var(--charted-color-dimmed)] font-[400] text-sm">
      <p className="">©{year()} Charted Group - All rights reserved</p>
      {/* <a href="#" className="no-underline">
        <p>Terms &amp; Conditions</p>
      </a> */}
    </div>
  );
}
