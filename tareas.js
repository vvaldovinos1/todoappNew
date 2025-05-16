// tareas.js
const fechaDiv = document.getElementById('fecha');
const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const hoy = new Date();
fechaDiv.textContent = hoy.toLocaleDateString('es-ES', opcionesFecha);

const bitacora = document.getElementById('bitacora');
const guardarBtn = document.getElementById('guardarBtn');

// Clave única para guardar la bitácora por fecha (formato yyyy-mm-dd)
const key = 'bitacora_' + hoy.toISOString().slice(0, 10);

// Cargar bitácora guardada si existe
const bitacoraGuardada = localStorage.getItem(key);
if (bitacoraGuardada) {
  bitacora.value = bitacoraGuardada;
}

// Guardar en localStorage al hacer click en el botón
guardarBtn.addEventListener('click', () => {
  localStorage.setItem(key, bitacora.value);
  alert('Bitácora guardada');
});
