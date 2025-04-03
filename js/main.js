document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('componentes/emergencia.html')
    .then(response => response.text())
    .then(data => {
      const placeholder = document.getElementById('emergencia-placeholder');
      if (placeholder) {
        placeholder.innerHTML = data;
      }
    });
});

