export default function Footer() {
  return (
    
  <footer class="footer-premium">
  <div class="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-14">

    <div class="flex flex-col gap-6">
      <a href="#hero" class="flex items-center gap-4">
        <div class="footer-logo">
          RG
        </div>
        <div>
          <div class="footer-title">RoseGold Nights</div>
          <div class="footer-subtitle">Modern Glam Events</div>
        </div>
      </a>

      <p class="footer-desc max-w-sm">
        Curating unforgettable luxury experiences with modern glam,
        artistic elegance, and premium event production.
      </p>

      <div class="footer-socials">
        <a href="#" aria-label="Instagram">
          <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
        </a>
        <a href="#" aria-label="Facebook">
          <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a href="#" aria-label="Twitter">
          <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
        </a>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-2 gap-10">

      <div>
        <div class="footer-heading">Company</div>
        <ul class="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

     {/* <div>
        <div class="footer-heading">Events</div>
        <ul class="footer-links">
          <li><a href="#">Weddings</a></li>
          <li><a href="#">Corporate</a></li>
          <li><a href="#">Private Parties</a></li>
          <li><a href="#">Luxury Decor</a></li>
        </ul>
      </div> */}

      <div>
        <div class="footer-heading">Legal</div>
        <ul class="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>

    </div>
  </div>

  <div class="footer-bottom">
    © <span id="year"></span> RoseGold Nights. All rights reserved.
  </div>
</footer>
  )
}
