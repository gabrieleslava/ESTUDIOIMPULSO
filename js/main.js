/* === ESTUDIO_IMPULSO | Shared JavaScript === */

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

  window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
  formspree('initForm', { formElement: '#contact-form', formId: 'xojgazay' });

  var btn = form.querySelector('[data-fs-submit-btn]');
  var originalHTML = btn.innerHTML;

  form.addEventListener('submit', function() {
    btn.innerHTML = '<span class="spinner"></span> Enviando...';
    btn.style.pointerEvents = 'none';
  });

  var successDiv = form.querySelector('[data-fs-success]');
  var errorDiv = form.querySelector('[data-fs-error]');

  var observer = new MutationObserver(function() {
    if (successDiv.style.display !== 'none') {
      btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Mensagem Enviada!';
      btn.style.background = '#22c55e';
      btn.style.color = '#ffffff';
      btn.style.pointerEvents = 'auto';
    }
    if (errorDiv.style.display !== 'none') {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.pointerEvents = 'auto';
    }
  });

  observer.observe(successDiv, { attributes: true, attributeFilter: ['style'] });
  observer.observe(errorDiv, { attributes: true, attributeFilter: ['style'] });
}

/* Portfolio card mouse tracking */
document.querySelectorAll('.portfolio-card').forEach(function(card) {
  card.addEventListener('mousemove', function(e) {
    var rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
    card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
  });
});
