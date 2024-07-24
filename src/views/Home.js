import { navigateTo } from '../router.js';
import { data } from "../data/dataset.js";
import { filterData, sortData, metricsData, computeStats } from '../lib/dataFunctions.js';
import { renderItems } from './components/Cards.js';
import { createHeader } from './components/Header.js';

export function Home() {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    throw new Error("No se pudo encontrar el elemento root");
  }

  rootElement.innerHTML = "";
  rootElement.appendChild(createHeader());

  function displayCards(data) {
    console.log("Displaying cards with data:", data);

    rootElement.innerHTML = "";
    rootElement.appendChild(createHeader());
    const ulElement = renderItems(data);
    rootElement.appendChild(ulElement);

    ulElement.querySelectorAll('li').forEach((card, index) => {
      card.addEventListener('click', () => navigateTo('/ChatIndividual', { id: data[index].id }));
    });
  }

  function resetSelectIndex(...selectElements) {
    selectElements.forEach((selectElement) => {
      selectElement.selectedIndex = 0;
    });
  }

  const setupEventListeners = () => {
    const filterSelectGender = document.querySelector('#filter-gender');
    const filterSelectYear = document.querySelector("#filter-year");
    const filterSelectChapters = document.querySelector("#filter-chapters");
    const orderSelect = document.querySelector("#order-select");
    const clearButton = document.querySelector('[data-testid="button-clear"]');
    const metricsButton = document.querySelector(".metrics");
    const calculateButton = document.querySelector("#button-calculate");
    const averageContainer = document.querySelector("#average-container");
    const averageContainer1 = document.querySelector("#average-container1");
    const averageContainer2 = document.querySelector("#average-container2");

    if (!filterSelectGender || !filterSelectYear || !filterSelectChapters || !orderSelect || !clearButton || !metricsButton || !calculateButton || !averageContainer || !averageContainer1 || !averageContainer2) {
      console.error("Algunos elementos del DOM no se encontraron");
      return;
    }

    filterSelectGender.addEventListener("change", (event) => {
      const selectedValueGender = event.target.value;
      const filteredData = filterData(data, "gender", selectedValueGender);
      resetSelectIndex(filterSelectYear, filterSelectChapters, orderSelect);
      displayCards(filteredData);
    });

    filterSelectYear.addEventListener("change", (event) => {
      const selectedValueYear = event.target.value;
      const filteredData = filterData(data, "year", selectedValueYear);
      resetSelectIndex(filterSelectGender, filterSelectChapters, orderSelect);
      displayCards(filteredData);
    });

    filterSelectChapters.addEventListener("change", (event) => {
      const selectedValueChapters = event.target.value;
      const filteredData = filterData(data, "chapters", selectedValueChapters);
      resetSelectIndex(filterSelectGender, filterSelectYear, orderSelect);
      displayCards(filteredData);
    });

    orderSelect.addEventListener("change", (event) => {
      const selectedValueOrder = event.target.value;
      const filteredData = sortData(data, "name", selectedValueOrder);
      resetSelectIndex(filterSelectGender, filterSelectChapters, filterSelectYear);
      displayCards(filteredData);
    });

    clearButton.addEventListener("click", () => {
      filterSelectGender.value = 'all';
      filterSelectYear.value = 'all';
      filterSelectChapters.value = 'all';
      orderSelect.value = 'all';
      displayCards(data);
      averageContainer.classList.remove('show');
      averageContainer1.classList.remove('show1');
      averageContainer2.classList.remove('show2');
    });

    metricsButton.addEventListener("click", () => {
      const metricsItems = metricsData(data);
      displayCards(metricsItems);
    });

    calculateButton.addEventListener("click", () => {
      const stats = computeStats(data);
      const { minValue, mostCommonGenre, highestAudienceDorama } = stats;

      averageContainer.innerHTML = `
        <p>Promedio de capítulos de los Kdramas: ${minValue}</p>
      `;
      averageContainer.classList.add('show');

      averageContainer1.innerHTML = `
        <p>Género más promocionado: ${mostCommonGenre}</p>
      `;
      averageContainer1.classList.add('show1');

      averageContainer2.innerHTML = `
        <p>Kdrama con mayor audiencia: ${highestAudienceDorama.name} (${highestAudienceDorama.facts.audiencePercentage}%)</p>
      `;
      averageContainer2.classList.add('show2');
    });
  };

  displayCards(data);
  setupEventListeners();

  return rootElement;
}
