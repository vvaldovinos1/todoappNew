// Mostrar fecha
const fechaDiv = document.getElementById('fecha');
const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const hoy = new Date();
fechaDiv.textContent = hoy.toLocaleDateString('es-ES', opcionesFecha);

const container = document.getElementById('backtesting-container');
const diaSemana = hoy.getDay(); // Domingo=0, Sábado=6

// Clave para guardar bitácora y checkbox por fecha
const keyBitacora = 'bitacora_trading_' + hoy.toISOString().slice(0,10);
const keyCheckbox = 'checkbox_trading_' + hoy.toISOString().slice(0,10);

// Mostrar checkbox solo fines de semana
if (diaSemana === 0 || diaSemana === 6) {
  container.innerHTML = `
    <label class="checkbox-btn">
      <input type="checkbox" id="backtesting-checkbox" />
      <span class="checkmark"></span>
      Backtesting 30 minutos
    </label>
  `;

  const checkbox = document.getElementById('backtesting-checkbox');

  // Cargar estado del checkbox
  const estadoGuardado = localStorage.getItem(keyCheckbox);
  if (estadoGuardado === 'true') {
    checkbox.checked = true;
  }

  // Guardar estado al cambiar checkbox
  checkbox.addEventListener('change', () => {
    localStorage.setItem(keyCheckbox, checkbox.checked);
  });
} else {
  container.innerHTML = `<p style="color:#666;">Backtesting solo disponible sábados y domingos</p>`;
}

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
