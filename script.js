// ─── NAV SCROLL EFFECT
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── HAMBURGER MENU
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
});
document.getElementById('menuClose').addEventListener('click', closeMobileMenu);

function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// Close mobile menu on outside click
document.getElementById('mobileMenu').addEventListener('click', function(e) {
  if (e.target === this) closeMobileMenu();
});

// ─── PROJECT FILTER TABS
function filterProjects(type, btn) {
  document.querySelectorAll('.tab-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    if (type === 'all') {
      card.classList.add('show');
    } else if (type === 'upcoming') {
      const t = card.dataset.type;
      card.classList.toggle('show', t === 'upcoming' || t === 'ongoing');
    } else {
      card.classList.toggle('show', card.dataset.type === type);
    }
  });
}

// ─── FORM TABS (Contact section)
function switchTab(name, btn) {
  document.querySelectorAll('.form-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
  // Reset any success messages when switching tabs
  document.querySelectorAll('.form-success-msg').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.tab-panel form').forEach(f => f.style.display = '');
}

// ─── FORM SUBMIT HANDLER
function handleSubmit(e, successId) {
  e.preventDefault();
  const form = e.target;
  form.style.display = 'none';
  const successEl = document.getElementById(successId);
  if (successEl) successEl.style.display = 'block';
}

// ─── SCROLL REVEAL ANIMATION
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  revealObserver.observe(el);
});

// ─── SMOOTH SCROLL for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
