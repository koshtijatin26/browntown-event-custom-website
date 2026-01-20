import { useState } from "react";
import { Link } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div id="preHeader" className="fixed top-0 left-0 right-0 z-50 pre-header">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <a
            href="mailto:info@browntownus.com"
            className="flex items-center gap-2 pre-link"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <span className="hidden sm:inline">info@browntownus.com</span>
          </a>

          <div className="flex items-center gap-3">
            <a href="tel:8326773213" className="social-icon" aria-label="Phone">
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/browntown.usa/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="2" y="2" width="20" height="20" rx="6" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>

            <a href="https://www.facebook.com/share/15SPcn4EXg1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

          </div>
        </div>
      </div>

      <header
        id="siteHeader"
        className="fixed top-0 left-0 right-0 z-40 header-blur"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="/#hero" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="BrownTown Logo" className="w-12 h-12 object-contain rounded-xl" />
            <div className="leading-tight">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-rg-champ">
                BrownTown
              </div>
              <div className="text-[11px] text-[rgba(255,255,255,0.7)]">
                Paint the town brown!
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-[11px] font-semibold tracking-[0.2em] uppercase text-[rgba(255,255,255,0.7)]">
            <a href="/#hero" className="hover:text-rg-champ">
              Home
            </a>
            <a href="/#events" className="hover:text-rg-champ">
              Events
            </a>
            <a href="/#about" className="hover:text-rg-champ">
              About
            </a>
            <a href="/#team" className="hover:text-rg-champ">
              Team
            </a>
            <a href="/#gallery" className="hover:text-rg-champ">
              Gallery
            </a>
            <a href="/#contact" className="hover:text-rg-champ">
              Contact
            </a>
            <button
              className="btn btn-primary ml-2"
              onClick={() => openBooking('INQUIRIES & COLLABORATIONS')}
            >
              Book Now
            </button>
          </nav>
          <button
            id="menuToggle"
            className="md:hidden p-1 text-rg-champ"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                id="menuIcon"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              >
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div
            id="mobileMenu"
            className="md:hidden border-t border-[rgba(255,255,255,0.1)] bg-black/80"
          >
            <nav className="flex flex-col px-4 pt-2 pb-4 gap-2 text-[11px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.8)]">
              <a href="/#hero" className="py-2" onClick={closeMenu}>
                Home
              </a>
              <a href="/#events" className="py-2" onClick={closeMenu}>
                Events
              </a>
              <a href="/#about" className="py-2" onClick={closeMenu}>
                About
              </a>
              <a href="/#team" className="py-2" onClick={closeMenu}>
                Team
              </a>
              <a href="/#gallery" className="py-2" onClick={closeMenu}>
                Gallery
              </a>
              <a href="/#contact" className="py-2" onClick={closeMenu}>
                Contact
              </a>
              <button
                className="btn btn-primary w-full mt-2"
                onClick={() => {
                  openBooking('RoseGold Nights — Featured Booking');
                  closeMenu();
                }}
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
