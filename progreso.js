// progresoFisico.js

const fechaDiv = document.getElementById('fecha');
const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const hoy = new Date();
fechaDiv.textContent = hoy.toLocaleDateString('es-ES', opcionesFecha);

// Claves para localStorage
const keyBitacora = 'bitacora_progresoFisico_' + hoy.toISOString().slice(0,10);

// Checkbox ids
const checkboxIds = ['chk1', 'chk2', 'chk3', 'chk4'];

// Cargar estado checkbox guardado y configurar evento para guardar cambios
checkboxIds.forEach(id => {
  const checkbox = document.getElementById(id);
  const keyChk = 'checkbox_progresoFisico_' + id + '_' + hoy.toISOString().slice(0,10);
  const estado = localStorage.getItem(keyChk);
  if (estado === 'true') {
    checkbox.checked = true;
  }
  checkbox.addEventListener('change', () => {
    localStorage.setItem(keyChk, checkbox.checked);
  });
});

// Bitácora textarea y botón
const bitacora = document.getElementById('bitacora');
const guardarBtn = document.getElementById('guardarBtn');

// Cargar bitácora guardada
const bitacoraGuardada = localStorage.getItem(keyBitacora);
if (bitacoraGuardada) {
  bitacora.value = bitacoraGuardada;
}

// Guardar bitácora al hacer click
guardarBtn.addEventListener('click', () => {
  localStorage.setItem(keyBitacora, bitacora.value);
  alert('Bitácora guardada');
});
