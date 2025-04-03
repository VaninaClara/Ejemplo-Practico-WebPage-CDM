document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});

fetch("emergencia.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("emergencia-container").innerHTML = data;
  })
  .catch(error => {
    console.error("Error al cargar el componente:", error);
  });


