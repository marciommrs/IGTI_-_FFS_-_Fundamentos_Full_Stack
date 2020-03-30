window.addEventListener('load', function() {
  doFetch();
  doFetchAsyncAwait();
  //executeDivisionPromise();
  //executeDivisionPromiseAsyncAwait();
});

function doFetch() {
  fetch('https://api.github.com/users/marciommrs')
    .then(response => {
      response.json().then(data => {
        showData(data);
      });
    })
    .catch(error => {
      showError();
    });
}

async function doFetchAsyncAwait() {
  try {
    const res = await fetch('https://api.github.com/users/marciommrs');
    const json = await res.json();
    console.log(json);
  }catch (error) {
    console.log('Ocorreu um erro na requisição');
  }
}

function showData(data) {
  const user = document.querySelector('#user');
  let ul = document.createElement('ul');
  let li1 = document.createElement('li');
  let li2 = document.createElement('li');
  ul.classList.add('list-group');
  li1.classList.add('list-group-item');
  li2.classList.add('list-group-item');

  li1.textContent = `Login: ${data.login}`;
  li2.textContent = `Nome: ${data.name}`;

  ul.appendChild(li1);
  ul.appendChild(li2);
  user.appendChild(ul);
}

function showError() {
  const user = document.querySelector('#user');
  user.textContent = 'Ocorreu um erro na requisição';
}

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possível dividir por zero.');
    }
    resolve(`${a}/ ${b} = ${a / b}`);
  });
}

function showResultDivisionPromise(data) {
  const division = document.querySelector('#division');
  let ul = document.createElement('ul');
  let li1 = document.createElement('li');
  ul.classList.add('list-group');
  li1.classList.add('list-group-item');
  li1.classList.add('list-group-item-primary');

  li1.textContent = `Result: ${data}`;

  ul.appendChild(li1);
  division.appendChild(ul);
}

function showErrorDivisionPromise(error) {
  const division = document.querySelector('#division');
  let ul = document.createElement('ul');
  let li1 = document.createElement('li');
  ul.classList.add('list-group');
  li1.classList.add('list-group-item');
  li1.classList.add('list-group-item-danger');

  li1.textContent = `Result: ${error}`;

  ul.appendChild(li1);
  division.appendChild(ul);
}

function executeDivisionPromise() {
  console.log('executeDivisionPromise');
  divisionPromise(12, 6)
    .then(result => {
      showResultDivisionPromise(result);
    })
    .catch(error => {
      showErrorDivisionPromise(error);
    });
}

async function executeDivisionPromiseAsyncAwait() {
  try {
    console.log('executeDivisionPromiseAsyncAwait');
    const division = await divisionPromise(12, 0);
    console.log(`Async/Await: ${division}`);
  } catch (error) {
    console.log(error);
  }
}
