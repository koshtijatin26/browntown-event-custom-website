export default function Contact() {
  return (

  <section id="contact" class="py-16 md:py-20 bg-gradient-to-b from-black via-[#120707] to-black">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-8 reveal">
        <div class="text-xs font-semibold tracking-[0.22em] uppercase text-rg-rose mb-2">
          CONTACT
        </div>
        <h2 class="font-glam font-semibold text-xl md:text-2xl tracking-[0.22em] uppercase text-rg-champ">
          REQUEST BOOKINGS & PRESS
        </h2>
        <p class="mt-3 text-[0.9rem] text-[rgba(255,255,255,0.75)]">
          For private bookings, partnerships or media, leave a message and the team will respond.
        </p>
      </div>

      <form
        id="contactForm"
        class="space-y-4 max-w-xl mx-auto reveal"
        onsubmit="handleContactSubmit(event)"
      >
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)]">
              Name
            </label>
            <input
              type="text"
              required
              class="mt-1 w-full rounded-lg bg-black/60 border border-[rgba(255,255,255,0.25)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rg-rose"
            />
          </div>
          <div>
            <label class="text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)]">
              Email
            </label>
            <input
              type="email"
              required
              class="mt-1 w-full rounded-lg bg-black/60 border border-[rgba(255,255,255,0.25)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rg-rose"
            />
          </div>
        </div>
        <div>
          <label class="text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)]">
            Subject
          </label>
          <input
            type="text"
            class="mt-1 w-full rounded-lg bg-black/60 border border-[rgba(255,255,255,0.25)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rg-rose"
          />
        </div>
        <div>
          <label class="text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)]">
            Message
          </label>
          <textarea
            rows="5"
            required
            class="mt-1 w-full rounded-lg bg-black/60 border border-[rgba(255,255,255,0.25)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rg-rose"
          ></textarea>
        </div>
        <div class="flex items-center justify-between text-[11px] text-[rgba(255,255,255,0.65)]">
          <span>Or email: <span class="text-rg-champ">hello@rosegoldnights.example</span></span>
          <button type="submit" class="btn btn-primary">
            Send
          </button>
        </div>
        <div
          id="contactSuccess"
          class="hidden mt-3 text-[11px] tracking-[0.16em] uppercase text-rg-champ text-center"
        >
          Message sent — we’ll reply soon.
        </div>
      </form>
    </div>
  </section>
  )
}
