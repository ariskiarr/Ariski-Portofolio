"use client";

import { useEffect, useRef } from "react";

// Intersection Observer untuk animasi scroll
export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            entry.target.classList.remove("animate-out");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe semua elemen dengan kelas scroll-animate
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return observerRef;
}

// Komponen wrapper untuk animasi scroll
export function ScrollAnimateWrapper({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
}) {
  const getInitialClasses = () => {
    switch (direction) {
      case "up":
        return "opacity-0 translate-y-8";
      case "down":
        return "opacity-0 -translate-y-8";
      case "left":
        return "opacity-0 translate-x-8";
      case "right":
        return "opacity-0 -translate-x-8";
      case "scale":
        return "opacity-0 scale-95";
      case "fade":
        return "opacity-0";
      default:
        return "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      className={`scroll-animate transition-all duration-700 ease-out ${getInitialClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Hook untuk animasi counter
export function useCountUp(
  targetValue: number,
  duration: number = 2000,
  trigger: boolean = true
) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!trigger || !ref.current) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function untuk smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(
        startValue + (targetValue - startValue) * easeOutCubic
      );

      if (ref.current) {
        ref.current.textContent = currentValue.toString();
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue, duration, trigger]);

  return ref;
}

// Komponen animasi progress bar
export function AnimatedProgressBar({
  percentage,
  color = "blue",
  label,
  delay = 0,
}: {
  percentage: number;
  color?: string;
  label: string;
  delay?: number;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${percentage}%`;
              }

              // Animate number counting
              const start = 0;
              const duration = 1500;
              const startTime = performance.now();

              const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(
                  start + (percentage - start) * easeOutCubic
                );

                if (numberRef.current) {
                  numberRef.current.textContent = `${current}%`;
                }

                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };

              requestAnimationFrame(animate);
            }, delay);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = barRef.current?.parentElement;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [percentage, delay]);

  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    cyan: "bg-cyan-400",
    pink: "bg-pink-400",
    purple: "bg-purple-500",
  };

  const bgColorClasses = {
    blue: "bg-blue-100 dark:bg-blue-900",
    green: "bg-green-100 dark:bg-green-900",
    yellow: "bg-yellow-100 dark:bg-yellow-900",
    cyan: "bg-cyan-100 dark:bg-cyan-900",
    pink: "bg-pink-100 dark:bg-pink-900",
    purple: "bg-purple-100 dark:bg-purple-900",
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-800 dark:text-gray-200 font-medium">
          {label}
        </span>
        <span
          ref={numberRef}
          className="text-gray-600 dark:text-gray-400 font-semibold tabular-nums"
        >
          0%
        </span>
      </div>
      <div
        className={`w-full h-3 ${
          bgColorClasses[color as keyof typeof bgColorClasses]
        } rounded-full overflow-hidden relative`}
      >
        <div
          ref={barRef}
          className={`h-full ${
            colorClasses[color as keyof typeof colorClasses]
          } rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
          style={{ width: "0%" }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
}

// Komponen card dengan animasi hover
export function AnimatedCard({
  children,
  className = "",
  hoverScale = 1.05,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  delay?: number;
}) {
  return (
    <ScrollAnimateWrapper delay={delay} className={className}>
      <div
        className="group relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/20 dark:border-gray-700/20 overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-fuchsia-500/10"
        style={{
          transform: `perspective(1000px)`,
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = `perspective(1000px) scale(${hoverScale}) rotateY(2deg) rotateX(2deg)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "perspective(1000px) scale(1) rotateY(0deg) rotateX(0deg)";
        }}
      >
        {/* Gradient overlay yang muncul saat hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Subtle animated border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 via-fuchsia-500/20 to-yellow-400/20 blur-sm -z-10"></div>

        <div className="relative z-10">{children}</div>
      </div>
    </ScrollAnimateWrapper>
  );
}

// Komponen button dengan animasi ripple dan magnetic effect
export function AnimatedButton({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    // Ripple effect
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("div");
    ripple.className =
      "absolute rounded-full bg-white/30 pointer-events-none animate-ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    onClick?.(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.1;
    const deltaY = (e.clientY - centerY) * 0.1;

    buttonRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = "translate(0px, 0px) scale(1)";
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-white/30 dark:bg-gray-900/30 backdrop-blur border border-blue-400 text-blue-700 dark:text-blue-200 shadow-lg",
    outline:
      "border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900",
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      className={`
        relative overflow-hidden px-6 py-3 rounded-full font-bold transition-all duration-300 ease-out
        ${variants[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      style={{ transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
    >
      {children}
    </button>
  );
}

// Global CSS untuk animasi
export const scrollAnimationStyles = `
  @keyframes animate-in {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(200%);
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0.6;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  .animate-out {
    opacity: 0;
    transform: translateY(2rem);
  }

  .animate-shimmer {
    animation: shimmer 2s infinite;
  }

  .animate-ripple {
    animation: ripple 0.6s linear;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgb(243 244 246);
  }

  .dark ::-webkit-scrollbar-track {
    background: rgb(17 24 39);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, rgb(59 130 246), rgb(168 85 247));
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, rgb(37 99 235), rgb(147 51 234));
  }
`;
