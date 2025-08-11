import { PropsWithChildren, useEffect, useRef, useState } from "react";

interface RevealProps extends PropsWithChildren {
  animation?: "fade-in" | "slide-up" | "enter";
  delayMs?: number;
}

const Reveal = ({ children, animation = "slide-up", delayMs = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delayMs);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  const base = "opacity-0 translate-y-4";
  const shown = visible ? `opacity-100 translate-y-0 animate-${animation}` : base;

  return (
    <div ref={ref} className={`transition-all duration-700 ${shown}`}>
      {children}
    </div>
  );
};

export default Reveal;
