import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-premium">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="flex flex-col gap-6">
          <a href="/#hero" className="flex items-center gap-4">
            <img src="/images/logo.png" alt="BrownTown Logo" className="w-16 object-contain rounded-xl" />
            <div>
              <div className="footer-title">BrownTown</div>
              <div className="footer-subtitle">Paint the town brown!</div>
            </div>
          </a>

          <p className="footer-desc max-w-sm">
            Browntown, where culture shows up, music sets the tone, and unforgettable energy turns the night into a celebration.
          </p>

          <div className="footer-socials">
            <a href="tel:8326773213" aria-label="Phone">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" /></svg>
            </a>
            <a href="https://www.instagram.com/browntown.usa/" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
            </a>
            <a href="https://www.facebook.com/share/15SPcn4EXg1/?mibextid=wwXIfr" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-10">
          <div>
            <div className="footer-heading">Company</div>
            <ul className="footer-links">
              <li><a href="/#about">About</a></li>
              <li><a href="/#events">Events</a></li>
              <li><a href="/#team">Team</a></li>
              <li><a href="/#gallery">Gallery</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Legal</div>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © <span id="year">{new Date().getFullYear()}</span> Browntown. All rights reserved.
      </div>
    </footer>
  );
}
