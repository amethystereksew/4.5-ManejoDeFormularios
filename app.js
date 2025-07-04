document.getElementById('registroEvento').addEventListener('submit', function (evento) {
  evento.preventDefault(); // Detiene el envío automático del formulario

  // Variables
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  // Validaciones básicas
  if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }

  // ✅ Validación 1: Nombre debe tener al menos 5 caracteres
  if (nombre.length < 5) {
    alert('El nombre debe tener al menos 5 caracteres.');
    return;
  }

  // ✅ Validación 2: Teléfono debe ser solo números y tener entre 8 y 12 dígitos
  const telefonoRegex = /^[0-9]{8,12}$/;
  if (!telefonoRegex.test(telefono)) {
    alert('El teléfono debe contener solo números (8 a 12 dígitos).');
    return;
  }

  // ✅ Validación 3: Fecha no puede ser anterior a la fecha actual
  const hoy = new Date().toISOString().split('T')[0];
  if (fecha < hoy) {
    alert('La fecha del evento no puede ser en el pasado.');
    return;
  }

  // ✅ Validación 4: Email con dominio institucional opcional
  const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (!correoRegex.test(correo)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  alert('Registro exitoso. ¡Gracias por registrarte!');
});
