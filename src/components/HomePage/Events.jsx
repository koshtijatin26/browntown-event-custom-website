import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useBooking } from "../../context/BookingContext";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { API_URL } from "../../utils/constant";
import { formatDateUS } from "../../utils/helper";

export default function Events({
  futureEvents = [],
  pastEvents = []
}) {
  const { openBooking } = useBooking();

  // Reveal on scroll
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Parallax soft
  useEffect(() => {
    const els = document.querySelectorAll(".parallax-soft");
    const onScroll = () => {
      const y = window.scrollY;
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed || "0.1");
        el.style.transform = `translateY(${y * -speed}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="events"
      className="py-16 md:py-20 bg-gradient-to-b from-black via-[#120707] to-black"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div
          className="text-center mb-10 reveal parallax-soft"
          data-parallax-speed="0.06"
        >
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-rg-rose mb-2">
            EVENTS
          </div>
          <h2 className="font-glam font-semibold text-xl md:text-2xl tracking-[0.22em] uppercase text-rg-champ">
            Upcoming & Past Nights
          </h2>
          <p className="mt-3 text-[0.9rem] text-[rgba(255,255,255,0.7)] max-w-xl mx-auto">
            Premium, small-capacity nights curated for sound, light, and detail.
          </p>
        </div>

        {/* UPCOMING */}
        <div className="mb-12 reveal">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgba(255,255,255,0.8)]">
              UPCOMING
            </div>
            <div className="text-[11px] tracking-[0.16em] uppercase text-[rgba(255,255,255,0.5)]">
              Limited seats · Advance only
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
          >
            {/* SLIDE 1 */}
            {futureEvents?.length > 0 && futureEvents?.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="event-card grid md:grid-cols-[1.3fr,1fr] overflow-hidden">
                  <div className="relative">
                    <img
                      src={`${API_URL}${event?.image}`}
                      alt="Winter RoseGala"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-xs text-white/90">
                      <div className="event-tag">{formatDateUS(event?.event_date)}</div>
                      <div className="text-[0.9rem] font-semibold mt-1">
                        {event?.venue}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 md:p-6 flex flex-col justify-between bg-black/70">
                    <div>
                      <div className="event-tag mb-2">{event?.highlights}</div>
                      <h3 className="font-glam font-semibold tracking-[0.18em] uppercase text-[0.9rem] text-rg-champ">
                        {event?.name}
                      </h3>
                      <p className="mt-3 text-[0.86rem] text-white/80">
                        {event?.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[11px]">
                      <div className="text-white/75">
                        From{" "}
                        <span className="text-rg-champ font-semibold">${event?.price}</span>
                      </div>
                      <a
                        target="_blank"
                        className="btn btn-primary"
                        href={event?.booking_url}
                      >
                        Book
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* PAST EVENTS */}
        <div className="grid md:grid-cols-2 gap-10 reveal">
          <div>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[rgba(255,255,255,0.75)] mb-2">
              PAST EDITIONS
            </div>
            <p className="text-[0.9rem] text-[rgba(255,255,255,0.75)] max-w-md">
              Each RoseGold Night is produced as a one-off experience. Here’s a
              glimpse of where we've been.
            </p>
          </div>
          <div className="timeline space-y-5 text-[0.85rem]">
            {pastEvents?.length > 0 && pastEvents?.map((event) => (
              <div key={event.id} className="flex gap-3 items-start">
                <div className="mt-1 timeline-dot"></div>
                <div>
                  <div className="text-rg-champ font-semibold">
                    {event?.name} — {formatDateUS(event?.event_date)}
                  </div>
                  <div className="text-[rgba(255,255,255,0.7)]">
                    {event?.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
