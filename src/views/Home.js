import data from '../data/dataset.js';
import { Card } from '../componentes/Card.js'
import { Header } from '../componentes/Header.js'
import { filterData, sortData } from '../lib/dataFunctions.js'


export const Home = () => {
  const mainElement = document.createElement('div');

  const renderItems = (data) => {
    const ulElement = document.createElement("ul");
    data.forEach(item => ulElement.appendChild(Card(item)));
    return ulElement;
  };

  // Manejador de eventos para actualizar la vista cuando se aplique un filtro u orden
  const updateView = (filters) => {
    let filteredData = filterData(data, filters.filterBy, filters.value);
    
    // Aplicar ordenación si el filtro es de tipo 'order'
    if (filters.filterBy === 'order') {
      filteredData = sortData(filteredData, filters.value);
    }

    // Limpiar el contenedor de tarjetas y añadir los elementos filtrados y/o ordenados
    const cardContainer = mainElement.querySelector('#card-container');
    cardContainer.innerHTML = ''; 
    cardContainer.appendChild(renderItems(filteredData));
  };

  // Añadir el encabezado con el manejador de eventos
  mainElement.appendChild(Header(updateView));

  // Añadir contenedor de tarjetas con el ID card-container
  const cardContainer = document.createElement('div');
  cardContainer.id = 'card-container';
  cardContainer.appendChild(renderItems(data));
  mainElement.appendChild(cardContainer);

  return mainElement;
};