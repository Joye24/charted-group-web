// app/components/footer/LocationsFooter.tsx
"use client";

export default function LocationsFooter() {
  return (
    <div
      className="
          flex
          justify-between
          items-start
          py-[80px]
          border-y
          border-[rgba(236,234,232,0.1)]
        "
    >
      {/* Lausanne */}
      <div className="flex flex-col gap-[2px] w-1/4">
        <p className="flex items-center gap-[10px] text-[var(--charted-color-yellow-4)] mb-[0.75rem] font-[100]">
          <div
            className="
                rounded-[20px]
                w-[18px]
                h-[18px]
                bg-[url('/assets/flags/4x3/ch.svg')]
                bg-cover bg-center
              "
          />
          Lausanne
        </p>
        <p className="text-[var(--charted-color-dimmed)] font-[300]">
          Simply Jet SA
        </p>
        <p className="text-[var(--charted-color-dimmed)] font-[300]">
          Rue du Maupas 2
        </p>
        <p className="text-[var(--charted-color-dimmed)] font-[300]">
          CH-1004 Lausanne
        </p>
        <a
          href="tel:+41 414 104 414"
          target="_blank"
          className="mt-[1.875rem] text-[var(--charted-color-dimmed)] font-[300] no-underline"
        >
          +41 414 104 414
        </a>
        <p className="cursor-pointer text-[var(--charted-color-dimmed)] font-[300]">
          team@simply-jet.ch
        </p>
      </div>

      {/* Zurich */}
      <div className="flex flex-col gap-[2px] w-1/4">
        <p className="flex items-center gap-[10px] text-[var(--charted-color-yellow-4)] mb-[0.75rem] font-[100]">
          <div
            className="
                rounded-[20px]
                w-[18px]
                h-[18px]
                bg-[url('/assets/flags/4x3/ch.svg')]
                bg-cover bg-center
              "
          />
          Zurich
        </p>
        <p className="text-[var(--charted-color-dimmed)] font-[300]">
          Simply Jet AG
        </p>
        <p className="text-[var(--charted-color-dimmed)] font-[300]">
          Selnaustrasse 5
        </p>
        <p className="text-[var(--charted-color-dimmed)] font-[300]">
          CH-8001 Zurich
        </p>
        <a
          href="tel:+41 414 104 414"
          target="_blank"
          className="mt-[1.875rem] text-[var(--charted-color-dimmed)] font-[300] no-underline"
        >
          +41 414 104 414
        </a>
        <p className="cursor-pointer text-[var(--charted-color-dimmed)] font-[300]">
          team@simply-jet.ch
        </p>
      </div>

      {/* London */}
      <div className="flex flex-col gap-[2px] w-1/4">
        <p className="flex items-center gap-[10px] text-[var(--charted-color-yellow-4)] mb-[0.75rem] font-[100]">
          <div
            className="
                rounded-[20px]
                w-[18px]
                h-[18px]
                bg-[url('/assets/flags/4x3/gb.svg')]
                bg-cover bg-center
              "
          />
          London
        </p>
        <p className="text-[var(--charted-color-dimmed)] font-[300]">
          Simply Jet UK Limited
        </p>
        <p className="text-[var(--charted-color-dimmed)] font-[300]">
          One Bartholomew Close
        </p>
        <p className="text-[var(--charted-color-dimmed)] font-[300]">
          UK-LONDON EC1A 7BL
        </p>
        <a
          href="tel:+44 208 068 5555"
          target="_blank"
          className="mt-[1.875rem] text-[var(--charted-color-dimmed)] font-[300] no-underline"
        >
          +44 208 068 5555
        </a>
        <p className="cursor-pointer text-[var(--charted-color-dimmed)] font-[300]">
          team@simply-jet.co.uk
        </p>
      </div>

      {/* Paris */}
      <div className="flex flex-col gap-[2px] w-1/4">
        <p className="flex items-center gap-[10px] text-[var(--charted-color-yellow-4)] mb-[0.75rem] font-[100]">
          <div
            className="
                rounded-[20px]
                w-[18px]
                h-[18px]
                bg-[url('/assets/flags/4x3/fr.svg')]
                bg-cover bg-center
              "
          />
          Paris
        </p>
        <p className="text-[var(--charted-color-dimmed)] font-[300]">
          SIMPLY JET FRANCE
        </p>
        <p className="text-[var(--charted-color-dimmed)] font-[300]">
          91 rue du Faubourg Saint Honoré
        </p>
        <p className="text-[var(--charted-color-dimmed)] font-[300]">
          FR-75008 Paris
        </p>
        <a
          href="tel:+33 1 88 80 35 63"
          target="_blank"
          className="mt-[1.875rem] text-[var(--charted-color-dimmed)] font-[300] no-underline"
        >
          +33 1 88 80 35 63
        </a>
        <p className="cursor-pointer text-[var(--charted-color-dimmed)] font-[300]">
          team@simply-jet.fr
        </p>
      </div>
    </div>
  );
}
