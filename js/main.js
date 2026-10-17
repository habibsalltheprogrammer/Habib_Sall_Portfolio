/* =========================================================
   HABIB SALL — PORTFOLIO — main.js
   Vanilla JS, no build step required.
   ========================================================= */
(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Loading screen ---------- */
  const loader = document.getElementById('loader');
  const loaderBar = document.getElementById('loader-bar');
  const loaderPct = document.getElementById('loader-pct');
  let pct = 0;
  const loadInterval = setInterval(() => {
    pct += Math.random() * 18 + 6;
    if (pct >= 100) {
      pct = 100;
      clearInterval(loadInterval);
      setTimeout(() => {
        loader.classList.add('hidden');
        document.documentElement.classList.remove('no-scroll');
        initRevealObserver();
        animateCounters();
      }, 320);
    }
    loaderBar.style.setProperty('--p', pct + '%');
    loaderPct.textContent = Math.floor(pct) + '%';
  }, 160);
  document.documentElement.classList.add('no-scroll');

  /* ---------- 2. Scroll progress bar ---------- */
  const progressBar = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progressBar.style.width = scrolled + '%';
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  /* ---------- 3. Navbar state ---------- */
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 40);
    backToTop.classList.toggle('visible', y > 700);
  }, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' }));

  /* ---------- 3b. Active nav link for current page ---------- */
  const currentPage = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a, #mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ---------- 4. Mobile nav ---------- */
  const burger = document.getElementById('nav-burger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-close');
  burger?.addEventListener('click', () => mobileNav.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

  /* ---------- 5. Theme toggle ---------- */
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('light') ? '☀' : '☾';
  });

  /* ---------- 6. Cursor glow ---------- */
  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow && window.matchMedia('(hover:hover)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
      cursorGlow.classList.add('active');
    });
    window.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));
  }

  /* ---------- 7. Reveal on scroll ---------- */
  function initRevealObserver() {
    const items = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    items.forEach(item => io.observe(item));

    // skill bars
    const bars = document.querySelectorAll('.skill-bar i');
    const barIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level + '%';
          barIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(b => barIo.observe(b));
  }
  if (prefersReducedMotion) {
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('in'));
  }

  /* ---------- 8. Rotating hero roles (typed effect) ---------- */
  const roles = ['Software Engineer', 'Creative Technologist', 'Multimedia Designer', 'UI/UX Designer', 'Fashion Model', 'Dancer & Performer', 'Digital Creator', 'Brand Strategist'];
  const roleEl = document.getElementById('hero-role-text');
  if (roleEl) {
    let ri = 0, ci = 0, deleting = false;
    function typeLoop() {
      const word = roles[ri];
      if (!deleting) {
        ci++;
        roleEl.textContent = word.slice(0, ci);
        if (ci === word.length) { deleting = true; setTimeout(typeLoop, 1400); return; }
      } else {
        ci--;
        roleEl.textContent = word.slice(0, ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
      }
      setTimeout(typeLoop, deleting ? 35 : 65);
    }
    typeLoop();
  }

  /* ---------- 9. Animated counters ---------- */
  function animateCounters() {
    document.querySelectorAll('[data-counter]').forEach(el => {
      const target = parseFloat(el.dataset.counter);
      const dur = 1600;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
    });
  }

  /* ---------- 10. Particle canvas (hero) ---------- */
  const canvas = document.getElementById('particles-canvas');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let particles = [], w, h;
    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }
    function makeParticles() {
      const count = Math.min(70, Math.floor((w * h) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
        c: Math.random() > 0.5 ? '212,175,55' : '176,0,32'
      }));
    }
    function step() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.c},0.55)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(212,175,55,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      requestAnimationFrame(step);
    }
    resize(); makeParticles(); step();
    window.addEventListener('resize', () => { resize(); makeParticles(); });
  }

  /* ---------- 11. Tilt on portrait & cards ---------- */
  function applyTilt(el, strength = 10) {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${px * strength}deg) rotateX(${-py * strength}deg)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = 'rotateY(0) rotateX(0)'; });
  }
  document.querySelectorAll('.portrait-frame, .modeling-portrait').forEach(el => {
    el.style.transformStyle = 'preserve-3d';
    if (window.matchMedia('(hover:hover)').matches && !prefersReducedMotion) applyTilt(el, 8);
  });

  /* ---------- 12. Render dynamic content from PORTFOLIO_DATA ---------- */
  function renderProjects() {
    const grid = document.getElementById('project-grid');
    if (!grid || typeof PORTFOLIO_DATA === 'undefined') return;
    grid.innerHTML = PORTFOLIO_DATA.software.map(p => `
      <article class="project-card" data-reveal>
        <div class="project-thumb${p.image ? ' has-img' : ''}">${p.image ? `<img src="${p.image}" alt="${p.title} logo" loading="lazy">` : `<span class="glyph">${p.glyph || p.title.split(' ').map(w=>w[0]).slice(0,2).join('')}</span>`}</div>
        <div class="project-body">
          <h4>${p.title}</h4>
          <p>${p.summary}</p>
          <div class="project-tech">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <ul class="project-feats">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
          <div class="project-links">
            ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener">Live Site →</a>` : ''}
            ${p.codeUrl ? `<a href="${p.codeUrl}" target="_blank" rel="noopener">View Code →</a>` : ''}
          </div>
        </div>
      </article>
    `).join('');
  }

  function renderModelingAchievements() {
    const wrap = document.getElementById('modeling-achv-list');
    if (!wrap || typeof PORTFOLIO_DATA === 'undefined') return;
    wrap.innerHTML = PORTFOLIO_DATA.modelingAchievements.map(a => `
      <div class="achv-item">
        <div class="achv-icon">★</div>
        <div><h5>${a.title}</h5><span>${a.detail}</span></div>
      </div>
    `).join('');
  }

  function renderModelingStats() {
    const wrap = document.getElementById('modeling-stats');
    if (!wrap || typeof PORTFOLIO_DATA === 'undefined') return;
    wrap.innerHTML = PORTFOLIO_DATA.modelingStats.map(s => `
      <div class="mstat"><b data-counter="${s.value}">0</b><span>${s.label}</span></div>
    `).join('');
  }

  function renderExperience() {
    const wrap = document.getElementById('experience-timeline');
    if (!wrap || typeof PORTFOLIO_DATA === 'undefined') return;
    wrap.innerHTML = PORTFOLIO_DATA.experience.map(e => `
      <div class="tl-item" data-reveal>
        <div class="tl-dot"></div>
        <div class="tl-period">${e.period}</div>
        <h4>${e.company}</h4>
        <h5>${e.role}</h5>
        <div class="tl-points">${e.points.map(p => `<span>${p}</span>`).join('')}</div>
      </div>
    `).join('');
  }

  function renderTestimonials() {
    const wrap = document.getElementById('testimonial-slides');
    const dotsWrap = document.getElementById('testimonial-dots');
    if (!wrap || typeof PORTFOLIO_DATA === 'undefined') return;
    wrap.innerHTML = PORTFOLIO_DATA.testimonials.map((t, i) => `
      <div class="testimonial-slide ${i === 0 ? 'active' : ''}">
        <p>&ldquo;${t.quote}&rdquo;</p>
        <div class="author">${t.author}</div>
        <div class="role">${t.role}</div>
      </div>
    `).join('');
    dotsWrap.innerHTML = PORTFOLIO_DATA.testimonials.map((_, i) => `<button data-i="${i}" class="${i === 0 ? 'active' : ''}" aria-label="Testimonial ${i+1}"></button>`).join('');
    initTestimonialCarousel();
  }

  function initTestimonialCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dots button');
    let idx = 0;
    function show(i) {
      slides.forEach((s, si) => s.classList.toggle('active', si === i));
      dots.forEach((d, di) => d.classList.toggle('active', di === i));
      idx = i;
    }
    dots.forEach(d => d.addEventListener('click', () => show(parseInt(d.dataset.i))));
    if (slides.length > 1) {
      setInterval(() => show((idx + 1) % slides.length), 6000);
    }
  }

  function renderCertifications() {
    const wrap = document.getElementById('cert-list');
    if (!wrap || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.certifications) return;
    wrap.innerHTML = PORTFOLIO_DATA.certifications.map(c => `<div class="tag">✓ ${c}</div>`).join('');
  }

  renderProjects();
  renderModelingAchievements();
  renderModelingStats();
  renderExperience();
  renderTestimonials();
  renderCertifications();

  /* ---------- 13. Skills tabs ---------- */
  const tabs = document.querySelectorAll('.skills-tab');
  const panels = document.querySelectorAll('.skills-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.target).classList.add('active');
    });
  });

  /* ---------- 14. Creative portfolio filter ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const masonryItems = document.querySelectorAll('.masonry-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      masonryItems.forEach(item => {
        const match = cat === 'all' || item.dataset.cat === cat;
        item.classList.toggle('hide', !match);
      });
    });
  });

  /* ---------- 15. Lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxLabel = document.getElementById('lightbox-label');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPh = document.querySelector('.lightbox-box .ph');
  const lightboxable = document.querySelectorAll('.masonry-item, .mag-tile[data-img]');
  lightboxable.forEach(item => {
    item.addEventListener('click', () => {
      lightboxLabel.textContent = item.dataset.label || 'Untitled piece';
      if (item.dataset.img) {
        lightboxPh.innerHTML = `<img src="${item.dataset.img}" alt="${item.dataset.label || ''}" style="width:100%;height:100%;object-fit:cover;border-radius:16px;">`;
      } else {
        lightboxPh.innerHTML = '◈';
      }
      lightbox.classList.add('open');
    });
  });
  lightboxClose?.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });

  /* ---------- 15b. Video showcase lightbox (Dance & Performance / Modeling) ---------- */
  const videoLightbox = document.getElementById('video-lightbox');
  const videoLightboxLabel = document.getElementById('video-lightbox-label');
  const videoLightboxClose = document.getElementById('video-lightbox-close');
  const videoPlayerWrap = document.querySelector('.video-lightbox-box .player');
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      videoLightboxLabel.textContent = card.dataset.label || 'Untitled performance';
      if (videoPlayerWrap) {
        if (card.dataset.src) {
          videoPlayerWrap.innerHTML = `<video controls autoplay playsinline ${card.dataset.poster ? `poster="${card.dataset.poster}"` : ''} style="width:100%;height:100%;border-radius:16px;object-fit:cover;"><source src="${card.dataset.src}" type="video/mp4"></video>`;
        } else {
          videoPlayerWrap.innerHTML = `<div class="play-btn"></div><small>Video placeholder — replace with a real &lt;video&gt; source or embed once footage is uploaded.</small>`;
        }
      }
      videoLightbox?.classList.add('open');
    });
  });
  videoLightboxClose?.addEventListener('click', () => closeVideoLightbox());
  videoLightbox?.addEventListener('click', (e) => { if (e.target === videoLightbox) closeVideoLightbox(); });
  function closeVideoLightbox() {
    videoLightbox.classList.remove('open');
    const vid = videoPlayerWrap?.querySelector('video');
    if (vid) vid.pause();
  }

  /* ---------- 16. Command palette (Ctrl/Cmd + K) ---------- */
  const cmdkBackdrop = document.getElementById('cmdk-backdrop');
  const cmdkInput = document.getElementById('cmdk-input');
  const cmdkList = document.getElementById('cmdk-list');
  const commands = [
    { label: 'Go to Home', hint: 'page', action: () => goTo('index.html') },
    { label: 'Go to About', hint: 'page', action: () => goTo('about.html') },
    { label: 'Go to Skills', hint: 'page', action: () => goTo('skills.html') },
    { label: 'Go to Software Projects', hint: 'page', action: () => goTo('projects.html') },
    { label: 'Go to Modeling', hint: 'page', action: () => goTo('modeling.html') },
    { label: 'Go to Creative Design', hint: 'page', action: () => goTo('creative.html') },
    { label: 'Go to Dance & Performance', hint: 'page', action: () => goTo('dance.html') },
    { label: 'Go to Experience', hint: 'page', action: () => goTo('experience.html') },
    { label: 'Go to Achievements', hint: 'page', action: () => goTo('achievements.html') },
    { label: 'Go to Contact', hint: 'page', action: () => goTo('contact.html') },
    { label: 'Toggle theme', hint: 'action', action: () => themeToggle?.click() },
    { label: 'Download résumé', hint: 'link', action: () => window.open('assets/resume/Habib_Sall_Resume.pdf', '_blank') },
    { label: 'Open GitHub profile', hint: 'link', action: () => window.open('https://github.com/habibsalltheprogrammer', '_blank') }
  ];
  function goTo(page) { window.location.href = page; }
  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }
  let cmdActive = 0;
  function renderCmdk(filter = '') {
    const filtered = commands.filter(c => c.label.toLowerCase().includes(filter.toLowerCase()));
    cmdkList.innerHTML = filtered.map((c, i) => `<div class="cmdk-item ${i === 0 ? 'active' : ''}" data-i="${i}"><span>${c.label}</span><small>${c.hint}</small></div>`).join('') || '<div class="cmdk-item">No results</div>';
    cmdActive = 0;
    cmdkList.querySelectorAll('.cmdk-item').forEach(item => {
      item.addEventListener('click', () => {
        const c = filtered[parseInt(item.dataset.i)];
        c?.action(); closeCmdk();
      });
    });
    cmdkList._filtered = filtered;
  }
  function openCmdk() {
    cmdkBackdrop.classList.add('open');
    cmdkInput.value = '';
    renderCmdk();
    setTimeout(() => cmdkInput.focus(), 60);
  }
  function closeCmdk() { cmdkBackdrop.classList.remove('open'); }
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      cmdkBackdrop.classList.contains('open') ? closeCmdk() : openCmdk();
    }
    if (e.key === 'Escape') closeCmdk();
    if (cmdkBackdrop.classList.contains('open')) {
      const items = cmdkList.querySelectorAll('.cmdk-item');
      if (e.key === 'ArrowDown') { e.preventDefault(); cmdActive = Math.min(cmdActive + 1, items.length - 1); updateCmdActive(items); }
      if (e.key === 'ArrowUp') { e.preventDefault(); cmdActive = Math.max(cmdActive - 1, 0); updateCmdActive(items); }
      if (e.key === 'Enter') { items[cmdActive]?.click(); }
    }
  });
  function updateCmdActive(items) { items.forEach((it, i) => it.classList.toggle('active', i === cmdActive)); }
  cmdkInput?.addEventListener('input', () => renderCmdk(cmdkInput.value));
  document.getElementById('cmdk-trigger')?.addEventListener('click', openCmdk);
  cmdkBackdrop?.addEventListener('click', (e) => { if (e.target === cmdkBackdrop) closeCmdk(); });

  /* ---------- 17. Contact form (Formspree) ---------- */
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;

    if (!form.action || form.action.includes('YOUR_FORM_ID')) {
      if (formStatus) {
        formStatus.textContent = 'Form not connected yet — add your Formspree form ID in contact.html before this goes live.';
        formStatus.style.color = 'var(--red-bright)';
      }
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Sending…';
    if (formStatus) { formStatus.textContent = ''; }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        btn.textContent = 'Message sent ✓';
        form.reset();
        if (formStatus) {
          formStatus.textContent = 'Thanks — your message is on its way. I\'ll get back to you soon.';
          formStatus.style.color = 'var(--gold)';
        }
      } else {
        const data = await res.json().catch(() => null);
        throw new Error(data?.errors?.map(e => e.message).join(', ') || 'Something went wrong.');
      }
    } catch (err) {
      btn.textContent = 'Try again';
      if (formStatus) {
        formStatus.textContent = 'Message failed to send — please try again or email me directly.';
        formStatus.style.color = 'var(--red-bright)';
      }
    } finally {
      setTimeout(() => { btn.disabled = false; btn.textContent = original; }, 2600);
    }
  });

  /* ---------- 18. Easter egg: konami-esque quick tap on logo ---------- */
  const logo = document.querySelector('.nav-logo');
  let clickCount = 0, clickTimer;
  logo?.addEventListener('click', (e) => {
    e.preventDefault();
    clickCount++;
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => { clickCount = 0; }, 600);
    if (clickCount === 5) {
      document.body.style.transition = 'filter .6s ease';
      document.body.style.filter = 'invert(1) hue-rotate(180deg)';
      setTimeout(() => { document.body.style.filter = ''; }, 1400);
      clickCount = 0;
    } else if (document.getElementById('hero')) {
      scrollToId('hero');
    } else {
      window.location.href = 'index.html';
    }
  });

  /* ---------- 19. Set current year in footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
