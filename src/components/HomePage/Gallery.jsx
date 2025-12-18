export default function Gallery() {
  return (

  <section id="gallery" class="py-16 md:py-20 bg-black">
    <div class="max-w-6xl mx-auto px-4">
      <div class="mb-8 text-center reveal parallax-soft" data-parallax-speed="0.04">
        <div class="text-xs font-semibold tracking-[0.22em] uppercase text-rg-rose mb-2">
          GALLERY
        </div>
        <h2 class="font-glam font-semibold text-xl md:text-2xl tracking-[0.22em] uppercase text-rg-champ">
          FRAGMENTS FROM THE NIGHT
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="gallery-item reveal">
          <img src="gallery1.jpg" alt="" class="w-full h-44 object-cover rounded-xl bg-[#201010]"/>
        </div>
        <div class="gallery-item reveal">
          <img src="gallery2.jpg" alt="" class="w-full h-44 object-cover rounded-xl bg-[#201010]"/>
        </div>
        <div class="gallery-item reveal">
          <img src="gallery3.jpg" alt="" class="w-full h-44 object-cover rounded-xl bg-[#201010]"/>
        </div>
        <div class="gallery-item reveal">
          <img src="gallery4.jpg" alt="" class="w-full h-44 object-cover rounded-xl bg-[#201010]"/>
        </div>
      </div>
    </div>
  </section>
  )
}
