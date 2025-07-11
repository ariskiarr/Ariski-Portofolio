// Contoh komponen animasi Lottie untuk loading
import Player from "lottie-react";
import loadingAnimation from "../lottie/loading.json";

export default function LoadingLottie() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Player
        autoplay
        loop
        animationData={loadingAnimation}
        style={{ height: 120, width: 120 }}
      />
      <span className="mt-4 text-sm text-gray-500">Loading...</span>
    </div>
  );
}
