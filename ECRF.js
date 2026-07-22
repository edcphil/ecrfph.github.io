

// Scroll to products
document.getElementById('ctaBtn').addEventListener('click', () => {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// Inquire buttons scroll to contact
document.querySelectorAll('.inquireBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formMsg').innerText = 'Thank you for your inquiry! We will get back to you soon.';
  e.target.reset();
});