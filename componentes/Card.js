import { navigateTo } from '../router.js';

export const Card = (item) => {
  const liElement = document.createElement("li");
  liElement.classList.add("cardli");
  liElement.setAttribute("itemscope", "");
  liElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
  liElement.setAttribute("data-id", item.id);

  liElement.innerHTML = `
    <div class="card">
      <div class="card__details">
        <h2 class="card__title" itemprop="name">${item.name}</h2>
        <img class="card_image" src="${item.imageUrl}" alt="${item.name}" itemprop="image" />
        <p class="card__description" itemprop="description">${item.shortDescription}</p>
        <div class="card__list">
          <p class="card__gender"><strong>Género:</strong> <span itemprop="gender">${item.facts.gender}</span></p>
          <p class="card__year"><strong>Año:</strong> <span itemprop="datePublished">${item.facts.year}</span></p>
          <p class="card__chapters"><strong>Número de capítulos:</strong> <span itemprop="numberOfEpisodes">${item.facts.chapters}</span></p>
        </div>
      </div>
      <button class="card__button">Más información</button>
    </div>
  `;

  liElement.addEventListener('click', () => {
    navigateTo('/ChatIndividual/', { id: item.id });
  });

  return liElement;
};