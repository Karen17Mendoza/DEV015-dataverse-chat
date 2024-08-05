import data from '../data/dataset.js';
import { createSidebarnav } from '../componentes/nav.js';

// Función para obtener un item por ID

const getItemById = (id) => {
  return data.find(item => item.id === id);
};

export const ChatIndividual = (props) => {
  const { id } = props;
  const item = getItemById(id);
  const chatElement = document.createElement('div');

  // Crear el contenedor principal con flexbox
  chatElement.classList.add('container');

  // Crear y añadir la barra lateral
  const sidebar = createSidebarnav();
  chatElement.appendChild(sidebar);

  // Crear el contenedor de contenido principal
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');

  if (item) {
    chatElement.innerHTML = `
    <h2>Chat con ${item.name}</h2>
    <!-- Aquí va el contenido del chat -->
  `;
  } else {
    chatElement.textContent = 'Item not found';
  }
  // Añadir el contenido principal al contenedor principal
  chatElement.appendChild(mainContent);
  return chatElement;
};

/*export function ChatIndividual(props) {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h1>Chat Individual</h1>
    <p>ID: ${props.id}</p>
  `;
  return viewEl;
}*/