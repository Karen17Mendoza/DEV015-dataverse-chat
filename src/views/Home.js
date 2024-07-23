import { navigateTo } from '../router.js';
import data from '../data/dataset.js';
import { filterData, sortData, metricsData, computeStats } from '../lib/dataFunctions.js';
import { renderItem } from './components/Cards.js';
import { createHeader } from './components/Header.js';

export const Home = () => {
  const mainElement = document.createElement('div');
  const ulElement = renderItems(data);
  mainElement.appendChild(createHeader());
  mainElement.appendChild(ulElement);
  return mainElement;
};

const renderItems = (data) => {
  if (!data || !Array.isArray(data)) {
    return document.createElement("ul");
  }

  const ulElement = document.createElement("ul");

  data.forEach(item => {
    const liElement = renderItem(item);
    ulElement.appendChild(liElement);
  });

  return ulElement;
};

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");

  // Crear e insertar el encabezado
  const header = createHeader();
  rootElement.prepend(header);

  const mainElement = document.getElementById("root");
  let ulElement = renderItems(data);
  mainElement.appendChild(ulElement);

  let filteredData = data; // Inicialmente, los datos filtrados son todos los datos

  function resetSelectIndex(selectElement) {
    selectElement.selectedIndex = 0;
  }

  function displayCards(filteredData) {
    mainElement.removeChild(ulElement);
    ulElement = renderItems(filteredData);
    mainElement.appendChild(ulElement);
  }

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

  filterSelectGender.addEventListener("change", (event) => {
    const selectedValueGender = event.target.value;
    filteredData = filterData(data, "gender", selectedValueGender);
    resetSelectIndex(filterSelectYear);
    resetSelectIndex(filterSelectChapters);
    resetSelectIndex(orderSelect);
    displayCards(filteredData);
  });

  filterSelectYear.addEventListener("change", (event) => {
    const selectedValueYear = event.target.value;
    filteredData = filterData(data, "year", selectedValueYear);
    resetSelectIndex(filterSelectGender);
    resetSelectIndex(filterSelectChapters);
    resetSelectIndex(orderSelect);
    displayCards(filteredData);
  });

  filterSelectChapters.addEventListener("change", (event) => {
    const selectedValueChapters = event.target.value;
    filteredData = filterData(data, "chapters", selectedValueChapters);
    resetSelectIndex(filterSelectGender);
    resetSelectIndex(filterSelectYear);
    resetSelectIndex(orderSelect);
    displayCards(filteredData);
  });

  orderSelect.addEventListener("change", (event) => {
    const selectedValueOrder = event.target.value;
    filteredData = sortData(filteredData, "name", selectedValueOrder); // Ajusta "name" según el campo que deseas ordenar
    resetSelectIndex(filterSelectGender);
    resetSelectIndex(filterSelectChapters);
    resetSelectIndex(filterSelectYear);
    displayCards(filteredData);
  });

  clearButton.addEventListener("click", () => {
    filterSelectGender.value = 'all';
    filterSelectYear.value = 'all';
    filterSelectChapters.value = 'all';
    orderSelect.value = 'all';
    filteredData = data; // Reiniciar datos filtrados a todos los datos originales
    displayCards(filteredData);
    averageContainer.classList.remove('show');
    averageContainer1.classList.remove('show1');
    averageContainer2.classList.remove('show2');
  });

  metricsButton.addEventListener("click", () => {
    const metricsItems = metricsData(filteredData);
    displayCards(metricsItems);
  });

  calculateButton.addEventListener("click", () => {
    const stats = computeStats(filteredData);
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

});