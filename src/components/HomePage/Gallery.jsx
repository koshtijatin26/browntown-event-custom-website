import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { API_URL } from "../../utils/constant";

export default function Gallery({ galleryImages = [] }) {
  return (
    <section id="gallery" className="py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-4 md:mb-8 text-center reveal parallax-soft" data-parallax-speed="0.04">
          <div className="text-xs md:text-2xl font-semibold tracking-[0.22em] uppercase text-rg-rose mb-2">
            GALLERY
          </div>
          <h2 className="font-glam font-semibold text-xs tracking-[0.22em] uppercase text-rg-champ">
            PROOF OF THE VIBE
          </h2>
        </div>

        {galleryImages.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            loop={galleryImages.length > 4} // Only loop if there are enough images
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
            {galleryImages.map((imgObj, index) => (
              <SwiperSlide key={imgObj.id || index}>
                <div className="gallery-item reveal visible" style={{ opacity: 1, transform: 'none' }}>
                  <img
                  src={imgObj.image.startsWith("http") ? imgObj.image : `${API_URL.replace('/api/', '/')}${imgObj.image.startsWith('uploads/') ? 'api/' + imgObj.image : imgObj.image}`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full aspect-[4/5] object-cover rounded-2xl bg-[#1a0f0f] shadow-2xl transition-all duration-500"
                />
              </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center text-white pb-10">Loading gallery...</div>
        )}
      </div>
    </section>
  );
}
