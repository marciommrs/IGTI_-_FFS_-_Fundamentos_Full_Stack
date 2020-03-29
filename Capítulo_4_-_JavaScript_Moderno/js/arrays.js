window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

function doMap() {
  console.log('doMap()');
  const nameEmailArray = family.map(person => {
    return {
      name: person.name,
      email: person.email
    };
  });
  
  console.log(nameEmailArray);

  return nameEmailArray;
}

function doFilter() {
  console.log('doFilter()');
  const olderThan18 = family.filter(person => {
    return person.age > 18;
  });
  console.log(olderThan18);
}

function doForEach() {
  console.log('doForEach()');
  family.forEach(person => {
    person.nameSize = person.name.title.length + 
      person.name.first.length + 
      person.name.last.length;
  });

  console.log(family);
}

function doReduce() {
  console.log('doReduce()');
  const totalAges = family.reduce((accumulator, current) => {
    return accumulator + current.age;
  }, 0);
  console.log(totalAges);

  // let sumAges = 0;
  // for (let i = 0; i < family.length; i++) {
  //   var current = family[i];
  //   sumAges += current.age;
  // }
  // console.log(sumAges);
}

function doFind() {
  console.log('doFind()');
  const found = family.find(person => {
    return person.gender === 'female';
  });
  console.log(found.name.first);
}

function doSome() {
  console.log('doSome()');
  const found = family.some(person => {
    return person.name.first === 'Marcio';
  });
  console.log(found);
}

function doEvery() {
  console.log('doEvery()');
  const every = family.every(person => {
    return person.gender === 'male';
  });
  console.log(every);
}

function doSort() {
  console.log('doSort()');
  const sortedNames = family.sort((a,b) => {
    return a.name.first.localeCompare(b.name.first);
    // Comparando números:
    //return a.name.first.length - b.name.first.length;
  });
  console.log(sortedNames);
}