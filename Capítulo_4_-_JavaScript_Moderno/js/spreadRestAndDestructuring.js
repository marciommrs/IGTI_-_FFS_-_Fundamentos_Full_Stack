window.addEventListener('load', () => {
  doSpread();//Spread - espalhar
  doRest();
  doDestructuring();
});

function doSpread() {
  const marriedMen = family.filter(person => person.name.title === 'Mr');
  const marriedWomen = family.filter(person => person.name.title === 'Mrs');

  const marriedPeople = [...marriedMen, ...marriedWomen, {meg: 'Oi'}];

  console.log(marriedPeople);
}

function doRest() {
  console.log(infiniteSum(1,2));
  console.log(infiniteSum(1,2,3,4,5));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring() {
  const person = family[0];

  //Repetitivo
  //const first = person.name.first;
  //const last = person.name.last;

  //Usando destructuring
  const {first, last} = person.name;

  console.log(first);
  console.log(last);
}