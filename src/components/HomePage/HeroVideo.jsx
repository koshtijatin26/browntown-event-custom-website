import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // required for autoplay
      video.play().catch(() => {
        // autoplay might still be blocked
        console.log("Autoplay blocked");
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      id="heroVideo"
      muted
      loop
      playsInline
      autoPlay
    >
      <source src="/video/intro1.mp4" type="video/mp4" />
    </video>
  );
}
