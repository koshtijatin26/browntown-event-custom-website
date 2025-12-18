export default function About() {
  return (
  <section id="about" class="py-16 md:py-20 bg-black">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
      <div class="reveal">
        <div class="text-xs font-semibold tracking-[0.22em] uppercase text-rg-rose mb-3">
          ABOUT ROSEGOLD NIGHTS
        </div>
        <h2 class="font-glam font-semibold text-xl md:text-2xl tracking-[0.22em] uppercase text-rg-champ mb-4">
          curated modern glam experiences
        </h2>
        <p class="text-[0.9rem] text-[rgba(255,255,255,0.8)] mb-4">
          RoseGold Nights is a design-forward event label crafting intimate evenings with
          premium sound, couture lighting and elevated hospitality. Every edition is a carefully
          produced one-night experience — never repeated in the same form.
        </p>
        <p class="text-[0.9rem] text-[rgba(255,255,255,0.76)]">
          From lineup curation to scent, glassware to light choreography — each detail is
          tuned so guests feel like they stepped into a cinematic frame, not just a venue.
        </p>
      </div>
      <div class="reveal">
        <div class="metal-border">
          <div class="metal-inner p-5">
            <div class="text-xs tracking-[0.18em] uppercase text-[rgba(255,255,255,0.7)] mb-2">
              BY THE NUMBERS
            </div>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-rg-champ font-semibold text-lg">25+</div>
                <div class="text-[10px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)] mt-1">
                  Nights
                </div>
              </div>
              <div>
                <div class="text-rg-champ font-semibold text-lg">5</div>
                <div class="text-[10px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)] mt-1">
                  Cities
                </div>
              </div>
              <div>
                <div class="text-rg-champ font-semibold text-lg">4.9★</div>
                <div class="text-[10px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)] mt-1">
                  Guest rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
