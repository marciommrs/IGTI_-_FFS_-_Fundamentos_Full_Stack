function getGroupMembers() {
  const members = [
    'William Ferreira da Silva',
    'Marcio Marques Rosa',
    'Luciano Medeiros Jacobina Aires',
    'Sergio Zanetoni Junior',
    'Israel Reis',
    'Whinter Júnio Gonçalves',
    'Jarbas Rasquinho da Silva'
  ];
  const membersSort = members.sort((a, b) => {
    return a.localeCompare(b);
  });
  console.log(`getGroupMembers(): ${membersSort}`);
  return membersSort;
}

function getFullName(...name) {
  const fullName = name.join(' ');
  console.log(`getFullName(...name): ${fullName}`);
  return fullName;
}

function transform(numbers) {
  const numbers2 = numbers.map(item => {
    return item / 10 + 1;
  });
  console.log(`transform(numbers): ${numbers2}`);
  return numbers2;
}

function onlyNumbersFrom_old(value) {
  const numberRegex = new RegExp(/[0-9]/);
  const numbers = Array.from(value);
  const numbersOnly = numbers.filter(item => {
    return numberRegex.test(item);
  });
  console.log(`onlyNumbersFrom_old(): ${numbersOnly.join('')}`);
  return numbersOnly.join('');
}

function onlyNumbersFrom(number) {
  const numbersOnly = number
    .split('')
    .filter(function(result) {
      return !isNaN(result) && result !== ' ';
    })
    .join('');
  console.log(`onlyNumbersFrom(): ${numbersOnly}`);
  return numbersOnly;
}

getGroupMembers();
getFullName('Fulano', 'da Silva', 'Beltrano');
transform([10, 20, 30, 40, 50]);
transform([61, 72, 83, 94]);
onlyNumbersFrom('1234.3423 2423.233');
onlyNumbersFrom('1234.3423 2423.233kjsdkjfdsççç ˜˜˜˜ ˆ-------');
