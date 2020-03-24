window.addEventListener('load', start);

function start() {
  console.log('Página totalmente carregada.');

  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

function countName(event) {
  var span = document.querySelector('#nameLength');
  span.textContent = event.target.value.length;
}

function preventSubmit(event) {
  event.preventDefault();

  var nameInput = document.querySelector('#nameInput');
  alert(`${nameInput.value} cadastrado com sucesso!`);
}