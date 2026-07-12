/* === STUDIO_PHANTOM | Shared JavaScript === */

document.addEventListener('DOMContentLoaded', function() {
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
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    var originalHTML = btn.innerHTML;
    btn.innerHTML = '<span class="material-symbols-outlined">refresh</span> Enviando...';
    btn.disabled = true;

    var data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(function(response) {
      if (response.ok) {
        btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Mensagem Enviada';
        btn.style.background = '#22c55e';
        btn.style.color = '#ffffff';
        form.reset();
      } else {
        return response.json().then(function(err) {
          throw err;
        });
      }
    })
    .catch(function(error) {
      btn.innerHTML = originalHTML;
      btn.disabled = false;
      alert('Erro ao enviar. Tente novamente ou envie um email direto.');
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
