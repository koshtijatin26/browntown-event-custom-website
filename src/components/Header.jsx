import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div id="preHeader" class="fixed top-0 left-0 right-0 z-50 pre-header">
        <div class="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <a
            href="mailto:hello@rosegoldnights.com"
            class="flex items-center gap-2 pre-link"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <span class="hidden sm:inline">hello@rosegoldnights.com</span>
          </a>

          <div class="flex items-center gap-3">
            <a href="#" class="social-icon" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              >
                <rect x="2" y="2" width="20" height="20" rx="6" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>

            <a href="#" class="social-icon" aria-label="Facebook">
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a href="#" class="social-icon" aria-label="Twitter">
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              >
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1
          A10.66 10.66 0 0 1 3 4s-4 9 5 13
          a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5
          a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <header
        id="siteHeader"
        class="fixed top-0 left-0 right-0 z-40 header-blur"
      >
        <div class="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#hero" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-b from-rg-rose to-rg-copper flex items-center justify-center shadow-glam text-[#0b0606] font-bold text-xs tracking-[0.25em]">
              RG
            </div>
            <div class="leading-tight">
              <div class="text-xs font-semibold uppercase tracking-[0.2em] text-rg-champ">
                RoseGold Nights
              </div>
              <div class="text-[11px] text-[rgba(255,255,255,0.7)]">
                Modern Glam Events
              </div>
            </div>
          </a>

          <nav class="hidden md:flex items-center gap-6 text-[11px] font-semibold tracking-[0.2em] uppercase text-[rgba(255,255,255,0.7)]">
            <a href="#hero" class="hover:text-rg-champ">
              Home
            </a>
            <a href="#events" class="hover:text-rg-champ">
              Events
            </a>
            <a href="#about" class="hover:text-rg-champ">
              About
            </a>
            <a href="#team" class="hover:text-rg-champ">
              Team
            </a>
            <a href="#gallery" class="hover:text-rg-champ">
              Gallery
            </a>
            <a href="#contact" class="hover:text-rg-champ">
              Contact
            </a>
            <button
              class="btn btn-primary ml-2"
              onclick="openBooking('RoseGold Nights — Booking')"
            >
              Book Now
            </button>
          </nav>

          <button
            id="menuToggle"
            class="md:hidden p-1 text-rg-champ"
            aria-label="Toggle menu"
          >
            <svg
              id="menuIcon"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
            >
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </button>
        </div>

        <div
          id="mobileMenu"
          class="hidden md:hidden border-t border-[rgba(255,255,255,0.1)] bg-black/80"
        >
          <nav class="flex flex-col px-4 pt-2 pb-4 gap-2 text-[11px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.8)]">
            <a href="#hero" class="py-2">
              Home
            </a>
            <a href="#events" class="py-2">
              Events
            </a>
            <a href="#about" class="py-2">
              About
            </a>
            <a href="#team" class="py-2">
              Team
            </a>
            <a href="#gallery" class="py-2">
              Gallery
            </a>
            <a href="#contact" class="py-2">
              Contact
            </a>
            <button
              class="btn btn-primary w-full mt-2"
              onclick="openBooking('RoseGold Nights — Booking')"
            >
              Book Now
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
