import HeroVideo from "./HeroVideo";
import { useBooking } from "../../context/BookingContext";

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* <HeroVideo /> */}
      <div className="hero-overlay"></div>

      <div className="relative z-10 max-w-3xl w-full px-4">
        <div className="hero-glass hero-spotlight parallax-soft text-center px-6 py-10 md:px-10 md:py-14" data-parallax-speed="0.15">
          <div className="hero-headline text-[rgba(255,255,255,0.75)] mb-3">
            LIMITED SERIES · 2025
          </div>
          <h1 className="hero-main text-xl md:text-3xl text-rg-champ mb-4">
            ROSEGOLD NIGHTS
          </h1>
          <p className="hero-desc text-[0.95rem] md:text-[1rem] text-[rgba(255,255,255,0.86)] max-w-xl mx-auto">
            A modern glam night series with live music, couture lighting and curated hospitality —
            crafted as cinematic, once-only experiences.
          </p>
          <div className="hero-actions mt-7 flex items-center justify-center gap-3 flex-wrap">
            <button
              className="btn btn-primary"
              onClick={() => openBooking('INQUIRIES & COLLABORATIONS')}
            >
              Book Now
            </button>
            <a href="#events" className="btn btn-ghost">
              View Events
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
