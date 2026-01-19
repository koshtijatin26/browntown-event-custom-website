export default function TeamPartners() {
  return (
    <section id="team" className="py-16 md:py-20 bg-gradient-to-b from-black via-[#120707] to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-4 md:mb-8 text-center reveal parallax-soft" data-parallax-speed="0.05">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-rg-rose mb-2">
            TEAM & Sponsors
          </div>
          <h2 className="font-glam font-semibold text-xl md:text-2xl tracking-[0.22em] uppercase text-rg-champ">
            THE PEOPLE BEHIND THE SCENES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 reveal">
            <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.65)] mb-1">
              Team
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="event-card p-4 flex items-center gap-3 bg-black/80">
                <img src="/images/team/saloni.jpeg" alt="Saloni Dave" className="w-12 h-12 rounded-full object-cover bg-gradient-to-b from-rg-rose to-rg-copper" />
                <div>
                  <div className="text-[0.85rem] font-semibold">Saloni Dave</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.65)]">
                    Founder & CEO
                  </div>
                </div>
              </div>
              <div className="event-card p-4 flex items-center gap-3 bg-black/80">
                <img src="/images/team/prachi.jpeg" alt="Prachi Dave" className="w-12 h-12 rounded-full object-cover bg-gradient-to-b from-[#f3e1d7] to-rg-rose" />
                <div>
                  <div className="text-[0.85rem] font-semibold">Prachi Dave</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.65)]">
                    Director of Operations
                  </div>
                </div>
              </div>
              <div className="event-card p-4 flex items-center gap-3 bg-black/80">
                <img src="/images/team/parita.jpeg" alt="Parita Jadeja" className="w-12 h-12 rounded-full object-cover bg-gradient-to-b from-[#f5e4cf] to-rg-copper" />
                <div>
                  <div className="text-[0.85rem] font-semibold">Paritaba Jadeja</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.65)]">
                    Head of Growth & Strategy
                  </div>
                </div>
              </div>
              <div className="event-card p-4 flex items-center gap-3 bg-black/80">
                <img src="/images/team/keya.jpeg" alt="Keya Shah" className="w-12 h-12 rounded-full object-cover bg-gradient-to-b from-[#f2dac7] to-rg-rose" />
                <div>
                  <div className="text-[0.85rem] font-semibold">Keya Shah</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.65)]">
                    Head of Public Relations
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 reveal">
            <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.65)] mb-1">
              Sponsors
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="event-card p-3 flex items-center justify-center bg-black/70">
                <a href="https://www.desidistrict.com" target="_blank" rel="noopener noreferrer" className="text-[0.8rem] tracking-[0.18em] uppercase text-rg-champ">
                  Desi District
                </a>
              </div>
              <div className="event-card p-3 flex items-center justify-center bg-black/70">
                <a href="https://www.instagram.com/sevenheaven_smokeshop?igsh=aHMxc2RzdWxvdWt3" target="_blank" rel="noopener noreferrer" className="text-[0.8rem] tracking-[0.18em] uppercase text-rg-champ">
                  Seven Heaven
                </a>
              </div>
              {/* <div className="event-card p-3 flex items-center justify-center bg-black/70">
                <span className="text-[0.8rem] tracking-[0.18em] uppercase text-rg-champ">
                  Lumière
                </span>
              </div>
              <div className="event-card p-3 flex items-center justify-center bg-black/70">
                <span className="text-[0.8rem] tracking-[0.18em] uppercase text-rg-champ">
                  Velvet & Co
                </span>
              </div>
              <div className="event-card p-3 flex items-center justify-center bg-black/70">
                <span className="text-[0.8rem] tracking-[0.18em] uppercase text-rg-champ">
                  Nuit&nbsp;Blanche
                </span>
              </div>
              <div className="event-card p-3 flex items-center justify-center bg-black/70">
                <span className="text-[0.8rem] tracking-[0.18em] uppercase text-rg-champ">
                  Atelier&nbsp;M
                </span>
              </div>
              <div className="event-card p-3 flex items-center justify-center bg-black/70">
                <span className="text-[0.8rem] tracking-[0.18em] uppercase text-rg-champ">
                  Vino&nbsp;Roseé
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
