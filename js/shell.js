/* ==========================================================================
   ARIMORI STUDIOS — GLOBAL SHELL INJECTOR (js/shell.js)
   Renders Header (with standalone Pricing tab), WhatsApp Pill, Footer & Modals
   ========================================================================== */

(function () {
  const MONOGRAM_SVG = `
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="arimoriGrad" x1="15" y1="10" x2="105" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="50%" stop-color="#10B981"/>
          <stop offset="100%" stop-color="#F8FAFC"/>
        </linearGradient>
      </defs>
      <path d="M60 12L104 98H86L60 46L34 98H16L60 12Z" stroke="url(#arimoriGrad)" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M36 98V64L60 84L84 64V98" stroke="url(#arimoriGrad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="60" cy="30" r="3.5" fill="#34D399"/>
    </svg>
  `;

  const WHATSAPP_ICON = `
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16.04 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.1 29.1l6.88-1.8a12.76 12.76 0 0 0 6.06 1.54h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05A12.72 12.72 0 0 0 16.04 3.2zm0 23.48h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.08 1.07 1.09-3.98-.25-.41a10.6 10.6 0 0 1-1.63-5.65c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.86-4.77 10.63-10.6 10.67zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z"/>
    </svg>
  `;

  const CHEVRON_SVG = `
    <svg class="chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M5 7.5L10 12.5L15 7.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const isHome = currentPath === '' || currentPath === 'index.html';
  const isPricing = currentPath === 'pricing.html';
  const isModular = currentPath === 'modular-solutions.html' || currentPath.startsWith('tier-');
  const isPortfolio = currentPath === 'portfolio.html';
  const isAbout = currentPath === 'about.html' || currentPath === 'contact.html';

  const headerHTML = `
    <header class="arimori-header">
      <div class="arimori-nav-inner">
        <a href="index.html" class="arimori-brand" aria-label="Arimori Studios Home">
          ${MONOGRAM_SVG}
          <span>ARIMORI</span>
        </a>

        <button class="mobile-toggle" id="mobileNavToggle" aria-label="Toggle Menu" aria-expanded="false">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round"/>
          </svg>
        </button>

        <ul class="arimori-nav-links" id="arimoriNavLinks">
          <li class="nav-item">
            <a href="index.html" class="nav-link ${isHome ? 'active' : ''}">Home</a>
          </li>

          <li class="nav-item">
            <a href="pricing.html" class="nav-link ${isPricing ? 'active' : ''}">Pricing</a>
          </li>

          <li class="nav-item has-dropdown">
            <button type="button" class="nav-link ${isModular ? 'active' : ''}" aria-expanded="false">
              Modular Solutions ${CHEVRON_SVG}
            </button>
            <div class="dropdown-menu">
              <a href="modular-solutions.html" class="dropdown-link">
                <span class="dropdown-title">Technical Overview</span>
                <span class="dropdown-sub">Architecture & magnetic-pad orbs</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="tier-01.html" class="dropdown-link">
                <span class="dropdown-title">Tier 01 — The Discovery Suite</span>
                <span class="dropdown-sub">Core / Mantle • R2,500 + R450/mo</span>
              </a>
              <a href="tier-02.html" class="dropdown-link">
                <span class="dropdown-title">Tier 02 — The Growth Launchpad</span>
                <span class="dropdown-sub">Crust • R6,500 + R1,250/mo</span>
              </a>
              <a href="tier-03.html" class="dropdown-link">
                <span class="dropdown-title">Tier 03 — The Counter Standard <span class="badge-hero">HERO</span></span>
                <span class="dropdown-sub">Forest Floor • R9,500 + R1,500/mo</span>
              </a>
              <a href="tier-04.html" class="dropdown-link">
                <span class="dropdown-title">Tier 04 — The Remote Exchange</span>
                <span class="dropdown-sub">Atmosphere • R12,500 + R2,250/mo</span>
              </a>
              <a href="tier-05.html" class="dropdown-link">
                <span class="dropdown-title">Tier 05 — The Enterprise Foundation</span>
                <span class="dropdown-sub">Stratosphere • R16,500 + R3,200/mo</span>
              </a>
            </div>
          </li>

          <li class="nav-item">
            <a href="portfolio.html" class="nav-link ${isPortfolio ? 'active' : ''}">Portfolio</a>
          </li>

          <li class="nav-item has-dropdown">
            <button type="button" class="nav-link ${isAbout ? 'active' : ''}" aria-expanded="false">
              About Arimori ${CHEVRON_SVG}
            </button>
            <div class="dropdown-menu">
              <a href="about.html#ethos" class="dropdown-link">
                <span class="dropdown-title">Our Ethos</span>
                <span class="dropdown-sub">有森 / 有盛 • Sheltered Forest</span>
              </a>
              <a href="about.html#proposal" class="dropdown-link">
                <span class="dropdown-title">The Proposal</span>
                <span class="dropdown-sub">100% Ownership & Safeguards</span>
              </a>
              <a href="contact.html" class="dropdown-link">
                <span class="dropdown-title">Contact Us</span>
                <span class="dropdown-sub">Direct WhatsApp, Email & Booking</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  `;

  const fabHTML = `
    <a href="https://wa.me/27836947300?text=Hi%20Arimori%20Studios,%20I'd%20like%20to%20discuss%20a%20solution%20for%20my%20business."
       target="_blank"
       rel="noopener noreferrer"
       class="whatsapp-fab"
       aria-label="Chat on WhatsApp +27 83 694 7300">
      ${WHATSAPP_ICON}
      <span>+27 83 694 7300</span>
    </a>
  `;

  const footerHTML = `
    <footer class="arimori-footer">
      <div class="footer-watermark">${MONOGRAM_SVG}</div>
      <div class="footer-content">
        <div class="footer-contacts">
          <a href="https://wa.me/27836947300" target="_blank" rel="noopener noreferrer" class="footer-contact-link">
            WhatsApp: +27 83 694 7300
          </a>
          <a href="mailto:paballoalexis@gmail.com" class="footer-contact-link">
            Email: paballoalexis@gmail.com
          </a>
        </div>

        <div class="footer-legal-block">
          <div class="footer-entity">ARIMORI STUDIOS (PTY) LTD</div>
          <div class="footer-policies">
            <button type="button" data-legal="terms">Terms of Service</button>
            <span>•</span>
            <button type="button" data-legal="privacy">Privacy Policy</button>
            <span>•</span>
            <button type="button" data-legal="cookies">Cookie Preferences</button>
          </div>
          <div class="footer-copy">© 2026 Arimori Studios. Architects of Enduring Systems.</div>
        </div>
      </div>
    </footer>

    <div class="arimori-modal-backdrop" id="legalModalBackdrop" role="dialog" aria-modal="true">
      <div class="arimori-modal">
        <h3 id="legalModalTitle"></h3>
        <div id="legalModalBody"></div>
        <button type="button" class="modal-close-btn" id="legalModalClose">Close</button>
      </div>
    </div>
  `;

  const LEGAL_CONTENT = {
    terms: {
      title: 'Terms of Service — Arimori Studios (Pty) Ltd',
      body: `<p>All modular software, databases, domain credentials, and physical counter hardware provisioned under the 12-Month Foundation Agreement transfer to 100% client ownership upon fulfillment with zero vendor lock-in or remote kill-switches.</p>
             <p>Initial deployments operate on a 50% mobilization deposit and 50% on package fulfillment structure. Custom interactive 3D websites or 3D pages are scoped separately based on complexity.</p>`
    },
    privacy: {
      title: 'Privacy Policy & POPIA Compliance',
      body: `<p>Arimori Studios (Pty) Ltd processes client inquiry information strictly under South Africa's Protection of Personal Information Act (POPIA) solely to scope and deploy requested operational infrastructure.</p>
             <p>Client production vaults (Tiers 03–05) are single-tenant, AES-256 encrypted, and isolated from third-party telemetry.</p>`
    },
    cookies: {
      title: 'Cookie Preferences',
      body: `<p>arimori.studio uses zero invasive advertising trackers or third-party behavioral cookies. Only essential local browser storage is used to maintain session preferences and interactive viewport performance.</p>`
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', fabHTML + footerHTML);

    const mobileToggle = document.getElementById('mobileNavToggle');
    const navLinks = document.getElementById('arimoriNavLinks');
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('mobile-open');
        mobileToggle.setAttribute('aria-expanded', String(isOpen));
      });
    }

    document.querySelectorAll('.has-dropdown > .nav-link').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = btn.parentElement;
        const wasOpen = parent.classList.contains('open');
        document.querySelectorAll('.has-dropdown').forEach((el) => el.classList.remove('open'));
        if (!wasOpen) parent.classList.add('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.has-dropdown')) {
        document.querySelectorAll('.has-dropdown').forEach((el) => el.classList.remove('open'));
      }
    });

    const backdrop = document.getElementById('legalModalBackdrop');
    const modalTitle = document.getElementById('legalModalTitle');
    const modalBody = document.getElementById('legalModalBody');
    const closeBtn = document.getElementById('legalModalClose');

    document.querySelectorAll('[data-legal]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-legal');
        const entry = LEGAL_CONTENT[key];
        if (entry) {
          modalTitle.textContent = entry.title;
          modalBody.innerHTML = entry.body;
          backdrop.classList.add('open');
        }
      });
    });

    closeBtn.addEventListener('click', () => backdrop.classList.remove('open'));
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.remove('open');
    });
  });
})();
