import { navigateTo } from '../router.js';
import { filterData, sortData, metricsData } from '../lib/dataFunctions.js';
import { data } from '../data/dataset.js';

export const Home = (props) => {
  const el = document.createElement('div');
  el.textContent = `¡Bienvenido a la página de inicio, ${props.name || ''}!`;

  // Crear un botón para navegar a la página About
  const button = document.createElement('button');
  button.textContent = 'Go to About';
  button.addEventListener('click', () => navigateTo('/about', { name: 'Xochitl' }));


  return el;
};

