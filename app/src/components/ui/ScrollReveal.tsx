import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: string;
}

const ScrollReveal = ({
  children,
  className = "",
  threshold = 0,
  delay = "0s",
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [settled, setSettled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          // Remove will-change after animation settles to free GPU memory
          const delay500 = setTimeout(() => setSettled(true), 600);
          return () => clearTimeout(delay500);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px 200px 0px",
      },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out transform ${
        !settled ? "will-change-transform" : ""
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
