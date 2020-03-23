console.log('Olá mundo!');

var h1 = document.querySelector('h1');
var classeDadosPessoais = document.querySelector('.dados-pessoais');
var img = document.querySelector('#rosto');

console.log(`Conteúdo do H1: ${h1.textContent}`);
console.log(
  `Conteúdo do elemento com classe dados-pessoais: ${classeDadosPessoais.textContent}`
);
console.log(`Conteúdo do elemento com id 'rosto' ${img}`);

var th = document.querySelectorAll('th');
console.log(th);

console.log(
  `Convertendo NodeList em array: ${Array.from(th).map(
    item => item.textContent
  )}`
);
