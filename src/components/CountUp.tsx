import { useEffect, useRef } from "react";

export default function CountUp({
  end,
  duration = 1.2,
  className = "",
}: {
  end: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const totalFrames = Math.round(duration * 60);
    let frame = 0;
    function animate() {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const value = Math.floor(progress * end);
      if (ref.current) ref.current.textContent = value + "+";
      if (progress < 1) requestAnimationFrame(animate);
    }
    animate();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      0+
    </span>
  );
}
