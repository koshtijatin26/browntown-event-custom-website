import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const galleryImages = Array.from({ length: 32 }, (_, i) => `/gallery/gallery_${i + 1}.jpg`);

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-4 md:mb-8 text-center reveal parallax-soft" data-parallax-speed="0.04">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-rg-rose mb-2">
            GALLERY
          </div>
          <h2 className="font-glam font-semibold text-xs md:text-2xl tracking-[0.22em] uppercase text-rg-champ">
            PROOF OF THE VIBE
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          className="w-full pb-10"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="gallery-item reveal">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full aspect-[4/5] object-cover rounded-2xl bg-[#1a0f0f] shadow-2xl transition-all duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
