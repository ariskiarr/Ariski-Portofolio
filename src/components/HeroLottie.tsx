import Player from "lottie-react";
import heroAnimation from "../lottie/hero.json";

export default function HeroLottie() {
  return (
    <div className="absolute left-0 top-0 w-full h-full pointer-events-none select-none z-0">
      <Player
        autoplay
        loop
        animationData={heroAnimation}
        style={{ width: "100%", height: "100%", opacity: 0.18 }}
      />
    </div>
  );
}
