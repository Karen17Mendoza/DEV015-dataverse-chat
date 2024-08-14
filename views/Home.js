import data from '../data/dataset.js';
import { Card } from '../componentes/Card.js'
import { Header } from '../componentes/Header.js'
import { createSidebar } from '../componentes/nav-sidebar.js';
import { filterData, sortData, computeStats, metricsData  } from '../lib/dataFunctions.js'

// Definimos la funcion principal Home 
export const Home = () => {

  // Creamos el elemento principal
  const mainElement = document.createElement('div');
  mainElement.classList.add('maincontainer');

  // Definimos los filtros iniciales
  let currentFilters = { 
    filterBy: 'all',
    value: 'all', 
    orderBy: 'all',
  };  

  // Funcion para crear las tarjetas
  const renderItems = (data) => {
    const ulElement = document.createElement('ul');
    data.forEach(item => 
      ulElement.appendChild(Card(item))
    );
    return ulElement;
  };

  // Manejador de eventos para actualizar la vista cuando se aplique un filtro
  const updateView = (filters) => {
    // Actualizar los filtros actuales con los nuevos
    currentFilters = { 
      ...currentFilters,
      ...filters 
    };

    // Filtrar los datos en función de los filtros actuales
    let filteredData = filterData(data, currentFilters.filterBy, currentFilters.value);

    // Aplica la ordenación si hay un orden seleccionado
    if (currentFilters.orderBy !== 'all') {
      filteredData = sortData(filteredData, 'name', currentFilters.orderBy);
    }

    if (currentFilters.showMetrics) {
      const top3 = metricsData(filteredData);
      const cardContainer = mainElement.querySelector('#card-container');
      cardContainer.innerHTML = '';
      cardContainer.appendChild(renderItems(top3));
      currentFilters.showMetrics = false;
      return;
    }

    if (currentFilters.showAverage) {
      const stats = computeStats(filteredData);
      document.getElementById('average-container').innerText = `Promedio de capítulos: ${stats.minValue}`;
      document.getElementById('average-container1').innerText = `Género más común: ${stats.mostCommonGenre}`;
      document.getElementById('average-container2').innerText = `Mayor audiencia: ${stats.highestAudienceDorama.title} (${stats.highestAudienceDorama.facts.audiencePercentage}%)`;
      document.getElementById('average-container').classList.add('show');
      document.getElementById('average-container1').classList.add('show1');
      document.getElementById('average-container2').classList.add('show2');
      currentFilters.showAverage = false;
    }

    // Limpiar el contenedor de tarjetas y añadir los elementos filtrados y/o ordenados
    const cardContainer = mainElement.querySelector('#card-container');
    cardContainer.innerHTML = ''; 
    cardContainer.appendChild(renderItems(filteredData));
  };

  const navSidebar = createSidebar(updateView);
  const container = document.createElement('div');
  container.classList.add('container');
  const header = Header(updateView);
  
  // Añadir contenedor de tarjetas con el ID card-container
  const cardContainer = document.createElement('div');
  cardContainer.id = 'card-container';
  cardContainer.appendChild(renderItems(data));

  // Almacenar en un nuevo container el header y carcontainer
  container.append(header,cardContainer);
  mainElement.append(navSidebar,container);
  document.body.appendChild(mainElement);

  // Devolvemos el elemento principal
  return mainElement;
};
