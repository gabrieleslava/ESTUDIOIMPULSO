/* === ESTUDIO_IMPULSO | Shared JavaScript === */

document.addEventListener('DOMContentLoaded', function() {
  console.log('main.js loaded');
  setActiveNavLink();
  initSmoothScroll();
  initRevealAnimations();
  initContactForm();
});

function setActiveNavLink() {
  var path = window.location.pathname;
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && path.includes(href.replace('./', '')) && href !== './') {
      link.classList.add('active');
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initRevealAnimations() {
  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0');
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal]').forEach(function(el) {
    observer.observe(el);
  });
}

function initContactForm() {
  var form = document.getElementById('contact-form');
  console.log('initContactForm - form found:', !!form);
  if (!form) return;

  var btn = form.querySelector('[type="submit"]');
  console.log('initContactForm - btn found:', !!btn);
  if (!btn) return;
  var originalHTML = btn.innerHTML;

  form.addEventListener('submit', function(e) {
    console.log('form submit triggered');
    e.preventDefault();
    btn.innerHTML = '<span class="spinner"></span> Enviando...';
    btn.style.pointerEvents = 'none';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(function(res) {
      console.log('fetch response:', res.status);
      if (res.ok) {
        console.log('success!');
        btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Mensagem Enviada!';
        btn.style.background = '#22c55e';
        btn.style.color = '#ffffff';
        btn.style.pointerEvents = 'auto';
        form.reset();
        var successDiv = form.querySelector('[data-fs-success]');
        if (successDiv) successDiv.style.display = 'block';
      } else {
        throw new Error('Erro no envio');
      }
    })
    .catch(function() {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.pointerEvents = 'auto';
      var errorDiv = form.querySelector('[data-fs-error]');
      if (errorDiv) errorDiv.style.display = 'block';
    });
  });
}

/* Portfolio card mouse tracking */
document.querySelectorAll('.portfolio-card').forEach(function(card) {
  card.addEventListener('mousemove', function(e) {
    var rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
    card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
  });
});
