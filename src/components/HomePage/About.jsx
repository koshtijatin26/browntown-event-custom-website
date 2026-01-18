export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
        <div className="reveal">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-rg-rose mb-3">
            About BrownTown
          </div>
          <h2 className="font-glam font-semibold text-xl md:text-2xl tracking-[0.22em] uppercase text-rg-champ mb-4">
            Turning culture into celebration
          </h2>
          <p className="text-[0.9rem] text-[rgba(255,255,255,0.8)] mb-4">
            Browntown USA was created to give culture a stage and bring people together through music, identity, and community. What started as a small idea has grown into a movement built on creativity and unforgettable moments. Every event is intentional, from the themes to the lighting to the energy in the room. You are not just attending. You’re not just attending - you’re part of something bigger.
          </p>
        </div>
        <div className="reveal">
          <img
            src="/images/team_members.png"
            alt="Team Members"
            className="w-full h-auto object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
    </section>
  );
}
