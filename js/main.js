/* ==========================================================================
   PRIORITY ROOFING — 2026 DIGITAL EXPERIENCE
   Vanilla JS: scroll reveals, hero intro, magnetic buttons, counters,
   storm stages, maps, FAQ, mobile menu, gallery drag, form, cursor.
   ========================================================================== */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------- Utility: smooth scroll for anchor links ---------- */
  function smoothTo(target) {
    const el = typeof target === 'string' ? $(target) : target;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({ top: y, behavior: prefersReduced ? 'auto' : 'smooth' });
  }

  /* ---------- Preloader ---------- */
  const preloader = $('.preloader');
  function hidePreloader() {
    if (!preloader) return;
    preloader.classList.add('done');
    document.body.classList.add('loaded');
    setTimeout(() => { preloader.style.display = 'none'; }, 900);
  }
  if (prefersReduced) {
    preloader.style.display = 'none';
    document.body.classList.add('loaded');
  } else {
    window.addEventListener('load', () => setTimeout(hidePreloader, 900));
    setTimeout(hidePreloader, 3200); // safety
  }

  /* ---------- Custom cursor ---------- */
  const dot = $('.cursor-dot');
  const ring = $('.cursor-ring');
  if (dot && ring && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.body.classList.add('cursor-on');
    let mx = -100, my = -100, rx = -100, ry = -100;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });
    (function ringLoop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(ringLoop);
    })();
    const growSel = 'a, button, .g-item, .faq-q, .mat-tab, .area-chip, .stage, .team-card, input, select, textarea, label, .cred';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(growSel)) document.body.classList.add('cursor-grow');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(growSel)) document.body.classList.remove('cursor-grow');
    });
  }

  /* ---------- Scroll progress ---------- */
  const progress = $('.scroll-progress i');
  function onScrollProgress() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (progress) progress.style.width = pct + '%';
  }
  window.addEventListener('scroll', onScrollProgress, { passive: true });

  /* ---------- Nav state ---------- */
  const nav = $('#siteNav');
  function onNavScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onNavScroll, { passive: true });
  onNavScroll();

  /* ---------- Mobile menu ---------- */
  const burger = $('#navBurger');
  const menu = $('#mobileMenu');
  let menuOpen = false;
  function setMenu(open) {
    menuOpen = open;
    burger.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      $$('.mobile-menu-links a').forEach((a, i) => {
        a.style.transitionDelay = (0.08 + i * 0.05) + 's';
      });
    }
  }
  if (burger && menu) {
    burger.addEventListener('click', () => setMenu(!menuOpen));
    $$('.mobile-menu a, .mobile-menu-foot a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  }

  /* ---------- Nav links: services deep-link ---------- */
  $$('[data-nav], [data-mlink]').forEach((a) => {
    a.addEventListener('click', () => {
      const svc = a.dataset.service;
      if (svc) setTimeout(() => activateService(svc), prefersReduced ? 0 : 900);
    });
  });
  $$('.footer-col a[data-service]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      activateService(a.dataset.service);
      smoothTo('#services');
    });
  });

  function activateService(svc) {
    const card = $('.service-card[data-service-card="' + svc + '"]');
    if (!card) return;
    card.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'center' });
    card.classList.add('flash');
    setTimeout(() => card.classList.remove('flash'), 1800);
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = $$('.reveal, .reveal-left');
  if ('IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  // Staggered children reveal
  $$('.service-card, .promise, .warranty-card, .team-card, .cred, .faq-item, .process-list li').forEach((group, gi) => {
    group.style.transitionDelay = (gi % 3) * 0.08 + 's';
  });

  /* ---------- Animated counters ---------- */
  const counters = $$('.count');
  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        if (prefersReduced) { el.textContent = target.toLocaleString(); return; }
        const dur = 2000, start = performance.now();
        (function tick(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString();
          if (p < 1) requestAnimationFrame(tick);
        })(start);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => cio.observe(c));
  }

  /* ---------- Hero image crossfade + parallax ---------- */
  const heroImg2 = $('.hero-img-2');
  if (heroImg2 && !prefersReduced) setTimeout(() => heroImg2.classList.add('show'), 3400);
  window.addEventListener('scroll', () => {
    const hero = $('.hero');
    if (!hero) return;
    const y = window.scrollY;
    if (y < window.innerHeight) {
      const media = $('.hero-media');
      if (media) media.style.transform = 'translateY(' + y * 0.22 + 'px)';
      const content = $('.hero-content');
      if (content) content.style.transform = 'translateY(' + y * 0.14 + 'px)';
      content.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.9)));
    }
  }, { passive: true });

  /* ---------- Magnetic buttons ---------- */
  if (!prefersReduced && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    $$('.magnetic').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.24}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  /* ---------- Materials tabs ---------- */
  const tabs = $$('.mat-tab');
  const panels = $$('.mat-panel');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = $('.mat-panel[data-matpanel="' + tab.dataset.mat + '"]');
      if (panel) panel.classList.add('active');
    });
  });

  /* ---------- FAQ accordion ---------- */
  $$('.faq-item').forEach((item) => {
    const q = $('.faq-q', item);
    const a = $('.faq-a', item);
    q.addEventListener('click', () => {
      const open = item.classList.contains('open');
      $$('.faq-item.open').forEach((other) => {
        other.classList.remove('open');
        $('.faq-q', other).setAttribute('aria-expanded', 'false');
        $('.faq-a', other).style.maxHeight = '0px';
      });
      if (!open) {
        item.classList.add('open');
        q.setAttribute('aria-expanded', 'true');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Form ---------- */
  const form = $('#inspectionForm');
  const success = $('#formSuccess');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      $$('input[required], select[required], textarea[required]', form).forEach((field) => {
        const bad = !field.value.trim();
        field.style.borderColor = bad ? '#d2544d' : '';
        if (bad) valid = false;
      });
      if (!valid) return;
      if (success) {
        success.classList.add('show');
        success.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'center' });
      }
      form.querySelector('button[type="submit"]').textContent = 'Request Received ✓';
      form.querySelector('button[type="submit"]').disabled = true;
      // NOTE: connect this to the official form endpoint / backend in production.
    });
    $$('input, select, textarea', form).forEach((f) => {
      f.addEventListener('input', () => { if (f.value.trim()) f.style.borderColor = ''; });
    });
  }

  /* ---------- Storm stages: auto-advance spotlight ---------- */
  const stages = $$('.stage');
  if (stages.length && !prefersReduced) {
    let cur = 0;
    const stageObserver = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) {
        setInterval(() => {
          stages.forEach((s) => s.classList.remove('spot'));
          cur = (cur + 1) % stages.length;
          stages[cur].classList.add('spot');
        }, 2400);
        stageObserver.disconnect();
      }
    }, { threshold: 0.4 });
    stageObserver.observe($('#stormStages'));
  }

  /* ---------- Area map (service area) ---------- */
  const markers = $$('.a-marker');
  const chips = $$('.area-chip');
  function setArea(name) {
    markers.forEach((m) => m.classList.toggle('active', m.dataset.area === name));
    chips.forEach((c) => c.classList.toggle('active', c.dataset.area === name));
  }
  markers.forEach((m) => m.addEventListener('mouseenter', () => setArea(m.dataset.area)));
  markers.forEach((m) => m.addEventListener('click', () => setArea(m.dataset.area)));
  chips.forEach((c) => c.addEventListener('click', () => setArea(c.dataset.area)));

  /* ---------- US map + locations list ---------- */
  const offices = [
    { city: 'Albuquerque', addr: '6739 Academy Rd. NE, Suite 250, Albuquerque, NM 87109', phone: '', email: 'albuquerque@priorityroofs.com' },
    { city: 'Amarillo', addr: '3505 Olsen Blvd, Suite 104, Amarillo, TX 79109', phone: '806-690-1127', email: 'amarillo@priorityroofs.com' },
    { city: 'Austin', addr: '12303 Technology Blvd #900, Austin, TX 78727', phone: '512-884-1287', email: 'austin@priorityroofs.com' },
    { city: 'Charleston', addr: '4975 Lacross Road, Suite 355, North Charleston, SC 29406', phone: '843-810-4290', email: 'charleston@priorityroofs.com' },
    { city: 'Charlotte', addr: '4828 Parkway Plaza Blvd., Suite 100, Charlotte, NC 28217', phone: '980-301-3541', email: 'charlotte@priorityroofs.com' },
    { city: 'Cleburne', addr: '1200 W Henderson, Suite F, Cleburne, TX 76033', phone: '817-357-7530', email: 'cleburne@priorityroofs.com' },
    { city: 'Colorado Springs', addr: '555 Middle Creek Pkwy Ste. 510, Colorado Springs, CO 80921', phone: '719-731-0042', email: 'coloradosprings@priorityroofs.com' },
    { city: 'Columbus', addr: '2740 Airport Dr., Suite 195, Columbus, OH 43219', phone: '614-400-0690', email: 'columbus@priorityroofs.com' },
    { city: 'Dallas', addr: '1420 W. Mockingbird Ln. Suite 540, Dallas, TX 75247', phone: '469-615-8193', email: 'office@priorityroofs.com' },
    { city: 'Denver', addr: '3600 S Yosemite St Suite 530, Denver, CO 80237', phone: '720-481-0531', email: 'colorado@priorityroofs.com' },
    { city: 'Fort Worth', addr: '9433 N Beach St Suite 121, Fort Worth, TX 76244', phone: '817-823-1075', email: 'ftworth@priorityroofs.com' },
    { city: 'Grand Rapids', addr: '11282 Tallmadge Woods Dr, Grand Rapids, MI 49534', phone: '616-758-1972', email: 'grandrapids@priorityroofs.com' },
    { city: 'Greater Houston', addr: '16420 Park Ten Pl Suite 530, Houston, TX 77084', phone: '832-405-3784', email: 'greaterhouston@priorityroofs.com' },
    { city: 'Houston', addr: '260 N Sam Houston Pkwy E Suite 150, Houston, TX 77060', phone: '866-974-4743', email: 'houston@priorityroofs.com' },
    { city: 'Huntsville', addr: '150 W Park Loop NW, Suite 205, Huntsville, AL 35806', phone: '256-932-3484', email: 'huntsville@priorityroofs.com' },
    { city: 'Jacksonville', addr: '9050 Cypress Green Dr, Jacksonville, FL 32256', phone: '904-465-1845', email: 'jacksonville@priorityroofs.com' },
    { city: 'Kansas City', addr: '4125 Broadway Blvd Suite 200, Kansas City, MO 64111', phone: '816-894-7281', email: 'kc@priorityroofs.com' },
    { city: 'Lakeland', addr: '4460 Florida National Dr Suite 4460-2, Lakeland, FL 33813', phone: '863-701-4746', email: 'lakeland@priorityroofs.com' },
    { city: 'Little Rock', addr: '11701 Interstate 30, Suite 320, Little Rock, AR 72209', phone: '501-902-7623', email: 'littlerock@priorityroofs.com' },
    { city: 'Los Angeles', addr: '1200 S Santa Fe Ave Suite 333, Los Angeles, CA 90013', phone: '213-532-8006', email: 'losangeles@priorityroofs.com' },
    { city: 'Minneapolis', addr: '8000 W 78th St Suite 335, Edina, MN 55439', phone: '612-916-4157', email: 'minneapolis@priorityroofs.com' },
    { city: 'Nashville', addr: '640 Spence Ln Suite 100, Nashville, TN 37217', phone: '615-571-9638', email: 'nashville@priorityroofs.com' },
    { city: 'Oklahoma City', addr: '3847 S Blvd Suite 200, Edmond, OK 73013', phone: '405-403-3028', email: 'okc@priorityroofs.com' },
    { city: 'Oklahoma City South', addr: '8444 NW 39th Expy, Bethany, OK 73008', phone: '405-406-2413', email: 'okcsouth@priorityroofs.com' },
    { city: 'Omaha', addr: '9736 Park Dr. Omaha, NE 68127', phone: '402-800-8013', email: 'omaha@priorityroofs.com' },
    { city: 'Prosper', addr: '130 N Preston Rd Ste 329, Prosper, TX 75078', phone: '903-436-3903', email: 'prosper@priorityroofs.com' },
    { city: 'San Antonio', addr: '7254 Blanco Rd #100, San Antonio, TX 78216', phone: '210-793-3028', email: 'sanantonio@priorityroofs.com' },
    { city: 'San Marcos', addr: '2019 Clovis R Barker Rd., Suite 200, San Marcos, TX 78666', phone: '737-983-4339', email: 'sanmarcos@priorityroofs.com' },
    { city: 'Sherman', addr: '200 N Travis St., Sherman, TX 75090', phone: '903-436-3903', email: 'sherman@priorityroofs.com' },
    { city: 'Shreveport', addr: '1434 Hawn Ave, Suite 9, Shreveport, LA 71107', phone: '318-658-5723', email: 'shreveport@priorityroofs.com' },
    { city: 'Springfield', addr: '202 N Massey Blvd., Nixa, MO 65714', phone: '417-403-5134', email: 'springfield@priorityroofs.com' },
    { city: 'St. Louis', addr: '300 Water Street, Suite 106, St. Charles, MO 63301', phone: '314-399-0247', email: 'stlouis@priorityroofs.com' },
    { city: 'Tampa', addr: '410 S Ware Blvd #814, Tampa, FL 33619', phone: '689-305-4104', email: 'tampa@priorityroofs.com' },
    { city: 'Tulsa', addr: '2512 E 71st St, Suite F, Tulsa, OK 74136', phone: '918-550-2354', email: 'tulsa@priorityroofs.com' },
    { city: 'Tulsa North', addr: '7770 North Owasso Expressway Suite #125, Owasso, OK 74055', phone: '918-924-0637', email: 'tulsanorth@priorityroofs.com' },
    { city: 'Tyler', addr: '15424 FM 849, Tyler, TX 75706', phone: '903-920-6524', email: 'tyler@priorityroofs.com' },
    { city: 'Waco', addr: '4949 Franklin Ave Suite A, Waco, TX 76710', phone: '254-299-5398', email: 'waco@priorityroofs.com' },
    { city: 'West Palm Beach', addr: '1935 Commerce Ln., Suite 7, Jupiter, FL 33458', phone: '561-597-3310', email: 'westpalmbeach@priorityroofs.com' },
    { city: 'Wichita Falls', addr: '4245 Kemp Blvd., #320, Wichita Falls, TX 76308', phone: '940-500-3964', email: 'wichitafalls@priorityroofs.com' }
  ];

  const listEl = $('#locationsList');
  if (listEl) {
    offices.forEach((off, i) => {
      const item = document.createElement('div');
      item.className = 'loc-list-item' + (off.city === 'Dallas' ? ' active' : '');
      item.dataset.city = off.city;
      item.innerHTML =
        '<h4><span class="pin">◆</span>' + off.city + '</h4>' +
        '<p>' + off.addr + '</p>' +
        (off.phone ? '<a class="loc-phone" href="tel:+1' + off.phone.replace(/[^0-9]/g, '') + '">' + off.phone + '</a>' : '') +
        '<p class="loc-email">' + off.email + '</p>';
      listEl.appendChild(item);
    });
  }

  const usMarkers = $$('.us-map-svg .map-marker');
  function highlightOffice(city) {
    usMarkers.forEach((m) => m.classList.toggle('active', m.dataset.city === city));
    $$('.loc-list-item').forEach((it) => it.classList.toggle('active', it.dataset.city === city));
  }
  usMarkers.forEach((m) => {
    m.addEventListener('mouseenter', () => highlightOffice(m.dataset.city));
    m.addEventListener('click', () => {
      highlightOffice(m.dataset.city);
      const item = $('.loc-list-item[data-city="' + m.dataset.city + '"]');
      if (item) item.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'center' });
    });
  });
  $$('.loc-list-item').forEach((it) => {
    it.addEventListener('mouseenter', () => highlightOffice(it.dataset.city));
    it.addEventListener('click', () => highlightOffice(it.dataset.city));
  });

  /* ---------- Gallery: drag-to-scroll + parallax ---------- */
  const scroll = $('#galleryScroll');
  if (scroll) {
    let down = false, startX = 0, startScroll = 0, moved = false;
    scroll.addEventListener('mousedown', (e) => {
      down = true; moved = false; startX = e.pageX; startScroll = scroll.scrollLeft;
      scroll.classList.add('dragging');
    });
    window.addEventListener('mousemove', (e) => {
      if (!down) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 4) moved = true;
      scroll.scrollLeft = startScroll - dx;
    });
    window.addEventListener('mouseup', () => { down = false; scroll.classList.remove('dragging'); });
    scroll.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
    // Image parallax within scroll container
    if (!prefersReduced) {
      scroll.addEventListener('scroll', () => {
        const items = $$('.g-item img', scroll);
        const rect = scroll.getBoundingClientRect();
        items.forEach((img) => {
          const ir = img.parentElement.getBoundingClientRect();
          const delta = (ir.left - rect.left) / rect.width;
          img.style.transform = 'scale(1.08) translateX(' + (delta * -14) + 'px)';
        });
      }, { passive: true });
    }
  }

  /* ---------- Parallax on section images (desktop) ---------- */
  if (!prefersReduced && window.innerWidth > 900) {
    $$('.metal-media img, .final-media img, .intro-image-wrap img').forEach((img) => {
      const wrap = img.parentElement;
      window.addEventListener('scroll', () => {
        const r = wrap.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const speed = wrap.classList.contains('metal-media') || wrap.classList.contains('final-media') ? 0.12 : 0.05;
        img.style.transform = 'translateY(' + (r.top * speed) + 'px) scale(1.12)';
      }, { passive: true });
    });
  }

  /* ---------- Ticker duplicate check ---------- */
  // CSS animation translates -50%; content is duplicated once in markup already.

})();
