export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center reveal parallax-soft" data-parallax-speed="0.04">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-rg-rose mb-2">
            GALLERY
          </div>
          <h2 className="font-glam font-semibold text-xl md:text-2xl tracking-[0.22em] uppercase text-rg-champ">
            FRAGMENTS FROM THE NIGHT
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="gallery-item reveal">
            <img src="/gallery1.jpg" alt="" className="w-full h-44 object-cover rounded-xl bg-[#201010]" />
          </div>
          <div className="gallery-item reveal">
            <img src="/gallery2.jpg" alt="" className="w-full h-44 object-cover rounded-xl bg-[#201010]" />
          </div>
          <div className="gallery-item reveal">
            <img src="/gallery3.jpg" alt="" className="w-full h-44 object-cover rounded-xl bg-[#201010]" />
          </div>
          <div className="gallery-item reveal">
            <img src="/gallery4.jpg" alt="" className="w-full h-44 object-cover rounded-xl bg-[#201010]" />
          </div>
        </div>
      </div>
    </section>
  );
}
