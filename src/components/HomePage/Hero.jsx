import HeroVideo from "./HeroVideo";
import { useBooking } from "../../context/BookingContext";

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section id="hero" className="relative w-full min-h-[100svh] lg:min-h-0 flex items-center justify-center overflow-hidden">
      <HeroVideo />

      {/* Position buttons over the video, towards the bottom below the logo */}
      <div className="absolute bottom-[15%] sm:bottom-[20%] md:bottom-[15%] lg:bottom-[20%] w-full flex justify-center z-10 px-4">
        <div className="hero-actions flex items-center justify-center gap-3 flex-wrap">
          <button
            className="btn btn-primary"
            onClick={() => openBooking('Let’s Paint the Town Brown')}
          >
            Book Now
          </button>
          <a href="#events" className="btn btn-ghost !bg-black/20 hover:!bg-black/40">
            View Events
          </a>
        </div>
      </div>
    </section>
  )
}
