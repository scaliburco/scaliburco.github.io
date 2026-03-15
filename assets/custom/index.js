/* ============================================
   SCALIBURCO — Interactivity
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
  initNavToggle();
  initSmoothScroll();
  initScrollReveal();
  loadAPOD();
});

/* ---------- Starfield Canvas ---------- */
function initStarfield() {
  const canvas = document.getElementById('starfield-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let stars = [];
  const STAR_COUNT = 220;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.3,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        flickerSpeed: Math.random() * 0.01 + 0.003,
        flickerPhase: Math.random() * Math.PI * 2,
      });
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      const flicker = Math.sin(time * s.flickerSpeed + s.flickerPhase) * 0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 210, 255, ${s.alpha * flicker})`;
      ctx.fill();

      // Move slowly upward
      s.y -= s.speed;
      if (s.y < -5) {
        s.y = canvas.height + 5;
        s.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(draw);
  }

  resize();
  createStars();
  requestAnimationFrame(draw);
  window.addEventListener('resize', () => { resize(); createStars(); });
}

/* ---------- Mobile Nav Toggle ---------- */
function initNavToggle() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', links.classList.contains('open'));
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Smooth Scroll ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ---------- Scroll Reveal ---------- */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ---------- NASA APOD ---------- */
async function loadAPOD() {
  const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

  const imgEl = document.getElementById('apod-image');
  const titleEl = document.getElementById('apod-title');
  const dateEl = document.getElementById('apod-date');
  const descEl = document.getElementById('apod-explanation');
  const loader = document.getElementById('apod-loader');
  const creditEl = document.getElementById('apod-credit');

  if (!imgEl) return;

  try {
    const resp = await fetch(API_URL);
    if (!resp.ok) throw new Error('API error');
    const data = await resp.json();

    if (data.media_type === 'image') {
      imgEl.src = data.hdurl || data.url;
      imgEl.alt = data.title;
      imgEl.onload = () => { if (loader) loader.style.display = 'none'; };
    } else {
      // For videos, show a thumbnail or placeholder
      imgEl.src = data.thumbnail_url || '';
      imgEl.alt = data.title;
      if (loader) loader.innerHTML = `<span>🎬</span><span>El APOD de hoy es un video</span>`;
    }

    if (titleEl) titleEl.textContent = data.title || 'Sin título';
    if (dateEl) dateEl.innerHTML = `📅  ${data.date || ''}`;
    if (descEl) descEl.textContent = data.explanation || '';
    if (creditEl && data.copyright) {
      creditEl.innerHTML = `📷 Crédito: ${data.copyright}`;
    }
  } catch (err) {
    console.error('Error loading APOD:', err);
    if (loader) loader.innerHTML = `<span>⚠️</span><span>No se pudo cargar el APOD</span>`;
  }
}
