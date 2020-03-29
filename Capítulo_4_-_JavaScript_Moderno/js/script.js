'use strict'; //O JavaScript acusa mais erros.

console.log('Hello');


// Função
function sum(a,b) {
  return a + b;
}

// Função anônima
const sum2 = function sum(a,b) {
  return a + b;
};

// Arrow function
const sum3 = (a,b) => {
  return a + b;
};

// Arrow function reduzida
const sum4 = (a,b) =>  a + b;

console.log(sum(2,3));
console.log(sum2(2,3));
console.log(sum3(2,3));
console.log(sum4(2,3));


// Template literals
const name = 'Marcio';
const surName = 'Marques Rosa';
const text1 = 'Meu nome é ' + name + ' ' + surName;
const text2 = `Meu nome é ${name} ${surName}`;

console.log(text1);
console.log(text2);

// Default parameters
const sum5 = (a, b=10) => a + b;
console.log(sum5(2,3));
console.log(sum5(2));

