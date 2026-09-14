document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.style.display = 'block';
  msg.textContent = 'Mensagem enviada. Retorno em até 2 dias úteis.';
  this.reset();
});
