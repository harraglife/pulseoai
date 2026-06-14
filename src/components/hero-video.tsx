"use client";

import { useRef, useState } from "react";
import { RotateCcw } from "lucide-react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);

  const replay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setEnded(false);
    void video.play();
  };

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="none"
        poster="/hero-poster.jpg"
        onEnded={() => setEnded(true)}
        className="h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {ended && (
        <button
          type="button"
          onClick={replay}
          aria-label="Rejouer la vidéo"
          className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/40 bg-black/35 px-3.5 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        >
          <RotateCcw className="size-3.5" />
          Rejouer
        </button>
      )}
    </>
  );
}
