/*import { filterData, sortData, metricsData, computeStats } from '../lib/dataFunctions.js';

// Función para configurar los elementos del DOM
const createNav = () => {
  const nav = document.createElement("nav");
  nav.className = "filter-container";
  nav.id = "filter-container";
  nav.setAttribute("role", "navigation");

  nav.innerHTML = `
    <div class="filter-row">
      <!--Sección 1: Filtra por género-->
      <div class="filter-container__gender">
        <label for="filter-gender">Filtrar por género:</label>
        <select id="filter-gender" data-testid="select-filter" name="gender">
          <option value="all">Todos</option>
          <option value="Comedia Romántica">Comedia Romántica</option>
          <option value="Drama">Drama</option>
          <option value="Romance">Romance</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Acción">Acción</option>
          <option value="Thriller">Thriller</option>
          <option value="Crimen">Crimen</option>
          <option value="Histórico">Histórico</option>
          <option value="Familiar">Familiar</option>
        </select>
      </div>

      <!--Sección 2: Selección de año-->
      <div class="filter-container__year">
        <label for="filter-year">Seleccionar por Año:</label>
        <select name="year" id="filter-year" data-testid="select-filter-2">
          <option value="all">Todos</option>
          <option value="2007">2007</option>
          <option value="2009">2009</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>

      <!--Sección 3: Selección de Cápitulos-->
      <div class="filter-container__chapters">
        <label for="filter-chapters">Seleccionar por Cápitulos:</label>
        <select name="chapters" id="filter-chapters" data-testid="select-filter-3">
          <option value="all">Todos</option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="20">20</option>
          <option value="24">24</option>
          <option value="25">25</option>
        </select>
      </div>

      <!--Sección 4: Selección de Orden-->
      <div class="filter-container__order">
        <label for="order-select">Ordenar por: </label>
        <select name="name" id="order-select" data-testid="sort-order">
          <option value="all">Orden</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>
    <div class="button-row">
      <!--Botón 1: Limpiar contenedor-->
      <button class="button-clear" data-testid="button-clear">Limpiar</button>
      <!--Botón 2: Métricas Ranking-->
      <button class="metrics">Ranking 3ro°</button>
      <!--Botón 3: Calcular promedio de capitulos-->
      <button class="button-average" id="button-calculate" data-testid="button-calculate">Curiosidades</button>
    </div>
    <div class="block-average">
      <div id="average-container" class="average-container"></div>
      <div id="average-container1" class="average-container"></div>
      <div id="average-container2" class="average-container"></div>
    </div>
  `;

  setupEventListeners(nav);
  return nav;
};

// Función para configurar los event listeners
const setupEventListeners = (nav) => {
  const filterSelectGender = nav.querySelector('#filter-gender');
  const filterSelectYear = nav.querySelector("#filter-year");
  const filterSelectChapters = nav.querySelector("#filter-chapters");
  const orderSelect = nav.querySelector("#order-select");
  const clearButton = nav.querySelector('[data-testid="button-clear"]');
  const metricsButton = nav.querySelector(".metrics");
  const calculateButton = nav.querySelector("#button-calculate");
  const averageContainer = nav.querySelector("#average-container");
  const averageContainer1 = nav.querySelector("#average-container1");
  const averageContainer2 = nav.querySelector("#average-container2");

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

// Exporta la función createNav
export { createNav };*/