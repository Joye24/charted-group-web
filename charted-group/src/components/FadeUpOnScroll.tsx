"use client";

import React, {
  useRef,
  useEffect,
  ElementType,
  ComponentPropsWithoutRef,
} from "react";

interface FadeUpOnScrollProps<T extends ElementType> {
  as?: T; // "div", "span", "section", etc.
  threshold?: number; // Intersection observer threshold
  className?: string; // Additional classes
  children: React.ReactNode;
}

// Omit the props that we define from the underlying element
export function FadeUpOnScroll<T extends ElementType = "div">(
  props: FadeUpOnScrollProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof FadeUpOnScrollProps<T>>
) {
  const { as, threshold = 0.3, className = "", children, ...rest } = props;

  const Tag: ElementType = as || "div";
  const elementRef: React.RefObject<HTMLElement | null> = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If in view, add “visible” classes
            entry.target.classList.remove("opacity-0", "translate-y-[30px]");
            entry.target.classList.add("opacity-100", "translate-y-0");

             // If you only want it once:
            //observer.unobserve(entry.target);
          } 
          else {
            // If out of view, re-apply “hidden” classes
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-[30px]");
          }
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <Tag
      ref={elementRef}
      className={`
        opacity-0 
        translate-y-[30px]
        transition-all
        duration-1000
        ease-in-out
        ${className}
      `}
      {...rest}
    >
      {children}
    </Tag>
  );
}
