const entrada = document.getElementById('entrada');
const guardarBtn = document.getElementById('guardarBtn');
const listaEntradas = document.getElementById('listaEntradas');

let entradas = JSON.parse(localStorage.getItem('bitacoraEmocional')) || [];

function mostrarEntradas() {
  listaEntradas.innerHTML = '';
  entradas.slice().reverse().forEach(({fechaHora, texto}) => {
    const div = document.createElement('div');
    div.classList.add('entry');

    const header = document.createElement('div');
    header.classList.add('entry-header');
    header.textContent = fechaHora;

    const body = document.createElement('div');
    body.textContent = texto;

    div.appendChild(header);
    div.appendChild(body);
    listaEntradas.appendChild(div);
  });
}

function guardarEntrada() {
  const texto = entrada.value.trim();
  if (!texto) return alert('Por favor, escribe algo antes de guardar.');

  const ahora = new Date();
  const fechaHora = ahora.toLocaleString('es-ES', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });

  entradas.push({ fechaHora, texto });
  localStorage.setItem('bitacoraEmocional', JSON.stringify(entradas));
  entrada.value = '';
  mostrarEntradas();
}

mostrarEntradas();

guardarBtn.addEventListener('click', guardarEntrada);

// Guardar automáticamente cada 5 segundos si hay texto
setInterval(() => {
  const texto = entrada.value.trim();
  if (texto) {
    const ahora = new Date();
    const fechaHora = ahora.toLocaleString('es-ES', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    entradas.push({ fechaHora, texto });
    localStorage.setItem('bitacoraEmocional', JSON.stringify(entradas));
    entrada.value = '';
    mostrarEntradas();
  }
}, 5000);
