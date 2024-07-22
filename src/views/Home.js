import { navigateTo } from '../router.js';
import { filterData, sortData, metricsData } from '../lib/dataFunctions.js';
import { data } from '../data/dataset.js';

export function renderItems(data) {
  if (!data || !Array.isArray(data)) {
    return document.createElement("ul");
  }

  const ulElement = document.createElement("ul");

  data.forEach(item => {
    const liElement = document.createElement("li");
    liElement.classList.add("cardli");
    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
    liElement.setAttribute("data-id", item.id);

    liElement.innerHTML = `
      <div class="card">
        <h2 class="card__title" itemprop="name">${item.name}</h2>
        <img class="card_image" src="${item.imageUrl}" alt="${item.name}" itemprop="image" />
        <p class="card__description" itemprop="description">${item.shortDescription}</p>
        <div class="card__list">
          <p class="card__gender"><strong>Género:</strong> <span itemprop="gender">${item.facts.gender}</span></p>
          <p class="card__year"><strong>Año:</strong> <span itemprop="datePublished">${item.facts.year}</span></p>
          <p class="card__chapters"><strong>Número de capítulos:</strong> <span itemprop="numberOfEpisodes">${item.facts.chapters}</span></p>
        </div>
      </div>
    `;

    ulElement.appendChild(liElement);
  });

  return ulElement;
}

export const Home = (props) => {
  const el = document.createElement('div');
  el.textContent = `¡Bienvenido a la página de inicio, ${props.name || ''}!`;

  // Crear un botón para navegar a la página About
  const button = document.createElement('button');
  button.textContent = 'Go to About';
  button.addEventListener('click', () => navigateTo('/about', { name: 'Xochitl' }));


  return el;
};