/**
 * Estado da aplicação (state)
 */
let tabCountries = null;
let tabFavorites = null;

let allContries = [];
let favoritesContries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countContries');
  countFavorites = document.querySelector('#countFavorites');
  totalPopulationList = document.querySelector('#totalPopulationList');
  //prettier-ignore
  totalPopulationFavorites = document.querySelector('#totalPopulationFavorites');

  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();
});

async function fetchCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const json = await res.json();
  allContries = json.map(country => {
    const {numericCode, translations, population, flag} = country; //Usando destructuring.
    return {
      id: numericCode,
      name: translations.pt,
      population,
      formattedPopulation: numberFormat.format(population),
      flag

    };
  });
  render();
}

function render() {
  renderCountryList();
  renderFavorites();
  renderSummary();
  handleCountryButtons();
}

function renderCountryList() {
  let countriesHTML = '<div>';

  allContries.forEach(country => {
    const {name, flag, id, population, formattedPopulation} = country;
    
    const countryHTML = `
      <div class='country'>
        <div>
          <a id="${id}" class="btn btn-sm btn-success">+</a>
        </div>
        <div>
          <img src="${flag}" alt="${name}"/>
        </div>
        <div class='data-country'>
          <ul>
            <li>${name}</li>
            <li>${formattedPopulation}</li>
          </ul>
        </div>
      </div>
    `;
    countriesHTML += countryHTML;
  });
  countriesHTML += "</div>";
  tabCountries.innerHTML = countriesHTML;
}

function renderFavorites() {
  let favoritesHTML = '<div>';

  favoritesContries.forEach(country => {
    const {name, flag, id, population, formattedPopulation} = country;
    
    const favoriteCountryHTML = `
      <div class='country'>
        <div>
          <a id="${id}" class="btn btn-sm btn-danger">-</a>
        </div>
        <div>
          <img src="${flag}" alt="${name}"/>
        </div>
        <div class='data-country'>
          <ul>
            <li>${name}</li>
            <li>${formattedPopulation}</li>
          </ul>
        </div>
      </div>
    `;
    favoritesHTML += favoriteCountryHTML;
  });
  favoritesHTML += "</div>";
  tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary() {
  countCountries.textContent = allContries.length;
  countFavorites.textContent = favoritesContries.length;

  const totalPopulation = allContries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);
  totalPopulationList.textContent = numberFormat.format(totalPopulation);

  const totalFavorites = favoritesContries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);
  totalPopulationFavorites.textContent = numberFormat.format(totalFavorites);
}

function handleCountryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  const favoritesButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

  countryButtons.forEach(button => {
    button.addEventListener('click', () => addToFavorites(button.id));
  })

  favoritesButtons.forEach(button => {
    button.addEventListener('click', () => removeFromFavorites(button.id));
  })
}

function addToFavorites(id) {
  const countryAdd = allContries.find(country => country.id === id);
  favoritesContries = [...favoritesContries, countryAdd];

  favoritesContries.sort((a,b) => {
    return a.name.localeCompare(b.name);
  });

  allContries = allContries.filter(country => country.id !== id);

  render();
}

function removeFromFavorites(id) {
  const countryRemove = favoritesContries.find(country => country.id === id);
  allContries = [...allContries, countryRemove];

  allContries.sort((a,b) => {
    return a.name.localeCompare(b.name);
  });

  favoritesContries = favoritesContries.filter(country => country.id !== id);

  render();
}
