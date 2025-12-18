import { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-black via-[#120707] to-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 reveal">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-rg-rose mb-2">
            CONTACT
          </div>
          <h2 className="font-glam font-semibold text-xl md:text-2xl tracking-[0.22em] uppercase text-rg-champ">
            REQUEST BOOKINGS & PRESS
          </h2>
          <p className="mt-3 text-[0.9rem] text-[rgba(255,255,255,0.75)]">
            For private bookings, partnerships or media, leave a message and the team will respond.
          </p>
        </div>

        <form
          id="contactForm"
          className="space-y-4 max-w-xl mx-auto reveal"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)]">
                Name
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-lg bg-black/60 border border-[rgba(255,255,255,0.25)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rg-rose"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)]">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-lg bg-black/60 border border-[rgba(255,255,255,0.25)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rg-rose"
              />
            </div>
          </div>
          <div>
            <label className="text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)]">
              Subject
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg bg-black/60 border border-[rgba(255,255,255,0.25)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rg-rose"
            />
          </div>
          <div>
            <label className="text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)]">
              Message
            </label>
            <textarea
              rows="5"
              required
              className="mt-1 w-full rounded-lg bg-black/60 border border-[rgba(255,255,255,0.25)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rg-rose"
            ></textarea>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[rgba(255,255,255,0.65)]">
            <span>Or email: <span className="text-rg-champ">hello@rosegoldnights.example</span></span>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
          {success && (
            <div
              id="contactSuccess"
              className="mt-3 text-[11px] tracking-[0.16em] uppercase text-rg-champ text-center flash-success"
            >
              Message sent — we’ll reply soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
