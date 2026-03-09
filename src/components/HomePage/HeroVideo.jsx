import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        video.play().catch(() => {
          console.log("Autoplay blocked");
        });
      }
    });
  }, []);

  return (
    <>
      {/* Desktop & Mobile Video */}
      <video
        ref={(el) => (videoRefs.current[0] = el)}
        className="absolute inset-0 lg:static w-full h-[100svh] lg:h-auto object-cover lg:object-contain"
        muted
        loop
        playsInline
        autoPlay
      >
        <source src="/video/home.mp4" type="video/mp4" />
      </video>
    </>
  );
}
