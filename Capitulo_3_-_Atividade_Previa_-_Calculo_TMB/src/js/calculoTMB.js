window.addEventListener('load', start);


var inputPeso = null;
var inputAltura = null;
var inputIdade = null;
var inputSexoM = null;
var inputSexoS = null;


function start() {
  console.log('Página carregada!');
  loadInputs();
  configInputEvent();
  configSubmitEvent();
}

function loadInputs() {
  inputPeso = document.querySelector('#inputPeso');
  inputAltura = document.querySelector('#inputAltura');
  inputIdade = document.querySelector('#inputIdade');
  inputSexoM = document.querySelector('#inputSexoM');
  inputSexoF = document.querySelector('#inputSexoF');
}

function configSubmitEvent() {
  inputPeso.addEventListener('keyup', calcularTMB);
  inputAltura.addEventListener('keyup', calcularTMB);
  inputIdade.addEventListener('keyup', calcularTMB);
  inputSexoM.addEventListener('change', calcularTMB);
  inputSexoF.addEventListener('change', calcularTMB);

}

function configInputEvent() {
  function handleTyping(event) {
    var charCode = event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46) {
      event.target.value = '';
    }
  }
  inputPeso.addEventListener('keyup', handleTyping);
  inputAltura.addEventListener('keyup', handleTyping);
  inputIdade.addEventListener('keyup', handleTyping);
}

function calcularTMB() {
  event.preventDefault();

  if (isInputValuesOk()) {
    var peso = inputPeso.value;
    var altura = inputAltura.value;
    var idade = inputIdade.value;
    var sexoM = inputSexoM.checked;
  
    var resultado = null;
    if (sexoM) {
      console.log('Masculino');
      resultado = parseFloat(66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));
    } else {
      console.log('Feminino');
      resultado = parseFloat(665 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade));
    }

    document.querySelector('#resultadoCalculo').innerHTML = resultado.toFixed(2) + 'Kcal';
  
  }
}

function isInputValuesOk() {
  if (inputPeso.value.trim() === ''
  || inputAltura.value.trim() === ''
  ||inputIdade.value.trim() === '') {
    return false;
  }
  return true;
}