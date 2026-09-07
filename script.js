(() => {
  'use strict';

  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const progressBar = document.querySelector('.scroll-progress span');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-nav');
  const hero = document.querySelector('.hero');
  const form = document.querySelector('#contact-form');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const updateScrollUI = () => {
    const scrollTop = window.scrollY;
    const available = document.documentElement.scrollHeight - window.innerHeight;
    const progress = available > 0 ? scrollTop / available : 0;
    header?.classList.toggle('is-scrolled', scrollTop > 24);
    if (progressBar) progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollUI();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  updateScrollUI();

  const setMenu = (open) => {
    menuButton?.setAttribute('aria-expanded', String(open));
    menuButton?.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menu?.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };

  menuButton?.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  if (!reducedMotion) {
    document.addEventListener('pointermove', (event) => {
      root.style.setProperty('--mouse-x', `${event.clientX}px`);
      root.style.setProperty('--mouse-y', `${event.clientY}px`);
    }, { passive: true });

    hero?.addEventListener('pointermove', (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * -14;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10;
      hero.style.setProperty('--hero-x', `${x}px`);
      hero.style.setProperty('--hero-y', `${y}px`);
    }, { passive: true });

    hero?.addEventListener('pointerleave', () => {
      hero.style.setProperty('--hero-x', '0px');
      hero.style.setProperty('--hero-y', '0px');
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = entry.target.parentElement?.querySelectorAll(':scope > .reveal');
          let delay = 0;
          if (siblings && siblings.length > 1) {
            delay = Math.min(Array.from(siblings).indexOf(entry.target) * 90, 270);
          }
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const validateForm = () => {
    let valid = true;
    form.querySelectorAll('[required]').forEach((field) => {
      const fieldValid = field.checkValidity();
      field.setAttribute('aria-invalid', String(!fieldValid));
      if (!fieldValid) valid = false;
    });
    return valid;
  };

  form?.querySelectorAll('input, textarea').forEach((field) => {
    field.addEventListener('input', () => field.removeAttribute('aria-invalid'));
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    const buttonLabel = form.querySelector('.button-label');

    if (!validateForm()) {
      status.textContent = 'Por favor, preencha os campos obrigatórios antes de enviar.';
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get('nome') || '').trim();
    const phone = String(data.get('telefone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('mensagem') || '').trim();
    const subject = encodeURIComponent(`Contato pelo site — ${name}`);
    const body = encodeURIComponent([
      'Olá, equipe Smart Odontologia!',
      '',
      message,
      '',
      '— Dados para retorno —',
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Telefone: ${phone || 'Não informado'}`
    ].join('\n'));

    status.textContent = 'Abrindo seu aplicativo de e-mail…';
    buttonLabel.textContent = 'Mensagem preparada';
    window.location.href = `mailto:Odontologia.smart@gmail.com?subject=${subject}&body=${body}`;

    window.setTimeout(() => {
      status.textContent = 'Caso o aplicativo não abra, escreva para Odontologia.smart@gmail.com.';
      buttonLabel.textContent = 'Enviar por e-mail';
    }, 1600);
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
