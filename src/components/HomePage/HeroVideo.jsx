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
      {/* Desktop Video */}
      <video
        ref={(el) => (videoRefs.current[0] = el)}
        className="hidden lg:block absolute inset-0 w-full h-full object-fill"
        muted
        loop
        playsInline
        autoPlay
      >
        <source src="/video/Pc.mp4" type="video/mp4" />
      </video>

      {/* Mobile Video */}
      <video
        ref={(el) => (videoRefs.current[1] = el)}
        className="block lg:hidden absolute inset-0 w-full h-full object-fill"
        muted
        loop
        playsInline
        autoPlay
      >
        <source src="/video/Mobile.mp4" type="video/mp4" />
      </video>
    </>
  );
}
