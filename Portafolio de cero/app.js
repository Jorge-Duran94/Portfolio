// Función para validar el formulario y enviar el mensaje
function enviarFormulario(event) {
  event.preventDefault();

  var emailInput = document.getElementById("email");
  var email = emailInput.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Ingrese un correo electrónico válido");
    emailInput.focus();
    return;
  }

  const btn = document.getElementById('button');
  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_h12jiet';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Gracias por tu mensaje');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
}

// Evento submit del formulario
var formulario = document.getElementById("form");
formulario.addEventListener("submit", enviarFormulario);