document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});

// main.js
fetch("emergencia.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("Archivo no encontrado");
    }
    return response.text();
  })
  .then(data => {
    const container = document.getElementById("emergencia-container");
    if (container) {
      container.innerHTML = data;
    } else {
      console.error("No se encontró el contenedor");
    }
  })
  .catch(error => console.error("Error al cargar el componente:", error));




