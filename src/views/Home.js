import { navigateTo } from '../router.js';
import { filterData, sortData, metricsData } from '../lib/dataFunctions.js';
import { data } from '../data/dataset.js';

const renderItem = (item) => {
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
    return liElement;  
  };
  
function renderItems(data) {

  if (!data || !Array.isArray(data)) {
    return document.createElement("ul");
  }

  const ulElement = document.createElement("ul");
  data.forEach(item => {
    const liElement = renderItem(item);
    ulElement.appendChild(liElement);
  })
  return ulElement;
}

export const Home = (props) => {
  const mainElement = document.createElement('div');
  const ulElement = renderItems(data);
  mainElement.appendChild(ulElement);
  return mainElement;
};