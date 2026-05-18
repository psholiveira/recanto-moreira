// ========== CONSTANTS ==========
const WPP = '5583988378228';

// ========== NAV SCROLL ==========
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 30) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ========== HAMBURGER ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
}));

// ========== SCROLL REVEAL ==========
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ========== LIGHTBOX ==========
const galleryItems = [...document.querySelectorAll('.gallery-item')];
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
const lightboxCounter = document.getElementById('lightboxCounter');
let currentIdx = 0;

function openLightbox(idx) {
  currentIdx = idx;
  renderLightbox();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function renderLightbox() {
  const item = galleryItems[currentIdx];
  const caption = item.dataset.caption || '';
  const src = item.dataset.src || '';

  // Usa createElement em vez de innerHTML para evitar risco de XSS
  lightboxContent.innerHTML = '';
  const img = document.createElement('img');
  img.src = src;
  img.alt = caption;
  img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
  lightboxContent.appendChild(img);

  lightboxCounter.textContent = `${String(currentIdx + 1).padStart(2, '0')} / ${String(galleryItems.length).padStart(2, '0')} · ${caption}`;
}
function navLightbox(dir) {
  currentIdx = (currentIdx + dir + galleryItems.length) % galleryItems.length;
  renderLightbox();
}

// Acessibilidade via teclado: tabindex + role + Enter/Space
galleryItems.forEach((item, i) => {
  item.setAttribute('tabindex', '0');
  item.setAttribute('role', 'button');
  item.setAttribute('aria-label', `Abrir foto: ${item.dataset.caption || `Foto ${i + 1}`}`);
  item.addEventListener('click', () => openLightbox(i));
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(i);
    }
  });
});

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => navLightbox(-1));
document.getElementById('lightboxNext').addEventListener('click', () => navLightbox(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navLightbox(-1);
  if (e.key === 'ArrowRight') navLightbox(1);
});

// ========== CPF VALIDATION ==========
function validarCPF(cpf) {
  const digits = cpf.replace(/\D/g, '');
  if (digits.length !== 11) return false;
  if (/^(\d)\1+$/.test(digits)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(digits[i]) * (10 - i);
  let r = (sum * 10) % 11;
  if (r >= 10) r = 0;
  if (r !== parseInt(digits[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(digits[i]) * (11 - i);
  r = (sum * 10) % 11;
  if (r >= 10) r = 0;
  return r === parseInt(digits[10]);
}

// ========== DATE UTILITIES ==========
function formatDate(value) {
  if (!value) return '';
  const [y, m, d] = value.split('-');
  return `${d}/${m}/${y}`;
}

// Converte Date para YYYY-MM-DD usando horário local (evita bug de fuso UTC)
function fmtISO(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// ========== WHATSAPP FORM ==========
function enviarWhatsApp(e) {
  e.preventDefault();
  const f = document.getElementById('bookingForm');
  const submitBtn = f.querySelector('button[type="submit"]');

  // Validação de CPF
  if (!validarCPF(f.cpf.value)) {
    f.cpf.setCustomValidity('CPF inválido. Verifique os dígitos e tente novamente.');
    f.cpf.reportValidity();
    return false;
  }
  f.cpf.setCustomValidity('');

  // Validação cruzada de datas
  const checkinDate = new Date(f.checkin.value + 'T00:00:00');
  const checkoutDate = new Date(f.checkout.value + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (checkinDate < today) {
    f.checkin.setCustomValidity('O check-in não pode ser em uma data passada.');
    f.checkin.reportValidity();
    return false;
  }
  f.checkin.setCustomValidity('');

  if (checkoutDate <= checkinDate) {
    f.checkout.setCustomValidity('O check-out deve ser posterior ao check-in.');
    f.checkout.reportValidity();
    return false;
  }
  f.checkout.setCustomValidity('');

  const nome = f.nome.value.trim();
  const cpf = f.cpf.value.trim();
  const checkin = formatDate(f.checkin.value);
  const checkout = formatDate(f.checkout.value);
  const pessoas = f.pessoas.value;
  const ocasiao = f.ocasiao.value.trim();
  const mensagem = f.mensagem.value.trim();

  let texto = `Olá! Sou ${nome} e gostaria de fazer uma reserva no Recanto Moreira.\n\n`;
  texto += `🪪 CPF: ${cpf}\n`;
  texto += `📅 Check-in: ${checkin}\n`;
  texto += `📅 Check-out: ${checkout}\n`;
  texto += `👥 Pessoas: ${pessoas}\n`;
  if (ocasiao) texto += `🎉 Ocasião: ${ocasiao}\n`;
  if (mensagem) texto += `\n💬 ${mensagem}\n`;
  texto += `\nPodem confirmar a disponibilidade e me passar os valores?`;

  const url = `https://wa.me/${WPP}?text=${encodeURIComponent(texto)}`;

  // Protege contra double-click
  submitBtn.disabled = true;
  window.open(url, '_blank');

  // Feedback de sucesso
  document.getElementById('formSuccess').classList.add('visible');

  // Re-habilita o botão após 5s caso o usuário queira enviar novamente
  setTimeout(() => { submitBtn.disabled = false; }, 5000);

  return false;
}
window.enviarWhatsApp = enviarWhatsApp;

// ========== CPF MASK ==========
const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 11);
  if (v.length > 9) v = v.slice(0, 3) + '.' + v.slice(3, 6) + '.' + v.slice(6, 9) + '-' + v.slice(9);
  else if (v.length > 6) v = v.slice(0, 3) + '.' + v.slice(3, 6) + '.' + v.slice(6);
  else if (v.length > 3) v = v.slice(0, 3) + '.' + v.slice(3);
  e.target.value = v;
  e.target.setCustomValidity('');
});

// ========== DATE CROSS-VALIDATION ==========
const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');

checkinInput.addEventListener('change', () => {
  if (!checkinInput.value) return;
  const next = new Date(checkinInput.value + 'T00:00:00');
  next.setDate(next.getDate() + 1);
  const minOut = fmtISO(next);
  checkoutInput.min = minOut;
  if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
    checkoutInput.value = minOut;
  }
  checkinInput.setCustomValidity('');
  checkoutInput.setCustomValidity('');
});

checkoutInput.addEventListener('change', () => {
  checkoutInput.setCustomValidity('');
});

// ========== DEFAULT DATES (this weekend) ==========
(function setDefaultDates() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysToFri = (5 - dayOfWeek + 7) % 7 || 7;

  const friday = new Date(today);
  friday.setDate(today.getDate() + daysToFri);
  const sunday = new Date(friday);
  sunday.setDate(friday.getDate() + 2);

  const fridayStr = fmtISO(friday);
  const saturdayStr = fmtISO(new Date(friday.getFullYear(), friday.getMonth(), friday.getDate() + 1));
  const sundayStr = fmtISO(sunday);

  checkinInput.min = fmtISO(today);
  checkinInput.value = fridayStr;
  checkoutInput.min = saturdayStr;
  checkoutInput.value = sundayStr;
})();
