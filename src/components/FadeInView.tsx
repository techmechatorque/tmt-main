import React, { useEffect, useRef, useState } from "react";

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Element to render as — defaults to "div". Use "li" inside a <ul>, etc. */
  as?: keyof JSX.IntrinsicElements;
  /** Which direction it enters from — defaults to sliding up. */
  direction?: "up" | "left" | "right";
  /** Merged with the internal transition-delay style — for things like `perspective`. */
  style?: React.CSSProperties;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const HIDDEN_TRANSFORM: Record<NonNullable<FadeInViewProps["direction"]>, string> = {
  up: "translate-y-12 translate-x-0 scale-95",
  left: "-translate-x-12 translate-y-0 scale-100",
  right: "translate-x-12 translate-y-0 scale-100",
};

export const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  delay = 0,
  className = "",
  as = "div",
  direction = "up",
  style,
}) => {
  const [reducedMotion] = useState(prefersReducedMotion);
  const [isVisible, setIsVisible] = useState(reducedMotion);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [reducedMotion]);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`${reducedMotion ? "" : "transition-all duration-700 ease-out"} ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : `opacity-0 ${HIDDEN_TRANSFORM[direction]}`
      } ${className}`}
      style={{ ...style, ...(reducedMotion ? {} : { transitionDelay: `${delay}ms` }) }}
    >
      {children}
    </Tag>
  );
};
