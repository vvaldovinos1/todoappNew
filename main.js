// main.js
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
  document.body.classList.toggle("sidebar-open");
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
  document.body.classList.toggle("sidebar-open");
}

//Para el boton de frases aleatorio
window.addEventListener("DOMContentLoaded", () => {
  const fraseEl = document.getElementById("frase-motivacional");
  const botonFrase = document.getElementById("btn-frase");

  function mostrarFraseAleatoria() {
    const randomIndex = Math.floor(Math.random() * frasesMotivacionales.length);
    fraseEl.textContent = frasesMotivacionales[randomIndex];
  }

  mostrarFraseAleatoria();
  botonFrase.addEventListener("click", mostrarFraseAleatoria);
});
