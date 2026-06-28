// =============================================
// Cardboard Castle Club — Main JS
// =============================================

// --- Ticket price calculator ---
(function () {
  const adultInput = document.getElementById('tickets-adult');
  const childInput = document.getElementById('tickets-child');
  const totalEl = document.getElementById('ticket-total');
  function updateTotal() {
    if (!adultInput || !childInput || !totalEl) return;
    const adults = parseInt(adultInput.value) || 0;
    const children = parseInt(childInput.value) || 0;
    totalEl.textContent = 'Total: $' + (adults * 8 + children * 5);
  }
  if (adultInput) adultInput.addEventListener('input', updateTotal);
  if (childInput) childInput.addEventListener('input', updateTotal);
})();

// --- Ticket form submission ---
function handleTicketSubmit(e) {
  e.preventDefault();
  var name = e.target.querySelector('#ticket-name').value;
  var btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '\u2705 Reserved!';
  btn.style.background = '#4CAF50';
  btn.disabled = true;
  setTimeout(function () {
    alert('Thanks, ' + name + '! Your reservation is confirmed. See you at the Kingdom! \uD83C\uDFF0');
  }, 300);
}

// --- Donate form ---
(function () {
  var radios = document.querySelectorAll('input[name="amount"]');
  var customField = document.getElementById('custom-amount-field');
  radios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      if (customField) customField.style.display = radio.value === 'custom' ? 'block' : 'none';
    });
  });
})();

function handleDonateSubmit(e) {
  e.preventDefault();
  var name = e.target.querySelector('#donor-name').value;
  var selected = e.target.querySelector('input[name="amount"]:checked');
  var amount = selected ? selected.value : '50';
  if (amount === 'custom') amount = e.target.querySelector('#custom-amount').value || '0';
  var btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '\uD83D\uDC9B Thank You!';
  btn.style.background = '#4CAF50';
  btn.disabled = true;
  setTimeout(function () {
    alert('Thank you, ' + name + '! Your $' + amount + ' donation helps us keep building. You\'re amazing! \uD83C\uDFF0');
  }, 300);
}

// --- Scroll-triggered animations ---
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(
    '.highlight-card, .value-card, .testimonial, .crew-card, .impact-card, .timeline-item'
  ).forEach(function (el) {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
})();

// Scroll animation CSS
(function () {
  var style = document.createElement('style');
  style.textContent = '.animate-on-scroll{opacity:0;transform:translateY(24px);transition:opacity 0.6s ease-out,transform 0.6s ease-out}.animate-on-scroll.visible{opacity:1;transform:translateY(0)}';
  document.head.appendChild(style);
})();

// --- Close mobile nav on link click ---
document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () { document.body.classList.remove('nav-open'); });
});
